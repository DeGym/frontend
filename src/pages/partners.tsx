import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/pages/Partners.module.css';
import BecomePartnerSection from '@/components/partners/BecomePartnerSection';
import VisitorSection from '@/components/partners/VisitorSection';
import FAQ from '@/components/section/FAQ';
import Differentials from '@/components/section/Differentials';
import { faUserPlus, faMoneyBillWave, faEye, faHandshake, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const PartnersPage: React.FC = () => {
    const differentials = [
        {
            title: "New Members",
            description: "Increase the flow of new members at your facility.",
            icon: faUserPlus
        },
        {
            title: "Extra Income",
            description: "You earn a fixed amount from the first visit.",
            icon: faMoneyBillWave
        },
        {
            title: "More Visibility",
            description: "Make your business more well-known in the area.",
            icon: faEye
        },
        {
            title: "No Exclusivity",
            description: "You can stay with us as long as you want.",
            icon: faHandshake
        },
        {
            title: "No Extra Cost",
            description: "You don't pay anything to become a partner.",
            icon: faTimesCircle
        }
    ];

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

                <Differentials title="Why Partner with Us?" differentials={differentials} />
                <h4 className="mx-10 mt-8 text-center text-sm font-semibold text-light md:mx-0 md:mb-10 md:text-sm lg:text-lg">
                    Our partnership offers a <b>fair transfer value</b>, according to the monthly fee of your gym.
                </h4>
                <BecomePartnerSection />
                <VisitorSection />
                <FAQ faqs={faqs} />
            </main>
        </>
    );
};

export default PartnersPage;