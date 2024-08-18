import React, { useState } from 'react';
import styles from '@/styles/components/voucher/Table.module.css';
import calculate_price from '@/utils/pricing';

const tiers = ["Basic I", "Silver II", "Gold III", "Platinum IV", "Diamond V", "Black VI"];
const defaultDurabilities = [7, 30, 365];

const VoucherTable: React.FC = () => {
    const [customDurability, setCustomDurability] = useState<number>(0);
    const [customTier, setCustomTier] = useState<number>(7);

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
                                onChange={(e) => setCustomDurability(parseInt(e.target.value))}
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
                                < input
                                    type="number"
                                    value={customTier}
                                    onChange={(e) => setCustomTier(parseInt(e.target.value))}
                                    min="7"
                                    placeholder="Tier number"
                                    className={styles.input}
                                />
                            )
                                : tier}</td>
                            {defaultDurabilities.concat(customDurability).map((durability, idx) => (
                                <td key={idx} className={styles.cell}>
                                    ${calculate_price(tier === 'Custom' ? customTier : index + 1, durability)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VoucherTable;