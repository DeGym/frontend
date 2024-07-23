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
            'Seed Sale',
            'Private Sale',
            'Public Sale',
            'Team & Advisors',
            'Community & Ecosystem',
            'Incentive Programs',
        ],
        datasets: [
            {
                data: [3, 7, 30, 20, 25, 15],
                backgroundColor: [
                    'rgba(150, 255, 150, 1)',
                    'rgba(0, 30, 0, 1)',
                    'rgba(50, 205, 150, 1)',
                    'rgba(50, 150, 50, 1)',
                    'rgba(150, 205, 150, 1)',
                    'rgba(10, 205, 100, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
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
