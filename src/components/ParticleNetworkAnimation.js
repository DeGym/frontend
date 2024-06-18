"use client"; // This directive ensures the component is treated as a client component

import React, { useEffect, useRef } from 'react';
import styles from './ParticleNetwork.module.css';

class Particle {
    constructor(ctx, options) {
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

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

class ParticleNetwork {
    constructor(ctx) {
        this.ctx = ctx;
        this.particles = [];
        this.options = {
            velocity: 0.5,
            density: 10000,
            color: 'rgba(255, 255, 255, 0.7)',
            radius: 3,
            maxDistance: 100,
            lineColor: 'rgba(255, 255, 255, 0.1)',
            lineWidth: 1
        };
        this.interactionParticle = null;
    }

    init() {
        for (let i = 0; i < this.ctx.canvas.width * this.ctx.canvas.height / this.options.density; i++) {
            this.particles.push(new Particle(this.ctx, {
                radius: this.options.radius,
                color: this.options.color,
                velocity: this.options.velocity
            }));
        }
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        if (this.interactionParticle) {
            this.interactionParticle.draw();
            this.connectParticles(this.interactionParticle);
        }
        this.connectParticles();
        requestAnimationFrame(this.animate.bind(this));
    }

    connectParticles(interactionParticle = null) {
        const particles = interactionParticle ? [interactionParticle, ...this.particles] : this.particles;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.options.maxDistance) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.options.lineColor;
                    this.ctx.lineWidth = this.options.lineWidth;
                    this.ctx.moveTo(particles[i].x, particles[i].y);
                    this.ctx.lineTo(particles[j].x, particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    createInteractionParticle(x, y) {
        this.interactionParticle = new Particle(this.ctx, {
            x,
            y,
            radius: this.options.radius,
            color: this.options.color,
            velocity: 0
        });
    }

    updateInteractionParticle(x, y) {
        if (this.interactionParticle) {
            this.interactionParticle.x = x;
            this.interactionParticle.y = y;
        }
    }

    removeInteractionParticle() {
        this.interactionParticle = null;
    }
}

const ParticleNetworkAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const particleNetwork = new ParticleNetwork(ctx);
        particleNetwork.init();

        const handleMouseMove = (event) => {
            if (!particleNetwork.interactionParticle) {
                particleNetwork.createInteractionParticle(event.clientX, event.clientY);
            }
            particleNetwork.updateInteractionParticle(event.clientX, event.clientY);
        };

        const handleMouseOut = () => {
            particleNetwork.removeInteractionParticle();
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        return () => {
            cancelAnimationFrame(particleNetwork.animate);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.particleNetworkCanvas} />;
};

export default ParticleNetworkAnimation;
