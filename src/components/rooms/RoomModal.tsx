"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Snowflake, Wifi, Droplets, UtensilsCrossed, TreePalm, Sun, ChevronLeft, ChevronRight, X } from "lucide-react";
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

/** Backdrop animation */
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

/** Modal content animation */
const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

/** Image slide animation */
const imageVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.2 },
    }),
};

interface RoomModalProps {
    room: Room | null;
    isOpen: boolean;
    onClose: () => void;
}

export function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Reset image index when room changes
    useEffect(() => {
        setActiveImageIndex(0);
    }, [room]);

    const nextImage = useCallback(() => {
        if (!room) return;
        setDirection(1);
        setActiveImageIndex((prev) =>
            prev === room.images.length - 1 ? 0 : prev + 1
        );
    }, [room]);

    const prevImage = useCallback(() => {
        if (!room) return;
        setDirection(-1);
        setActiveImageIndex((prev) =>
            prev === 0 ? room.images.length - 1 : prev - 1
        );
    }, [room]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowRight":
                    nextImage();
                    break;
                case "ArrowLeft":
                    prevImage();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, nextImage, prevImage]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Handle swipe gestures
    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 50) {
            prevImage();
        } else if (info.offset.x < -50) {
            nextImage();
        }
    };

    if (!room) return null;

    const activeImage = room.images[activeImageIndex];
    const hasMultiple = room.images.length > 1;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Scrollable content */}
                        <div className="max-h-[90vh] overflow-y-auto">
                            {/* Image Section with swipe */}
                            <div
                                className="relative aspect-[16/10] md:aspect-[2/1] bg-charcoal overflow-hidden"
                            >
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={activeImageIndex}
                                        custom={direction}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        drag={hasMultiple ? "x" : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={handleDragEnd}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={activeImage}
                                            alt={`${room.name} - Photo ${activeImageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 90vw, 900px"
                                            quality={85}
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                {hasMultiple && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                {/* Image dots */}
                                {hasMultiple && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {room.images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setDirection(idx > activeImageIndex ? 1 : -1);
                                                    setActiveImageIndex(idx);
                                                }}
                                                className={cn(
                                                    "w-2 h-2 rounded-full transition-all",
                                                    idx === activeImageIndex
                                                        ? "bg-cream w-6"
                                                        : "bg-cream/40 hover:bg-cream/60"
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

