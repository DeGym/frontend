import React from 'react';
import styles from '../../styles/components/DashboardPanel.module.css';
import Card from '@/components/Card'


const DashboardPanel = () => {
    // Mock data for demonstration
    const numberOfStakeholders = 100;
    const totalDGYMStaked = 1000000;
    const averageDGYMStaked = totalDGYMStaked / numberOfStakeholders;

    // Private user data (mock)
    const myStakedDGYM = 5000;
    const claimableDGYM = 100;
    const unstakedDGYM = 200;

    return (
        <div className={styles.dashboardPanel}>
            <h1 className="text-center my-24">Staking</h1>
            <p className="text-dark"> Earn rewards and help grant the health of DeGym network.</p>
            <div className={styles.cardsContainer}>
                <Card title="Total DGYM Staked" value={totalDGYMStaked} />
                <Card title="Number of Stakeholders" value={numberOfStakeholders} />
                <Card title="Average DGYM Staked per Stakeholder" value={averageDGYMStaked.toFixed(2)} />
            </div>
            <div className={styles.privateSection}>
                <div className={styles.privateCardsContainer}>
                    <Card title="My Staked DGYM" value={myStakedDGYM} />
                </div>
            </div>
        </div>
    );
};


export default DashboardPanel;
