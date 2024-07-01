"use client";

import React, { useEffect, useState } from 'react';
import styles from '../styles/components/ProblemSolutionSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const ProblemSolutionSection = () => {
    const problemSolutions = [
        {
            problem: {
                title: "DeFi + DAO Governance",
                description: "Say goodbye to rigid rules and restrictions. Say hello to DeFi and DAO-governed gym memberships.",
                icon: faLightbulb
            },
            solution: {
                title: "Dynamic Pricing",
                description: "Our DAO votes on pricing and adjustments, ensuring fair, community-driven decisions.",
                icon: faCheckCircle,
                background: '/path/to/solution-background.jpg' // replace with actual path
            }
        },
        {
            problem: {
                title: "Global Access",
                description: "Access your favorite gyms globally with a single membership.",
                icon: faLightbulb
            },
            solution: {
                title: "Seamless Entry",
                description: "Use our app for seamless entry, and enjoy a unified membership experience worldwide.",
                icon: faCheckCircle,
                background: '/path/to/solution-background.jpg' // replace with actual path
            }
        },
        {
            problem: {
                title: "Reward System",
                description: "Earn rewards for your workouts and participation in our community.",
                icon: faLightbulb
            },
            solution: {
                title: "Incentivized Fitness",
                description: "Earn tokens and perks for maintaining an active lifestyle.",
                icon: faCheckCircle,
                background: '/path/to/solution-background.jpg' // replace with actual path
            }
        }
    ];

    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const scrollPercentRounded = Math.round(scrollPercent * 100);
            setProgress(scrollPercentRounded);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.sectionTwo}>
            <div className={styles.solutionsWrap}>
                {isMobile ? (
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {problemSolutions.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={`${styles.problemCard} ${styles.card}`}>
                                    <div className={styles.problemCardMdtop}>
                                        <div className={styles.problemCardIcon}>
                                            <FontAwesomeIcon icon={item.problem.icon} />
                                        </div>
                                        <h3 className={styles.problemCardTitle}>{item.problem.title}</h3>
                                    </div>
                                    <p className={styles.problemCardText}>{item.problem.description}</p>
                                </div>
                                <div className={styles.progressTwoMobile}>
                                    <span className={styles.sliderArrow}><span className={styles.downArrow}></span></span>
                                    <span className={styles.sliderArrow}><span className={styles.downArrow}></span></span>
                                    <span className={styles.sliderArrow}><span className={styles.downArrow}></span></span>
                                </div>
                                <div className={`${styles.solutionCard} ${styles.card}`} style={{ backgroundImage: `url(${item.solution.background})` }}>
                                    <div className={styles.solutionCardMdtop}>
                                        <div className={styles.solutionCardIcon}>
                                            <FontAwesomeIcon icon={item.solution.icon} />
                                        </div>
                                        <h3 className={styles.solutionCardTitle}>{item.solution.title}</h3>
                                    </div>
                                    <p className={styles.solutionCardText}>{item.solution.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    problemSolutions.map((item, index) => (
                        <div className={styles.solutionsRow} key={index}>
                            <div className={styles.cardContainer}>
                                <div className={`${styles.problemCard} ${styles.card}`}>
                                    <div className={styles.problemCardMdtop}>
                                        <div className={styles.problemCardIcon}>
                                            <FontAwesomeIcon icon={item.problem.icon} />
                                        </div>
                                        <h3 className={styles.problemCardTitle}>{item.problem.title}</h3>
                                    </div>
                                    <p className={styles.problemCardText}>{item.problem.description}</p>
                                </div>
                                <div className={styles.progressTwo}>
                                    <div className={styles.progressTwoLine}>
                                        <div className={styles.lineInner} style={{ height: `${progress}%` }}></div>
                                    </div>
                                </div>
                                <div className={`${styles.solutionCard} ${styles.card}`} style={{ backgroundImage: `url(${item.solution.background})` }}>
                                    <div className={styles.solutionCardMdtop}>
                                        <div className={styles.solutionCardIcon}>
                                            <FontAwesomeIcon icon={item.solution.icon} />
                                        </div>
                                        <h3 className={styles.solutionCardTitle}>{item.solution.title}</h3>
                                    </div>
                                    <p className={styles.solutionCardText}>{item.solution.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
