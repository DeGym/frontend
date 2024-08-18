import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/voucher/NFTVoucherGenerator.module.css';
import calculate_price from '@/utils/pricing';
import Image from 'next/image';

const tiers = ["Basic", "Silver", "Gold", "Platinum", "Diamond", "Black"];
const tierValues = { "Basic": 1, "Silver": 2, "Gold": 3, "Platinum": 4, "Diamond": 5, "Black": 6 };
const durations = [7, 30, 365];

interface NFTVoucherGeneratorProps {
    className?: string;
}

const NFTVoucherGenerator: React.FC<NFTVoucherGeneratorProps> = ({ className }) => {
    const [tier, setTier] = useState<string>("Basic");
    const [duration, setDuration] = useState<number>(7);
    const [customMode, setCustomMode] = useState<boolean>(false);
    const [customTier, setCustomTier] = useState<number>(1);
    const [customDuration, setCustomDuration] = useState<number>(7);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const selectedTier = customMode ? customTier : tierValues[tier];
        const selectedDuration = customMode ? customDuration : duration;
        setPrice(Number(calculate_price(selectedTier, selectedDuration)));
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
            <div className="flex items-center justify-center">
                <Image
                    src="/DeGym_green_logo_without_bg.png"
                    alt="DeGym Logo"
                    width={35}
                    height={35}
                />
                <h1 className={styles.NFTTitle}>DeGym</h1>
            </div><button className={styles.toggle} onClick={handleToggleCustomMode}>
                {customMode ? 'Switch to Preset Values' : 'Customize'}
            </button>

            {
                customMode ? (
                    <div className={styles.customSelector}>
                        <label>
                            <span className={styles.labelText}>Tier</span>
                            <input type="number" value={customTier} onChange={(e) => setCustomTier(parseInt(e.target.value))} min="1" max="100" className={styles.inputField} />
                        </label>
                        <label>
                            <span className={styles.labelText}>Duration</span>
                            <input type="number" value={customDuration} onChange={(e) => setCustomDuration(parseInt(e.target.value) || 0)} min="1" max="365" className={styles.inputField} />
                        </label>
                    </div>

                ) : (
                    <div className={styles.selector}>
                        <div>
                            <span className={styles.labelText}>Tier</span>
                            <select value={tier} onChange={e => setTier(e.target.value)} className={styles.selectField}>
                                {tiers.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                        </div>
                        <div>
                            <span className={styles.labelText}>Duration</span>
                            <select value={duration} onChange={e => setDuration(Number(e.target.value))} className={styles.selectField}>
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
                <button onClick={() => console.log('Buying NFT Voucher')} className={styles.buyButton}>Buy NFT</button>
            </div>

        </div >
    );
};

export default NFTVoucherGenerator;