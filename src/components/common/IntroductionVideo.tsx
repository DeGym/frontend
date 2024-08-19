"use client";

import React from 'react';
import styles from '@/styles/components/section/IntroductionVideo.module.css';

const IntroductionVideo: React.FC = () => {
    return (
        <section className={styles.section}>
            <p>
                In a world where access to fitness facilities can be limited by location and time, DeGym emerges as a revolutionary platform breaking down these barriers.
                By leveraging the power of decentralization, DeGym provides users with the freedom to access gyms and fitness centers worldwide, anytime they choose.
            </p>

            <h2>Watch Our <b>Introduction</b> Video</h2>
            <div className={styles.container}>
                <div className={styles.videoOverlay}></div>
                <video className={styles.video} controls controlsList="nodownload" src="videos/introduction.mp4"></video>
            </div>
            <p>
                Through innovation and community-building, We are <b>redefining the fitness landscape</b>, creating a global network of accessible, high-quality gym facilities.
                It drives us to eliminate physical and financial constraints, making health and wellness seamlessly integrated into modern web 3.0 lifestyles.
            </p>
        </section>
    );
};

export default IntroductionVideo;
