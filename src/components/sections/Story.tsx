"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const VISION_IMAGES = [
    { src: "/images/exterior/DSC08237 copy.jpg", alt: "Interior of Anpu", label: "Interior" },
    { src: "/images/exterior/DSC08213 copy.jpg", alt: "Rammed earth texture", label: "Texture" },
];

const CYCLE_DURATION = 4000; // 4 seconds per image

export function Story() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-cycle images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % VISION_IMAGES.length);
        }, CYCLE_DURATION);
        return () => clearInterval(timer);
    }, []);

    // Handle tap/click to manually advance
    const handleTap = () => {
        setCurrentIndex((prev) => (prev + 1) % VISION_IMAGES.length);
    };

    return (
        <section id="story" className="py-16 px-6 bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-6 scroll-fade-up">
                    <span className="font-mono text-sm text-muted-foreground">02</span>
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground kinetic-heading">
                        The Vision
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left: Quote and Text */}
                    <div className="scroll-fade-left">
                        <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6">
                            {"\"Architecture should emerge from the earth it stands on\""}
                        </blockquote>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Born from the same hands that shaped Adishakti Theatre, Anpu
                            stands as a testament to what happens when architecture listens
                            to the land. Every wall is compressed earth—60cm thick, breathing
                            with the seasons, cool in summer, warm in winter.
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                            The rammed earth walls breathe, regulate temperature naturally, and
                            age with graceful patina — a living testament to architecture in
                            harmony with land.
                        </p>

                        <p className="font-display text-lg text-foreground">
                            — The Architect, 2025
                        </p>
                    </div>

                    {/* Right: Auto-cycling slideshow */}
                    <div
                        className="scroll-fade-right relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                        onClick={handleTap}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={VISION_IMAGES[currentIndex].src}
                                    alt={VISION_IMAGES[currentIndex].alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    quality={75}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Badge with current label */}
                        <Badge
                            variant="outline"
                            className="absolute bottom-4 right-4 bg-cream/90 text-charcoal border-0 z-10"
                        >
                            {VISION_IMAGES[currentIndex].label}
                        </Badge>

                        {/* Progress dots */}
                        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                            {VISION_IMAGES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-cream w-6" : "bg-cream/50"
                                        }`}
                                    aria-label={`View image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="mt-10 pt-6 border-t border-border scroll-fade-up">
                    <p className="text-center text-muted-foreground tracking-widest uppercase text-sm">
                        Sustainable · Conscious · Timeless
                    </p>
                </div>
            </div>
        </section>
    );
}

