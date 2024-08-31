import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faMedium, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '@/styles/components/layout/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.section}>
                        <h4 className={styles.title}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/pre-seed">Pre-Seed</Link></li>
                            <li><Link href="/voucher">Voucher</Link></li>
                            <li><Link href="/partners">Partnership</Link></li>
                            <li><Link href="https://docs.degym.net">Documentation</Link></li>
                            <li><Link href="/members">Members</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h4 className={styles.title}>Public Donations</h4>
                        <div className={styles.donationLink}>
                            <p>Donate to Devs:</p>
                            <div className={styles.donationWalletAddress}>
                                <Link href="https://tara.to/address/0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE" target="_blank" rel="noopener noreferrer">
                                    taraxa:0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE
                                </Link>
                            </div>
                            <Link href="https://community.taraxa.io/staking/0x6e2D79c801b5E07aCB74a74e0cc253D0BC56BB4b" target="_blank" rel="noopener noreferrer">
                                Delegate TARA to our validator node
                            </Link>
                        </div>
                        <div className={styles.donationLink}>
                            <p>Donate to the Taraxa Catalyst our Community Marketing:</p>
                            <div className={styles.donationWalletAddress}>
                                <Link href="https://tara.to/address/0xbC97fF0263A615b00b2412E95CD5Ec7FcA7D6441">
                                    taraxa:0xbC97fF0263A615b00b2412E95CD5Ec7FcA7D6441
                                </Link>
                            </div>
                            <Link href="https://allium-founders-pass.nfts2.me/">Allium Fund NFT</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomContent}>
                    <div className={styles.section}>
                        <h4 className={styles.title}>
                            Built on <Link href="https://www.taraxa.io/" className={styles.taraxaLink}>
                                <img src="img/taraxa_logo_transparent_dark_bg.png" alt="Taraxa" className={styles.taraxaLogo} />
                            </Link>
                        </h4>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.icons}>
                            <Link href="/x" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            </Link>
                            <Link href="/telegram" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faTelegram} size="1x" />
                            </Link>
                            <Link href="/medium" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faMedium} size="1x" />
                            </Link>
                            <Link href="/discord" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faDiscord} size="1x" />
                            </Link>
                            <Link href="/github" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faGithub} size="1x" />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.legalLinks}>
                            <Link href="https://docs.degym.net/degym-dao/terms-and-conditions" target="_blank" rel="noopener noreferrer" className={styles.termsLink}>
                                Terms & Conditions
                            </Link>
                            <Link href="/disclaimer" className={styles.disclaimerLink}>
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} DeGym. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;