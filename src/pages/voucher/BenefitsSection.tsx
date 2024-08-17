import React from 'react';
import styles from '@/styles/components/voucher/BenefitsSection.module.css';
import { faAward, faExchangeAlt, faLock, faMapMarkerAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';

const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            title: 'Flexible Access',
            icon: faMapMarkerAlt,
            description: 'Work out at multiple locations without the restrictions of traditional gym plans.',
        },
        {
            title: 'Enhanced Security',
            icon: faUserShield,
            description: 'Benefit from the enhanced security and transparent transactions provided by distributed ledger technology (DLT).',
        },
        {
            title: 'Exclusive Rewards',
            icon: faAward,
            description: 'Gain access to exclusive rewards and benefits as a DeGym member.',
        },
        {
            title: 'Trade and Transfer',
            icon: faExchangeAlt,
            description: 'Easily trade or transfer your DeGym Voucher NFTs, providing you with more control over your fitness investment.',
        },
        {
            title: 'No Commitment',
            icon: faLock,
            description: 'No long-term commitment required. Enjoy the flexibility to choose your fitness journey.',
        },
    ];

    return (
        <section className={styles.benefitsSection}>
            <h3 className={styles.title}>Benefits</h3>
            <div className={styles.benefitsContainer}>
                {benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefit}>
                        <div className={styles.iconContainer}>
                            <i className={`fas ${benefit.icon} ${styles.icon}`} />
                        </div>
                        <div className={styles.benefitContent}>
                            <h4 className={styles.be111nefitTitle}>{benefit.title}</h4>
                            <p className={styles.benefitDescription}>{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsSection;