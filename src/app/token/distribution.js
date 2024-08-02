"use client"

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import styles from './styles/TokenDistribution.module.css';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TokenDistribution = () => {
    const data = {
        labels: [
            'Pre-Seed Sale',
            'Private Sale',
            'Public Sale',
            'DeGym developers',
            'Community & Ecosystem',
            'Incentive Programs',
            'Initial Team',
        ],
        datasets: [
            {
                data: [3, 7, 30, 20, 10, 15, 15],
                backgroundColor: [
                    'rgba(70, 137, 102, 1)',
                    'rgba(145, 196, 108, 1)',
                    'rgba(103, 204, 142, 1)',
                    'rgba(46, 255, 116, 1)',
                    'rgba(46, 125, 50, 1)',
                    'rgba(38, 166, 120, 1)',
                    'rgba(150, 237, 137, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
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
