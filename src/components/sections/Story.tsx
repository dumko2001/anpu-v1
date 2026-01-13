import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Story() {
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

                    {/* Right: Images */}
                    <div className="scroll-fade-right">
                        {/* Main Image */}
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden hover-scale">
                            <Image
                                src="/images/exterior/DSC08237 copy.jpg"
                                alt="Interior of Anpu showing rammed earth walls"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={75}
                            />
                            <Badge
                                variant="outline"
                                className="absolute bottom-4 right-4 bg-cream/90 text-charcoal border-0"
                            >
                                Rammed Earth
                            </Badge>
                        </div>

                        {/* Second Image - now relative, not overlapping to avoid space issues */}
                        <div className="mt-4 relative w-2/3 aspect-[4/3] rounded-lg overflow-hidden shadow-xl hidden lg:block hover-lift">
                            <Image
                                src="/images/exterior/DSC08213 copy.jpg"
                                alt="Detail of rammed earth texture"
                                fill
                                className="object-cover"
                                sizes="300px"
                                quality={70}
                            />
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

