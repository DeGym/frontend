import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '@/styles/components/section/DAOSection.module.css';
import Link from 'next/link';

interface SocialLink {
    href: string;
    icon: IconDefinition;
    text: string;
}

const socialLinks: SocialLink[] = [
    { href: "/github", icon: faGithub, text: "Github" },
    { href: "/telegram", icon: faTelegram, text: "Telegram" },
    { href: "/x", icon: faTwitter, text: "Twitter" },
    { href: "/linkedin", icon: faLinkedin, text: "Linkedin" },
    { href: "/discord", icon: faDiscord, text: "Discord" },
    { href: "mailto:press@degym.net", icon: faEnvelope, text: "Email" },
];

const DAOSection: React.FC = () => {
    const renderSocialLink = ({ href, icon, text }: SocialLink) => (
        <div key={text} className={styles.joinItem}>
            <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.socLink}>
                <div className={styles.socLinkIcon}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className={styles.socLinkText}><span>{text}</span></div>
            </Link>
        </div>
    );

    return (
        <section className={styles.section}>
            <img src="/img/banner.jpg" alt="DAO Banner" className={styles.backgroundImage} />
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={`${styles.sectionRow} ${styles.sectionRow}`}>
                    <div className={`${styles.sectionCol1}`}>
                        <div className={styles.sectionTitle}>DAO</div>
                    </div>
                    <div className={`${styles.sectionCol2}`}>
                        <div className={styles.textBlockV1}>
                            The DeGym will be controlled by a <b>DAO with decentralized governance</b>, which allows all token holders to participate in the future growth, and have a word in future decisions regarding Web3 application development parameters and treasury management.
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.animatedJoinSection}>
                <div className={styles.scrollContent}>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={styles.scrollItem}>
                            <img src="/DeGym_green_white_logo_without_bg.png" alt="DeGym Logo" className={styles.joinLogo} />
                            <div className={styles.joinText}>JOIN THE COMMUNITY</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.communityLinks}>
                <div className={styles.joinLine}></div>
                <div className={styles.container}>
                    <div className={styles.joinLinks}>
                        {socialLinks.map(renderSocialLink)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DAOSection;