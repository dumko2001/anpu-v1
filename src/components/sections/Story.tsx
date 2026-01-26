"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Story() {
    const [showSecond, setShowSecond] = useState(false);

    return (
        <section id="story" className="pt-16 pb-8 px-6 bg-secondary overflow-hidden">
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
                            to the land. Every wall is cob—60cm thick, breathing
                            with the seasons, cool in summer, warm in winter.
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                            The cob walls breathe, regulate temperature naturally, and
                            age with graceful patina — a living testament to architecture in
                            harmony with land.
                        </p>

                        <p className="font-display text-lg text-foreground">
                            — The Architect, 2025
                        </p>
                    </div>

                    {/* Right: Hover/tap to reveal second image */}
                    <div
                        className="scroll-fade-right relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                        onMouseEnter={() => setShowSecond(true)}
                        onMouseLeave={() => setShowSecond(false)}
                        onClick={() => setShowSecond(!showSecond)}
                    >
                        {/* Back image (texture) */}
                        <Image
                            src="/images/exterior/DSC08213 copy.jpg"
                            alt="Cob detail texture"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            quality={75}
                        />

                        {/* Front image (interior) - fades on hover/tap */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: showSecond ? 0 : 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Image
                                src="/images/exterior/DSC08237 copy.jpg"
                                alt="Interior of Anpu"
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
                            {showSecond ? "Earth Texture" : "Interior"}
                        </Badge>

                        {/* Mobile hint */}
                        <div className="absolute bottom-4 left-4 text-xs text-cream/70 bg-charcoal/50 backdrop-blur-sm px-2 py-1 rounded z-10 lg:hidden">
                            Tap to explore
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="mt-8 pt-6 border-t border-border scroll-fade-up">
                    <p className="text-center text-muted-foreground tracking-widest uppercase text-sm">
                        Sustainable · Conscious · Timeless
                    </p>
                </div>
            </div>
        </section>
    );
}
