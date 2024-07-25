"use client";

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import styles from '../../styles/components/CrowdfundingSection.module.css';

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
        const distance = targetDate - now;
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
                    <span className={styles.countdownValue}>{timeRemaining.days}</span>
                    days
                </div>
                <div className={styles.countdownBox}>
                    <span className={styles.countdownValue}>{timeRemaining.hours}</span>
                    hours
                </div>
                <div className={styles.countdownBox}>
                    <span className={styles.countdownValue}>{timeRemaining.minutes}</span>
                    min
                </div>
                <div className={styles.countdownBox}>
                    <span className={styles.countdownValue}>{timeRemaining.seconds}</span>
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
            setCurrentBalance(web3Instance.utils.fromWei(balance, 'ether'));
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
        const tempAmount = amount;
        setAmount(youWillReceive);
        setYouWillReceive(tempAmount);
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

    return (
        <div className={styles.crowdfundingSection}>
            <h1 className={styles.countdownTitle}>{crowdfund.type} starts in:</h1>
            <Countdown targetDate={crowdfund.startDate} onCountdownEnd={handleCountdownEnd} />
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <label>
                        Amount
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            className={styles.inputAmount}
                            placeholder="Must be a minimum 1000 TARA"
                        />
                    </label>
                    <button onClick={handleSwap} className={styles.swapButton} disabled={isCountdownActive}>Swap</button>
                    {walletAddress ? (
                        <>
                            <p>Wallet Address: {walletAddress}</p>
                            <p>Current Balance: {currentBalance} TARA</p>
                        </>
                    ) : (
                        <p>Please connect your wallet to participate.</p>
                    )}
                    <p>You will receive: {youWillReceive} tokens</p>
                    <p>Exchange rate: {crowdfund.exchangeRate} TARA/DGYM</p>
                    <p>TVL discount: {crowdfund.tvlDiscount}%</p>
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
        </div>
    );
};

export default CrowdfundingSection;
