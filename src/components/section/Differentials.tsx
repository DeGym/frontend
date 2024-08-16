import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '@/styles/components/section/Differentials.module.css';

interface Differential {
    title: string;
    description: string;
    icon: IconDefinition;
}

interface DifferentialsProps {
    title: string;
    differentials: Differential[];
}

const Differentials: React.FC<DifferentialsProps> = ({ title, differentials }) => {
    return (
        <section className={styles.differentialsSection}>
            <h2 className={styles.differentialsTitle}>{title}</h2>
            <div className={styles.differentialsGrid}>
                {differentials.map((differential, index) => (
                    <div key={index} className={styles.differentialItem}>
                        <FontAwesomeIcon icon={differential.icon} className={styles.differentialIcon} />
                        <h3 className={styles.differentialTitle}>{differential.title}</h3>
                        <p className={styles.differentialDescription}>{differential.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Differentials;