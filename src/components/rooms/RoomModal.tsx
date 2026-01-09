"use client";

import { useState } from "react";
import Image from "next/image";
import { Snowflake, Wifi, Droplets, UtensilsCrossed, TreePalm, Sun, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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

    const nextImage = () => {
        setActiveImageIndex((prev) =>
            prev === room.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setActiveImageIndex((prev) =>
            prev === 0 ? room.images.length - 1 : prev - 1
        );
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl w-[90vw] p-0 gap-0 bg-card overflow-hidden rounded-xl">
                {/* Accessibility */}
                <DialogTitle className="sr-only">{room.name}</DialogTitle>
                <DialogDescription className="sr-only">
                    View details and photos of {room.name}
                </DialogDescription>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors shadow-lg"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Image at top, content below - cleaner vertical layout */}
                <div className="flex flex-col">
                    {/* Image Section */}
                    <div className="relative aspect-[16/9] bg-charcoal">
                        <Image
                            src={activeImage}
                            alt={`${room.name} - Photo ${activeImageIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 90vw, 900px"
                            quality={85}
                            priority
                        />

                        {/* Navigation Arrows */}
                        {room.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-charcoal hover:bg-cream transition-colors shadow-lg"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 flex items-center justify-center text-charcoal hover:bg-cream transition-colors shadow-lg"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        {/* Image dots */}
                        {room.images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {room.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={cn(
                                            "w-2 h-2 rounded-full transition-all",
                                            idx === activeImageIndex
                                                ? "bg-cream w-6"
                                                : "bg-cream/50 hover:bg-cream/80"
                                        )}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-10">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                                <span className="text-xs text-primary font-mono uppercase tracking-wider">
                                    Rammed Earth
                                </span>
                                <h2 className="font-display text-3xl lg:text-4xl text-foreground mt-1">
                                    {room.name}
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {room.description}
                        </p>

                        {/* Amenities row */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {room.amenities.map((amenity) => {
                                const Icon = AMENITY_ICONS[amenity] || Snowflake;
                                return (
                                    <div
                                        key={amenity}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm"
                                    >
                                        <Icon className="w-4 h-4 text-primary" />
                                        <span className="text-foreground">{amenity}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA row */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Button asChild size="lg" className="w-full sm:w-auto px-8">
                                <a
                                    href={getWhatsAppUrl(room.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Inquire on WhatsApp
                                </a>
                            </Button>
                            <span className="text-sm text-muted-foreground">
                                Rates shared upon inquiry
                            </span>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
