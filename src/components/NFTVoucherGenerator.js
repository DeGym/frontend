'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/components/NFTVoucherGenerator.module.css';
import calculate_price from '../utils/pricing'

const tiers = ["Basic", "Silver", "Gold", "Platinum", "Diamond", "Black"];
const tierValues = { "Basic": 1, "Silver": 2, "Gold": 3, "Platinum": 4, "Diamond": 5, "Black": 6 };
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
        setPrice(calculate_price(selectedTier, selectedDuration));
    }, [tier, duration, customTier, customDuration, customMode]);
    const handleToggleCustomMode = () => {
        setCustomMode(!customMode);
    };
    const getGradientClass = (selectedTier) => {
        const index = tiers.indexOf(selectedTier);
        return styles[`tier${index + 1}`];
    };
    return (
        <div className={customMode ? styles.container : `${styles.container} ${getGradientClass(tier)}`} >
            <h1 className={styles.NFTTitle}>DeGym Voucher</h1>
            <button className={styles.toggle} onClick={handleToggleCustomMode}>
                {customMode ? 'Switch to Preset Values' : 'Customize'}
            </button>

            {
                customMode ? (
                    <div className={styles.customSelector}>
                        <label className={styles.labelGroup}>
                            <span className={styles.labelText}>Tier</span>
                            <input type="number" value={customTier} onChange={(e) => setCustomTier(parseInt(e.target.value))} min="1" max="100" className={styles.inputField} />
                        </label>
                        <label className={styles.labelGroup}>
                            <span className={styles.labelText}>Duration (days)</span>
                            <input type="number" value={customDuration} onChange={(e) => setCustomDuration(parseInt(e.target.value))} min="1" max="365" className={styles.inputField} />
                        </label>
                    </div>

                ) : (
                    <div className={styles.selector}>
                        <div className={styles.labelGroup}>
                            <span className={styles.labelText}>Tier</span>
                            <select value={tier} onChange={e => setTier(e.target.value)} className={styles.selectField}>
                                {tiers.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                        </div>
                        <div className={styles.labelGroup}>
                            <span className={styles.labelText}>Duration (days)</span>
                            <select value={duration} onChange={e => setDuration(e.target.value)} className={styles.selectField}>
                                {durations.map(option => <option key={option} value={option}>{option} days</option>)}
                            </select>
                        </div>
                    </div>
                )
            }

            <div className={styles.info}>
                <p className={styles.priceDisplay}>${price}</p>
            </div>
            <div className={styles.info}>
                <button onClick={() => console.log('Buying NFT Voucher')} className={styles.buyButton}>Buy NFT Voucher</button>
            </div>

        </div >
    );
};

export default NFTVoucherGenerator;