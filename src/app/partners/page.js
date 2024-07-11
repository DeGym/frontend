import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/pages/Partners.module.css';
import PartnerBenefits from './whySection';
import BecomePartnerSection from './BecomePartnerSection';
import VisitorSection from './VisitorSection';
import FAQ from '../../components/FAQ'

const PartnersPage = () => {
    const faqs = [
        { question: "What is DeGym?", answer: "DeGym is a decentralized platform that enables users to participate in gym activities using blockchain technology." },
        { question: "How do I join DeGym?", answer: "You can join DeGym by signing up on our website and purchasing a membership NFT." },
    ];

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
                            src="/img/partners_hero_img.jpg"
                            alt="People exercising in a gym"
                            width={400}
                            height={400}
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.heroText}>
                        <h1>Become a Partner</h1>
                        <p className={styles.heroSubtitle}>Join the DeGym network and grow your business.</p>
                    </div>
                </section>

                <PartnerBenefits />
                <BecomePartnerSection />
                <VisitorSection />
                <FAQ faqs={faqs} />
            </main>
        </>
    );
};

export default PartnersPage;
