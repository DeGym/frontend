import React, { useState } from 'react';
import styles from '@/styles/components/common/StepByStep.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Step {
    title: string;
    description: string;
    icon: IconDefinition | string;
}

interface StepByStepProps {
    steps: Step[];
    title: string;
}

const StepByStep: React.FC<StepByStepProps> = ({ steps, title }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const goToStep = (index: number) => {
        if (index >= 0 && index < steps.length) {
            setCurrentStep(index);
        }
    };

    const renderIcon = (icon: IconDefinition | string) => {
        if (typeof icon === 'string') {
            return <img src={icon} alt="Step icon" className={styles.iconImage} />;
        } else {
            return <FontAwesomeIcon icon={icon} className={styles.iconFA} />;
        }
    };

    const getSlideClass = (index: number) => {
        if (index === currentStep) return `${styles.active} ${styles.neonBorder}`;
        if (index === currentStep - 1) return styles.prev;
        if (index === currentStep + 1) return styles.next;
        return styles.hidden;
    };

    return (
        <section className={styles.stepByStepSection}>
            <h2
                className={styles.sectionTitle}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className={styles.carousel}>
                <div className={styles.carouselContainer}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${styles.carouselSlide} ${getSlideClass(index)}`}
                            onClick={() => goToStep(index)}
                        >
                            <div className={styles.stepNumber}>{index + 1}</div>
                            <div className={styles.iconContainer}>
                                <div className={styles.icon}>{renderIcon(step.icon)}</div>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepByStep;