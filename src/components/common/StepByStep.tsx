import React, { useState, useRef, TouchEvent, MouseEvent } from 'react';
import styles from '@/styles/components/common/StepByStep.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Step {
    title: string;
    description: string;
    icon: IconDefinition | string;
    link?: string;
    linkText?: string;
}

interface StepByStepProps {
    steps: Step[];
    title: string;
}

const StepByStep: React.FC<StepByStepProps> = ({ steps, title }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef<number | null>(null);
    const currentX = useRef<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const goToStep = (index: number) => {
        if (index >= 0 && index < steps.length) {
            setCurrentStep(index);
        }
    };

    const handleDragStart = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        if ('touches' in e) {
            startX.current = e.touches[0].clientX;
        } else {
            startX.current = e.clientX;
        }
    };

    const handleDragMove = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        if ('touches' in e) {
            currentX.current = e.touches[0].clientX;
        } else {
            currentX.current = e.clientX;
        }

        if (startX.current !== null && currentX.current !== null && carouselRef.current) {
            const diff = startX.current - currentX.current;
            carouselRef.current.style.transform = `translateX(${-diff}px)`;
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (startX.current !== null && currentX.current !== null) {
            const diff = startX.current - currentX.current;
            if (Math.abs(diff) > 20) {
                if (diff > 0 && currentStep < steps.length - 1) {
                    goToStep(currentStep + 1);
                } else if (diff < 0 && currentStep > 0) {
                    goToStep(currentStep - 1);
                }
            }
        }
        if (carouselRef.current) {
            carouselRef.current.style.transform = '';
        }
        startX.current = null;
        currentX.current = null;
    };

    const renderIcon = (icon: IconDefinition | string) => {
        if (typeof icon === 'string') {
            return <img src={icon} alt="Step icon" className={styles.stepIcon} />;
        }
        return <FontAwesomeIcon icon={icon} className={styles.stepIcon} />;
    };

    const getSlideClass = (index: number) => {
        if (index === currentStep) return `${styles.active} ${styles.neonBorder}`;
        if (index === currentStep - 1) return styles.prev;
        if (index === currentStep + 1) return styles.next;
        return styles.hidden;
    };

    return (
        <section className={styles.stepByStepSection}>
            <div className={styles.backgroundContainer}>
                <h2
                    className={styles.sectionTitle}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <div
                    className={styles.carousel}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    <div className={styles.carouselContainer} ref={carouselRef}>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`${styles.carouselSlide} ${getSlideClass(index)}`}
                                onClick={() => goToStep(index)}
                            >
                                <div className={styles.stepNumber}>{index + 1}</div>
                                <div className={styles.topContent}>
                                    <div className={styles.iconContainer}>
                                        <div className={styles.icon}>{renderIcon(step.icon)}</div>
                                    </div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                </div>
                                <p className={styles.stepDescription}>{step.description}</p>
                                {step.link && step.linkText && (
                                    <Link
                                        href={step.link}
                                        className={`${styles.stepLink} ${index !== currentStep ? styles.disabled : ''}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            if (index !== currentStep) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        {step.linkText}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.mobileIndicator}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.indicatorDot} ${index === currentStep ? styles.active : ''}`}
                            onClick={() => goToStep(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepByStep;