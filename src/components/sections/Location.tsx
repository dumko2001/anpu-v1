"use client";

import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/lib/constants";

// Lazy load the map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import("./MapComponent"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-secondary animate-pulse rounded-lg" />
    ),
});

export function Location() {
    return (
        <section id="location" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="font-mono text-sm text-muted-foreground">03</span>
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground">
                        Where Earth
                        <br />
                        Meets Sky
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Nearby Places */}
                    <div>
                        <ul className="space-y-6">
                            {SITE_CONFIG.nearbyPlaces.map((place) => (
                                <li key={place.name} className="flex items-center gap-4">
                                    <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                                    <span className="font-display text-xl text-foreground">
                                        {place.name}
                                    </span>
                                    <span className="text-muted-foreground">
                                        ({place.distance})
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Coordinates */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <p className="font-mono text-primary text-lg">
                                {SITE_CONFIG.location.coordinates.display}
                            </p>
                            <a
                                href={`https://www.google.com/maps?q=${SITE_CONFIG.location.coordinates.lat},${SITE_CONFIG.location.coordinates.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                            >
                                Get Directions →
                            </a>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </section>
    );
}
