"use client"

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TokenStats from './TokenStats';
import TokenSwap from './TokenSwap';
import TokenBalance from '../TokenBalance';
import styles from '@/styles/components/token/TokenSection.module.css';

const TokenSection: React.FC = () => {
    return (
        <section className={styles.tokenSection}>
            <h2 className={styles.sectionTitle}>DGYM Token</h2>
            <TokenStats
                price="$0.15"
                marketCap="$150,000,000"
                volume24h="$5,000,000"
                circulatingSupply="1,000,000,000 DGYM"
            />
            <div className={styles.tokenInfo}>
                <Card className={styles.tokenCard}>
                    <h3 className={styles.cardTitle}>Token Details</h3>
                    <ul className={styles.tokenDetails}>
                        <li>Name: DeGym Token</li>
                        <li>Symbol: DGYM</li>
                        <li>Total Supply: 1,000,000,000 DGYM</li>
                        <li>Decimals: 18</li>
                    </ul>
                    <Button variant="primary" size="medium" className={styles.viewContractButton}>
                        View Contract
                    </Button>
                </Card>
                <Card className={styles.tokenCard}>
                    <h3 className={styles.cardTitle}>Token Utility</h3>
                    <ul className={styles.tokenUtility}>
                        <li>Governance voting</li>
                        <li>Staking rewards</li>
                        <li>Access to premium features</li>
                        <li>Discounts on gym memberships</li>
                    </ul>
                </Card>
            </div>
            <TokenBalance />
            <TokenSwap />
            <div className={styles.tokenActions}>
                <Button variant="primary" size="large">Buy DGYM</Button>
                <Button variant="outline" size="large">Learn More</Button>
            </div>
        </section>
    );
};

export default TokenSection;