"use client";

import React, { useState, useEffect } from 'react';
import BaseModal from '@/components/common/BaseModal';
import styles from '@/styles/components/common/CrowdfundingSection.module.css';
import shortenWalletAddress from '@/utils/generic';
import Countdown from '@/components/Countdown';
import AmountInput from '@/components/ui/AmountInput';
import InfoTooltip from '@/components/ui/InfoTooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { useWallet } from '@/context/WalletContext';
import { useERC721 } from '@/hooks/useERC721';
import { useCrowdfundingContract } from '@/hooks/useCrowdfundingContract';
import { useToast } from '@/context/ToastContext';

const ALLIUM_NFT_CONTRACT_ADDRESS = '0x752A41D144d1c2c814958E4050adda59CB496a4b';

interface Crowdfund {
    totalSupply: number;
    sold: number;
    type: string;
    startDate: string;
    endDate: string;
    exchangeRate: number;
    tvlDiscount: number;
}

interface Event {
    address: string;
    amount: number;
    link: string;
}

interface CrowdfundingSectionProps {
    crowdfund: Crowdfund;
}

const CrowdfundingSection: React.FC<CrowdfundingSectionProps> = ({ crowdfund }) => {
    const { web3, account, isCorrectNetwork, balance } = useWallet();
    const { checkOwnership: checkNftOwnership } = useERC721(ALLIUM_NFT_CONTRACT_ADDRESS);
    const { contribute } = useCrowdfundingContract();
    const { showToast } = useToast();

    const [youWillReceive, setYouWillReceive] = useState<number>(0);
    const [currentBalance, setCurrentBalance] = useState<string | null>(null);
    const [remainingDGYM, setRemainingDGYM] = useState<number | null>(null);
    const [isCountdownActive, setIsCountdownActive] = useState<boolean>(true);
    const [countdownTitle, setCountdownTitle] = useState<string>(`${crowdfund.type} starts in:`);
    const [filterMyEvents, setFilterMyEvents] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingWallet, setIsLoadingWallet] = useState<boolean>(false);
    const [isEligible, setIsEligible] = useState<boolean>(false);

    useEffect(() => {
        if (account && web3) {
            updateBalance(account);
            checkEligibility(account);
        }
    }, [account, web3, isCorrectNetwork]);

    useEffect(() => {
        if (account && web3) {
            setIsLoading(true);
            updateBalance(account);
            checkEligibility(account);
        }
    }, [account, web3]);

    useEffect(() => {
        setRemainingDGYM(crowdfund.totalSupply - crowdfund.sold);
    }, [crowdfund.totalSupply, crowdfund.sold]);

    const updateBalance = async (address: string) => {
        if (!web3) return;
        setIsLoadingWallet(true);
        try {
            const balance = await web3.eth.getBalance(address);
            const roundedBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(4);
            setCurrentBalance(roundedBalance);
        } catch (error) {
            console.error('Error fetching balance:', error);
            showToast('Failed to fetch balance', 'error');
        } finally {
            setIsLoadingWallet(false);
        }
    };

    const checkEligibility = async (address: string) => {
        setIsLoadingWallet(true);
        try {
            const ownsNft = await checkNftOwnership(address);
            setIsEligible(ownsNft);
        } catch (error) {
            showToast('Failed to check eligibility', 'error');
        } finally {
            setIsLoading(false);
            setIsLoadingWallet(false);
        }
    };

    const handleAmountChange = (value: number) => {
        setAmount(value);
        setYouWillReceive(value * crowdfund.exchangeRate);
    };

    const handleSwap = async () => {
        if (parseFloat(amount.toString()) <= parseFloat(currentBalance || '0') && isEligible && isCorrectNetwork) {
            setIsLoading(true);
            try {
                await contribute(amount.toString());
                showToast('Swap successful!', 'success');
                if (account) {
                    updateBalance(account);
                }
            } catch (error) {
                console.error('Swap error:', error);
                showToast('Failed to swap. Please try again.', 'error');
            } finally {
                setIsLoading(false);
            }
        } else {
            showToast("You must own an Allium-NFT, be on the right network, and the amount submitted must be less than or equal to your current balance.", 'warning');
        }
    };

    const handleCountdownEnd = () => {
        setIsCountdownActive(false);
        setCountdownTitle(`${crowdfund.type} ends in:`);
    };

    const isPresaleLive = new Date(crowdfund.startDate) <= new Date() && new Date(crowdfund.endDate) > new Date();
    const isDisabled = !account || !isCorrectNetwork || !isEligible || !isPresaleLive;

    const mockEvents: Event[] = [
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

    const filteredEvents = filterMyEvents && account
        ? mockEvents.filter(event => event.address.includes(account.substring(2, 6)))
        : mockEvents;

    const isPresaleClosed = remainingDGYM === 0 || new Date(crowdfund.endDate) <= new Date();


    return (
        <section className="m-auto max-w-xl">
            <div className={styles.crowdfundingSection}>
                <Countdown
                    title={countdownTitle}
                    targetDate={new Date(crowdfund.startDate).getTime()}
                    endDate={new Date(crowdfund.endDate).getTime()}
                    onCountdownEnd={handleCountdownEnd}
                />

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
                        {!account && (
                            <div className={styles.verificationCard}>
                                <p>Please connect your wallet to proceed.</p>
                            </div>
                        )}
                        {account && !isCorrectNetwork && (
                            <div className={styles.verificationCard}>
                                <p>Please switch to the Taraxa Mainnet to proceed.</p>
                            </div>
                        )}
                        {account && isCorrectNetwork && !isEligible && (
                            <div className={styles.verificationCard}>
                                <p>You need to own an Allium-NFT to participate. Please purchase one to become eligible.</p>
                                <button onClick={() => window.open('https://allium-founders-pass.nfts2.me/', '_blank')}>
                                    Buy Allium-NFT
                                </button>
                            </div>
                        )}
                        {account && isCorrectNetwork && isEligible && (
                            <div className={styles.horizontalCards}>
                                {remainingDGYM !== null && (
                                    <div className={styles.horizontalCard}>
                                        <h3>Remaining $DGYM</h3>
                                        <p><b>{remainingDGYM}</b></p>
                                    </div>
                                )}
                                <div className={styles.horizontalCard}>
                                    <h3>Your $DGYM Balance</h3>
                                    <p><b>{currentBalance !== null ? currentBalance : 'Loading...'}</b></p>
                                </div>
                            </div>
                        )}
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <label>
                                    Amount <InfoTooltip text="Must be a minimum 1000 TARA" />
                                </label>
                                <AmountInput maxAmount={currentBalance !== null ? parseFloat(currentBalance) : 0} onChange={handleAmountChange} isDisabled={isDisabled || isLoadingWallet} />
                                <button onClick={handleSwap} className={styles.swapButton} disabled={isDisabled || isLoadingWallet}>
                                    {isLoadingWallet ? 'Loading...' : 'Swap'}
                                </button>

                                <div className={styles.cardData}>
                                    {account && (
                                        <>
                                            <div className={styles.row}>
                                                <b className={styles.key}>Wallet Address:</b>
                                                <p className={styles.value}>{shortenWalletAddress(account)}</p>
                                            </div>
                                            <div className={styles.row}>
                                                <b className={styles.key}>Current Balance:</b>
                                                <p className={styles.value}>{currentBalance !== null ? currentBalance : 'Loading...'} TARA</p>
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
                            <a href="https:docs.degym.net/gym-dao/governance" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
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
        </section>
    );
};

export default CrowdfundingSection;