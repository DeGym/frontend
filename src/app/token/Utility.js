import React from 'react';
import styles from './styles/Utility.module.css';

const TokenUtility = () => {
    const useCases = [
        { num: '01', title: 'Users rewards', icon: '/img/token/b10_icon_1.svg' },
        { num: '02', title: 'Staking rewards', icon: '/img/token/b10_icon_2.svg' },
        { num: '03', title: 'Platform fee', icon: '/img/token/b10_icon_3.svg' },
        { num: '04', title: 'Gym payout', icon: '/img/token/b10_icon_4.svg' },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.use}>
                <div className={`${styles.title} ${styles.useTitle}`}>Token <b>use cases</b></div>
                {useCases.map((useCase, index) => (
                    <div className={`${styles.useItem} ${styles.isInView}`} data-scroll="" data-scroll-offset="200" key={index}>
                        <div className={styles.lineV1}></div>
                        <div className={styles.useInner}>
                            <div className={styles.useCard}>
                                <div className={styles.useCardIconMobile}>
                                    <img src={useCase.icon} alt="icon" className="img-fluid d-block" />
                                </div>
                                <div className={styles.useCardNum}>{useCase.num}</div>
                                <div className={styles.useCardTitle}>
                                    {useCase.title.split(' ').map((word, i) => (
                                        <div key={i}>
                                            {word}
                                            {i < useCase.title.split(' ').length - 1 && <div className="d-block d-lg-none"></div>}
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.useCardIcon}>
                                    <img src={useCase.icon} alt="icon" className="img-fluid d-block" />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TokenUtility;
