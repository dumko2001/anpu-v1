"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Story() {
    const [showSecond, setShowSecond] = useState(false);

    return (
        <section id="story" className="pt-12 pb-8 px-6 bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-2 scroll-fade-up">
                    <span className="font-mono text-sm text-muted-foreground">02</span>
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground kinetic-heading">
                        The Vision
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Quote and Text */}
                    <div className="scroll-fade-up flex flex-col gap-6">
                        {/* Opening Statement - Hero Style (Reduced Size) */}
                        <h3 className="font-display italic text-2xl md:text-3xl text-foreground leading-relaxed text-center lg:text-left">
                            Four rooms in a quiet corner of the Auroville bioregion, built by the architect who designed Adishakti Theatre. He believes walls should breathe.
                        </h3>

                        {/* Body Paragraphs - Practical Details (Reduced Spacing) */}
                        <div className="space-y-4 text-lg text-muted-foreground font-sans leading-relaxed text-left">
                            <p>
                                The rooms stay cool without AC (though it's there if you want it). The walls are thick enough to hold silence. The trees are loud. The Wi-Fi works. The insects are real.
                            </p>

                            <p>
                                Guests come here when they need to stop performing.<br />
                                When they want to sit on a veranda and stare at nothing for four days.<br />
                                When they're tired of guesthouses that feel like summer camp.<br />
                                When they need a place that doesn't ask anything of them.
                            </p>

                            <p>
                                Each room is named after Tamil poet Subramania Bharati's definitions of love, wisdom, nourishment, and beauty. Sreenivasan built this place to mean something.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image + Closing Statement */}
                    <div className="flex flex-col gap-6 -mt-2 lg:-mt-4">
                        {/* Image Container */}
                        <div
                            className="scroll-fade-right relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                            onMouseEnter={() => setShowSecond(true)}
                            onMouseLeave={() => setShowSecond(false)}
                            onClick={() => setShowSecond(!showSecond)}
                        >
                            {/* Back image (texture) */}
                            <Image
                                src="/images/optimized/exterior/detail-texture.jpg"
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
                                    src="/images/optimized/exterior/anbu-1.jpg"
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

                        {/* Closing Statement - Moved to right column (Impactful but balanced) */}
                        <p className="font-display italic text-2xl md:text-3xl text-foreground text-center leading-normal scroll-fade-up">
                            If you're looking for quiet, space, and kindness,<br />
                            this is exactly it !
                        </p>
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
