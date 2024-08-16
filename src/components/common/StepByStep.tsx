import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import styles from '@/styles/components/StepByStep.module.css';

interface Step {
    icon: IconDefinition;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
}

interface StepByStepProps {
    steps: Step[];
    title: string;
}

const StepByStep: React.FC<StepByStepProps> = ({ steps, title }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={step.icon} className={styles.icon} />
                        </div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDescription}>{step.description}</p>
                        {step.link && (
                            <Link href={step.link} className={styles.stepLink}>
                                {step.linkText || 'Learn More'}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StepByStep;