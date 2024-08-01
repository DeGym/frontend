"use client"

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faPiggyBank, faCoins, faRecycle, faLock, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styles from '@/styles/components/TokenStats.module.css';

const TokenStats = () => {
    const [tokenStats, setTokenStats] = useState({
        price: '$0.005145',
        marketCap: '$21,344,707',
        staked: 400000000,
        supply: 0,
        circulation: 0,
        locked: 200000000,
        stakingRatio: 0
    });

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    useEffect(() => {
        const fetchTokenStats = async () => {
            try {
                const contractAddress = '0x063F255689b00A877F6be55109b3ECA24e266809';
                const response = await axios.get(`https://tara.to/api?module=token&action=getToken&contractaddress=${contractAddress}`);
                const data = response.data.result;

                const supply = parseInt(data.totalSupply) / Math.pow(10, data.decimals);
                const staked = tokenStats.staked; // Assume staked value is static for now
                const circulation = supply - staked;
                const stakingRatio = (staked / supply) * 100;

                setTokenStats((prevTokenStats) => ({
                    ...prevTokenStats,
                    supply: supply,
                    circulation: circulation,
                    stakingRatio: stakingRatio
                }));
            } catch (error) {
                console.error('Error fetching token stats:', error);
            }
        };

        fetchTokenStats();
    }, []);

    const stats = [
        { title: 'Price', value: tokenStats.price, icon: faDollarSign },
        { title: 'Market Cap', value: tokenStats.marketCap, icon: faChartLine },
        { title: 'Staked', value: `${formatNumber(tokenStats.staked)} DGYM`, icon: faPiggyBank },
        { title: 'Total Supply', value: `${formatNumber(tokenStats.supply)} DGYM`, icon: faCoins },
        { title: 'Circulation', value: `${formatNumber(tokenStats.circulation)} DGYM`, icon: faRecycle },
        { title: 'Locked', value: `${formatNumber(tokenStats.locked)} DGYM`, icon: faLock },
        { title: 'Staking Ratio', value: `${tokenStats.stakingRatio.toFixed(2)}%`, icon: faBalanceScale }
    ];

    return (
        <div className={`${styles.container} ${styles.heroStandard}`}>
            <div className="row align-items-center row-cols-1 mb-5">
                <div className="col">
                    <h2 className="text-center">$DGYM <b>Stats</b></h2>
                    <p>DGYM is the native utility token of the DeGym platform. It is designed to facilitate seamless access to gym memberships, provide rewards to stakers, and enable transactions within the DeGym ecosystem.</p>
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
                    <div className="d-grid gap-3 col-8 mx-auto d-md-block text-center">
                        <button className="m-auto w-auto p-2 mx-2">
                            <a href="/wallet" target="_blank">Wallet Guide</a>
                        </button>
                        <button className="m-auto w-auto p-2 mx-2">
                            <a href="/dgym_markets" target="_blank">DGYM Markets</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenStats;
