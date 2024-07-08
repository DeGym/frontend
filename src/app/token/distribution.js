"use client"

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import styles from '../../styles/components/TokenDistribution.module.css';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TokenDistribution = () => {
    const data = {
        labels: [
            'Community Rewards',
            'Development Fund',
            'Founding Team',
            'Advisors and Partners',
            'Marketing and Growth',
        ],
        datasets: [
            {
                data: [40, 25, 20, 10, 5],
                backgroundColor: [
                    'rgba(45, 255, 115, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(58, 141, 29, 1)',
                    'rgba(81, 89, 83, 1)',
                    'rgba(57, 255, 20, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                },
            },
        },
        cutout: 0,
        cutout: '50%'
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Token <b>Distribution</b></h2>
                <p>
                    The DGYM token distribution is structured to ensure fairness, incentivize early adopters, and support the long-term growth of the DeGym ecosystem.
                    Below is the allocation breakdown:
                </p>
                <div className={styles.chartContainer}>
                    <Pie data={data} options={options} />
                </div>
            </div>
        </section>
    );
};

export default TokenDistribution;
