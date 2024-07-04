import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/common.module.css';
import Roadmap from '../components/RoadmapCarousel';
import MeetTheBrains from '../components/MeetTheBrains';
import GlobeSection from '../components/GlobeSection';
import OpenSourceCard from '../components/OpenSourceCard';
import MissionVisionCards from '../components/MissionVisionCards'
import ProblemSolutionSection from '../components/ProblemSolutionSection'
import IntroductionVideo from '../components/IntroductionVideo'
import FAQ from '../components/FAQ'

const HomePage = () => {
  const faqs = [
    {
      question: "What is DeGym?",
      answer: "DeGym is a decentralized platform that enables users to participate in gym activities using blockchain technology."
    },
    {
      question: "How do I join DeGym?",
      answer: "You can join DeGym by signing up on our website and purchasing a membership NFT."
    },
    {
      question: "How does DeGym ensure accessibility in fitness?",
      answer: "DeGym makes fitness facilities accessible to everyone by providing decentralized gym locations and virtual fitness options, ensuring that no matter where you are, you can access quality fitness training."
    },
    {
      question: "What innovations does DeGym bring to the fitness industry?",
      answer: "DeGym continuously innovates by integrating cutting-edge technologies like blockchain for secure memberships and AI-driven fitness plans, tailored to enhance user experiences and outcomes."
    },
    {
      question: "How does DeGym foster its community?",
      answer: "DeGym fosters a global community by connecting fitness enthusiasts through social features on our platform, organizing community events, and encouraging interaction and engagement among members."
    },
    {
      question: "What kind of flexibility does DeGym offer to its users?",
      answer: "DeGym offers flexible solutions by providing various membership plans, personalized training programs, and the ability to access any gym within our network, catering to diverse fitness needs and lifestyles."
    },
    {
      question: "How does DeGym empower its users?",
      answer: "DeGym empowers individuals by providing tools and resources that help them take control of their fitness journey, such as detailed tracking of progress, fitness education, and motivational support."
    },
    {
      question: "Can you elaborate on DeGym's commitment to integrity?",
      answer: "DeGym maintains transparency and honesty by ensuring all transactions and memberships are securely managed through blockchain, providing clear communication and upholding ethical standards in all operations."
    },
    {
      question: "What does striving for excellence mean to DeGym?",
      answer: "At DeGym, striving for excellence means continuously improving our services and facilities, ensuring top-notch customer support, and always seeking feedback to better meet the needs of our community."
    }
  ];
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
        <IntroductionVideo />
        <MissionVisionCards />
        <OpenSourceCard />
        <ProblemSolutionSection />

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
        <FAQ faqs={faqs} />
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