import React from 'react';
import styles from '../styles/components/QuickLinks.module.css';

const QuickLinks = () => {
    const cards = [
        {
            icon: '/img/ql/staking.svg',
            title: 'Staking',
            description: 'Earn rewards and support the health of the DeGym ecosystem.',
            buttonText: 'Get Started',
            href: '/staking',
        },
        {
            icon: '/img/ql/bounties.svg',
            title: 'Bounties',
            description: 'Earn rewards while learning about DeGym and expanding its ecosystem.',
            buttonText: 'Get Started',
            href: '/bounties',
        },
        {
            icon: '/img/ql/node.svg',
            title: 'Register a Gym',
            description: 'Register your gym and help grow DeGym’s network.',
            buttonText: 'Get Started',
            href: '/partner',
        },
        {
            icon: '/img/ql/voucher.svg',
            title: 'NFT Voucher',
            description: "Purchase DeGym's voucher and gain access to the DeGym network.",
            buttonText: 'Get Started',
            href: '/voucher',
        },
        {
            icon: '/img/ql/explorer.svg',
            title: 'DeGym Explorer',
            description: 'Explore gyms and find the best one near you.',
            buttonText: 'Get Started',
            href: '/search',
        },
    ];


    return (
        <section className={styles.section}>
            <div className={styles.homeContent}>
                <div className={styles.pageTitle}>
                    <div className={styles.pageTitleContainer}>
                        <h2>Join to DeGym's <b>community</b>!</h2>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.icon}>
                                    <img src={card.icon} alt={`icon-${index + 1}`} className="img-fluid d-block" />
                                </div>
                                <h5 className={styles.cardTitle}>{card.title}</h5>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                            <div className={styles.cardActions}>
                                <button>
                                    <a
                                        className="rounded-[42px] inline-flex items-center justify-center py-4 px-8 hover:text-neutral-90 text-base transition bg-primary-40 text-neutral-90 w-full"
                                        target="_blank"
                                        href={card.href}
                                    >
                                        {card.buttonText}
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
