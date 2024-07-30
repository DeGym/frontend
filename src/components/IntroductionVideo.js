"use client";

import React from 'react';
import styles from '../styles/components/IntroductionVideo.module.css';


const IntroductionVideo = () => {
    return (
        <section className={styles.section}>
            <p>
                In a world where access to fitness facilities can be limited by location and time, DeGym emerges as a revolutionary platform breaking down these barriers.
                By leveraging the power of decentralization, DeGym provides users with the freedom to access gyms and fitness centers worldwide, anytime they choose.
            </p>
            <p>
                Our mission is to make fitness universally accessible, empowering individuals to live healthier, happier lives.
                Through innovation and community-building, DeGym is redefining the fitness landscape, creating a global network of accessible, high-quality gym facilities.
                Join us in this movement towards fitness without borders, and unlock the potential of your fitness journey with DeGym.</p>
            <h2>Watch Our <b>Introduction</b> Video</h2>
            <div className={styles.container}>
                <div className={styles.videoOverlay}></div>
                <video className={styles.video} controls controlsList="nodownload" src="videos/introduction.mp4"></video>
            </div>
        </section>
    );
};

export default IntroductionVideo;
