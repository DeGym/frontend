import React from 'react';
import Head from 'next/head';
import styles from '../../styles/pages/Token.module.css';
import TokenInfo from './TokenInfo';
import TokenSection from './TokenSection';
import FAQ from '@/components/FAQ';
import DAOSection from '@/components/DAOSection'
import TokenStats from './stats'


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
                        <h1 className={styles.heroTitle}>DGYM</h1>
                        <p className={styles.heroSubtitle}>Empowering the DeGym Ecosystem</p>
                    </div>
                </section>
                <TokenSection />
                <TokenStats />
                <section className={`${styles.sectionOdd}`}>
                    <h2 className={styles.sectionOddTitle}>Token Info</h2>
                    <TokenInfo
                        totalSupply="100,000,000 DGYM"
                        stakingYield="12% APR"
                        providerCommission="2% per check-in"
                        totalStake="50,000,000 DGYM"
                        stakingRatio="50%"
                    />
                </section>
                <section className={styles.sectionEven}>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className={styles.sectionEvenTitle}>Token Distribution</h2>
                            <p>The DGYM token distribution is structured to ensure fairness, incentivize early adopters, and support the long-term growth of the DeGym ecosystem. Below is the allocation breakdown:</p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>40% - Community Rewards</li>
                                <li className={styles.listItem}>25% - Development Fund</li>
                                <li className={styles.listItem}>20% - Founding Team</li>
                                <li className={styles.listItem}>10% - Advisors and Partners</li>
                                <li className={styles.listItem}>5% - Marketing and Growth</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={styles.sectionEvenTitle}>Use Cases</h2>
                            <p>The DGYM token serves multiple purposes within the DeGym ecosystem, including:</p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Gym Membership Access</li>
                                <li className={styles.listItem}>Staking Rewards</li>
                                <li className={styles.listItem}>Transaction Fees</li>
                                <li className={styles.listItem}>Voting and Governance</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <DAOSection />
                <FAQ faqs={faq} />
            </main>
        </>
    );
};

export default TokenPage;
