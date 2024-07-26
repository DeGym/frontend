"use client";

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import styles from '@/styles/components/CrowdfundingSection.module.css';
import shortenWalletAddress from '@/utils/generic';

// TransitionNumber Component
const TransitionNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (displayValue !== value) {
            setAnimationClass(styles['slide-out-down']);
            setTimeout(() => {
                setDisplayValue(value);
                setAnimationClass(styles['slide-in-up']);
            }, 500);
        }
    }, [value, displayValue]);

    return (
        <div className={styles.countdownValueWrapper}>
            <span className={`${styles.countdownValue} ${animationClass}`}>
                {displayValue.toString().padStart(2, '0')}
            </span>
        </div>
    );
};

// Custom Countdown Component
const Countdown = ({ targetDate, onCountdownEnd }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimeRemaining = calculateTimeRemaining(targetDate);
            setTimeRemaining(newTimeRemaining);

            if (newTimeRemaining.total <= 0) {
                clearInterval(intervalId);
                onCountdownEnd();
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate, onCountdownEnd]);

    function calculateTimeRemaining(targetDate) {
        const now = new Date().getTime();
        const distance = Math.max(targetDate - now, 0); // Ensure distance is non-negative
        return {
            total: distance,
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
    }

    return (
        <div className={styles.countdownContainer}>
            <div className={styles.countdownGrid}>
                <div className={styles.countdownBox}>
                    <TransitionNumber value={timeRemaining.days} />
                    days
                </div>
                <div className={styles.countdownBox}>
                    <TransitionNumber value={timeRemaining.hours} />
                    hours
                </div>
                <div className={styles.countdownBox}>
                    <TransitionNumber value={timeRemaining.minutes} />
                    min
                </div>
                <div className={styles.countdownBox}>
                    <TransitionNumber value={timeRemaining.seconds} />
                    sec
                </div>
            </div>
        </div>
    );
};

const CrowdfundingSection = ({ crowdfund, walletAddress }) => {
    const [amount, setAmount] = useState('');
    const [youWillReceive, setYouWillReceive] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [web3, setWeb3] = useState(null);
    const [isCountdownActive, setIsCountdownActive] = useState(true);

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

    const handleAmountChange = (event) => {
        const value = event.target.value;
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
    };

    const isDisabled = isCountdownActive || !walletAddress;

    return (
        <div className={styles.crowdfundingSection}>
            <h2 className={styles.countdownTitle}>{crowdfund.type} <b>starts in:</b></h2>
            <Countdown targetDate={crowdfund.startDate} onCountdownEnd={handleCountdownEnd} />
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <label>
                        Amount
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            min={0}
                            step={0.0001}
                            className={`${styles.inputAmount} ${isDisabled ? styles.disabled : ''}`}
                            placeholder="Must be a minimum 1000 TARA"
                            disabled={isDisabled}
                        />
                    </label>
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
                <button onClick={handleSnapshot} className="p-3">
                    Snapshot
                </button>
                <button onClick={handleGovernance} className="p-3">
                    Governance
                </button>
            </div>
        </div >
    );
};

export default CrowdfundingSection;
