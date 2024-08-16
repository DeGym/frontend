import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/section/StepByStep.module.css';

interface Step {
    icon: string;
    title: string;
    description: string;
}

interface StepByStepProps {
    steps: Step[];
    title: string;
}

const StepByStep: React.FC<StepByStepProps> = ({ steps, title }) => {
    return (
        <section className={styles.stepByStepSection}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <div className={styles.stepIcon}>
                            <Image src={step.icon} alt={step.title} width={50} height={50} />
                        </div>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StepByStep;