'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/components/NFTVoucherGenerator.module.css';

const tiers = ["Basic I", "Silver II", "Gold III", "Platinum IV", "Diamond V", "Black VI"];
const tierValues = { "Basic I": 1, "Silver II": 2, "Gold III": 3, "Platinum IV": 4, "Diamond V": 5, "Black VI": 6 };
const durations = [7, 30, 365];

const NFTVoucherGenerator = () => {
    const [tier, setTier] = useState(tiers[0]);
    const [duration, setDuration] = useState(durations[0]);
    const [customTier, setCustomTier] = useState(7); // Starting from the next possible custom value
    const [customDuration, setCustomDuration] = useState(30);
    const [customMode, setCustomMode] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const selectedTier = customMode ? customTier : tierValues[tier];
        const selectedDuration = customMode ? customDuration : duration;
        setPrice(calculatePrice(selectedTier, selectedDuration));
    }, [tier, duration, customTier, customDuration, customMode]);

    const calculatePrice = (tier, duration) => {
        const priceFactor = tier * duration / 30;
        return priceFactor * 10;  // Simplified price calculation
    };

    const handleToggleCustomMode = () => {
        setCustomMode(!customMode);
    };
    const getGradient = (selectedTier) => {
        const tierIndex = tierValues[selectedTier];
        return tierIndex ? `linear-gradient(to bottom, ${getBaseColor(tierIndex)}, ${getSecondaryColor(tierIndex)})` : 'none';
    };
    const getBaseColor = (tierIndex) => ['#f0f9ff', '#e0eafc', '#fad0c4', '#f9d29d', '#b4ec51', '#a1c4fd'][tierIndex - 1];
    const getSecondaryColor = (tierIndex) => ['#c6e4ff', '#cfdef3', '#ffd1ff', '#ffd8a8', '#429321', '#c2e9fb'][tierIndex - 1];


    return (
        <div style={{ background: getGradient(tier) }} className={styles.container}>
            <button className={styles.toggle} onClick={handleToggleCustomMode}>
                {customMode ? 'Switch to Preset Values' : 'Customize'}
            </button>
            {customMode ? (
                <div className={styles.customSelector}>
                    <label>Tier:
                        <input type="number" value={customTier} onChange={(e) => setCustomTier(parseInt(e.target.value))} min="1" max="100" className={styles.inputField} />
                    </label>
                    <label>Duration (days):
                        <input type="number" value={customDuration} onChange={(e) => setCustomDuration(parseInt(e.target.value))} min="1" max="365" className={styles.inputField} />
                    </label>
                </div>
            ) : (
                <div className={styles.selector}>
                    <label>Tier:
                        <select value={tier} onChange={(e) => setTier(e.target.value)} className={styles.selectField}>
                            {tiers.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </label>
                    <label>Duration:
                        <select value={duration} onChange={(e) => setDuration(e.target.value)} className={styles.selectField}>
                            {durations.map(option => <option key={option} value={option}>{option} days</option>)}
                        </select>
                    </label>
                </div>
            )}
            <div className={styles.info}>
                <p>Price: ${price.toFixed(2)}</p>
                <button onClick={() => console.log('Buying NFT Voucher')} className={styles.buyButton}>Buy NFT Voucher</button>
            </div>
        </div>
    );
};

export default NFTVoucherGenerator;
