'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/NavBar.module.css';
import ConnectWalletButton from './ConnectWalletButton';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header className="bg-dark text-light py-4 fixed w-full z-10 align-middle">
        <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl">
          <div className={styles.logo}>
            <Image
              src="/DeGym_green_white_logo_without_bg.png"
              alt="DeGym Logo"
              width={35}
              height={35}
            />
            <h2>
              <Link href="/" legacyBehavior>
                <a>DeGym</a>
              </Link>
            </h2>
          </div>

          <nav className={`${isOpen ? styles.menuOpen : ''} ${styles.menu} md:flex md:items-center md:space-x-8 w-full md:w-auto mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
              <li className="md:my-0 my-2 flex">
                <Link href="/token" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>$DGYM</a>
                </Link>
              </li>
              <li className="md:my-0 my-2 flex">
                <Link href="/pre-seed" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>Pre-Seed</a>
                </Link>
              </li>
              <li className="md:my-0 my-2 flex">
                <Link href="/search" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>Search</a>
                </Link>
              </li>
              <li className="md:my-0 my-2 flex">
                <Link href="/voucher" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>Voucher</a>
                </Link>
              </li>
              <li className="md:my-0 my-2 flex">
                <Link href="/partners" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>Partner</a>
                </Link>
              </li>
              <li className="md:my-0 my-2 flex">
                <Link href="/staking" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>Stake</a>
                </Link>
              </li>
              <li className="md:my-0 my-2 flex">
                <Link href="https://degym-network.gitbook.io/docs" legacyBehavior>
                  <a className={`${styles.link}`} onClick={closeMenu}>Docs</a>
                </Link>
              </li>
            </ul>
          </nav>
          <ConnectWalletButton onWalletConnected={setWalletAddress} />
          <button className="md:hidden bg-transparent" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} className="text-2xl text-light" />
          </button>
        </div>
      </header>
      {isOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
    </>
  );
}
