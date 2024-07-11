import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faPiggyBank, faCoins, faRecycle, faPercentage, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/components/TokenStats.module.css';

const TokenStats = () => {
    const stats = [
        { title: 'Price', value: '$0.005145', icon: faDollarSign },
        { title: 'Market Cap', value: '$21,344,707', icon: faChartLine },
        { title: 'Staked', value: '400,000,000 DGYM', icon: faPiggyBank },
        { title: 'Supply', value: '1,000,000,000 DGYM', icon: faCoins },
        { title: 'Circulation', value: '600,000,000 DGYM', icon: faRecycle },
        { title: 'Staking Yield', value: '12% APR', icon: faPercentage },
        { title: 'Staking Ratio', value: '40%', icon: faBalanceScale }
    ];

    return (
        <div className={`${styles.container} ${styles.heroStandard}`}>
            <div className="row align-items-center row-cols-1 mb-5">
                <div className="col">
                    <h2 className="text-center">$DGYM <b>Stats</b></h2>
                    <p >DGYM is the native utility token of the DeGym platform. It is designed to facilitate seamless access to gym memberships, provide rewards to stakers, and enable transactions within the DeGym ecosystem.</p>
                </div>
            </div>
            <div className={`row ${styles.statsRow}`}>
                {stats.map((stat, index) => (
                    <div key={index} className={`col-12 col-sm-6 ${styles.cardContainer}`}>
                        <div className={`${styles.card}`}>
                            <div className={styles.cardBody}>
                                <div className={styles.cardContent}>
                                    <FontAwesomeIcon icon={stat.icon} className={styles.icon} />
                                    <span className={styles.cardLabel}>{stat.title}</span>
                                </div>
                                <h2 className={`${styles.cardValue}`}>
                                    {stat.value}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row align-items-center row-cols-1 mb-5 mt-3">
                <div className="col">
                    <div className="d-grid gap-3 col-8 mx-auto d-md-block">
                        <a href="/wallet" className={`btn ${styles.btnPrimary} mx-2`} target="_blank">Wallet Guide</a>
                        <a href="/dgym_markets" className={`btn ${styles.btnSecondary} px-4 py-2 me-md-2`} target="_blank">DGYM Markets</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenStats;
