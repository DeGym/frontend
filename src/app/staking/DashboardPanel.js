import React from 'react';
import styles from '../../styles/components/DashboardPanel.module.css';
import Card from '@/components/Card'


const DashboardPanel = () => {
    // Mock data for demonstration
    const numberOfStakeholders = 100;
    const totalDGYMStaked = 1000000;
    const totalDGYMLocked = 1000000;
    const averageDGYMStaked = totalDGYMStaked / numberOfStakeholders;
    const averageLockedDuration = 90
    // Private user data (mock)
    const myStakedDGYM = 5000;
    const myLockedDGYM = 5000;

    return (
        <div className={styles.dashboardPanel}>
            <h1 className="text-center my-24">Staking</h1>
            <p className="text-dark"> Earn rewards and help grant the health of DeGym network.</p>
            <div className={styles.cardsContainer}>
                <Card title="Total DGYM Staked" value={totalDGYMStaked} />
                <Card title="Total DGYM Locked" value={totalDGYMLocked} />
                <Card title="Number of Stakeholders" value={numberOfStakeholders} />
                <Card title="Average DGYM Staked per Stakeholder" value={averageDGYMStaked.toFixed(2)} />
                <Card title="Average Locked Duration" value={`${averageLockedDuration} days`} />

            </div>
            <div className={styles.privateSection}>
                <div className={styles.privateCardsContainer}>
                    <Card title="My Staked DGYM" value={myStakedDGYM} />
                    <Card title="My Locked DGYM" value={myLockedDGYM} />

                </div>
            </div>
        </div>
    );
};


export default DashboardPanel;
