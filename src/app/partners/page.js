import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/pages/Partners.module.css';
import PartnerBenefits from './whySection';
import BecomePartnerSection from './BecomePartnerSection';
import VisitorSection from './VisitorSection';

const PartnersPage = () => {
    return (
        <>
            <Head>
                <title>Partners - DeGym</title>
                <meta name="description" content="Learn more about the Partners, its utility, and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroImage}>
                        <Image
                            src="/img/branding_image.jpeg"
                            alt="People exercising in a gym"
                            width={400}
                            height={400}
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>Become a Partner</h1>
                        <p className={styles.heroSubtitle}>Join the DeGym network and grow your business.</p>
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
