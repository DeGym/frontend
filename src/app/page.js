import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/common.module.css';
import Roadmap from '../components/RoadmapCarousel';
import MeetTheBrains from '../components/MeetTheBrains';
import GlobeSection from '../components/GlobeSection';
import OpenSourceCard from '../components/OpenSourceCard';
import MissionVisionCards from '../components/MissionVisionCards'
import ProblemSolutionSection from '../components/ProblemSolutionSection'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>DeGym: The first Decentralized Gym Network Revolutionizing the Fitness industry with distributed ledger technology</title>
        <meta name="description" content="Seamless Access, Enhanced Rewards, and Secure Workouts" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>DeGym</h1>
          <p className={styles.heroSubtitle}>The first <b>Decentralized Gym Network</b> revolutionizing fitness industry with distributed ledger technology. Seamless Access, Enhanced Rewards, and Secure Workouts</p>
        </section>
        <GlobeSection />
        <section className={styles.videoSection}>
          <h2 className={styles.sectionOddTitle}>Watch Our Introduction Video</h2>
          <div className={styles.videoContainer}>
            <div className={styles.videoOverlay}></div>
            <video className={styles.video} controls controlsList="nodownload" src="https://api.renderforest.com/api/v1/projects/86667866/download?key=66861de0e05e4d2f138a2c92ecd44650:f23f59dbbd6306eb882295638df7c34e6dccee06bf48e671627eb992259a13496b15be09dc32f4d7efc62e4948bf8831"></video>
          </div>
        </section>
        <MissionVisionCards />
        <OpenSourceCard />
        <ProblemSolutionSection />
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
        <section>
          <MeetTheBrains />
        </section>
        <section className={styles.sectionEven}>
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
        <Roadmap />

        <section className={styles.sectionEven}>
          <h2 className={styles.sectionEvenTitle}>Enjoy the DeGym DAO</h2>
          <a className={styles.button} href="./voucher">Buy your Voucher</a>
          <a className={styles.button} href="./provider">Become Provider</a>
          <a className={styles.button} href="./stake">Become Stakeholder</a>
          <p className={styles.paragraph}>Be part of DeGym's transformative journey in the fitness world. Connect, contribute and grow with us.</p>
        </section>
      </main>
    </>
  );
}

export default HomePage;