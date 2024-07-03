'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/NavBar.module.css';
import ConnectWalletButton from './ConnectWalletButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <header className="bg-dark text-light py-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl">
          <h1 className="text-3xl font-bold neon-text">
            <Link href="/" legacyBehavior>
              <a>DeGym</a>
            </Link>
          </h1>

          <nav className={`${isOpen ? styles.menuOpen : ''} ${styles.menu} md:flex md:items-center md:space-x-8 w-full md:w-auto mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
              <li className="md:my-0 my-2">
                <Link href="/token" legacyBehavior>
                  <a onClick={closeMenu}>$DGYM</a>
                </Link>
              </li>
              <li className="md:my-0 my-2">
                <Link href="/presale" legacyBehavior>
                  <a onClick={closeMenu}>Presale</a>
                </Link>
              </li>
              <li className="md:my-0 my-2">
                <Link href="/voucher" legacyBehavior>
                  <a onClick={closeMenu}>Voucher</a>
                </Link>
              </li>
              <li className="md:my-0 my-2">
                <Link href="/provider" legacyBehavior>
                  <a onClick={closeMenu}>Become Gym Provider</a>
                </Link>
              </li>
              <li className="md:my-0 my-2">
                <Link href="https://degym-1.gitbook.io/docs" legacyBehavior>
                  <a onClick={closeMenu}>Docs</a>
                </Link>
              </li>
            </ul>
          </nav>
          <ConnectWalletButton />
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} className="text-2xl text-light" />
          </button>
        </div>
      </header>
      {isOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
    </>
  );
}
