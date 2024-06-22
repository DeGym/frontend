import React from 'react';
import Head from 'next/head';
import MembershipTable from '../../components/MembershipTable';
import NFTVoucherGenerator from '../../components/NFTVoucherGenerator'
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
                <section className={styles.sectionEven}>
                    <h2 className={styles.sectionEvenTitle}>Why DeGym Membership?</h2>
                    <p className={styles.paragraph}>DeGym Membership offers a revolutionary approach to fitness through its integration with DLT, providing seamless and flexible access to a network of gyms. Members benefit from enhanced security, transparent transactions, and the ability to use NFTs for membership credentials, which ensures easy access, potential rewards, and the ability to trade or transfer memberships more freely. This model empowers users with more control over their fitness journey and investment, making gym access more adaptable and personalized.</p>
                </section>
                <section className={styles.sectionOdd}>
                    <h2 className={styles.sectionOddTitle}>Unlock Unlimited Gym Access with DeGym NFTs</h2>
                    <p className={styles.paragraph}>Say goodbye to restrictive gym memberships and hello to freedom with DeGym. As a Gym User, you can purchase an NFT that grants you access to a diverse network of gyms. Enjoy the flexibility of working out at multiple locations, exclusive rewards, and the security of DLT. Buy your DeGym NFT today and start your journey to a fitter, more flexible lifestyle.</p>
                </section>
                <section className={styles.sectionEven}>
                    <MembershipTable />
                </section>

                <section className={styles.sectionOdd}>
                    <NFTVoucherGenerator />
                </section>
                <section className={styles.sectionEven}>
                    <h2 className={styles.sectionEvenTitle}>Frequently Asked Questions</h2>
                    <p className={styles.paragraph}>Answers to all your queries about DeGym memberships.</p>
                </section>
            </main>
        </>
    );
};

export default MembershipPage;
