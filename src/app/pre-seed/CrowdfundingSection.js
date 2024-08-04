"use client";

import React, { useState, useEffect, useContext } from 'react';
import Web3 from 'web3';
import { WalletContext } from '@/utils/WalletContext';
import BaseModal from '@/components/BaseModal';
import styles from './styles/CrowdfundingSection.module.css';
import shortenWalletAddress from '@/utils/generic';
import Countdown from '@/components/Countdown';
import AmountInput from '@/components/AmountInput';
import InfoTooltip from '@/components/InfoTooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const ERC721_ABI = [
    {
        "constant": true,
        "inputs": [{ "name": "owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const ALLIUM_NFT_CONTRACT_ADDRESS = '0x752A41D144d1c2c814958E4050adda59CB496a4b';

const checkNftOwnership = async (address, web3Instance) => {
    const contract = new web3Instance.eth.Contract(ERC721_ABI, ALLIUM_NFT_CONTRACT_ADDRESS);
    const balance = await contract.methods.balanceOf(address).call();
    return balance > 0;
};

const CrowdfundingSection = ({ crowdfund }) => {
    const { walletAddress, isCorrectNetwork } = useContext(WalletContext);
    const [youWillReceive, setYouWillReceive] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [remainingDGYM, setRemainingDGYM] = useState(crowdfund.totalSupply - crowdfund.sold);
    const [web3, setWeb3] = useState(null);
    const [isCountdownActive, setIsCountdownActive] = useState(true);
    const [countdownTitle, setCountdownTitle] = useState(`${crowdfund.type} starts in:`);
    const [filterMyEvents, setFilterMyEvents] = useState(false);
    const [amount, setAmount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEligible, setIsEligible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingWallet, setIsLoadingWallet] = useState(false);

    useEffect(() => {
        if (walletAddress && window.ethereum) {
            setIsLoading(true);
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            updateBalance(walletAddress, web3Instance);
            checkEligibility(walletAddress, web3Instance);
        }
    }, [walletAddress]);

    const updateBalance = async (address, web3Instance) => {
        setIsLoadingWallet(true);
        try {
            const balance = await web3Instance.eth.getBalance(address);
            const roundedBalance = parseFloat(web3Instance.utils.fromWei(balance, 'ether')).toFixed(4);
            setCurrentBalance(roundedBalance);
        } catch (error) {
            console.error('Error fetching balance:', error);
        } finally {
            setIsLoadingWallet(false);
        }
    };

    const checkEligibility = async (address, web3Instance) => {
        setIsLoadingWallet(true);
        const ownsNft = await checkNftOwnership(address, web3Instance);
        setIsEligible(ownsNft);
        setIsLoading(false);
        setIsLoadingWallet(false);
    };

    const handleAmountChange = (value) => {
        setAmount(value);
        setYouWillReceive(value * crowdfund.exchangeRate);
    };

    const handleSwap = () => {
        if (parseFloat(amount) <= parseFloat(currentBalance) && isEligible && isCorrectNetwork) {
            const tempAmount = amount;
            setAmount(youWillReceive);
            setYouWillReceive(tempAmount);
        } else {
            alert("You must own an Allium-NFT, be on the right network, and the amount submitted must be less than or equal to your current balance.");
        }
    };

    const handleSnapshot = () => {
        console.log('Snapshot clicked');
    };

    const handleGovernance = () => {
        console.log('Governance clicked');
    };

    const handleCountdownEnd = () => {
        setIsCountdownActive(false);
        setCountdownTitle(`${crowdfund.type} ends in:`);
    };

    const isPresaleLive = new Date(crowdfund.startDate) <= new Date() && new Date(crowdfund.endDate) > new Date();
    const isDisabled = !walletAddress || !isCorrectNetwork || !isEligible || !isPresaleLive;

    const mockEvents = [
        {
            address: '0x86...a7AE',
            amount: 4000000.0,
            link: 'https://mainnet.explorer.taraxa.io/tx/0xf9f00be62995d5c67df6fcfc3b395aa9183ee54e807eeb5305c367b53f833b04'
        },
        {
            address: '0xed...38E9',
            amount: 400000.0,
            link: 'https://mainnet.explorer.taraxa.io/tx/0x02a26fec12c3a341ad891410bb72c8e2b76fa287dd8f78beef3aba5463c72bdb'
        },
        {
            address: '0.ed...38E9',
            amount: 800000.0,
            link: 'https://mainnet.explorer.taraxa.io/tx/0x622bd987c704d2c0cf4f46f0d0cf470b612a70e52df38f4049b1d8527ee0065d'
        },
        {
            address: '0xe3...6FBD',
            amount: 3200000.0,
            link: 'https://mainnet.explorer.taraxa.io/tx/0xcff7e06ead5fef58c94ba0f5940c5d549c430b7743e053542b2de869d4c40510'
        }
    ];

    const filteredEvents = filterMyEvents && walletAddress
        ? mockEvents.filter(event => event.address.includes(walletAddress.substring(2, 6)))
        : mockEvents;

    const isPresaleClosed = remainingDGYM === 0 || new Date(crowdfund.endDate) <= new Date();

    return (
        <div className={styles.crowdfundingSection}>
            <Countdown
                title={countdownTitle}
                targetDate={crowdfund.startDate}
                endDate={crowdfund.endDate}
                onCountdownEnd={handleCountdownEnd}
            />
            <div className={styles.horizontalCards}>
                <div className={styles.horizontalCard}>
                    <h3>Remaining $DGYM</h3>
                    <p><b>{remainingDGYM}</b></p>
                </div>
                <div className={styles.horizontalCard}>
                    <h3>Your $DGYM Balance</h3>
                    <p><b>{currentBalance}</b></p>
                </div>
            </div>
            {isPresaleClosed && (
                <div className={styles.alertBox}>
                    All $DGYM tokens have been sold. Presale is closed.
                </div>
            )}
            {isLoading && (
                <div className={styles.loadingContainer}>
                    <div className={styles.loadingSpinner}></div>
                    <p>Loading...</p>
                </div>
            )}
            {!isLoading && (
                <>
                    {!walletAddress && (
                        <div className={styles.verificationCard}>
                            <p>Please connect your wallet to proceed.</p>
                        </div>
                    )}
                    {walletAddress && !isCorrectNetwork && (
                        <div className={styles.verificationCard}>
                            <p>Please switch to the Taraxa Mainnet to proceed.</p>
                        </div>
                    )}
                    {walletAddress && isCorrectNetwork && !isEligible && (
                        <div className={styles.verificationCard}>
                            <p className="w-4/5 text-base">Get whitelisted by purchasing our Allium-NFT to participate in the pre-seed.</p>
                            <button
                                onClick={() => window.open('https://allium-founders-pass.nfts2.me/', '_blank')}
                                className="w-2/6 p-2 m-2"
                            >
                                Buy Allium-NFT
                            </button>
                        </div>
                    )}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <label>
                                Amount <InfoTooltip text="Must be a minimum 1000 TARA" />
                            </label>
                            <AmountInput maxAmount={currentBalance} onChange={handleAmountChange} isDisabled={isDisabled || isLoadingWallet} />
                            <button onClick={handleSwap} className={styles.swapButton} disabled={isDisabled || isLoadingWallet}>
                                {isLoadingWallet ? 'Loading...' : 'Swap'}
                            </button>

                            <div className={styles.cardData}>
                                {walletAddress && (
                                    <>
                                        <div className={styles.row}>
                                            <b className={styles.key}>Wallet Address:</b>
                                            <p className={styles.value}>{shortenWalletAddress(walletAddress)}</p>
                                        </div>
                                        <div className={styles.row}>
                                            <b className={styles.key}>Current Balance:</b>
                                            <p className={styles.value}>{currentBalance} TARA</p>
                                        </div>
                                        <div className={styles.row}>
                                            <b className={styles.key}>You will receive:</b>
                                            <p className={styles.value}>{youWillReceive} DGYM</p>
                                        </div>
                                        <div className={styles.row}>
                                            <b className={styles.key}>Exchange rate:</b>
                                            <p className={styles.value}>{crowdfund.exchangeRate} TARA/DGYM</p>
                                        </div>
                                        <div className={styles.row}>
                                            <b className={styles.key}>TVL discount:</b>
                                            <p className={styles.value}>{crowdfund.tvlDiscount}%</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonsContainer}>
                        <a href="https://snapshot.org" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
                            <FontAwesomeIcon icon={faBolt} className={styles.icon} />
                            Snapshot
                        </a>
                        <button onClick={() => setIsModalOpen(true)} className={styles.modalButton}>
                            Latest Swap Events
                        </button>
                        <a href="https://degym-network.gitbook.io/docs/gym-dao/governance" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
                            <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} />
                            Governance
                        </a>
                    </div>

                    <BaseModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Latest Swap Events"
                    >
                        <div className={styles.modalContent}>
                            <div className={styles.toggleContainer}>
                                <label className={styles.toggleLabel}>
                                    <span>Just my events</span>
                                    <div className={styles.toggleWrapper}>
                                        <input
                                            type="checkbox"
                                            className={styles.toggle}
                                            checked={filterMyEvents}
                                            onChange={() => setFilterMyEvents(!filterMyEvents)}
                                        />
                                        <span className={styles.slider} />
                                    </div>
                                </label>
                            </div>
                            <div className={styles.scrollableSection}>
                                <div className={styles.eventsContainer}>
                                    {filteredEvents.map((event, index) => (
                                        <div key={index} className={styles.eventCard}>
                                            <div className={styles.eventCardBody}>
                                                <div className={styles.eventActions}>
                                                    <a target="_blank" aria-label="Twitter" className={styles.eventLink} href={event.link}>View on Taraxa Explorer</a>
                                                </div>
                                                <div className={styles.eventDetails}>
                                                    <h2 className={styles.eventTitle}>{event.address}</h2>
                                                    <p className={styles.eventAmount}>{event.amount} DGYM</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </BaseModal>
                </>
            )}
        </div>
    );
};

export default CrowdfundingSection;
