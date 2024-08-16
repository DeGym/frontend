import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/section/QuickLinks.module.css';

interface QuickLink {
    title: string;
    url: string;
    description: string;
}

const links: QuickLink[] = [
    {
        title: "Staking",
        url: "/staking",
        description: "Stake your DGYM tokens and earn rewards."
    },
    {
        title: "Token",
        url: "/token",
        description: "Learn about the DGYM token and its utilities."
    },
    {
        title: "Partners",
        url: "/partners",
        description: "Discover our network of partners and collaborators."
    },
    // Add more quick links as needed
];

const QuickLinks: React.FC = () => {
    return (
        <section className={styles.quickLinks}>
            <h2>Quick Links</h2>
            <div className={styles.linksGrid}>
                {links.map((link, index) => (
                    <Link href={link.url} key={index}>
                        <a className={styles.linkCard}>
                            <h3>{link.title}</h3>
                            <p>{link.description}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default QuickLinks;