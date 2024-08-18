import React from 'react';
import styles from '@/styles/components/staking/DashboardPanel.module.css';
import Card from '@/components/ui/Card'; // Assuming you have a Card component

interface DashboardMetric {
    title: string;
    value: string | number;
    unit?: string;
}

const DashboardPanel: React.FC = () => {
    // Mock data for demonstration
    const publicMetrics: DashboardMetric[] = [
        { title: 'Total DGYM Staked', value: 1000000, unit: 'DGYM' },
        { title: 'Total DGYM Locked', value: 750000, unit: 'DGYM' },
        { title: 'Number of Stakeholders', value: 5000 },
        { title: 'Average DGYM Staked', value: 200, unit: 'DGYM' },
        { title: 'Average Lock Duration', value: 90, unit: 'days' },
    ];

    const privateMetrics: DashboardMetric[] = [
        { title: 'Your Staked DGYM', value: 5000, unit: 'DGYM' },
        { title: 'Your Locked DGYM', value: 3000, unit: 'DGYM' },
        { title: 'Your Rewards', value: 250, unit: 'DGYM' },
    ];

    return (
        <div className={styles.dashboardPanel}>
            <h1 className="text-center mt-24">Staking</h1>
            <h2 className={styles.heroSubtitle}>Enjoy the benefits of a secure investment and be part of the innovative future of fitness. <b>Maximize your earnings</b> by staking DGYM tokens. </h2>
            <div className={styles.cardsContainer}>
                {publicMetrics.map((metric, index) => (
                    <Card
                        key={index}
                        title={metric.title}
                        value={`${metric.value}${metric.unit ? ` ${metric.unit}` : ''}`}
                    />
                ))}
            </div>
            <hr />
            <div className={styles.privateSection}>
                <h3>Your Staking Overview</h3>
                <div className={styles.privateCardsContainer}>
                    {privateMetrics.map((metric, index) => (
                        <Card
                            key={index}
                            title={metric.title}
                            value={`${metric.value}${metric.unit ? ` ${metric.unit}` : ''}`}
                        />
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default DashboardPanel;