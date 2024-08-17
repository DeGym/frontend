import React from 'react';
import Head from 'next/head';
import styles from '@/styles/pages/Voucher.module.css';
import VoucherTable from './VoucherTable';
import NFTVoucherGenerator from './NFTVoucherGenerator';
import FAQ from '@/components/common/FAQ';
import Modality from './Modality';
import Differentials from '@/components/common/Differentials';
import BenefitsSection from './BenefitsSection';
import { faLock, faMapMarkerAlt, faAward, faUserShield, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const VoucherPage: React.FC = () => {
    const differentials = [
        {
            title: 'Flexible Access',
            icon: faMapMarkerAlt,
            description: 'Work out at multiple locations without the restrictions of traditional gym plans.',
        },
        {
            title: 'Enhanced Security',
            icon: faUserShield,
            description: 'Benefit from the enhanced security and transparent transactions provided by distributed ledger technology (DLT).',
        },
        {
            title: 'Exclusive Rewards',
            icon: faAward,
            description: 'Gain access to exclusive rewards and benefits as a DeGym member.',
        },
        {
            title: 'Trade and Transfer',
            icon: faExchangeAlt,
            description: 'Easily trade or transfer your DeGym Voucher NFTs, providing you with more control over your fitness investment.',
        },
        {
            title: 'No Commitment',
            icon: faLock,
            description: 'No long-term commitment required. Enjoy the flexibility to choose your fitness journey.',
        },
    ];

    const faqs = [
        {
            question: "What are NFT-based vouchers?",
            answer: "NFT-based vouchers are unique digital assets that grant access to gym facilities and services within the DeGym ecosystem."
        },
        // ... (include all the FAQ items from the original file)
    ];

    return (
        <>
            <Head>
                <title>Voucher - DeGym</title>
                <meta name="description" content="Explore the unique benefits of the DGYM Token and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <section className={styles.heroSection}>
                    <div className={styles.hero}>
                        <div className="container mx-auto">
                            <h1>Voucher</h1>
                            <p className={styles.heroSubtitle}>
                                Say goodbye to restrictive gym plans and hello to freedom with DeGym.
                                As a DeGym User, you can purchase an <b>NFT that grants you access</b> to a diverse network of gyms.
                            </p>
                        </div>
                    </div>
                    <NFTVoucherGenerator className={styles.nftVoucher} />
                </section>
                <Differentials title="Benefits" differentials={differentials} />
                <h4 className="mx-10 mt-8 text-center text-sm font-semibold text-light md:mx-0 md:mb-10 md:text-sm lg:text-lg">
                    Unlock <b>Unlimited Gym Access</b> with DeGym NFTs. Buy your Voucher today and start your journey to a fitter, more flexible lifestyle.
                </h4>
                <BenefitsSection />
                <section className={styles.sectionEven}>
                    <VoucherTable />
                </section>
                <Modality />
                <FAQ faqs={faqs} />
            </main>
        </>
    );
};

export default VoucherPage;