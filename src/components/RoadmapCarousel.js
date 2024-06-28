// components/RoadmapCarousel.js
'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/components/roadmap.module.css';

const roadmapData = {
    'Q1-2024': [
        'Task 1 for Q1-2024',
        'Task 2 for Q1-2024',
        'Task 3 for Q1-2024',
    ],
    'Q2-2024': [
        'Task 1 for Q2-2024',
        'Task 2 for Q2-2024',
        'Task 3 for Q2-2024',
    ],
    'Q3-2024': [
        'Task 1 for Q3-2024',
        'Task 2 for Q3-2024',
        'Task 3 for Q3-2024',
    ],
    'Q4-2024': [
        'Task 1 for Q4-2024',
        'Task 2 for Q4-2024',
        'Task 3 for Q4-2024',
    ],
};

const RoadmapCarousel = () => {
    return (
        <div className={styles.roadmapContainer}>
            <h2 className={styles.roadmapTitle}>Roadmap</h2>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
                {Object.keys(roadmapData).map((quarter) => (
                    <div key={quarter} className={styles.roadmapCard}>
                        <h3>{quarter}</h3>
                        <ul>
                            {roadmapData[quarter].map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default RoadmapCarousel;
