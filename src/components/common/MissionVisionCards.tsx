"use client";

import React from 'react';
import styles from '@/styles/components/section/MissionVisionCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const MissionVisionCards: React.FC = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2>
                        <b><FontAwesomeIcon icon={faEye as IconProp} size="1x" /> Vision</b> Statement
                    </h2>
                    <p>
                        At DeGym, we envision a world where fitness is universally accessible and inclusive, empowering both users and gym owners. Our goal is to create a global community where fitness enthusiasts can access any fitness center, anytime, anywhere, without traditional barriers.
                    </p>
                    <p>
                        We aim to promote small and independent gyms by providing them with the tools and platform to gain traction and thrive. By leveraging blockchain technology, we ensure a transparent, secure, and flexible check-in system, allowing gym owners to receive payments in their preferred tokenized currencies.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2><b><FontAwesomeIcon icon={faRocket as IconProp} size="1x" /> Mission</b> Statement</h2>
                    <p>
                        Our mission is to revolutionize the fitness industry by building a decentralized, transparent, and user-centric gym access ecosystem. We empower users with seamless, global access to a diverse network of gyms, while offering gym owners the flexibility to accept payments in multiple digital currencies, enhancing their business potential.
                    </p>
                    <p>
                        We are committed to promoting small gyms, ensuring they have equal opportunities to attract and retain members.
                        Additionally, DeGym provides partners and stakers with fair and incentivized economic opportunities, fostering a collaborative community focused on promoting health, well-being, and active lifestyles worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionCards;
