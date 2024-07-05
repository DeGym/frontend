"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLock, faMapMarkerAlt, faAward, faUserShield, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/components/Differentials.module.css';

const differentials = [
    {
        title: 'Unlimited Gym Access with DeGym NFTs',
        icon: faDumbbell,
        description: 'Enjoy unlimited access to a diverse network of gyms with DeGym NFTs.',
    },
    {
        title: 'Enhanced Security with DLT',
        icon: faUserShield,
        description: 'Benefit from the enhanced security and transparent transactions provided by distributed ledger technology (DLT).',
    },
    {
        title: 'Flexible Access Anywhere',
        icon: faMapMarkerAlt,
        description: 'Work out at multiple locations without the restrictions of traditional gym plans.',
    },
    {
        title: 'Exclusive Rewards',
        icon: faAward,
        description: 'Gain access to exclusive rewards and benefits as a DeGym member.',
    },
    {
        title: 'NFT Trade and Transfer',
        icon: faExchangeAlt,
        description: 'Easily trade or transfer your DeGym Voucher NFTs, providing you with more control over your fitness investment.',
    },
    {
        title: 'No Commitment',
        icon: faLock,
        description: 'No long-term commitment required. Enjoy the flexibility to choose your fitness journey.',
    },
];

const DifferentialSection = () => (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className={styles.title}>Why DeGym Voucher?</h2>
            <div className={styles.grid}>
                {differentials.map((differential, index) => (
                    <div key={index} className={styles.differentialItem}>
                        <FontAwesomeIcon icon={differential.icon} className={styles.icon} />
                        <div className={styles.textContainer}>
                            <p className={styles.description}>{differential.description}</p>
                        </div>
                    </div>
                ))}

            </div>
            <p>Unlock Unlimited Gym Access with DeGym NFTs. Buy your DeGym Voucher today and start your journey to a fitter, more flexible lifestyle.</p>
        </div>
    </section>
);

export default DifferentialSection;
