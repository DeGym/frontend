"use client"

import React from 'react';
import styles from '@/styles/components/section/QuickLinks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBalanceScale, faDumbbell, faGift, faSearch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const QuickLinks = () => {
    const cards = [
        {
            icon: faDumbbell,
            title: 'Staking',
            description: 'Earn rewards and support the health of the DeGym ecosystem.',
            href: '/staking',
        },
        {
            icon: faGift,
            title: 'Bounties',
            description: 'Earn rewards while learning about DeGym and expanding its ecosystem.',
            href: '/bounties',
        },
        {
            icon: faBalanceScale,
            title: 'Register a Gym',
            description: 'Register your gym and help grow DeGym’s network.',
            href: '/partner',
        },
        {
            icon: faBolt,
            title: 'NFT Voucher',
            description: "Purchase DeGym's voucher and gain access to the DeGym network.",
            href: '/voucher',
        },
        {
            icon: faSearch,
            title: 'DeGym Explorer',
            description: 'Explore gyms and find the best one near you.',
            href: '/search',
        },
    ];

    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--color-accent), var(--color-dark))`;
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.background = '';
    };

    return (
        <section className={styles.section}>
            <div className={styles.homeContent}>
                <div className={styles.title}>
                    <div className={styles.titleContainer}>
                        <h2>Join DeGym's <b>community</b>!</h2>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={card.href}
                            className={styles.card}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.icon}>
                                    <FontAwesomeIcon icon={card.icon} className="img-fluid d-block" size="2x" />
                                </div>
                                <h5 className={styles.cardTitle}>{card.title}</h5>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.linkIcon} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
