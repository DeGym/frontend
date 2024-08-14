import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/section/DAOSection.module.css';

const DAOSection = () => {
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

            {/* New animated join section */}
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
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="/github" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Github</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="/telegram" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Telegram</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="/x" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Twitter</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="/linkedin" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Linkedin</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="/discord" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faDiscord} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Discord</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="mailto:press@degym.net">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Email</span></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default DAOSection;
