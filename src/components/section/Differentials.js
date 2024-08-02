import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/components/section/Differentials.module.css';

const DifferentialSection = ({ title, differentials }) => (
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
