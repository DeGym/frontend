import React from 'react';
import Card from '@/components/ui/Card';
import styles from '@/styles/components/token/TokenStats.module.css';

interface TokenStatsProps {
    price: string;
    marketCap: string;
    volume24h: string;
    circulatingSupply: string;
}

const TokenStats: React.FC<TokenStatsProps> = ({ price, marketCap, volume24h, circulatingSupply }) => {
    return (
        <Card className={styles.tokenStats}>
            <h3 className={styles.statsTitle}>Token Statistics</h3>
            <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Price</span>
                    <span className={styles.statValue}>{price}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Market Cap</span>
                    <span className={styles.statValue}>{marketCap}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>24h Volume</span>
                    <span className={styles.statValue}>{volume24h}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Circulating Supply</span>
                    <span className={styles.statValue}>{circulatingSupply}</span>
                </div>
            </div>
        </Card>
    );
};

export default TokenStats;