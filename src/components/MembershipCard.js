import React from 'react';
import styles from '../styles/components/common.module.css';

const MembershipCard = ({ tier, durability }) => {
    return (
        <div className={styles.card}>
            <h2>{tier} Membership</h2>
            <p>Duration: {durability}</p>
            <button className={styles.chooseButton}>Select {tier}</button>
        </div>
    );
};

export default MembershipCard;
