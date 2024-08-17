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
                        <th className={styles.tableHeader}>Tier</th>
                        <th className={styles.tableHeader}>Duration</th>
                        <th className={styles.tableHeader}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tiers.map((tier, index) => (
                        <tr key={index} className={styles.tableRow}>
                            <td className={styles.tableData}>{tier}</td>
                            <td className={styles.tableData}>
                                <select
                                    value={customDurability}
                                    onChange={(e) => setCustomDurability(Number(e.target.value))}
                                    className={styles.select}
                                >
                                    {defaultDurabilities.map((durability, index) => (
                                        <option key={index} value={durability}>
                                            {durability} days
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className={styles.tableData}>
                                <span className={styles.price}>
                                    {calculate_price(index + 1, customDurability)} DAI
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VoucherTable;