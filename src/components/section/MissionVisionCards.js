"use client";

import React from 'react';
import styles from '@/styles/components/section/MissionVisionCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons';


const MissionVisionCards = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>

                <div className={styles.content}>
                    <h2>
                        <b><FontAwesomeIcon icon={faEye} size="1x" /> Vision</b> Statement
                    </h2>
                    <p>
                        At DeGym DAO, we envision a world where fitness enthusiasts have the freedom to access any gym, anytime, anywhere.
                    </p>
                    <p>
                        By breaking down traditional membership barriers, we aim to create a global community that enjoys seamless gym access, fostering a healthier, more active lifestyle.
                        By fostering a system of shared economic benefits, we strive to enhance the gym experience for everyone, making fitness more accessible, rewarding, and aligned with modern digital lifestyles.
                    </p>
                    <p>
                        Our vision is to eliminate physical and financial constraints, making health and wellness universally accessible and perfectly aligned with the digital age.
                        By leveraging cutting-edge technology, we are committed to creating an interconnected network that supports and enhances the fitness journeys of individuals worldwide.
                    </p>
                </div>
            </div >
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2><b><FontAwesomeIcon icon={faRocket} size="1x" /> Mission</b> Statement</h2>
                    <p>
                        Our mission at DeGym DAO is to revolutionize the fitness industry by leveraging Distributed Ledger Technology (DLT) to create a decentralized, transparent, and user-centric gym access ecosystem.
                    </p>
                    <p>
                        We aim to empower gym users with seamless access to a worldwide network of gyms, ensuring flexibility and convenience.

                    </p>
                    <p>
                        Our commitment is to build a global community where fitness is free from traditional constraints, promoting health, well-being, and an active lifestyle for all.
                    </p><p>
                        DeGym DAO provides gym partners with a platform that enhances engagement and optimizes facility utilization, while offering stakers fair and incentivized economic opportunities.

                    </p>
                </div>
            </div>

        </div >
    );
};

export default MissionVisionCards;
