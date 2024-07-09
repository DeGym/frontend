import React from 'react';
import Head from 'next/head';
import VoucherTable from './VoucherTable';
import NFTVoucherGenerator from './NFTVoucherGenerator';
import styles from '../../styles/pages/Voucher.module.css';
import FAQ from '../../components/FAQ';
import Modality from './Modality';
import Differentials from './Differentials';
import BenefitsSection from './BenefitsSection'


const VoucherPage = () => {
    const faqs = [];
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
                            <h1 className={styles.heroTitle}>Voucher</h1>
                            <p className={styles.heroSubtitle}>
                                Say goodbye to restrictive gym plans and hello to freedom with DeGym.
                                As a DeGym User, you can purchase an <b>NFT that grants you access</b> to a diverse network of gyms.
                            </p>
                        </div>
                    </div>
                    <NFTVoucherGenerator className={styles.nftVoucher} />

                </section>
                <BenefitsSection />
                <Differentials />
                <section className={styles.sectionEven}>
                    <p>DeGym Voucher offers a revolutionary approach to fitness through its integration with DLT, providing seamless and flexible access to a network of gyms. Members benefit from enhanced security, transparent transactions, and the ability to use NFTs for voucher credentials, which ensures easy access, potential rewards, and the ability to trade or transfer vouchers more freely. This model empowers users with more control over their fitness journey and investment, making gym access more adaptable and personalized.</p>
                </section>
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
