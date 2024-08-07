import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faMedium, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '@/styles/components/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h4 className={styles.title}>Contact Us</h4>
                    <div className={styles.contactInfo}>info@degym.net</div>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.title}>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
                        {/*<li><Link href="/token" legacyBehavior><a>Token</a></Link></li>*/}
                        <li><Link href="/pre-seed" legacyBehavior><a>Pre-Seed</a></Link></li>
                        <li><Link href="/voucher" legacyBehavior><a>Voucher</a></Link></li>
                        <li><Link href="/partners" legacyBehavior><a>Partnership</a></Link></li>
                        {/*<li><Link href="/staking" legacyBehavior><a>Stake</a></Link></li> */}
                        <li><Link href="https://docs.degym.net" legacyBehavior><a>Documentation</a></Link></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.title}>Public Donations</h4>
                    <div className={styles.donationLink}>
                        Donate to Devs:
                        <div className={styles.donationWalletAddress}>
                            <a href="https://tara.to/address/0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE" target="_blank" rel="noopener noreferrer">
                                taraxa:0xE6339c6f56d44719b6ae1264ea9B4f5eD1710bbE
                            </a>
                        </div>
                        <a href="https://community.taraxa.io/staking/0x431ED26993CF4157BeA589da3B1d15fc137F2919" target="_blank" rel="noopener noreferrer">
                            Delegate TARA to our validator node
                        </a>
                    </div>
                    <div className={styles.donationLink}>
                        Donate to the Taraxa Catalyst our Community Marketing:
                        <div className={styles.donationWalletAddress}>
                            <a href="https://tara.to/address/0xbC97fF0263A615b00b2412E95CD5Ec7FcA7D6441" >
                                taraxa:0xbC97fF0263A615b00b2412E95CD5Ec7FcA7D6441
                            </a>
                        </div>
                        <a href="https://allium-founders-pass.nfts2.me/">Allium Fund NFT</a>
                    </div>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.title}>
                        Built on <a href="https://www.taraxa.io/" className={styles.taraxaLink}>
                            <img src="img/taraxa_logo_transparent_dark_bg.png" alt="Taraxa" className={styles.taraxaLogo} />
                        </a>
                    </h4>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.title}>
                        <div className={styles.icons}>
                            <a href="https://x.degym.net/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://telegram.degym.net/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faTelegram} size="2x" />
                            </a>
                            <a href="https://medium.degym.net/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faMedium} size="2x" />
                            </a>
                            <a href="https://discord.degym.net/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faDiscord} size="2x" />
                            </a>
                            <a href="https://github.degym.net/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                    </h4>
                </div>
                <div className={styles.section}>
                    <h4>
                        <a href="https://docs.degym.net/degym-dao/terms-and-conditions" target="_blank" rel="noopener noreferrer" className={styles.title}>
                            Terms & Condition
                        </a>
                    </h4>
                </div>

            </div>
            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} DeGym. All Rights Reserved.
            </div>
        </footer>
    );
}
