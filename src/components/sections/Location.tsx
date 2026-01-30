"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { ScrambleText } from "@/components/common/ScrambleText";

export function Location() {
    const { lat, lng } = SITE_CONFIG.location.coordinates;

    return (
        <section id="location" className="py-16 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground">
                        Find Your Way
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                        Nestled in the bioregion near Auroville, where ancient traditions
                        meet conscious living.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Nearby Places */}
                    <div>
                        <h3 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wider">
                            Nearby
                        </h3>
                        <ul className="space-y-5">
                            {SITE_CONFIG.nearbyPlaces.map((place) => (
                                <li key={place.name} className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                                    <span className="font-display text-xl text-foreground flex-1">
                                        {place.name}
                                    </span>
                                    <span className="text-muted-foreground text-sm">
                                        {place.distance}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Coordinates with scramble effect */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                                GPS Coordinates
                            </p>
                            <p className="font-mono text-primary text-lg">
                                <ScrambleText text={SITE_CONFIG.location.coordinates.display} />
                            </p>

                            {/* Route Note */}
                            {SITE_CONFIG.location.routeNote && (
                                <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        <span className="text-primary font-medium block mb-1">Getting Here</span>
                                        {SITE_CONFIG.location.routeNote}
                                    </p>
                                </div>
                            )}

                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                            >
                                Open in Google Maps →
                            </a>
                        </div>
                    </div>

                    {/* Right: Map (Direct Google Maps Embed) */}
                    <div className="space-y-4">
                        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.656094246328!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU5JzE5LjYiTiA3OcKwNDcnMzIuOSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Anpu location on Google Maps"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
