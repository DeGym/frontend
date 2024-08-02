'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '@/styles/components/section/Roadmap.module.css';

const Roadmap = () => {
    const roadmapData = [
        {
            phase: 'PHASE A',
            quarter: 'Q3 2024',
            title: 'Conceptualization',
            items: [
                'Concept development',
                'Whitepaper drafting',
                'Technical documentation',
                'Branding and initial marketing',
                'Online presence',
                'Smart contract development',
                'Community outreach',
            ],
        },
        {
            phase: 'PHASE B',
            quarter: 'Q4 2024',
            title: 'Community Building',
            items: [
                'Token creation',
                'Community engagement',
                'Public sale',
                'Gym Provider recruitment',
                'Ecosystem partnerships',
            ],
        },
        {
            phase: 'PHASE C',
            quarter: '2025',
            title: 'Future Enhancements',
            items: [
                'DeFi integration strategies',
                'Personal Trainer Provider Catalog',
                'Cross-Chain functionality',
                'Global compliance adherence',
                'Sustainability initiatives launch',
            ],
        },
    ];

    return (
        <section className={styles.road} data-aos="fade-down" data-aos-duration="700">
            <div className={styles.roadInner}>
                <h2>Project Development <b>Roadmap</b></h2>
                <p className={styles.roadText}>
                    Discover our strategic milestones and how we're propelling towards a transformative future in web3 technology.
                </p>
            </div>
            <div className={styles.roadSlider}>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    autoPlay={false}
                    interval={5000}
                    centerMode={true}
                    centerSlidePercentage={90}
                >
                    {roadmapData.map((data, index) => (
                        <div key={index} className={`${styles.roadSlide}`}>
                            <div className={styles.roadPhaseInner}>
                                <p className={styles.roadPhase}>{data.phase}</p>
                            </div>
                            <div className={styles.roadSlideTitleInner}>
                                <p className={styles.roadSlideTitle}>{data.quarter}</p>
                                <p className={styles.roadSlideName}>{data.title}</p>
                            </div>
                            <div className={styles.roadSlidePoints}>
                                {data.items.map((item, i) => (
                                    <div key={i} className={styles.roadSlidePoint}>
                                        <div className={styles.roadSlidePointCircle}></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Roadmap;
