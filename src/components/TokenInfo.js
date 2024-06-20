import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faChartLine, faPercentage, faPiggyBank, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/common.module.css';

const TokenInfo = ({ totalSupply, stakingYield, providerCommission, totalStake, stakingRatio }) => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-secondary mb-8">Token Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`${styles.card} `}>
                    <FontAwesomeIcon icon={faCoins} size="3x" className="text-primary mb-4" />
                    <h3 >Total Circulating Supply</h3>
                    <p>{totalSupply}</p>
                </div>
                <div className={`${styles.card}`}>
                    <FontAwesomeIcon icon={faChartLine} size="3x" className="text-primary mb-4" />
                    <h3 >Staking Yield</h3>
                    <p>{stakingYield}</p>
                </div>
                <div className={`${styles.card}`}>
                    <FontAwesomeIcon icon={faPercentage} size="3x" className="text-primary mb-4" />
                    <h3>Provider Commission</h3>
                    <p>{providerCommission}</p>
                </div>
                <div className={`${styles.card}`}>
                    <FontAwesomeIcon icon={faPiggyBank} size="3x" className="text-primary mb-4" />
                    <h3 >Total Stake</h3>
                    <p>{totalStake}</p>
                </div>
                <div className={`${styles.card}`}>
                    <FontAwesomeIcon icon={faBalanceScale} size="3x" className="text-primary mb-4" />
                    <h3 >Staking Ratio</h3>
                    <p>{stakingRatio}</p>
                </div>
            </div>
        </div >

    );
};


export default TokenInfo;

