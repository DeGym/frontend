import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faTelegram, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <h2 className={styles.footerTitle}>DeGym Network</h2>
                    <p className={styles.footerDesc}>
                        DeGym is the first decentralized gym network empowering users with blockchain technology to access gym memberships, fitness programs, and exclusive rewards. Join the future of fitness with secure, transparent, and seamless experiences.
                    </p>
                </div>
                <div className={styles.footerRight}>
                    <h2 className={styles.footerTitle}>Stay Connected</h2>
                    <div className={styles.socialIcons}>
                        <Link href="https://twitter.com/degymnetwork" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                        </Link>
                        <Link href="https://discord.gg/degymnetwork" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} className={styles.socialIcon} />
                        </Link>
                        <Link href="https://t.me/degymnetwork" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} className={styles.socialIcon} />
                        </Link>
                        <Link href="https://medium.com/degymnetwork" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMedium} className={styles.socialIcon} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p className={styles.footerCopyright}>Copyright 2023 DeGym Network. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;