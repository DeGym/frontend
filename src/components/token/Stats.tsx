"use client"

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faPiggyBank, faCoins, faRecycle, faLock, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { useTokenInfo } from '@/hooks/useTokenInfo';
import styles from '@/styles/components/token/Stats.module.css';

const TOKEN_ADDRESS = '0x063F255689b00A877F6be55109b3ECA24e266809';

const TokenStats: React.FC = () => {
    const { tokenInfo, isLoading, error, fetchTokenInfo } = useTokenInfo(TOKEN_ADDRESS);
    const [tokenStats, setTokenStats] = useState({
        price: '$0.005145',
        marketCap: '$21,344,707',
        staked: 400000000,
        supply: 0,
        circulation: 0,
        locked: 200000000,
        stakingRatio: 0
    });

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    useEffect(() => {
        fetchTokenInfo();
    }, []);

    useEffect(() => {
        if (tokenInfo.totalSupply) {
            const supply = parseInt(tokenInfo.totalSupply) / Math.pow(10, 18);
            const circulation = supply - tokenStats.staked;
            const stakingRatio = (tokenStats.staked / supply) * 100;

            setTokenStats(prevStats => ({
                ...prevStats,
                supply: supply,
                circulation: circulation,
                stakingRatio: stakingRatio
            }));
        }
    }, [tokenInfo]);

    const stats = [
        { title: 'Price', value: tokenStats.price, icon: faDollarSign },
        { title: 'Market Cap', value: tokenStats.marketCap, icon: faChartLine },
        { title: 'Staked', value: `${formatNumber(tokenStats.staked)} DGYM`, icon: faPiggyBank },
        { title: 'Total Supply', value: `${formatNumber(tokenStats.supply)} DGYM`, icon: faCoins },
        { title: 'Circulation', value: `${formatNumber(tokenStats.circulation)} DGYM`, icon: faRecycle },
        { title: 'Locked', value: `${formatNumber(tokenStats.locked)} DGYM`, icon: faLock },
        { title: 'Staking Ratio', value: `${tokenStats.stakingRatio.toFixed(2)}%`, icon: faBalanceScale }
    ];

    if (isLoading) {
        return <div>Loading token statistics...</div>;
    }

    if (error) {
        console.error('Error loading token info:', error);
        // You might want to display an error message to the user here
    }

    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>$DGYM <b >Stats</b></h2>
                <p className={styles.description}>
                    DGYM is the native utility token of the DeGym platform. It facilitates seamless access to gym memberships, provides rewards to stakers, and enables transactions within the DeGym ecosystem.
                </p>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statIcon}>
                                <FontAwesomeIcon icon={stat.icon} />
                            </div>
                            <div className={styles.statInfo}>
                                <h3 className={styles.statTitle}>{stat.title}</h3>
                                <p className={styles.statValue}>{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaContainer}>
                    <a href="https://www.taraxa.io/wallet" target="_blank" rel="noopener noreferrer" >
                        <button className={styles.ctaButton}>Wallet Guide</button>
                    </a>
                    <a href="/pre-seed" >
                        <button className={styles.ctaButton}>Buy DGYM</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TokenStats;