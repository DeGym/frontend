"use client";

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/components/layout/ParticleNetworkAnimation.module.css';

interface ParticleOptions {
    radius: number;
    color: string;
    velocity: number;
    x?: number;
    y?: number;
}

class Particle {
    private ctx: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    private radius: number;
    private color: string;
    private velocity: { x: number; y: number };
    private opacity: number;

    constructor(ctx: CanvasRenderingContext2D, options: ParticleOptions) {
        this.ctx = ctx;
        this.x = options.x || Math.random() * ctx.canvas.width;
        this.y = options.y || Math.random() * ctx.canvas.height;
        this.radius = options.radius;
        this.color = options.color;
        this.velocity = {
            x: (Math.random() - 0.5) * options.velocity,
            y: (Math.random() - 0.5) * options.velocity
        };
        this.opacity = 1;
    }

    draw(): void {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update(): void {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > this.ctx.canvas.width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > this.ctx.canvas.height) this.velocity.y *= -1;

        this.draw();
    }
}

const ParticleNetworkAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particleCount = 100;
        const particles: Particle[] = [];
        const maxDistance = 200;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(ctx, {
                radius: Math.random() * 2 + 1,
                color: 'rgba(45, 255, 115, 0.5)',
                velocity: 0.3
            }));
        }

        function animate() {
            requestAnimationFrame(animate);
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();

                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < maxDistance) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(45, 255, 115, ${1 - distance / maxDistance})`;
                            ctx.lineWidth = 1;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        animate();
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.particleCanvas} />;
};

export default ParticleNetworkAnimation;