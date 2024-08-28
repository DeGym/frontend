"use client";

import React, { useEffect, useRef, useCallback, ReactNode } from 'react';
import styles from '@/styles/components/common/HeroWrapper.module.css';

interface HeroWrapperProps {
    children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
    const heroRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (heroRef.current) {
            const { offsetHeight } = heroRef.current;
            const scrollPosition = window.scrollY;
            const opacity = Math.max(0, 1 - (scrollPosition / offsetHeight));
            heroRef.current.style.setProperty('--background-opacity', opacity.toString());
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={styles.heroWrapper} ref={heroRef}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.heroContent}>
                {children}
            </div>
        </div>
    );
};

export default HeroWrapper;