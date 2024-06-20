'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/common.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold neon-text">
          <Link href="/" legacyBehavior><a className={styles.link}>DeGym</a></Link>
        </h1>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={`fas fa-bars ${styles.icon}`}></i>
        </div>
        <nav className={`${styles.menu} ${isOpen ? 'flex' : 'hidden'} space-x-8`}>
          <Link href="/token" legacyBehavior><a className={styles.link}>$DGYM</a></Link>
          <Link href="/presale" legacyBehavior><a className={styles.link}>Presale</a></Link>
          <Link href="/membership" legacyBehavior><a className={styles.link}>Membership NFT</a></Link>
          <Link href="/become-gym-provider" legacyBehavior><a className={styles.link}>Become Gym Provider</a></Link>
          <Link href="/roadmap" legacyBehavior><a className={styles.link}>Roadmap</a></Link>
          <Link href="https://degym-1.gitbook.io/docs" legacyBehavior><a className={styles.link}>Docs</a></Link>
        </nav>
      </div>
    </header >
  );
}
