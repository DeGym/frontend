import React from 'react';
import styles from '../styles/components/common.module.css';

const MembershipCard = ({ tier, durability }) => {
    const tierStyles = tier === "Gold" || tier === "Platinum" || tier === "Black" ? styles.premium : styles.standard;

    return (
        <div className={`${styles.card} ${tierStyles}`}>
            <h2 className={styles.title}>{tier} Membership</h2>
            <ul className={styles.details}>
                <li className={styles.detailItem}>Access to exclusive gyms</li>
                <li className={styles.detailItem}>Priority booking for classes</li>
                <li className={styles.detailItem}>Free guest passes monthly</li>
            </ul>
            <button className={styles.chooseButton}>Join {tier}</button>
        </div>
    );
};

export default MembershipCard;
