"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/pages/Stake.module.css';
import DashboardPanel from './DashboardPanel';
import StakingActions from './StakingActions';

const StakePage = () => {
    const [availableDGYM, setAvailableDGYM] = useState(1000);
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

    return (
        <main className={styles.main}>
            <DashboardPanel />
            <StakingActions
                availableDGYM={availableDGYM}
                onStake={handleStake}
                onUnstake={handleUnstake}
                onClaim={handleClaim}
                onToggleAutoCompound={handleToggleAutoCompound}
                isAutoCompound={isAutoCompound}
            />
        </main>
    );
};

export default StakePage;
