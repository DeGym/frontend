"use client"

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faTwitter, faLinkedin, faReddit, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/DAOSection.module.css';

const DAOSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            setTimeout(() => {
                video.play();
            }, 3000);
        }
    }, []);

    return (
        <section className={styles.section}>
            <video className={styles.backgroundVideo} ref={videoRef} muted loop>
                <source src="/videos/dao_bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={`${styles.sectionRow} ${styles.sectionRow}`}>
                    <div className={`${styles.sectionCol1} ${styles.sectionCol1}`}>
                        <div className={styles.sectionTitle}>DAO</div>
                    </div>
                    <div className={`${styles.sectionCol2} ${styles.sectionCol2}`}>
                        <div className={styles.textBlockV1}>
                            The DeGym will be controlled by a <span className={styles.color1}>DAO with decentralized governance,</span> which allows all token holders to participate in the future growth,
                        </div>
                        <div className={styles.sectionDesc}>
                            and have a word in future decisions regarding Web3 DAO development parameters and treasury management.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionJoin}>
                <div className={styles.joinLine}></div>
                <div className={styles.container}>
                    <div className={styles.joinLinks}>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://github.com/DeGym" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Github</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://t.me/degym_dao" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faTelegram} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Telegram</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://x.com/degym_network" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Twitter</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://www.linkedin.com/company/dgym-org" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Linkedin</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://www.reddit.com/r/dgym/" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faReddit} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Reddit</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://discord.gg/4keCvDRNuY" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faDiscord} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Discord</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="mailto:press@degym.org">
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
        </section>
    );
};

export default DAOSection;
