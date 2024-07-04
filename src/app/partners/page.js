import React from 'react';
import Head from 'next/head';
import styles from '../../styles/pages/Partners.module.css';
import PartnerBenefits from './whySection';
import BecomePartnerSection from './BecomePartnerSection'
import VisitorSection from './VisitorSection'
// WHY WELLHUB
// Getting Started
// PARTNER SUPPORT
// BOOKING INTEGRATION
// TESTIMONIALS
// FAQ

const PartnersPage = () => {
    return (
        <>
            <Head>
                <title>Partners - DeGym</title>
                <meta name="description" content="Learn more about the Partners, its utility, and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container mx-auto">
                        <h1 className={styles.heroTitle}>Become Partner</h1>
                        <p className={styles.heroSubtitle}>Join DeGym network and grow your business.</p>
                    </div>
                </section>

                <PartnerBenefits />
                <BecomePartnerSection />
                <VisitorSection />

            </main>
        </>
    );
};

export default PartnersPage;
