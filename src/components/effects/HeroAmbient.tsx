"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

/**
 * Subtle floating particles that drift across the hero
 * Creates an ethereal, premium ambient effect
 */
export function FloatingParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate particles on mount
        const generateParticles = () => {
            const newParticles: Particle[] = [];
            for (let i = 0; i < 15; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    duration: Math.random() * 20 + 15,
                    delay: Math.random() * 10,
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-cream/20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, -200],
                        x: [0, Math.random() * 50 - 25],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

/**
 * Occasional shooting stars crossing the screen
 * Very subtle and infrequent for premium feel
 */
export function ShootingStars() {
    const [stars, setStars] = useState<number[]>([]);

    useEffect(() => {
        // Trigger a shooting star every 4-8 seconds
        const interval = setInterval(() => {
            const id = Date.now();
            setStars((prev) => [...prev, id]);

            // Remove after animation completes
            setTimeout(() => {
                setStars((prev) => prev.filter((s) => s !== id));
            }, 2000);
        }, Math.random() * 4000 + 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AnimatePresence>
                {stars.map((id) => (
                    <motion.div
                        key={id}
                        className="absolute w-[1px] h-[80px] bg-gradient-to-b from-cream/60 via-cream/30 to-transparent"
                        style={{
                            left: `${Math.random() * 60 + 20}%`,
                            top: `${Math.random() * 30}%`,
                            rotate: 45,
                        }}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: 200,
                            y: 200,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

/**
 * Subtle ambient glow that pulses slowly
 */
export function AmbientGlow() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Top right glow */}
            <motion.div
                className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-cream/5 blur-3xl"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Bottom left glow */}
            <motion.div
                className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-teal/5 blur-3xl"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
}
