import React from 'react';
import Head from 'next/head';
import VoucherTable from './VoucherTable';
import NFTVoucherGenerator from './NFTVoucherGenerator';
import styles from '@/styles/pages/Voucher.module.css';
import FAQ from '@/components/section/FAQ';
import Modality from './Modality';
import Differentials from '@/components/section/Differentials';
import BenefitsSection from './BenefitsSection'
import { faDumbbell, faLock, faMapMarkerAlt, faAward, faUserShield, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const VoucherPage = () => {
    const differentials = [
        {
            title: 'Unlimited Gym Access with DeGym NFTs',
            icon: faDumbbell,
            description: 'Enjoy unlimited access to a diverse network of gyms with DeGym NFTs.',
        },
        {
            title: 'Enhanced Security with DLT',
            icon: faUserShield,
            description: 'Benefit from the enhanced security and transparent transactions provided by distributed ledger technology (DLT).',
        },
        {
            title: 'Flexible Access Anywhere',
            icon: faMapMarkerAlt,
            description: 'Work out at multiple locations without the restrictions of traditional gym plans.',
        },
        {
            title: 'Exclusive Rewards',
            icon: faAward,
            description: 'Gain access to exclusive rewards and benefits as a DeGym member.',
        },
        {
            title: 'NFT Trade and Transfer',
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
                <BenefitsSection />
                <Differentials title="Why DeGym Voucher?" differentials={differentials} />
                <h4 className="mx-10 mt-8 text-center text-sm font-semibold text-light md:mx-0 md:mb-10 md:text-sm lg:text-lg">
                    Unlock <b>Unlimited Gym Access</b> with DeGym NFTs. Buy your Voucher today and start your journey to a fitter, more flexible lifestyle.
                </h4>
                <section className={styles.sectionEven}>
                    <p>DeGym Voucher offers a revolutionary approach to fitness through its integration with DLT, providing seamless and flexible access to a network of gyms.</p>
                    <p>Members benefit from enhanced security, transparent transactions, and the ability to use NFTs for voucher credentials, which ensures easy access, potential rewards, and the ability to trade or transfer vouchers more freely.This model empowers users with more control over their fitness journey and investment, making gym access more adaptable and personalized.</p>
                </section>
                <section className={styles.sectionEven}>
                    <VoucherTable />
                </section>
                <Modality />
                <FAQ faqs={faqs} />
            </main >
        </>
    );
};

export default VoucherPage;
