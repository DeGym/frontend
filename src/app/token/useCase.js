import React from 'react';
import styles from './styles/UseCase.module.css';

const TokenUseCase = () => {
    const useCases = [
        { num: '001', title: 'Users rewards', icon: '/img/token/b10_icon_1.svg' },
        { num: '002', title: 'Staking rewards', icon: '/img/token/b10_icon_2.svg' },
        { num: '003', title: 'Platform fee', icon: '/img/token/b10_icon_4.svg' },
        { num: '004', title: 'Gym payout', icon: '/img/token/b10_icon_3.svg' },
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

export default TokenUseCase;
