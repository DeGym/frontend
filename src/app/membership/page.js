import React from 'react';
import Head from 'next/head';
import MembershipTable from '../../components/MembershipTable';
import styles from '../../styles/pages/common.module.css';

const MembershipPage = () => {
    return (
        <>
            <Head>
                <title>Membership - DeGym</title>
                <meta name="description" content="Explore the unique benefits of the DGYM Token and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container mx-auto">
                        <h1 className={styles.heroTitle}>Membership</h1>
                        <p className={styles.heroSubtitle}>Enjoy the DeGym DAO</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Why DeGym Membership?</h2>
                    <p className={styles.paragraph}>Discover the advantages of blockchain-enhanced gym access.</p>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Membership Benefits</h2>
                    <p className={styles.paragraph}>Detailed benefits for each tier to suit your fitness needs.</p>
                </section>
                <section className={styles.section}>
                    <MembershipTable />
                </section>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <p className={styles.paragraph}>Answers to all your queries about DeGym memberships.</p>
                </section>
            </main>
        </>
    );
};

export default MembershipPage;
