import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faReddit, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/DAOSection.module.css';

const DAOSection = () => {
    return (
        <section className={styles.sectionEleven}>
            <div className={styles.container}>
                <div className={`${styles.sectionElevenRow} ${styles.sectionRow}`}>
                    <div className={`${styles.sectionElevenCol1} ${styles.sectionCol1}`}>
                        <div className={styles.sectionTitle}>DAO</div>
                    </div>
                    <div className={`${styles.sectionElevenCol2} ${styles.sectionCol2}`}>
                        <div className={styles.textBlockV1}>
                            The DeGym will be controlled by a <span className={styles.color1}>DAO with decentralized governance,</span> which allows all token holders to participate in the future growth,
                        </div>
                        <div className={styles.sectionDesc}>
                            and have a word in future decisions regarding Web3 DAO development parameters and treasury management.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionElevenJoin}>
                <div className={styles.joinLine}></div>
                <div className={styles.container}>
                    <div className={styles.joinLinks}>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://github.com/degym" target="_blank" rel="noopener noreferrer">
                                    <div className={styles.socLinkIcon}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </div>
                                    <div className={styles.socLinkText}><span>Github</span></div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.joinItem}>
                            <div className={styles.socLink}>
                                <a href="https://twitter.com/DGYM_org" target="_blank" rel="noopener noreferrer">
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
                                <a href="https://discord.gg/VSSG2zQsar" target="_blank" rel="noopener noreferrer">
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
