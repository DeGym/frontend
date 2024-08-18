import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '@/styles/components/common/Differentials.module.css';

interface Differential {
    icon: IconDefinition;
    title: string;
    description: string;
}

interface DifferentialSectionProps {
    title: string;
    differentials: Differential[];
}

const DifferentialSection: React.FC<DifferentialSectionProps> = ({ title, differentials }) => (
    <section className={styles.section}>
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.flexContainer}>
                {differentials.map((differential, index) => (
                    <div key={index} className={styles.differentialItem}>
                        <FontAwesomeIcon icon={differential.icon} className={styles.icon} />
                        <h3 className={styles.cardTitle}><b>{differential.title}</b></h3>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>{differential.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default DifferentialSection;