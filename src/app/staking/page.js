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
    const [isAutoCompound, setIsAutoCompound] = useState(false);

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

    const handleToggleAutoCompound = () => {
        setIsAutoCompound(!isAutoCompound);
        console.log(`Auto-compound ${!isAutoCompound ? 'enabled' : 'disabled'}`);
        // Logic to toggle auto-compound
    };

    const stakePools = [
        {
            amountStaked: 100,
            rewardUSDT: 10,
            rewardDGYM: 15,
            createdDate: '2023-01-01',
            endDate: '2024-01-01',
            status: 'live',
        },
        {
            amountStaked: 200,
            rewardUSDT: 20,
            rewardDGYM: 30,
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
                onToggleAutoCompound={handleToggleAutoCompound}
                isAutoCompound={isAutoCompound}
            />
            <StakePools pools={stakePools} />
        </main>
    );
};

export default StakePage;
