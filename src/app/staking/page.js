"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/pages/Stake.module.css';
import DashboardPanel from './DashboardPanel';
import StakingActions from './StakingActions';
import StakePools from './StakePools';


const StakePage = () => {
    const [availableToStakeDGYM, setAvailableToStakeDGYM] = useState(1000);
    const [availableToUnstakeDGYM, setAvailableToUnstakeDGYM] = useState(42);

    const handleStake = (amount) => {
        console.log(`Staking ${amount} DGYM`);
        // Logic to stake DGYM
    };

    const handleUnstake = (amount) => {
        console.log(`Unstaking ${amount} DGYM`);
        // Logic to unstake DGYM
    };

    const handleClaim = () => {
        console.log('Claiming rewards');
        // Logic to claim rewards
    };


    const stakePools = [
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
                onClaim={handleClaim}
            />
            <StakePools pools={stakePools} />
        </main>
    );
};

export default StakePage;
