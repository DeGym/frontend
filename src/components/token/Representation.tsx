"use client"

import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/token/Representation.module.css';

const TokenSection: React.FC = () => {
    const counterRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (sectionRef.current) {
            const { offsetTop, offsetHeight } = sectionRef.current;
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const sectionCenter = offsetTop + offsetHeight / 2;
            const maxDistance = offsetHeight / 2;
            const distance = Math.abs(scrollPosition - sectionCenter);
            const blurValue = Math.max(0, 20 * (1 - distance / maxDistance));

            // Apply the blur directly to the blurBackground element
            sectionRef.current.style.setProperty('--blur-value', `${blurValue}px`);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (!counterRef.current) return;

        const countTo = parseInt(counterRef.current.getAttribute('data-count') || '0', 10);
        let count = 0;
        const increment = countTo / 50; // Duration of the animation

        const updateCounter = () => {
            if (!counterRef.current) return;

            count += increment;
            if (count >= countTo) {
                counterRef.current.innerText = countTo.toLocaleString();
            } else {
                counterRef.current.innerText = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    }, []);

    return (
        <div className={styles.sectionWrapper} ref={sectionRef}>
            <div className={styles.blurBackground}></div>
            <section className={styles.section}>
                <div className={styles.col1}>
                    <div className={styles.sectionTitle}>Token</div>
                    <div className={styles.sectionCoin}>
                        <div className={styles.metalToken}>
                            <Image
                                src="/DeGym_green_white_logo_without_bg.png"
                                alt="DeGym Token"
                                width={200}
                                height={200}
                                className={styles.tokenLogo}
                                sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.tokenDescription}>
                        A deflationary utility token ($DGYM) that participates in <span className={styles.textPrimary}>building a democratic DAO infrastructure</span>
                    </div>
                    <div className={styles.sectionCoinMobile}>
                        <div className={styles.metalToken}>
                            <Image
                                src="/DeGym_green_white_logo_without_bg.png"
                                alt="DeGym Token"
                                width={150}
                                height={150}
                                className={styles.tokenLogo}
                                sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
                            />
                        </div>
                    </div>
                    <div className={styles.tokenSupply}>
                        <div className={styles.sectionTitleWhite}>Max supply</div>
                        <div className={styles.numInner} ref={counterRef} data-count="10000000000">0</div>
                        <div className={styles.sectionTitleWhite}>$DGYM</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TokenSection;