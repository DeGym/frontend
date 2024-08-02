import React from 'react';
import styles from './styles/BenefitsSection.module.css';

const BenefitsSection = () => {
    const benefits = [
        {
            imgSrc: '/img/less_expensive.jpg',
            title: 'Always less expensive',
            description: 'DeGym vouchers cost up to 50% less than direct memberships.'
        },
        {
            imgSrc: '/img/female_in_yoga_pose.jpg',
            title: 'Always more options',
            description: 'Choose any voucher and get thousands of popular options for fitness & wellness.'
        },
        {
            imgSrc: '/img/risk-free.jpg',
            title: 'Always risk-free',
            description: 'No enrollment or cancellation fees. Trade or upgrade vouchers at any time.'
        }
    ];

    return (
        <section className={styles.benefitsSection}>
            <div className={styles.benefitsContainer}>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.benefitCard}>
                            <picture>
                                <img src={benefit.imgSrc} alt={benefit.title} className={styles.benefitImage} loading="lazy" />
                            </picture>
                            <div className={styles.benefitContent}>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="justify-center flex max-w-80 align-middle m-auto">
                    <a href="/voucher" target="_self">See plans & pricing</a>
                </button>
            </div>
        </section>
    );
};

export default BenefitsSection;
