"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Story() {
    const [isHovered, setIsHovered] = useState(false);

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

                {/* Content Grid - items-start to prevent vertical centering gap */}
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

                    {/* Right: Stacked animated images */}
                    <div
                        className="scroll-fade-right relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Back image (shows on hover) */}
                        <Image
                            src="/images/exterior/DSC08213 copy.jpg"
                            alt="Detail of rammed earth texture"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            quality={75}
                        />

                        {/* Front image (fades out on hover) */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: isHovered ? 0 : 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Image
                                src="/images/exterior/DSC08237 copy.jpg"
                                alt="Interior of Anpu showing rammed earth walls"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={75}
                            />
                        </motion.div>

                        {/* Badge */}
                        <Badge
                            variant="outline"
                            className="absolute bottom-4 right-4 bg-cream/90 text-charcoal border-0 z-10"
                        >
                            {isHovered ? "Earth Texture" : "Rammed Earth"}
                        </Badge>

                        {/* Hover hint */}
                        <div className="absolute bottom-4 left-4 text-xs text-cream/70 bg-charcoal/50 backdrop-blur-sm px-2 py-1 rounded z-10">
                            Hover to explore
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
