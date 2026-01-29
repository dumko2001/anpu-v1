"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ROOMS, type Room } from "@/lib/constants";
import { RoomModal } from "@/components/rooms/RoomModal";
import { SectionParticles } from "@/components/effects/SectionEffects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0); // Start with first room
    const isDragging = useRef(false);
    const startX = useRef(0);

    // Initial setup and updates
    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".room-card-3d");

        // Calculate positions based on active index with WRAPPING
        const len = cards.length;

        cards.forEach((card, i) => {
            // Circular Difference Logic
            // Example: active=0, len=4. 
            // i=0 -> diff=0
            // i=1 -> diff=1
            // i=2 -> diff=2
            // i=3 -> diff=3 -> becomes -1
            let diff = (i - activeIndex) % len;
            if (diff < 0) diff += len; // ensure positive modulo first
            if (diff > len / 2) diff -= len; // wrap around

            const isCenter = diff === 0;

            // Layout Configuration
            const xOffset = diff * 320; // 320px spacing
            const zOffset = isCenter ? 0 : Math.abs(diff) * -150;
            const rotateY = isCenter ? 0 : diff * -25; // Rotate towards center
            const scale = isCenter ? 1.1 : 1 - Math.abs(diff) * 0.15;
            const opacity = 1 - Math.abs(diff) * 0.2; // Fade out further items
            const zIndex = 100 - Math.abs(diff);

            gsap.to(card, {
                x: xOffset,
                z: zOffset,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity > 0 ? opacity : 0,
                zIndex: zIndex,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
            });
        });

    }, { dependencies: [activeIndex], scope: containerRef });

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % ROOMS.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + ROOMS.length) % ROOMS.length);
    };

    const handleCardClick = (index: number, room: Room) => {
        if (index === activeIndex) {
            setSelectedRoom(room);
        } else {
            setActiveIndex(index);
        }
    };

    // Simple Drag Logic
    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const diff = e.clientX - startX.current;
        if (diff > 50) handlePrev();
        if (diff < -50) handleNext();
    };

    return (
        <>
            <section id="rooms" className="relative py-16 px-6 bg-background overflow-hidden min-h-[800px] flex flex-col justify-center">
                {/* Ambient particles */}
                <SectionParticles color="charcoal" count={20} opacity={0.3} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    {/* Section Header */}
                    <div className="mb-14 text-center scroll-fade-up">
                        <span className="font-mono text-sm text-muted-foreground">01</span>
                        <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground kinetic-heading">
                            Our Rooms
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Swipe or click to explore the spaces
                        </p>
                    </div>

                    {/* Mobile: Grid (Unchanged) */}
                    <div className="md:hidden grid grid-cols-1 gap-6 max-w-xl mx-auto">
                        {ROOMS.map((room, index) => (
                            <div key={room.id} className="group">
                                <button
                                    onClick={() => setSelectedRoom(room)}
                                    className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-pointer text-left border border-border/50 transition-all hover:shadow-lg"
                                >
                                    <Image
                                        src={room.images[0]}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-display">{room.name}</h3>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: GSAP 3D Carousel */}
                    <div
                        ref={containerRef}
                        className="hidden md:flex relative h-[500px] items-center justify-center perspective-[1000px] touch-none"
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerUp}
                        onPointerLeave={handlePointerUp}
                    >
                        {ROOMS.map((room, index) => (
                            <div
                                key={room.id}
                                onClick={() => handleCardClick(index, room)}
                                className="room-card-3d absolute w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-white/10 bg-charcoal"
                                style={{
                                    // Initial styles to prevent flash
                                    transform: 'translateZ(-500px)',
                                    opacity: 0
                                }}
                            >
                                <Image
                                    src={room.images[0]}
                                    alt={room.name}
                                    fill
                                    className="object-cover pointer-events-none"
                                    sizes="340px"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                <div className="absolute top-6 left-6 right-6 border-l-2 border-cream/50 pl-4 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                    <span className="text-cream/80 text-xs tracking-widest uppercase">Explore</span>
                                </div>

                                <div className="absolute bottom-8 left-8">
                                    <span className="text-cream/60 font-mono text-sm">0{index + 1}</span>
                                    <h3 className="text-3xl font-display text-white mt-1 uppercase tracking-wide">
                                        {room.name}
                                    </h3>
                                    <div className="flex gap-2 mt-3">
                                        {room.amenities.slice(0, 2).map(a => (
                                            <span key={a} className="text-[10px] uppercase tracking-wider text-cream/70 bg-white/10 px-2 py-1 rounded-sm backdrop-blur-sm">
                                                {a}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Controls */}
                    <div className="hidden md:flex justify-center gap-4 mt-8">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full border border-border/50 hover:bg-muted/50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full border border-border/50 hover:bg-muted/50 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </section>

            <RoomModal
                room={selectedRoom}
                isOpen={!!selectedRoom}
                onClose={() => setSelectedRoom(null)}
            />
        </>
    );
}

// Separate component not strictly needed if inlining for GSAP access, 
// as GSAP needs direct DOM refs.
