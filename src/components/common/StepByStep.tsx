import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from '@/styles/components/common/StepByStep.module.css';

interface Step {
    icon: string | IconDefinition | React.ReactElement;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
}

interface StepByStepProps {
    steps: Step[];
    title?: string;
}

const StepByStep: React.FC<StepByStepProps> = ({ steps, title }) => {
    const isSwiper = steps.length > 3;

    const renderIcon = (icon: Step['icon']) => {
        if (typeof icon === 'string') {
            return <img src={icon} alt="step-icon" className="img-fluid d-block" />;
        } else if (React.isValidElement(icon) || typeof icon === 'object') {
            return <FontAwesomeIcon icon={icon as IconDefinition} size="2x" />;
        }
        return null;
    };

    return (
        <div className={styles.stepByStepContainer}>
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            <div className={isSwiper ? styles.swiperWrapper : styles.flexWrapper}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className={`${styles.stepCardWrapper} ${index === 0 ? styles.active : ''}`}>
                            <div className={styles.stepCard}>
                                <div className={styles.step}>
                                    <div className={styles.stepInner}>
                                        <div className={styles.stepNum}>{index + 1}</div>
                                        <div className={styles.stepText}>Step</div>
                                    </div>
                                    {step.icon && (
                                        <div className={styles.icon}>
                                            {renderIcon(step.icon)}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.stepTitle}>{step.title}</div>
                                <div className={styles.text}>{step.description}</div>
                                {step.link && (
                                    <button className="m-3 p-2 w-3/4">
                                        <a href={step.link} target="_blank" rel="noopener noreferrer">
                                            {step.linkText || 'Learn More'}
                                        </a>
                                    </button>
                                )}
                            </div>
                        </div>
                        {
                            index < steps.length - 1 && (
                                <>
                                    <div className={styles.arrow}>
                                        <span>&rarr;</span>
                                    </div>
                                    <div className={styles.arrowDown}>
                                        <span>&darr;</span>
                                    </div>
                                </>
                            )
                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default StepByStep;