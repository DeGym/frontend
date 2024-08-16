import React from 'react';
import Head from 'next/head';
import MembersList from '@/components/members/Members';
import styles from '@/styles/pages/Members.module.css';
import QuickLinks from '@/components/section/QuickLinks';

const Members: React.FC = () => {
    return (
        <>
            <Head>
                <title>Members - DeGym</title>
                <meta name="description" content="Meet the Brains behind DeGym" />
            </Head>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container mx-auto">
                        <h1>Members</h1>
                        <p className={styles.heroSubtitle}>We solve real-world problems, come join us!</p>
                        <button className="p-4 w-auto my-0"><a href='https://allium-founders-pass.nfts2.me/'>Become Allium</a></button>
                    </div>
                </section>
                <MembersList />
                <QuickLinks />

            </main>
        </>
    );
};

export default Members;