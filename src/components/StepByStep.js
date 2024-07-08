import React from 'react';
import styles from '../styles/components/StepByStep.module.css';

const StepByStep = ({ steps, title }) => {
    return (
        <div className={styles.stepByStepContainer}>
            {title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}
            <div className={styles.swiperWrapper}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className={`${styles.swiperSlide} ${index === 0 ? styles.active : ''}`}>
                            <div className={styles.stepCard}>
                                {step.icon && (
                                    <div className={styles.icon}>
                                        <img src={step.icon} alt={`icon-${index + 1}`} className="img-fluid d-block" />
                                    </div>
                                )}
                                <div className={styles.step}>
                                    <div className={styles.stepInner}>
                                        <div className={styles.stepNum}>{index + 1}</div>
                                        <div className={styles.stepText}>Step</div>
                                    </div>
                                </div>
                                <div className={styles.stepTitle}>{step.title}</div>
                                <div className={styles.text}>{step.description}</div>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={styles.arrow}>
                                <span>&rarr;</span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
                <div className={styles.swiperSlideLast}>
                    <div className={styles.stepCardLast}>
                        <div className={styles.text}>Smart Contract</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepByStep;
