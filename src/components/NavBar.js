'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/common.module.css';
import ConnectWalletButton from './ConnectWalletButton';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark text-light py-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold neon-text">
          <Link href="/" legacyBehavior>
            <a className={styles.link}>DeGym</a>
          </Link>
        </h1>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
            <li className="md:my-0 my-2">
              <Link href="/token" legacyBehavior>
                <a className={styles.link}>$DGYM</a>
              </Link>
            </li>
            <li className="md:my-0 my-2">
              <Link href="/presale" legacyBehavior>
                <a className={styles.link}>Presale</a>
              </Link>
            </li>
            <li className="md:my-0 my-2">
              <Link href="/membership" legacyBehavior>
                <a className={styles.link}>Membership NFT</a>
              </Link>
            </li>
            <li className="md:my-0 my-2">
              <Link href="/become-gym-provider" legacyBehavior>
                <a className={styles.link}>Become Gym Provider</a>
              </Link>
            </li>
            <li className="md:my-0 my-2">
              <Link href="/roadmap" legacyBehavior>
                <a className={styles.link}>Roadmap</a>
              </Link>
            </li>
            <li className="md:my-0 my-2">
              <Link href="https://degym-1.gitbook.io/docs" legacyBehavior>
                <a className={styles.link}>Docs</a>
              </Link>
            </li>
          </ul>
        </nav>
        <ConnectWalletButton />
        <button className="md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-2xl text-light" />
        </button>
      </div>
    </header>
  );
}