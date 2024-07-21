import React from 'react';
import Head from 'next/head';
import styles from '../../styles/pages/Token.module.css';
import TokenSection from '../token/TokenSection';
import FAQ from '@/components/FAQ';
import DAOSection from '@/components/DAOSection'
import TokenDistribution from '../token/distribution'
import TokenUseCase from '../token/useCase'

const TokenPage = () => {
    const faq = []
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
                <FAQ faqs={faq} />
            </main>
        </>
    );
};

export default TokenPage;
