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

        // 3. Scroll Indicator Entrance
        gsap.to(".scroll-indicator", {
            opacity: 1,
            duration: 1,
            delay: 1.5, // Total delay relative to start
            ease: "power2.out"
        });

        // 4. Scroll Dot Loop
        gsap.to(".scroll-dot", {
            y: 12,
            opacity: 0,
            duration: 1.5,
            repeat: -1,
            ease: "power1.inOut",
        });

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

            {/* Minimalist "Mouse" Scroll Indicator (GSAP) */}
            <div
                className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0"
            >
                <div className="w-[22px] h-[36px] rounded-full border-2 border-cream/30 flex justify-center pt-2">
                    <div className="scroll-dot w-1 h-1 bg-cream rounded-full" />
                </div>
            </div>
        </section>
    );
}

