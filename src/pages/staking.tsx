"use client";

import React, { useState } from 'react';
import styles from '@/styles/pages/Stake.module.css';
import DashboardPanel from '@/components/staking/DashboardPanel';
import StakingActions from '@/components/staking/StakingActions';
import StakeBonds from '@/components/staking/StakeBonds';

const StakePage: React.FC = () => {
    const [availableToStakeDGYM, setAvailableToStakeDGYM] = useState(1000);
    const [availableToUnstakeDGYM, setAvailableToUnstakeDGYM] = useState(42);
    const [isAutoInterest, setIsAutoInterest] = useState(false);

    const handleStake = (amount: number, duration: number, isCompound: boolean) => {
        console.log(`Staking ${amount} DGYM for ${duration} days with ${isCompound ? 'compound' : 'simple'} interest`);
        // Logic to stake DGYM
        // Update available amounts after staking
        setAvailableToStakeDGYM(prev => prev - amount);
        setAvailableToUnstakeDGYM(prev => prev + amount);
    };

    const handleUnstake = (amount: number) => {
        console.log(`Unstaking ${amount} DGYM`);
        // Logic to unstake DGYM
        // Update available amounts after unstaking
        setAvailableToStakeDGYM(prev => prev + amount);
        setAvailableToUnstakeDGYM(prev => prev - amount);
    };

    const handleClaim = () => {
        console.log('Claiming rewards');
        // Logic to claim rewards
    };

    const stakeBonds = [
        {
            amountStaked: 100,
            rewards: 10,
            interest: 'Simple',
            createdDate: '2023-01-01',
            endDate: '2024-01-01',
            status: 'live',
        },
        {
            amountStaked: 200,
            rewards: 20,
            interest: 'Compound',
            createdDate: '2023-02-01',
            endDate: '2024-02-01',
            status: 'finished',
        },
    ];

    return (
        <main className={styles.main}>
            <DashboardPanel />
            <StakingActions
                availableToStakeDGYM={availableToStakeDGYM}
                availableToUnstakeDGYM={availableToUnstakeDGYM}
                onStake={handleStake}
                onUnstake={handleUnstake}
                onClaimDGYM={handleClaim}
                isAutoInterest={isAutoInterest}
            />
            <StakeBonds bonds={stakeBonds} />
        </main>
    );
};

export default StakePage;