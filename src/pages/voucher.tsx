import React from 'react';
import Head from 'next/head';
import styles from '@/styles/pages/Voucher.module.css';
import VoucherTable from '@/components/voucher/VoucherTable';
import NFTVoucherGenerator from '@/components/voucher/NFTVoucherGenerator';
import FAQ from '@/components/common/FAQ';
import Modality from '@/components/voucher/Modality';
import Differentials from '@/components/common/Differentials';
import BenefitsSection from '@/components/voucher/BenefitsSection';
import { faLock, faMapMarkerAlt, faAward, faUserShield, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import HeroWrapper from '@/components/common/HeroWrapper';


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
    {
        question: "How do I purchase an NFT-based voucher?",
        answer: "You can purchase NFT-based vouchers on our website by connecting your wallet and selecting the desired voucher."
    },
    {
        question: "What are NFT-based Vouchers?",
        answer: "NFT-based Vouchers are unique digital assets that represent a membership or a specific service within the DeGym platform. They are secured on the blockchain and can be traded or redeemed."
    },
    {
        question: "What are the benefits of NFT-based vouchers?",
        answer: "NFT-based vouchers provide a secure, transparent, and flexible way to access gym services, with the added benefits of ownership and potential resale value."
    },
    {
        question: "How can I purchase an NFT-based Voucher?",
        answer: "You can purchase NFT-based Vouchers directly from our website. Simply choose the voucher you want, connect your wallet, and complete the transaction."
    },
    {
        question: "What benefits do NFT-based Vouchers offer?",
        answer: "NFT-based Vouchers provide exclusive access to gym services, special discounts, and the ability to trade or sell the vouchers on secondary markets."
    },
    {
        question: "How do I redeem my NFT-based Voucher?",
        answer: "To redeem your NFT-based Voucher, visit the Redeem page on our website, connect your wallet, and follow the instructions to unlock the services associated with your voucher."
    },
    {
        question: "Can I trade or sell my NFT-based Voucher?",
        answer: "Yes, you can trade or sell your NFT-based Voucher on any compatible NFT marketplace. This flexibility allows you to transfer your membership or services to others."
    },
    {
        question: "Are NFT-based Vouchers secure?",
        answer: "Yes, NFT-based Vouchers are secured on the blockchain, ensuring their authenticity and protecting them from tampering or duplication."
    }
];

const VoucherPage: React.FC = () => {

    return (
        <>
            <Head>
                <title>Voucher - DeGym</title>
                <meta name="description" content="Explore the unique benefits of the DGYM Token and how it powers the DeGym ecosystem." />
            </Head>
            <main className={styles.main}>
                <HeroWrapper>
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
                </HeroWrapper>
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