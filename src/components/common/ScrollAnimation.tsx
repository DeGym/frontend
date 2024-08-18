import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from '@/styles/components/ScrollAnimation.module.css';

interface ScrollAnimationProps {
    children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`${styles.scrollAnimation} ${isVisible ? styles.visible : ''}`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;