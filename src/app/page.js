import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/common.module.css';
import RoadmapCarousel from '../components/RoadmapCarousel';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>DeGym: Revolutionizing Gym Memberships with distributed ledger technology</title>
        <meta name="description" content="Seamless Access, Enhanced Rewards, and Secure Workouts" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Decentralized Gym Network</h1>
          <p className={styles.heroSubtitle}>Revolutionizing Gym Memberships with distributed ledger technology. Seamless Access, Enhanced Rewards, and Secure Workouts</p>
        </section>

        <section className={styles.sectionEven}>
          <h2 className={styles.sectionEvenTitle}>Welcome to DeGym</h2>
          <p className={styles.paragraph}>DeGym is a cutting-edge decentralized autonomous organization transforming gym memberships through NFT and DLT powered by smart contracts. DeGym connects GymUsers, GymProviders, and Stakers in a seamless ecosystem where users can access multiple gyms, providers can offer their facilities, and stakers can earn rewards. Join us in revolutionizing the fitness industry with secure, flexible, and rewarding gym access.</p>
        </section>
        <section className={styles.videoSection}>
          <h2 className={styles.sectionOddTitle}>Watch Our Introduction Video</h2>
          <div className={styles.videoContainer}>
            <div className={styles.videoOverlay}></div>
            <video className={styles.video} controls controlsList="nodownload" src="https://api.renderforest.com/api/v1/projects/86667866/download?key=66861de0e05e4d2f138a2c92ecd44650:f23f59dbbd6306eb882295638df7c34e6dccee06bf48e671627eb992259a13496b15be09dc32f4d7efc62e4948bf8831"></video>
          </div>
        </section>
        <section className={styles.sectionEven}>
          <h2 className={styles.sectionEvenTitle}>Mission Statement</h2>
          <p className={styles.paragraph}>Our mission at DeGym DAO is to revolutionize the fitness industry by leveraging Distributed Ledger Technology (DLT) to create a decentralized, transparent, and user-centric gym access ecosystem. We aim to empower gym users with seamless access to a worldwide network of gyms, ensuring flexibility and convenience. DeGym DAO provides gym partners with a platform that enhances engagement and optimizes facility utilization, while offering stakers fair and incentivized economic opportunities. By fostering a system of shared economic benefits, we strive to enhance the gym experience for everyone, making fitness more accessible, rewarding, and aligned with modern digital lifestyles. Our commitment is to build a global community where fitness is free from traditional constraints, promoting health, well-being, and an active lifestyle for all.</p>
        </section>

        <section className={styles.sectionOdd}>
          <h2 className={styles.sectionOddTitle}>Vision Statement</h2>
          <p className={styles.paragraph}>At DeGym DAO, we envision a world where fitness enthusiasts have the freedom to access any gym, anytime, anywhere. By breaking down traditional membership barriers, we aim to create a global community that enjoys seamless gym access, fostering a healthier, more active lifestyle. Our vision is to eliminate physical and financial constraints, making health and wellness universally accessible and perfectly aligned with the digital age. By leveraging cutting-edge technology, we are committed to creating an interconnected network that supports and enhances the fitness journeys of individuals worldwide.</p>
        </section>

        <section className={styles.sectionEven}>
          <h2 className={styles.sectionEvenTitle}>Core Values</h2>
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

        <section className={styles.sectionOdd}>
          <h2 className={styles.sectionOddTitle}>Taglines</h2>
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

        <section className={styles.sectionEven}>
          <h2 className={styles.sectionEvenTitle}>Brand Narrative</h2>
          <p className={styles.paragraph}>In a world where access to fitness facilities can be limited by location and time, DeGym emerges as a revolutionary platform breaking down these barriers. By leveraging the power of decentralization, DeGym provides users with the freedom to access gyms and fitness centers worldwide, anytime they choose. Our mission is to make fitness universally accessible, empowering individuals to live healthier, happier lives. Through innovation and community-building, DeGym is redefining the fitness landscape, creating a global network of accessible, high-quality gym facilities. Join us in this movement towards fitness without borders, and unlock the potential of your fitness journey with DeGym.</p>
        </section>

        <section className={styles.sectionOdd}>
          <h2 className={styles.sectionOddTitle}>Testimonials</h2>
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
        <RoadmapCarousel />
        <section className={styles.sectionEven}>
          <h2 className={styles.sectionEvenTitle}>Get Started</h2>
          <p className={styles.paragraph}>Ready to revolutionize your fitness journey? Join DeGym today and experience the future of gym memberships.</p>
          <button className={styles.button}>Sign Up Now</button>
        </section>
      </main>
    </>
  );
}

export default HomePage;