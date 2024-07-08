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
import StepByStep from '@/components/StepByStep'



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
  const howItWorks = [
    { icon: '/img/hw/node_connected.svg', title: 'Gyms Provide Services', description: 'Gyms join the DeGym Network and offer their spaces and services to DeGym users.' },
    { icon: '/img/hw/token.svg', title: 'User Buys the Access Voucher', description: 'The user buys an NFT-based voucher that grants access to a catalog of gyms.' },
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
          <h1 className={styles.heroTitle}>DeGym</h1>
          <p className={styles.heroSubtitle}>The first <b>Decentralized Gym Network</b> revolutionizing fitness industry with distributed ledger technology. Seamless Access, Enhanced Rewards, and Secure Workouts</p>
        </section>
        <GlobeSection />
        <IntroductionVideo />
        <MissionVisionCards />
        <OpenSourceCard />
        <ProblemSolutionSection />
        <StepByStep steps={howItWorks} title="How does it <b>works</b>?" />
        <TokenSection />
        <MeetTheBrains />
        <Roadmap />
        <DAOSection />
        <FAQ faqs={faqs} />
      </main>
    </>
  );
}

export default HomePage;