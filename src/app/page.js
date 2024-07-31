import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/common.module.css';
import Roadmap from '@/components/RoadmapCarousel';
import MeetTheBrains from '@/components/MeetTheBrains';
import GlobeSection from '@/components/GlobeSection';
import OpenSourceCard from '@/components/OpenSourceCard';
import MissionVisionCards from '@/components/MissionVisionCards'
import ProblemSolutionSection from '@/components/ProblemSolutionSection'
import IntroductionVideo from '@/components/IntroductionVideo'
import FAQ from '@/components/FAQ'
import TokenSection from './token/TokenSection'
import DAOSection from '@/components/DAOSection'
import Image from 'next/image'
import StepByStep from '@/components/StepByStep'
import QuickLinks from '@/components/QuickLinks';

const HomePage = () => {
  const faqs = [
    {
      question: "What is DeGym?",
      answer: "DeGym is a decentralized platform that enables users to participate in gym activities using blockchain technology."
    },
    {
      question: "How do I join DeGym?",
      answer: "You can join DeGym by signing up on our website and purchasing a voucher NFT."
    },
    {
      question: "What are the benefits of joining DeGym?",
      answer: "As a DeGym member, you gain access to exclusive gym activities, earn rewards through staking, and benefit from the security and transparency of blockchain technology."
    },
    {
      question: "What are the benefits of using DeGym?",
      answer: "DeGym offers a seamless and secure way to access gym facilities, track workouts, and earn rewards, all powered by blockchain technology."
    },
    {
      question: "Is DeGym available globally?",
      answer: "Yes, DeGym is available to users worldwide. As long as you have access to the internet and a compatible device, you can join and participate in DeGym."
    },
    {
      question: "How can I get in touch with DeGym support?",
      answer: "You can contact DeGym support through our website's contact form or by emailing us at support@degym.io."
    },
  ];
  const howItWorks = [
    { icon: '/img/hw/node_connected.svg', title: 'Gyms Provide Services', description: 'Gyms join the DeGym Network and offer their spaces and services to DeGym users.' },
    { icon: '/img/hw/token.svg', title: 'User Purchases the Voucher', description: 'The user buys an NFT-based voucher that grants access to a catalog of gyms.' },
    { icon: '/img/hw/sdk.svg', title: 'User Check-in', description: 'The user goes to the selected gym and checks in at the gym gateway.' },
    { icon: '/img/hw/web3.svg', title: 'DeGym Validation', description: 'The DeGym Dapp validates both the user’s voucher and the gym’s authenticity.' },
    { icon: '/img/hw/wallet.svg', title: 'Gym Payment', description: 'Once the check-in is approved, the DAO triggers a payment to the gym provider.' },
  ];

  return (
    <>
      <Head>
        <title>DeGym: The first Decentralized Gym Network Revolutionizing the Fitness industry with distributed ledger technology</title>
        <meta name="description" content="Seamless Access, Enhanced Rewards, and Secure Workouts" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1>DeGym</h1>
            <p className={styles.heroSubtitle}>The first <b>Decentralized Gym Network</b> revolutionizing fitness industry with distributed ledger technology. Seamless Access, Enhanced Rewards, and Secure Workouts</p>
            <div className={styles.joinSection}>
              <button className="p-4 w-auto"><a href='https://t.me/degym_dao'>Join the Community</a></button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/hero.png"
              alt="Description of the image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
        <GlobeSection />
        <IntroductionVideo />
        <MissionVisionCards />
        <OpenSourceCard />
        <ProblemSolutionSection />
        <StepByStep steps={howItWorks} title="How does it <b>works</b>?" />
        <TokenSection />
        <DAOSection />
        <QuickLinks />
        <Roadmap />
        <MeetTheBrains />
        <FAQ faqs={faqs} />
      </main>
    </>
  );
}

export default HomePage;
