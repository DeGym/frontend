"use client";

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/components/home/OpenSourceCard.module.css';

const OpenSourceCard: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const width = canvas.width = canvas.offsetWidth;
        const height = canvas.height = canvas.offsetHeight;
        const columns = Math.floor(width / 20) + 1;
        const yPositions: number[] = Array.from({ length: columns }).map(() => 0);
        const sequences: string[][] = Array.from({ length: columns }).map(() => generateSequence());

        function generateSequence(): string[] {
            return Array.from({ length: 10 }).map(() => (Math.random() > 0.5 ? '1' : '0'));
        }

        const matrixEffect = () => {
            context.fillStyle = '#1f1f1f';
            context.fillRect(0, 0, width, height);
            context.font = '10pt monospace';

            yPositions.forEach((y, index) => {
                const x = index * 20;
                const sequence = sequences[index];

                for (let i = 0; i < sequence.length; i++) {
                    const text = sequence[i];
                    context.fillStyle = i === 0 ? '#fff' : `rgba(45, 255, 115, ${1 - i * 0.1})`;
                    context.fillText(text, x, y - 20 * i);
                }

                if (y > height + Math.random() * 10000) yPositions[index] = 0;
                else yPositions[index] = y + 20;
            });
        };

        const interval = setInterval(matrixEffect, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.matrixContainer}>
                <canvas ref={canvasRef} className={styles.canvas}></canvas>
            </div>
            <div className={styles.content}>
                <h2>Built on <b>Open Source</b></h2>
                <p>
                    DeGym's stack—media server, client SDKs, auxiliary services -
                    remains perpetually free and open source. Develop genuinely
                    engaging experiences using just a few lines of code
                </p>
            </div>
        </div>
    );
};

export default OpenSourceCard;
