"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/lib/constants";
import { ScrambleText } from "@/components/common/ScrambleText";
import { cn } from "@/lib/utils";

// Lazy load Leaflet map
const LeafletMap = dynamic(() => import("./MapComponent"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-secondary animate-pulse rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Loading map...</span>
        </div>
    ),
});

type MapMode = "illustrated" | "explore" | "directions";

export function Location() {
    const [mapMode, setMapMode] = useState<MapMode>("illustrated");
    const { lat, lng } = SITE_CONFIG.location.coordinates;

    return (
        <section id="location" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="font-mono text-sm text-muted-foreground">03</span>
                    <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground">
                        Find Your Way
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-xl">
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

                    {/* Right: Map with 3-way Toggle */}
                    <div className="space-y-4">
                        {/* Map Toggle */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setMapMode("illustrated")}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    mapMode === "illustrated"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Property Map
                            </button>
                            <button
                                onClick={() => setMapMode("explore")}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    mapMode === "explore"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Explore Area
                            </button>
                            <button
                                onClick={() => setMapMode("directions")}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    mapMode === "directions"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Get Directions
                            </button>
                        </div>

                        {/* Map Container */}
                        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
                            {mapMode === "illustrated" && (
                                <Image
                                    src="/images/illustrated-map.png"
                                    alt="Illustrated map of Anpu property"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    quality={90}
                                />
                            )}
                            {mapMode === "explore" && <LeafletMap />}
                            {mapMode === "directions" && (
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzI3LjQiTiA3OcKwNTEnMDcuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Anpu location on Google Maps"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
