'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/NavBar.module.css';
import ConnectWalletButton from '../wallet/ConnectWalletButton';
import Image from 'next/image';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href="/" className={styles.logo}>
                    <Image src="/img/hw/logo.png" alt="DeGym Network" width={40} height={40} />
                </Link>
                <div className={styles.navbarToggle} onClick={handleToggleMenu}>
                    <FontAwesomeIcon icon={faBars} className={styles.navbarToggleIcon} />
                </div>
                <div className={`${styles.navbarMenu} ${isOpen ? styles.navbarMenuOpen : ''}`}>
                    <ul className={styles.navbarMenuList}>
                        <li className={styles.navbarMenuItem}>
                            <Link href="/staking" className={styles.navbarMenuLink}>
                                Staking
                            </Link>
                        </li>
                        <li className={styles.navbarMenuItem}>
                            <Link href="/token" className={styles.navbarMenuLink}>
                                Token
                            </Link>
                        </li>
                        <li className={styles.navbarMenuItem}>
                            <Link href="/search" className={styles.navbarMenuLink}>
                                Search
                            </Link>
                        </li>
                        <li className={styles.navbarMenuItem}>
                            <Link href="/voucher" className={styles.navbarMenuLink}>
                                Voucher
                            </Link>
                        </li>
                    </ul>
                </div>
                <ConnectWalletButton />
            </div>
        </nav>
    );
};

export default NavBar;