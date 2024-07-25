"use client";

import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Web3 from 'web3';
import styles from '../../styles/components/CrowdfundingSection.module.css';

// Custom Countdown renderer
const renderer = ({ days, hours, minutes, seconds }) => {
    return (
        <div className={styles.countdownContainer}>
            <div className={styles.countdownGrid}>
                <div className={styles.countdownBox}>
                    <span className={`${styles.countdownValue} ${styles.countdownFont}`}><span style={{ "--value": days }}></span></span>
                    days
                </div>
                <div className={styles.countdownBox}>
                    <span className={`${styles.countdownValue} ${styles.countdownFont}`}><span style={{ "--value": hours }}></span></span>
                    hours
                </div>
                <div className={styles.countdownBox}>
                    <span className={`${styles.countdownValue} ${styles.countdownFont}`}><span style={{ "--value": minutes }}></span></span>
                    min
                </div>
                <div className={styles.countdownBox}>
                    <span className={`${styles.countdownValue} ${styles.countdownFont}`}><span style={{ "--value": seconds }}></span></span>
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

    return (
        <div className={styles.crowdfundingSection}>
            <h1 className={styles.countdownTitle}>{crowdfund.type} starts in:</h1>
            <Countdown date={crowdfund.startDate} renderer={renderer} />
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
                    {walletAddress ? (
                        <>
                            <p>Wallet Address: {walletAddress}</p>
                            <p>Current Balance: {currentBalance} ETH</p>
                        </>
                    ) : (
                        <p>Please connect your wallet to participate.</p>
                    )}
                    <p>You will receive: {youWillReceive} tokens</p>
                    <p>Exchange rate: {crowdfund.exchangeRate} TARA/ETH</p>
                    <p>TVL discount: {crowdfund.tvlDiscount}%</p>
                    <button onClick={handleSwap} className="p-3">Swap</button>
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
