import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/common/Countdown.module.css';

interface CountdownProps {
    title: string;
    targetDate: number;
    endDate: number;
    onCountdownEnd: () => void;
}

const TransitionNumber: React.FC<{ value: number }> = ({ value }) => {
    return (
        <span className={styles.transitionNumber}>
            {value < 10 ? `0${value}` : value}
        </span>
    );
};

const Countdown: React.FC<CountdownProps> = ({ title, targetDate, endDate, onCountdownEnd }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                if (now > endDate) {
                    clearInterval(interval);
                    onCountdownEnd();
                } else {
                    const newDistance = endDate - now;
                    const days = Math.floor(newDistance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((newDistance % (1000 * 60)) / 1000);
                    setTimeLeft({ days, hours, minutes, seconds });
                }
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, endDate, onCountdownEnd]);

    if (!isClient) {
        return null; // or a loading placeholder
    }

    return (
        <>
            <h2 className={styles.countdownTitle}>{title}</h2>
            <div className={styles.countdownContainer}>
                <div className={styles.countdownGrid}>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeLeft.days} />
                        days
                    </div>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeLeft.hours} />
                        hours
                    </div>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeLeft.minutes} />
                        min
                    </div>
                    <div className={styles.countdownBox}>
                        <TransitionNumber value={timeLeft.seconds} />
                        sec
                    </div>
                </div>
            </div>
        </>
    );
};

export default Countdown;