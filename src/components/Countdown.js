"use client";

import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/Countdown.module.css';

// TransitionNumber Component
const TransitionNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (displayValue !== value) {
            setAnimationClass(styles['slide-out-down']);
            setTimeout(() => {
                setDisplayValue(value);
                setAnimationClass(styles['slide-in-up']);
            }, 500);
        }
    }, [value, displayValue]);

    return (
        <div className={styles.countdownValueWrapper}>
            <span className={`${styles.countdownValue} ${animationClass}`}>
                {displayValue.toString().padStart(2, '0')}
            </span>
        </div>
    );
};

// Custom Countdown Component
const Countdown = ({ title, targetDate, endDate, onCountdownEnd, onStart }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));
    const [prevTimeRemaining, setPrevTimeRemaining] = useState({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimeRemaining = calculateTimeRemaining(targetDate);
            setPrevTimeRemaining(timeRemaining);
            setTimeRemaining(newTimeRemaining);

            if (newTimeRemaining.total <= 0) {
                clearInterval(intervalId);
                onCountdownEnd();
                if (onStart) onStart();
                // Start the end countdown
                setTimeRemaining(calculateTimeRemaining(endDate));
                setPrevTimeRemaining({});
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate, endDate, onCountdownEnd, onStart, timeRemaining]);

    function calculateTimeRemaining(targetDate) {
        const now = new Date().getTime();
        const distance = Math.max(targetDate - now, 0); // Ensure distance is non-negative
        return {
            total: distance,
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
    }

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    const shouldAnimate = (prevValue, newValue) => {
        return prevValue !== newValue;
    };

    return (
        <>
            <h2 className={styles.countdownTitle}>{title}</h2>
            <div className={styles.countdownContainer}>
                <div className={styles.countdownGrid}>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeRemaining.days} />
                        days
                    </div>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeRemaining.hours} />
                        hours
                    </div>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeRemaining.minutes} />
                        min
                    </div>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeRemaining.seconds} />
                        sec
                    </div>
                </div>
            </div>
        </>
    );
};
export default Countdown