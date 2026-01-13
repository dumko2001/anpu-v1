"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

interface SectionParticlesProps {
    /** Number of particles (default: 15) */
    count?: number;
    /** Color of particles */
    color?: "teal" | "charcoal" | "ochre";
    /** Peak opacity level (default: 0.4) */
    opacity?: number;
}

// Color values for particles on light backgrounds
const PARTICLE_COLORS = {
    teal: "rgba(53, 130, 130, VAR_OPACITY)", // teal color
    charcoal: "rgba(45, 45, 40, VAR_OPACITY)", // dark gray
    ochre: "rgba(180, 120, 40, VAR_OPACITY)", // golden ochre
};

/**
 * Floating particles for section backgrounds
 * Visible on light backgrounds with darker colors
 */
export function SectionParticles({
    count = 15,
    color = "teal",
    opacity = 0.4
}: SectionParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([]);

    const particleColor = PARTICLE_COLORS[color].replace("VAR_OPACITY", String(opacity));

    useEffect(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: 50 + Math.random() * 50, // Start from bottom half
                size: Math.random() * 5 + 3, // Larger: 3-8px
                duration: Math.random() * 10 + 8, // Faster: 8-18s
                delay: Math.random() * 5, // Less delay: 0-5s
            });
        }
        setParticles(newParticles);
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        background: particleColor,
                        boxShadow: `0 0 ${particle.size}px ${particleColor}`,
                    }}
                    animate={{
                        y: [0, -120, -240],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.3],
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
 * Visible sparkle effects for Reviews/Testimonials
 * Golden sparkles that twinkle periodically
 */
export function Sparkles({ count = 12 }: { count?: number }) {
    const [sparkles, setSparkles] = useState<Particle[]>([]);

    useEffect(() => {
        const newSparkles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            newSparkles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 6 + 6, // Larger: 6-12px
                duration: Math.random() * 1 + 0.5, // Quick flash: 0.5-1.5s
                delay: Math.random() * 3, // Less initial delay
            });
        }
        setSparkles(newSparkles);
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2 + 1, // Repeat every 1-3s
                    }}
                >
                    {/* Star sparkle */}
                    <div
                        className="relative"
                        style={{
                            width: sparkle.size,
                            height: sparkle.size,
                        }}
                    >
                        {/* Center dot */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "rgba(180, 120, 40, 0.8)",
                                boxShadow: "0 0 8px 2px rgba(180, 120, 40, 0.5)",
                            }}
                        />
                        {/* Vertical ray */}
                        <div
                            style={{
                                position: "absolute",
                                width: 2,
                                height: sparkle.size * 2.5,
                                left: "50%",
                                top: -sparkle.size * 0.75,
                                transform: "translateX(-50%)",
                                background: "linear-gradient(to bottom, transparent, rgba(180,120,40,0.6), transparent)",
                            }}
                        />
                        {/* Horizontal ray */}
                        <div
                            style={{
                                position: "absolute",
                                width: sparkle.size * 2.5,
                                height: 2,
                                left: -sparkle.size * 0.75,
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "linear-gradient(to right, transparent, rgba(180,120,40,0.6), transparent)",
                            }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

/**
 * Animated section divider line
 */
export function AnimatedDivider() {
    return (
        <div className="relative h-px w-full overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/50 to-transparent"
                animate={{
                    x: ["-100%", "100%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div className="absolute inset-0 bg-border" />
        </div>
    );
}
