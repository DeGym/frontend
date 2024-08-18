import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/common/Roadmap.module.css';

interface RoadmapItem {
    phase: string;
    quarter: string;
    title: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    items: Array<{ text: string; done: boolean }>;
}

const roadmapItems: RoadmapItem[] = [
    {
        phase: 'PHASE A',
        quarter: 'Q3 2024',
        title: 'Conceptualization',
        status: 'in-progress',
        items: [
            { text: 'Concept development', done: true },
            { text: 'Whitepaper drafting', done: true },
            { text: 'Technical documentation', done: false },
            { text: 'Branding and initial marketing', done: false },
            { text: 'Online presence', done: true },
            { text: 'Smart contract development', done: false },
            { text: 'Token creation', done: false },
            { text: 'Community outreach', done: false },
        ],
    },
    {
        phase: 'PHASE B',
        quarter: 'Q4 2024',
        title: 'Community Building',
        status: 'upcoming',
        items: [
            { text: 'Community engagement', done: false },
            { text: 'Public sale', done: false },
            { text: 'Gym Provider recruitment', done: false },
            { text: 'Ecosystem partnerships', done: false },
        ],
    },
    {
        phase: 'PHASE C',
        quarter: '2025',
        title: 'Future Enhancements',
        status: 'upcoming',
        items: [
            { text: 'Personal Trainer Provider Catalog', done: false },
            { text: 'Cross-Chain functionality', done: false },
            { text: 'Global compliance adherence', done: false },
            { text: 'Sustainability initiatives launch', done: false },
        ],
    },
];

const RoadmapCarousel: React.FC = () => {
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
                    {roadmapItems.map((data, index) => (
                        <div key={index} className={`${styles.roadSlide}`}>
                            <div className={styles.roadPhaseInner}>
                                <p className={styles.roadPhase}>{data.phase}</p>
                                <p className={styles.roadStatus}>
                                    {data.status === 'in-progress' ? 'In Progress' : data.status}
                                </p>
                            </div>
                            <div className={styles.roadSlideTitleInner}>
                                <p className={styles.roadSlideTitle}>{data.quarter}</p>
                                <p className={styles.roadSlideName}>{data.title}</p>
                            </div>
                            <hr className={styles.roadDivider} />
                            <div className={styles.roadSlidePoints}>
                                {data.items.map((item, i) => (
                                    <div key={i} className={styles.roadSlidePoint}>
                                        <FontAwesomeIcon
                                            icon={item.done ? faCheckCircle : faCircle}
                                            className={styles.roadSlidePointIcon}
                                        />
                                        {item.text}
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

export default RoadmapCarousel;