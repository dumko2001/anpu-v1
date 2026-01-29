"use client";

/**
 * Lightbox Component
 * 
 * Fullscreen image viewer with Framer Motion animations.
 * Features:
 * - Shared element transitions for smooth open/close
 * - Keyboard navigation (arrows, escape)
 * - Swipe gestures for mobile
 * - Backdrop blur effect
 * 
 * @maintainer Customize animation durations and easing in variants
 */

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/lib/galleryData";

interface LightboxProps {
    images: GalleryImage[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

/** Backdrop animation */
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 }
    },
};

/** Image container animation */
const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

/** Swipe threshold in pixels */
const SWIPE_THRESHOLD = 50;

export function Lightbox({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
}: LightboxProps) {
    const currentImage = images[currentIndex];
    const hasMultiple = images.length > 1;

    // Navigate to next image
    const goNext = useCallback(() => {
        if (currentIndex < images.length - 1) {
            onNavigate(currentIndex + 1);
        } else {
            onNavigate(0); // Loop to start
        }
    }, [currentIndex, images.length, onNavigate]);

    // Navigate to previous image
    const goPrev = useCallback(() => {
        if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
        } else {
            onNavigate(images.length - 1); // Loop to end
        }
    }, [currentIndex, images.length, onNavigate]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowRight":
                    goNext();
                    break;
                case "ArrowLeft":
                    goPrev();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, goNext, goPrev]);

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
        if (info.offset.x > SWIPE_THRESHOLD) {
            goPrev();
        } else if (info.offset.x < -SWIPE_THRESHOLD) {
            goNext();
        }
    };

    if (!currentImage) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm cursor-pointer"
                        onClick={onClose}
                    />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation arrows */}
                    {hasMultiple && (
                        <>
                            <button
                                onClick={goPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors md:left-8"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={goNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors md:right-8"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Image container with swipe support */}
                    <motion.div
                        className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-8 flex items-center justify-center"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        drag={hasMultiple ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            fill
                            className="object-contain select-none pointer-events-none"
                            sizes="(max-width: 768px) 100vw, 90vw"
                            quality={90}
                            priority
                        />
                    </motion.div>

                    {/* Caption and indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        {/* Dot indicators */}
                        {hasMultiple && (
                            <div className="flex gap-2">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => onNavigate(idx)}
                                        className={cn(
                                            "w-2 h-2 rounded-full transition-all",
                                            idx === currentIndex
                                                ? "bg-cream w-6"
                                                : "bg-cream/40 hover:bg-cream/60"
                                        )}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Caption */}
                        {currentImage.caption && (
                            <p className="text-cream/80 text-sm md:text-base text-center max-w-md px-4">
                                {currentImage.caption}
                            </p>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
