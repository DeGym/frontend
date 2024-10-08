import React from 'react';
import Head from 'next/head';
import styles from '@/styles/pages/Token.module.css';
import FAQ from '@/components/common/FAQ';
import DAOSection from '@/components/common/DAOSection';
import TokenStats from '@/components/token/Stats';
import TokenAllocation from '@/components/token/Allocation';
import TokenUtility from '@/components/token/Utility';
import HeroWrapper from '@/components/common/HeroWrapper';
import Representation from '@/components/token/Representation';

const TokenPage: React.FC = () => {
    const faq = [
        {
            question: "What is the DeGym token (DGYM)?",
            answer: "The DeGym token (DGYM) is the native cryptocurrency of the DeGym platform, used for memberships, staking, and rewards."
        },
        {
            question: "How can I purchase DGYM tokens?",
            answer: "You can purchase DGYM tokens through our token sale events or on supported cryptocurrency exchanges."
        },
        {
            question: "What is the total supply of DGYM tokens?",
            answer: "The total supply of DGYM tokens is capped at 10 billion."
        },
        {
            question: "What are the use cases for DGYM tokens?",
            answer: "DGYM tokens can be used for staking, purchasing vouchers, participating in gym activities, and earning rewards within the DeGym ecosystem."
        },
        {
            question: "How can I store my DGYM tokens?",
            answer: "DGYM tokens can be stored in any ERC-20 compatible wallet. Make sure to keep your wallet secure and back up your private keys."
        },
        {
            question: "What is staking in DeGym?",
            answer: "Staking in DeGym allows you to lock your tokens for a specific period to earn rewards. The longer you stake, the higher the potential rewards."
        },
        {
            question: "How do I stake my tokens?",
            answer: "You can stake your tokens by connecting your wallet, selecting the amount and duration, and confirming the staking transaction on the Staking page."
        },
        {
            question: "What rewards can I earn from staking?",
            answer: "Stakers earn rewards in the form of DeGym tokens, which are distributed based on the amount and duration of the staked tokens."
        }
    ];

    return (
        <>
            <Head>
                <title>DGYM Token - DeGym</title>
                <meta name="description" content="Learn more about the DGYM Token, its utility, and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <HeroWrapper>
                    <section className={styles.hero}>
                        <div className="container mx-auto">
                            <h1>DGYM</h1>
                            <p className={styles.heroSubtitle}>First and foremost a <b>governance token</b> with lots of utility</p>
                        </div>
                    </section>
                </HeroWrapper>
                <Representation />
                <TokenStats />
                <TokenAllocation />
                <TokenUtility />
                <DAOSection />
                <FAQ faqs={faq} />
            </main>
        </>
    );
};

export default TokenPage;