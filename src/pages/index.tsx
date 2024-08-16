import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/pages/Home.module.css';
import Roadmap from '@/components/section/RoadmapCarousel';
import GlobeSection from '@/components/section/GlobeSection';
import OpenSourceCard from '@/components/section/OpenSourceCard';
import MissionVisionCards from '@/components/section/MissionVisionCards';
import ProblemSolutionSection from '@/components/section/ProblemSolutionSection';
import IntroductionVideo from '@/components/section/IntroductionVideo';
import FAQ from '@/components/section/FAQ';
import TokenSection from '@/components/token/TokenSection';
import DAOSection from '@/components/section/DAOSection';
import StepByStep from '@/components/section/StepByStep';

const HomePage: React.FC = () => {
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
        { icon: '/img/hw/token.svg', title: 'User Purchases Membership', description: 'The user buys a membership using DGYM tokens.' },
        { icon: '/img/hw/sdk.svg', title: 'User Check-in', description: 'The user goes to the selected gym and checks in using the DeGym app.' },
        { icon: '/img/hw/web3.svg', title: 'DeGym Validation', description: "The DeGym Dapp validates the user's membership and the gym's authenticity." },
        { icon: '/img/hw/wallet.svg', title: 'Gym Payment', description: 'Once the check-in is approved, the DAO triggers a payment to the gym provider.' },
    ];

    return (
        <>
            <Head>
                <title>DeGym</title>
                <meta name="description" content="DeGym - Decentralized Gym Membership and Rewards" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <h1>DeGym</h1>
                        <p className={styles.heroSubtitle}>The first <b>Decentralized Gym Network</b> revolutionizing fitness industry with distributed ledger technology. Seamless Access, Enhanced Rewards, and Secure Workouts</p>
                        <div className={styles.joinSection}>
                            <button className="p-4 w-auto"><a href='/telegram'>Join the Community</a></button>
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

                <IntroductionVideo />
                <ProblemSolutionSection />
                <MissionVisionCards />
                <TokenSection />
                <StepByStep steps={howItWorks} title="How It Works" />
                <DAOSection />
                <GlobeSection />
                <Roadmap />
                <OpenSourceCard />
                <FAQ faqs={faqs} />
            </main>
        </>
    );
};

export default HomePage;