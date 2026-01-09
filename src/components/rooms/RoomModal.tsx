"use client";

import { useState } from "react";
import Image from "next/image";
import { Snowflake, Wifi, Droplets, UtensilsCrossed, TreePalm, Sun } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Room, getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AMENITY_ICONS: Record<string, React.ElementType> = {
    AC: Snowflake,
    WiFi: Wifi,
    "Hot Water": Droplets,
    Kitchenette: UtensilsCrossed,
    Veranda: TreePalm,
    Terrace: Sun,
};

interface RoomModalProps {
    room: Room | null;
    isOpen: boolean;
    onClose: () => void;
}

export function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    if (!room) return null;

    const activeImage = room.images[activeImageIndex];

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-5xl w-[95vw] h-[90vh] max-h-[800px] p-0 gap-0 bg-card overflow-hidden">
                {/* Screen reader title */}
                <DialogTitle className="sr-only">{room.name}</DialogTitle>
                <DialogDescription className="sr-only">
                    View details and photos of {room.name}
                </DialogDescription>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] h-full">
                    {/* Left: Image Gallery */}
                    <div className="relative bg-charcoal flex flex-col">
                        {/* Main Image */}
                        <div className="relative flex-1 min-h-[300px]">
                            <Image
                                src={activeImage}
                                alt={`${room.name} - Photo ${activeImageIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                quality={80}
                                priority
                            />

                            {/* Image counter */}
                            <div className="absolute bottom-4 left-4 bg-charcoal/70 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-cream text-sm font-mono">
                                    {activeImageIndex + 1} / {room.images.length}
                                </span>
                            </div>

                            {/* Navigation Arrows */}
                            {room.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() =>
                                            setActiveImageIndex((prev) =>
                                                prev === 0 ? room.images.length - 1 : prev - 1
                                            )
                                        }
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/70 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-charcoal transition-colors"
                                        aria-label="Previous image"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveImageIndex((prev) =>
                                                prev === room.images.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/70 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-charcoal transition-colors"
                                        aria-label="Next image"
                                    >
                                        →
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {room.images.length > 1 && (
                            <div className="flex gap-2 p-4 bg-charcoal/90">
                                {room.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={cn(
                                            "relative w-16 h-12 rounded overflow-hidden border-2 transition-all",
                                            idx === activeImageIndex
                                                ? "border-teal"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                        )}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="64px"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Details Panel */}
                    <div className="flex flex-col p-6 lg:p-8 overflow-y-auto">
                        {/* Room Name & Badge */}
                        <div className="mb-6">
                            <Badge variant="outline" className="mb-2">
                                Rammed Earth
                            </Badge>
                            <h2 className="font-display text-3xl lg:text-4xl text-foreground">
                                {room.name}
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {room.description}
                        </p>

                        {/* Amenities */}
                        <div className="mb-8">
                            <h3 className="text-sm font-medium text-foreground mb-4">
                                Amenities
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {room.amenities.map((amenity) => {
                                    const Icon = AMENITY_ICONS[amenity] || Snowflake;
                                    return (
                                        <div
                                            key={amenity}
                                            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary"
                                        >
                                            <Icon className="w-5 h-5 text-primary" />
                                            <span className="text-xs text-foreground text-center">
                                                {amenity}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <Button asChild size="lg" className="w-full">
                                <a
                                    href={getWhatsAppUrl(room.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Inquire via WhatsApp
                                </a>
                            </Button>
                            <p className="text-xs text-muted-foreground text-center mt-3">
                                Pricing shared upon inquiry
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
