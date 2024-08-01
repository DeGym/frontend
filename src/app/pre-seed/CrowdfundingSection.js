"use client";

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Modal from 'react-modal';
import styles from '@/styles/components/CrowdfundingSection.module.css';
import shortenWalletAddress from '@/utils/generic';
import Countdown from '@/components/Countdown';
import AmountInput from '@/components/AmountInput';
import InfoTooltip from '@/components/InfoTooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const CrowdfundingSection = ({ crowdfund, walletAddress }) => {
    const [youWillReceive, setYouWillReceive] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [remainingDGYM, setRemainingDGYM] = useState(crowdfund.totalSupply - crowdfund.sold);
    const [web3, setWeb3] = useState(null);
    const [isCountdownActive, setIsCountdownActive] = useState(true);
    const [countdownTitle, setCountdownTitle] = useState(`${crowdfund.type} starts in:`);
    const [filterMyEvents, setFilterMyEvents] = useState(false);
    const [amount, setAmount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (walletAddress && window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            updateBalance(walletAddress, web3Instance);
        }
    }, [walletAddress]);

    const updateBalance = async (address, web3Instance) => {
        try {
            const balance = await web3Instance.eth.getBalance(address);
            const roundedBalance = parseFloat(web3Instance.utils.fromWei(balance, 'ether')).toFixed(4);
            setCurrentBalance(roundedBalance);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    const handleAmountChange = (value) => {
        setAmount(value);
        setYouWillReceive(value * crowdfund.exchangeRate);
    };

    const handleSwap = () => {
        if (parseFloat(amount) <= parseFloat(currentBalance)) {
            const tempAmount = amount;
            setAmount(youWillReceive);
            setYouWillReceive(tempAmount);
        } else {
            alert("The amount submitted must be less than or equal to your current balance.");
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

    const isDisabled = isCountdownActive || !walletAddress;

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
            address: '0xed...38E9',
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
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <label>
                        Amount <InfoTooltip text="Must be a minimum 1000 TARA" />
                    </label>
                    <AmountInput maxAmount={currentBalance} onChange={handleAmountChange} isDisabled={isDisabled} />
                    <button onClick={handleSwap} className={styles.swapButton} disabled={isDisabled}>Swap</button>

                    <div className={styles.cardData}>
                        {walletAddress ? (
                            <>
                                <div className={styles.row}>
                                    <b className={styles.key}>Wallet Address:</b>
                                    <p className={styles.value}>{shortenWalletAddress(walletAddress)}</p>
                                </div>
                                <div className={styles.row}>
                                    <b className={styles.key}>Current Balance:</b>
                                    <p className={styles.value}>{currentBalance} TARA</p>
                                </div>
                            </>
                        ) : (
                            <p className={styles.alertBox}>
                                Please connect your wallet.
                            </p>
                        )}
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



            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <div className={styles.modalContent}>
                    <button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>Close</button>
                    <h2 className={styles.sectionTitle}>Latest Swap Events</h2>
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
            </Modal>
        </div>
    );
};

export default CrowdfundingSection;
