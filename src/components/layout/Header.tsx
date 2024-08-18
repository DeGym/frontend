import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/layout/Header.module.css';
import Navigation from './Navigation';
import Image from 'next/image';
import ConnectWalletButton from '@/components/wallet/ConnectWalletButton';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/DeGym_green_white_logo_without_bg.png"
                        alt="DeGym Logo"
                        width={35}
                        height={35}
                    />
                    <h2>DeGym</h2>
                </Link>
                <div className={styles.desktopNav}>
                    <Navigation />
                </div>
                <div className={styles.walletSection}>
                    <ConnectWalletButton />
                </div>
                <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className={styles.menuIconSvg} />
                </button>
            </div>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <Link href="/" className={styles.mobileLogo} onClick={toggleMenu}>
                        <Image
                            src="/DeGym_green_white_logo_without_bg.png"
                            alt="DeGym Logo"
                            width={35}
                            height={35}
                        />
                        <h2>DeGym</h2>
                    </Link>
                    <button className={styles.closeMenuButton} onClick={toggleMenu} aria-label="Close menu">
                        <FontAwesomeIcon icon={faTimes} className={styles.menuIconSvg} />
                    </button>
                </div>
                <Navigation closeMenu={toggleMenu} />
                <div className={styles.mobileWalletButton}>
                    <ConnectWalletButton />
                </div>
            </div>
        </header>
    );
};

export default Header;