import React from 'react';
import Head from 'next/head';
import styles from '../../styles/pages/Token.module.css';
import TokenSection from './TokenSection';
import FAQ from '@/components/FAQ';
import DAOSection from '@/components/DAOSection'
import TokenStats from './stats'
import TokenDistribution from './distribution'
import TokenUseCase from './useCase'

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
                        <h1>DGYM</h1>
                        <p className={styles.heroSubtitle}>Empowering the DeGym Ecosystem</p>
                    </div>
                </section>
                <TokenSection />
                <TokenStats />
                <TokenDistribution />
                <TokenUseCase />
                <DAOSection />
                <FAQ faqs={faq} />
            </main>
        </>
    );
};

export default TokenPage;
