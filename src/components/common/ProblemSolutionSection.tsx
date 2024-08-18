"use client";

import React, { useEffect, useState, useRef, useMemo } from 'react';
import styles from '@/styles/components/section/ProblemSolutionSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

interface ProblemSolution {
    problem: {
        title: string;
        description: string;
        icon: string;
    };
    solution: {
        title: string;
        description: string;
        icon: string;
        background: string;
    };
}

const ProblemSolutionSection: React.FC = () => {
    const problemSolutions: ProblemSolution[] = useMemo(() => [
        {
            problem: {
                title: "Risks related to centralized organisations",
                description: "Centralized servers and unanimous management of the company create high risks for users.",
                icon: "img/solutions/5-1.svg",
            },
            solution: {
                title: "Decentralization of data and governance (DAO)",
                description: "The community provides autonomous and fault-tolerant operation of the gym ecosystem.",
                icon: "img/solutions/1-2.svg",
                background: 'img/s-dots_2.svg'
            }
        },
        {
            problem: {
                title: "Monitored and censorship",
                description: "The data is analyzed and access to the service can be limited at any time.",
                icon: "img/solutions/2-1.svg",
            },
            solution: {
                title: "Freedom of access",
                description: "There is no central control, there is no possibility to block the account.",
                icon: "img/solutions/5-2.svg",
                background: 'img/s-dots_2.svg'
            }
        },
        {
            problem: {
                title: "Complex KYC and KYB",
                description: "Registration of new accounts requires a comprehensive verification of documents.",
                icon: "img/solutions/4-1.svg",
            },
            solution: {
                title: "Web3 auth and registration",
                description: "Connect to the next generation of the gym ecosystem using the trusted Web 3.0 standard.",
                icon: "img/solutions/4-2.svg",
                background: 'img/s-dots_2.svg'
            }
        },
        {
            problem: {
                title: "Provider owns user data",
                description: "The data is stored on the provider's servers and does not belong to the user.",
                icon: "img/solutions/6-1.svg",
            },
            solution: {
                title: "Data is anonymous and owned by user",
                description: "Personal data is encrypted with the user's public key and belongs to the owner of the wallet.",
                icon: "img/solutions/6-2.svg",
                background: 'img/s-dots_2.svg'
            }
        },
        {
            problem: {
                title: "Closed code",
                description: "Users can only trust what they read, without the right to check the source code.",
                icon: "img/solutions/3-1.svg",
            },
            solution: {
                title: "Open-source",
                description: "Transparency is a key ingredient in a trusted digital network environment.",
                icon: "img/solutions/3-2.svg",
                background: 'img/s-dots_2.svg'
            }
        },
        // ... other problem-solution pairs
    ], []);

    const [progress, setProgress] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        const handleScroll = () => {
            if (sectionRef.current) {
                const { offsetTop, offsetHeight } = sectionRef.current;
                const scrollPosition = window.scrollY + window.innerHeight;
                if (scrollPosition > offsetTop) {
                    const sectionProgress = Math.min(100, Math.max(0, ((scrollPosition - offsetTop) / offsetHeight) * 100));
                    setProgress(sectionProgress);
                } else {
                    setProgress(0);
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderProblemSolutionCard = (item: ProblemSolution, index: number) => (
        <div className={styles.solutionsRow} key={index}>
            <div className={styles.cardContainer}>
                <div className={`${styles.problemCard} ${styles.card}`}>
                    <div className={styles.problemCardMdtop}>
                        <div className={styles.problemCardIcon}>
                            <img src={item.problem.icon} alt="icon" className="img-fluid d-block" />
                        </div>
                        <h3 className={styles.problemCardTitle}>{item.problem.title}</h3>
                    </div>
                    <p className={styles.problemCardText}>{item.problem.description}</p>
                </div>
                <div className={styles.progressTwo}>
                    <div className={styles.progressTwoLine}>
                        <div
                            className={styles.lineInner}
                            style={{
                                height: `${progress}%`,
                                transition: 'height 0.3s ease-out'
                            }}
                        ></div>
                    </div>
                </div>
                <div className={`${styles.solutionCard} ${styles.card}`} style={{ backgroundImage: `url(${item.solution.background})` }}>
                    <div className={styles.solutionCardMdtop}>
                        <div className={styles.solutionCardIcon}>
                            <img src={item.solution.icon} alt="icon" className="img-fluid d-block" />
                        </div>
                        <h3 className={styles.solutionCardTitle}>{item.solution.title}</h3>
                    </div>
                    <p className={styles.solutionCardText}>{item.solution.description}</p>
                </div>
            </div>
        </div>
    );

    const renderMobileSwiper = () => (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className={styles.swiperContainer}
        >
            {problemSolutions.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                    <div className={`${styles.problemCard} ${styles.card}`}>
                        <div className={styles.problemCardMdtop}>
                            <div className={styles.problemCardIcon}>
                                <img src={item.problem.icon} alt="icon" className="img-fluid d-block" />
                            </div>
                            <h3 className={styles.problemCardTitle}>{item.problem.title}</h3>
                        </div>
                        <p className={styles.problemCardText}>{item.problem.description}</p>
                    </div>
                    <div className={styles.progressTwoMobile}>
                        {[...Array(3)].map((_, i) => (
                            <span key={i} className={styles.sliderArrow}><span className={styles.downArrow}></span></span>
                        ))}
                    </div>
                    <div className={`${styles.solutionCard} ${styles.card}`} style={{ backgroundImage: `url(${item.solution.background})` }}>
                        <div className={styles.solutionCardMdtop}>
                            <div className={styles.solutionCardIcon}>
                                <img src={item.solution.icon} alt="icon" className="img-fluid d-block" />
                            </div>
                            <h3 className={styles.solutionCardTitle}>{item.solution.title}</h3>
                        </div>
                        <p className={styles.solutionCardText}>{item.solution.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <section className={styles.section} ref={sectionRef}>
            <h2 className="text-center">Problems & <b>Solutions</b></h2>
            <div className={styles.solutionsWrap}>
                {isMobile ? renderMobileSwiper() : problemSolutions.map(renderProblemSolutionCard)}
            </div>
        </section>
    );
};

export default ProblemSolutionSection;
