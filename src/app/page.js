import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <title>DeGym: Revolutionizing Gym Memberships with distributed ledger technology</title>
        <meta name="description" content="Seamless Access, Enhanced Rewards, and Secure Workouts" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Decentralized Gym Access</h1>
          <p className={styles.heroSubtitle}>Revolutionizing Gym Memberships with distributed ledger technology. Seamless Access, Enhanced Rewards, and Secure Workouts</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Welcome to DeGym</h2>
          <p className={styles.paragraph}>DeGym is a cutting-edge decentralized autonomous organization transforming gym memberships through NFT and DLT powered by smart contracts. DeGym connects GymUsers, GymProviders, and Stakers in a seamless ecosystem where users can access multiple gyms, providers can offer their facilities, and stakers can earn rewards. Join us in revolutionizing the fitness industry with secure, flexible, and rewarding gym access.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mission Statement</h2>
          <p className={styles.paragraph}>To revolutionize fitness by providing seamless and decentralized access to gyms worldwide, empowering individuals to achieve their health and wellness goals anytime, anywhere.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vision Statement</h2>
          <p className={styles.paragraph}>To create a world where fitness is universally accessible, eliminating barriers and fostering a global community of health-conscious individuals.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Accessibility:</strong> Making fitness facilities accessible to everyone, everywhere.</li>
            <li className={styles.listItem}><strong>Innovation:</strong> Continuously improving and innovating to provide the best user experience.</li>
            <li className={styles.listItem}><strong>Community:</strong> Fostering a global community of fitness enthusiasts.</li>
            <li className={styles.listItem}><strong>Flexibility:</strong> Offering flexible solutions to meet diverse fitness needs.</li>
            <li className={styles.listItem}><strong>Empowerment:</strong> Empowering individuals to take control of their fitness journey.</li>
            <li className={styles.listItem}><strong>Integrity:</strong> Maintaining transparency and honesty in all operations.</li>
            <li className={styles.listItem}><strong>Excellence:</strong> Striving for excellence in every aspect of our service.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Taglines</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Unlock Fitness Freedom</li>
            <li className={styles.listItem}>Gym Access, Redefined</li>
            <li className={styles.listItem}>Fitness Without Borders</li>
            <li className={styles.listItem}>Your Gym, Everywhere</li>
            <li className={styles.listItem}>Seamless Gym Access</li>
            <li className={styles.listItem}>Fitness Unleashed</li>
            <li className={styles.listItem}>Access Anytime, Anywhere</li>
            <li className={styles.listItem}>Empowering Your Fitness Journey</li>
            <li className={styles.listItem}>The World is Your Gym</li>
            <li className={styles.listItem}>Decentralize Your Workout</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Brand Narrative</h2>
          <p className={styles.paragraph}>In a world where access to fitness facilities can be limited by location and time, DeGym emerges as a revolutionary platform breaking down these barriers. By leveraging the power of decentralization, DeGym provides users with the freedom to access gyms and fitness centers worldwide, anytime they choose. Our mission is to make fitness universally accessible, empowering individuals to live healthier, happier lives. Through innovation and community-building, DeGym is redefining the fitness landscape, creating a global network of accessible, high-quality gym facilities. Join us in this movement towards fitness without borders, and unlock the potential of your fitness journey with DeGym.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Testimonials</h2>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p>"DeGym has transformed the way I access fitness facilities. It's convenient and rewarding!" - User A</p>
            </div>
            <div className={styles.testimonial}>
              <p>"With DeGym, I can work out at multiple gyms without hassle. It's fantastic!" - User B</p>
            </div>
            <div className={styles.testimonial}>
              <p>"The best part of DeGym is the rewards. I get more out of my workouts now." - User C</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get Started</h2>
          <p className={styles.paragraph}>Ready to revolutionize your fitness journey? Join DeGym today and experience the future of gym memberships.</p>
          <button className={styles.button}>Sign Up Now</button>
        </section>
      </main>
    </>
  );
}

export default HomePage;