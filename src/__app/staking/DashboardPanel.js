import React from 'react';
import styles from './styles/DashboardPanel.module.css';
import Card from '@/components/Card'

const DashboardPanel = () => {
    // Mock data for demonstration
    const numberOfStakeholders = 100;
    const totalDGYMStaked = 1000000;
    const totalDGYMLocked = 1000000;
    const averageDGYMStaked = totalDGYMStaked / numberOfStakeholders;
    const averageLockedDuration = 90
    // Private user data (mock)
    const myStaked = 5000;
    const myLocked = 5000;
    const myRewards = 5000;

    return (
        <div className={styles.dashboardPanel}>
            <h1 className="text-center mt-24">Staking</h1>
            <h2 className={styles.heroSubtitle}>Enjoy the benefits of a secure investment and be part of the innovative future of fitness. <b>Maximize your earnings</b> by staking DGYM tokens. </h2>
            <div className={styles.cardsContainer}>
                <Card title="Total DGYM Staked" value={totalDGYMStaked} />
                <Card title="Total DGYM Locked" value={totalDGYMLocked} />
                <Card title="Number of Stakeholders" value={numberOfStakeholders} />
                <Card title="Average DGYM Staked per Stakeholder" value={averageDGYMStaked.toFixed(2)} />
                <Card title="Average Locked Duration" value={`${averageLockedDuration} days`} />
            </div>
            <hr />
            <div className={styles.cardsContainer}>
                <Card title="My Staked DGYM" value={myStaked} />
                <Card title="My Locked DGYM" value={myLocked} />
                <Card title="My Rewards" value={myRewards} />
            </div>
            <hr />
        </div>
    );
};

export default DashboardPanel;
