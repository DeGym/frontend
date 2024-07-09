import React from 'react';
import styles from '../styles/components/StepByStep.module.css';

const StepByStep = ({ steps, title }) => {
    const isSwiper = steps.length > 3;

    return (
        <div className={styles.stepByStepContainer}>
            {title && <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />}
            <div className={isSwiper ? styles.swiperWrapper : styles.flexWrapper}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className={`${styles.stepCardWrapper} ${index === 0 ? styles.active : ''}`}>
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
                            <>
                                <div className={styles.arrow}>
                                    <span>&rarr;</span>
                                </div>
                                <div className={styles.arrowDown}>
                                    <span>&darr;</span>
                                </div>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default StepByStep;
