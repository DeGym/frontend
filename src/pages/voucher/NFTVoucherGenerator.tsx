import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/voucher/NFTVoucherGenerator.module.css';
import calculate_price from '../../utils/pricing';
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
    const [customDurability, setCustomDurability] = useState<number>(7);

    const getGradientClass = (tier: string) => {
        switch (tier) {
            case "Basic":
                return styles.basicGradient;
            case "Silver":
                return styles.silverGradient;
            case "Gold":
                return styles.goldGradient;
            case "Platinum":
                return styles.platinumGradient;
            case "Diamond":
                return styles.diamondGradient;
            case "Black":
                return styles.blackGradient;
            default:
                return "";
        }
    };

    useEffect(() => {
        if (customMode) {
            setTier("Custom");
        }
    }, [customMode]);

    return (
        <div className={customMode ? styles.container : `${styles.container} ${getGradientClass(tier)} ${className}`}>
            <div className={styles.header}>
                <h2 className={styles.title}>NFT Voucher Generator</h2>
                <div className={styles.tierSelect}>
                    <div className={styles.tierLabel}>Tier:</div>
                    <div className={styles.tierOptions}>
                        {tiers.map((tierOption, index) => (
                            <div
                                key={index}
                                className={`${styles.tierOption} ${tier === tierOption ? styles.active : ""
                                    }`}
                                onClick={() => setTier(tierOption)}
                            >
                                {tierOption}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.durationSelect}>
                    <div className={styles.durationLabel}>Duration:</div>
                    <div className={styles.durationOptions}>
                        {durations.map((durationOption, index) => (
                            <div
                                key={index}
                                className={`${styles.durationOption} ${duration === durationOption ? styles.active : ""
                                    }`}
                                onClick={() => setDuration(durationOption)}
                            >
                                {durationOption} days
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.customMode}>
                    <div className={styles.customModeLabel}>Custom Mode:</div>
                    <div className={styles.customModeToggle}>
                        <input
                            type="checkbox"
                            checked={customMode}
                            onChange={(e) => setCustomMode(e.target.checked)}
                        />
                    </div>
                </div>
                {customMode && (
                    <>
                        <div className={styles.customTierSelect}>
                            <div className={styles.customTierLabel}>Custom Tier:</div>
                            <div className={styles.customTierOptions}>
                                <input
                                    type="number"
                                    value={customTier}
                                    onChange={(e) => setCustomTier(Number(e.target.value))}
                                    min="1"
                                    max="6"
                                />
                            </div>
                        </div>
                        <div className={styles.customDurabilitySelect}>
                            <div className={styles.customDurabilityLabel}>Custom Durability:</div>
                            <div className={styles.customDurabilityOptions}>
                                <input
                                    type="number"
                                    value={customDurability}
                                    onChange={(e) => setCustomDurability(Number(e.target.value))}
                                    min="7"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.nftImage}>
                    <Image
                        src={`/images/nft-${tier.toLowerCase()}.png`}
                        alt={`NFT Voucher - ${tier}`}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.nftDetails}>
                    <div className={styles.nftName}>
                        <span>NFT Voucher - </span>
                        <span>{tier}</span>
                    </div>
                    <div className={styles.nftDuration}>
                        <span>Duration: </span>
                        <span>{duration} days</span>
                    </div>
                    <div className={styles.nftPrice}>
                        <span>Price: </span>
                        <span>{calculate_price(tierValues[tier], duration)} DGYM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTVoucherGenerator;