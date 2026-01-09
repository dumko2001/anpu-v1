"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ROOMS, type Room } from "@/lib/constants";
import { RoomModal } from "@/components/rooms/RoomModal";

export function Rooms() {
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    return (
        <>
            <section id="rooms" className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <span className="font-mono text-sm text-muted-foreground">01</span>
                        <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground">
                            Our Rooms
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-xl text-lg">
                            Four unique spaces, each crafted with rammed earth walls and
                            thoughtful design.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
                        {ROOMS.map((room, index) => (
                            <RoomCard
                                key={room.id}
                                room={room}
                                index={index}
                                onClick={() => setSelectedRoom(room)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Room Modal */}
            <RoomModal
                room={selectedRoom}
                isOpen={!!selectedRoom}
                onClose={() => setSelectedRoom(null)}
            />
        </>
    );
}

function RoomCard({
    room,
    index,
    onClick,
}: {
    room: Room;
    index: number;
    onClick: () => void;
}) {
    // First card (Suite) is larger
    const isLarge = index === 0;

    return (
        <button
            onClick={onClick}
            className={cn(
                "group relative overflow-hidden rounded-lg cursor-pointer text-left",
                "transition-all duration-500 ease-out",
                "hover:shadow-xl hover:z-10",
                // Grid positioning
                isLarge
                    ? "lg:col-span-7 lg:row-span-2 aspect-[4/3] lg:aspect-auto lg:h-full"
                    : "lg:col-span-5 aspect-[4/3]",
                // Border accent on specific side
                room.borderSide === "left" && "border-l-4 border-l-teal",
                room.borderSide === "top" && "border-t-4 border-t-teal",
                room.borderSide === "right" && "border-r-4 border-r-teal",
                room.borderSide === "bottom" && "border-b-4 border-b-teal"
            )}
            style={{
                transform: `rotate(${room.cardRotation})`,
            }}
            aria-label={`View ${room.name}`}
        >
            {/* Image */}
            <Image
                src={room.images[0]}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                quality={75}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Room number */}
                <span className="font-mono text-xs text-cream/60">
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Room name */}
                <h3 className="font-display text-2xl md:text-3xl text-cream mt-1">
                    {room.name}
                </h3>

                {/* Amenities preview */}
                <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {room.amenities.slice(0, 3).map((amenity) => (
                        <span
                            key={amenity}
                            className="text-xs text-cream/70 bg-cream/10 px-2 py-1 rounded"
                        >
                            {amenity}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-teal/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                <span className="text-cream text-sm">→</span>
            </div>
        </button>
    );
}
