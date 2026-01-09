import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Story() {
    return (
        <section id="story" className="py-24 px-6 bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 scroll-fade-up">
                    <span className="font-mono text-sm text-muted-foreground">02</span>
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground kinetic-heading">
                        The Vision
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Quote and Text */}
                    <div className="scroll-fade-left">
                        <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed mb-8">
                            {'"Architecture should emerge from the earth it stands on"'}
                        </blockquote>

                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Anpu was envisioned and built by the architect behind Adishakti
                            Theatre and several landmark structures in the Auroville bioregion.
                            Drawing from decades of experience with sustainable Tamil Nadu
                            building traditions, every curve and corner speaks to a philosophy:
                            that shelter should emerge from the earth it stands on.
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-8">
                            The rammed earth walls breathe, regulate temperature naturally, and
                            age with graceful patina — a living testament to architecture in
                            harmony with land.
                        </p>

                        <p className="font-display text-lg text-foreground">
                            — The Architect, 2025
                        </p>
                    </div>

                    {/* Right: Images with parallax */}
                    <div className="relative scroll-fade-right">
                        {/* Main Image */}
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden hover-scale">
                            <Image
                                src="/images/exterior/DSC08237 copy.jpg"
                                alt="Interior of Anpu showing rammed earth walls"
                                fill
                                className="object-cover parallax-image"
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

                        {/* Overlapping Second Image */}
                        <div className="absolute -bottom-8 -left-8 w-2/5 aspect-square rounded-lg overflow-hidden shadow-xl hidden lg:block hover-lift">
                            <Image
                                src="/images/exterior/DSC08213 copy.jpg"
                                alt="Detail of rammed earth texture"
                                fill
                                className="object-cover"
                                sizes="200px"
                                quality={70}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="mt-24 pt-8 border-t border-border scroll-fade-up">
                    <p className="text-center text-muted-foreground tracking-widest uppercase text-sm">
                        Sustainable · Conscious · Timeless
                    </p>
                </div>
            </div>
        </section>
    );
}
