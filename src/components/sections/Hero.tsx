"use client";

import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { FloatingParticles, ShootingStars, AmbientGlow } from "@/components/effects/HeroAmbient";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HERO_LETTERS = ["A", "N", "P", "U"];

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);

    // GSAP Text Reveal Animation
    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.2 });

        // 1. Reveal Letters (Staggered)
        const letters = textRef.current?.children;
        if (letters) {
            tl.fromTo(letters,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );
        }

        // 2. Reveal Tagline (Slide Up)
        if (taglineRef.current) {
            tl.fromTo(taglineRef.current,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                },
                "-=0.6" // Overlap with letter animation
            );
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/optimized/exterior/hero-main.jpg"
                alt="Anpu Cob Retreat at twilight"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={90}
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

            {/* Ambient Effects - z-10 to appear on top of gradient, below text */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <FloatingParticles />
                <ShootingStars />
                <AmbientGlow />
            </div>

            {/* Content - z-20 to appear above effects */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">

                {/* GSAP Staggered ANPU text */}
                <h1
                    ref={textRef}
                    className="hero-text font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-light tracking-tight leading-none select-none flex overflow-hidden"
                    aria-label="ANPU"
                >
                    {HERO_LETTERS.map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block"
                        >
                            {letter}
                        </span>
                    ))}
                </h1>

                {/* Tagline with delayed slide-up */}
                <p
                    ref={taglineRef}
                    className="mt-4 font-display text-lg md:text-xl tracking-[0.3em] uppercase text-cream/90"
                >
                    {SITE_CONFIG.tagline}
                </p>
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

            {/* Scroll Indicator (Kept as Framer Motion for simple infinite loop) */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-cream/70 text-sm tracking-widest uppercase font-sans">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-cream/70 to-transparent breathing" />
            </motion.div>
        </section>
    );
}

