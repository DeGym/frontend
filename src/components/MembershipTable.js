'use client';
import React, { useState } from 'react';
import styles from '../styles/components/table.module.css';

const basic_price = 10;
const min_base_price_factor = 0.7;
const decay_rate = 0.1;

function calculate_price(tier, durability) {
    if (!tier || !durability) return '-';
    const min_base_price = min_base_price_factor * basic_price;
    const days_factor = durability / 30;
    let base_price = basic_price * (1 - decay_rate * (days_factor - 1));
    base_price = Math.max(base_price, min_base_price);
    const final_price = base_price * tier * days_factor;
    return `$${final_price.toFixed(2)}`;
}

const tiers = ["Basic I", "Silver II", "Gold III", "Platinum IV", "Diamond V", "Black VI"];
const defaultDurabilities = [7, 30, 365];

const MembershipTable = () => {
    const [customDurability, setCustomDurability] = useState(0);
    const [customTier, setCustomTier] = useState(7);

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={`${styles.header} ${styles.stickyColumn}`}>Tier \ Duration</th>
                        {defaultDurabilities.map(durability => (
                            <th key={durability} className={styles.header}>{durability} days</th>
                        ))}
                        <th className={styles.header}>
                            <input
                                type="number"
                                value={customDurability}
                                onChange={(e) => setCustomDurability(e.target.value)}
                                min="1"
                                max="1000"
                                placeholder="Custom days"
                                className={styles.input}
                            /> days
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tiers.concat(["Custom"]).map((tier, index) => (
                        <tr key={index} className={styles.row}>
                            <td className={`${styles.cell} ${styles.stickyColumn}`}>{tier === "Custom" ? (
                                <input
                                    type="number"
                                    value={customTier}
                                    onChange={(e) => setCustomTier(e.target.value)}
                                    min="1"
                                    placeholder="Tier number"
                                    className={styles.input}
                                />
                            ) : tier}</td>
                            {defaultDurabilities.concat(customDurability).map((durability, idx) => (
                                <td key={idx} className={styles.cell}>
                                    {calculate_price(tier === "Custom" ? customTier : index + 1, durability)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MembershipTable;
