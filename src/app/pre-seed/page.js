import React from 'react';
import Head from 'next/head';
import styles from '../../styles/pages/Token.module.css';
import TokenSection from '../token/TokenSection';
import FAQ from '@/components/FAQ';
import DAOSection from '@/components/DAOSection'
import TokenDistribution from '../token/distribution'
import TokenUseCase from '../token/useCase'

const TokenPage = () => {
    const faqs = [
        {
            question: "What is the pre-seed phase?",
            answer: "The pre-seed phase is an early fundraising round where we offer a limited percentage of our tokens to early investors. This phase helps us raise initial capital to develop and grow the DeGym platform."
        },
        {
            question: "How much of the total token supply is allocated for the pre-seed phase?",
            answer: "We have allocated 3% of the total token supply for the pre-seed phase."
        },
        {
            question: "What is the price per token during the pre-seed phase?",
            answer: "The price per token during the pre-seed phase is set to reflect the potential future value of DeGym. This price aims to provide early investors with an opportunity to support our project at an advantageous rate."
        },
        {
            question: "What happens to the tokens that are not sold during the pre-seed phase?",
            answer: "Any tokens that are not sold during the pre-seed phase will be permanently burned, reducing the overall supply and potentially increasing the value of the remaining tokens."
        },
        {
            question: "Is there a vesting period for the pre-seed tokens?",
            answer: "Yes, there is a vesting period for the pre-seed tokens. This ensures that the tokens are gradually released to investors over time, helping to maintain the stability and growth of the DeGym ecosystem."
        },
        {
            question: "What is the next step after the pre-seed phase?",
            answer: "Following the pre-seed phase, we will conduct a pre-sale phase where we will offer 10% of the total token supply. The price per token during the pre-sale will be 10% higher than the price during the pre-seed phase."
        },
        {
            question: "How will the token price be adjusted after the pre-seed phase?",
            answer: "The token price will be adjusted based on the market cap accumulated during the pre-seed phase. This ensures that the token price reflects the value generated by early investments."
        },
        {
            question: "How can I participate in the pre-seed phase?",
            answer: "To participate in the pre-seed phase, you can visit our website and follow the instructions to invest. Make sure to join early to take advantage of this exclusive opportunity."
        },
    ];

    return (
        <>
            <Head>
                <title>DGYM Token - DeGym</title>
                <meta name="description" content="Learn more about the DGYM Token, its utility, and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container mx-auto">
                        <h1>Invest In DeGym</h1>
                        <p className={styles.heroSubtitle}>Pre-Seed Opportunity: <b>Invest in Our Future, Share Our Success</b></p>
                        <button className="p-4 w-auto my-5"><a href='https://t.me/degym_dao'>Get whitelisted</a></button>
                        <p className="max-w-3xl m-auto text-2xl">The DeGym project is embarking on a phased approach to raise funds and distribute tokens, ensuring <b>fair market valuation</b> and rewarding early investors.</p>
                    </div>
                </section>
                <TokenSection />
                <TokenDistribution />
                <TokenUseCase />
                <DAOSection />
                <FAQ faqs={faqs} />
            </main>
        </>
    );
};

export default TokenPage;
