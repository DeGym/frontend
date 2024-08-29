"use client";

import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/home/MissionVisionCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const MissionVisionCards: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.cardsContainer} ${isVisible ? styles.visible : ''}`}>
            <div className={`${styles.card} ${styles.visionCard}`}>
                <div className={styles.content}>
                    <h2 className={styles.digitalTransition}>
                        <b><FontAwesomeIcon icon={faEye as IconProp} size="1x" /> Vision</b> Statement
                    </h2>
                    <p className={styles.digitalTransition}>
                        At DeGym, we envision a world where fitness is universally accessible and inclusive, empowering both users and gym owners. Our goal is to create a global community where fitness enthusiasts can access any fitness center, anytime, anywhere, without traditional barriers.
                    </p>
                    <p className={styles.digitalTransition}>
                        We aim to promote small and independent gyms by providing them with the tools and platform to gain traction and thrive. By leveraging blockchain technology, we ensure a transparent, secure, and flexible check-in system, allowing gym owners to receive payments in their preferred tokenized currencies.
                    </p>
                </div>
            </div>
            <div className={`${styles.card} ${styles.missionCard}`}>
                <div className={styles.content}>
                    <h2 className={styles.digitalTransition}>
                        <b><FontAwesomeIcon icon={faRocket as IconProp} size="1x" /> Mission</b> Statement
                    </h2>
                    <p className={styles.digitalTransition}>
                        Revolutionize the fitness industry by building a decentralized, transparent, and user-centric gym access ecosystem. We empower users with seamless, global access to a diverse network of gyms, while offering gym owners the flexibility to accept payments in multiple digital currencies, enhancing their business potential.
                        We are committed to promoting small gyms, ensuring they have equal opportunities to attract and retain members.
                    </p>
                    <p className={styles.digitalTransition}>

                        Additionally, DeGym provides partners and stakers with fair and incentivized economic opportunities, fostering a collaborative community focused on promoting health.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionCards;
