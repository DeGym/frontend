// pages/index.js
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ParticleNetworkAnimation from '../components/ParticleNetworkAnimation';
import styles from '../styles/Home.module.css';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>DeGym: Revolutionizing Gym Memberships with Blockchain</title>
                <meta name="description" content="Seamless Access, Enhanced Rewards, and Secure Workouts" />
            </Head>
            <ParticleNetworkAnimation />
            <Navbar />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1>DeGym: Revolutionizing Gym Memberships with Blockchain</h1>
                    <p>Seamless Access, Enhanced Rewards, and Secure Workouts</p>
                </section>

                <section className={styles.intro}>
                    <h2>Welcome to DeGym</h2>
                    <p>DeGym is a cutting-edge decentralized application transforming gym memberships through NFT technology and blockchain. DeGym connects GymUsers, GymProviders, and Stakers in a seamless ecosystem where users can access multiple gyms, providers can offer their facilities, and stakers can earn rewards. Join us in revolutionizing the fitness industry with secure, flexible, and rewarding gym access.</p>
                </section>

                <section className={styles.mission}>
                    <h2>Mission Statement</h2>
                    <p>To revolutionize fitness by providing seamless and decentralized access to gyms worldwide, empowering individuals to achieve their health and wellness goals anytime, anywhere.</p>
                </section>

                <section className={styles.vision}>
                    <h2>Vision Statement</h2>
                    <p>To create a world where fitness is universally accessible, eliminating barriers and fostering a global community of health-conscious individuals.</p>
                </section>

                <section className={styles.values}>
                    <h2>Core Values</h2>
                    <ul>
                        <li><strong>Accessibility:</strong> Making fitness facilities accessible to everyone, everywhere.</li>
                        <li><strong>Innovation:</strong> Continuously improving and innovating to provide the best user experience.</li>
                        <li><strong>Community:</strong> Fostering a global community of fitness enthusiasts.</li>
                        <li><strong>Flexibility:</strong> Offering flexible solutions to meet diverse fitness needs.</li>
                        <li><strong>Empowerment:</strong> Empowering individuals to take control of their fitness journey.</li>
                        <li><strong>Integrity:</strong> Maintaining transparency and honesty in all operations.</li>
                        <li><strong>Excellence:</strong> Striving for excellence in every aspect of our service.</li>
                    </ul>
                </section>

                <section className={styles.taglines}>
                    <h2>Taglines</h2>
                    <ul>
                        <li>Unlock Fitness Freedom</li>
                        <li>Gym Access, Redefined</li>
                        <li>Fitness Without Borders</li>
                        <li>Your Gym, Everywhere</li>
                        <li>Seamless Gym Access</li>
                        <li>Fitness Unleashed</li>
                        <li>Access Anytime, Anywhere</li>
                        <li>Empowering Your Fitness Journey</li>
                        <li>The World is Your Gym</li>
                        <li>Decentralize Your Workout</li>
                    </ul>
                </section>

                <section className={styles.narrative}>
                    <h2>Brand Narrative</h2>
                    <p>In a world where access to fitness facilities can be limited by location and time, DeGym emerges as a revolutionary platform breaking down these barriers. By leveraging the power of decentralization, DeGym provides users with the freedom to access gyms and fitness centers worldwide, anytime they choose. Our mission is to make fitness universally accessible, empowering individuals to live healthier, happier lives. Through innovation and community-building, DeGym is redefining the fitness landscape, creating a global network of accessible, high-quality gym facilities. Join us in this movement towards fitness without borders, and unlock the potential of your fitness journey with DeGym.</p>
                </section>
            </main>
        </>
    );
}

export default HomePage;
