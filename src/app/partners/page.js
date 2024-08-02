import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/pages/Partners.module.css';
import PartnerBenefits from './whySection';
import BecomePartnerSection from './BecomePartnerSection';
import VisitorSection from './VisitorSection';
import FAQ from '@/components/section/FAQ'

const PartnersPage = () => {
    const faqs = [
        {
            question: "Who are DeGym's partners?",
            answer: "DeGym partners with leading gym facilities, fitness trainers, and blockchain technology providers to offer the best experience to our users."
        },
        {
            question: "How can my company partner with DeGym?",
            answer: "If you're interested in partnering with DeGym, please reach out to us via the contact form on our Partners page."
        },
        {
            question: "What benefits do partners get from DeGym?",
            answer: "Partners benefit from increased visibility, access to a growing community of fitness enthusiasts, and the opportunity to integrate blockchain technology into their services."
        },
        {
            question: "How can I become a DeGym partner?",
            answer: "If you are interested in partnering with DeGym, please visit our Partners page and fill out the partnership inquiry form. Our team will get back to you shortly."
        },
        {
            question: "Can international gyms partner with DeGym?",
            answer: "Yes, DeGym welcomes partnerships with gyms from all around the world. We aim to create a global network of fitness facilities for our users."
        }
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
