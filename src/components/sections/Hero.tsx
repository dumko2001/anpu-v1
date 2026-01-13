"use client";

/**
 * Hero Section with Staggered Text Animation
 * 
 * Features:
 * - Framer Motion staggered letter reveal for "ANPU"
 * - Tagline slides up after letters complete
 * - Existing parallax and breathing effects preserved
 * - Reduced motion support via CSS
 * 
 * @maintainer Adjust STAGGER_DELAY and animation durations as needed
 */

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

/** Delay between each letter animation in seconds */
const STAGGER_DELAY = 0.08;

/** Animation variants for container (orchestrates stagger) */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: STAGGER_DELAY,
            delayChildren: 0.2, // Wait for image to settle
        },
    },
};

/** Animation variants for each letter */
const letterVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

/** Animation for tagline (appears after letters) */
const taglineVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: STAGGER_DELAY * 4 + 0.4, // After all 4 letters + buffer
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

/** Animation for scroll indicator */
const scrollIndicatorVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: STAGGER_DELAY * 4 + 0.8, // After tagline
        },
    },
};

const HERO_LETTERS = ["A", "N", "P", "U"];

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/exterior/DSC08512 copy.jpg"
                alt="Anpu Rammed Earth Retreat at twilight"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDESH/2gAMAwEAAhEDEQA/AKuo6jcXOpT3U7bpJnLscY5NW9O6t1C002C1SWMxQxrGpKE8Acc0pVS0bqC9u1P/2Q=="
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)",
                }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Staggered ANPU text */}
                <motion.h1
                    className="hero-text font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-light tracking-tight leading-none select-none flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    aria-label="ANPU"
                >
                    {HERO_LETTERS.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Tagline with delayed slide-up */}
                <motion.p
                    className="mt-4 font-display text-lg md:text-xl tracking-[0.3em] uppercase text-cream/90"
                    variants={taglineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {SITE_CONFIG.tagline}
                </motion.p>
            </div>

            {/* Location Badge */}
            <div className="absolute top-20 right-6 z-10">
                <Badge
                    variant="outline"
                    className="bg-charcoal/20 backdrop-blur-sm border-cream/40 text-cream px-4 py-2 text-sm font-sans"
                >
                    {SITE_CONFIG.location.state}
                </Badge>
            </div>

            {/* Scroll Indicator with fade-in animation */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                variants={scrollIndicatorVariants}
                initial="hidden"
                animate="visible"
            >
                <span className="text-cream/70 text-sm tracking-widest uppercase font-sans">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-cream/70 to-transparent breathing" />
            </motion.div>
        </section>
    );
}

