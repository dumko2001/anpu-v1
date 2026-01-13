"use client";

/**
 * Gallery Section
 * 
 * Bento-style photo gallery on the homepage.
 * Features:
 * - Category filter tabs with animated indicator
 * - Responsive bento grid layout
 * - Click to open lightbox
 * - Scroll reveal animations
 * 
 * @maintainer To add images, update galleryData.ts
 */

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    GALLERY_IMAGES,
    GALLERY_CATEGORIES,
    filterGalleryImages,
    type GalleryCategory,
    type GalleryImage,
} from "@/lib/galleryData";
import { Lightbox } from "@/components/gallery/Lightbox";

/** Animation for filter tab indicator */
const tabIndicatorVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

/** Stagger animation for gallery items */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

export function Gallery() {
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filteredImages = filterGalleryImages(GALLERY_IMAGES, activeCategory);

    // Open lightbox at specific index
    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    }, []);

    // Close lightbox
    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    // Navigate within lightbox
    const navigateLightbox = useCallback((index: number) => {
        setLightboxIndex(index);
    }, []);

    return (
        <>
            <section id="gallery" className="py-24 px-6 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-8 scroll-fade-up">
                        <span className="font-mono text-sm text-muted-foreground">04</span>
                        <h2 className="font-display text-5xl md:text-6xl mt-2 text-foreground kinetic-heading">
                            Gallery
                        </h2>
                        <p className="mt-3 text-muted-foreground max-w-xl">
                            Rammed earth textures, natural light, and serene spaces.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {GALLERY_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    activeCategory === cat.id
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground bg-background"
                                )}
                            >
                                {/* Animated background for active tab */}
                                <AnimatePresence>
                                    {activeCategory === cat.id && (
                                        <motion.span
                                            className="absolute inset-0 bg-primary rounded-full -z-10"
                                            layoutId="activeTab"
                                            variants={tabIndicatorVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Bento Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={activeCategory} // Re-animate on category change
                    >
                        {filteredImages.map((image, index) => (
                            <GalleryItem
                                key={image.id}
                                image={image}
                                index={index}
                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </motion.div>

                    {/* Empty state */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-16 text-muted-foreground">
                            No images in this category yet.
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <Lightbox
                images={filteredImages}
                currentIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNavigate={navigateLightbox}
            />
        </>
    );
}

/**
 * Individual gallery item with hover effects
 */
function GalleryItem({
    image,
    index,
    onClick,
}: {
    image: GalleryImage;
    index: number;
    onClick: () => void;
}) {
    return (
        <motion.button
            variants={itemVariants}
            className={cn(
                "group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                // Wide images span 2 columns on larger screens
                image.span === 2 && "md:col-span-2"
            )}
            onClick={onClick}
            aria-label={`View ${image.alt}`}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes={image.span === 2
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                quality={75}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream text-lg font-display">
                    View
                </span>
            </div>

            {/* Category badge (optional, for visual) */}
            <span className="absolute top-3 left-3 px-2 py-1 text-xs bg-cream/90 text-charcoal rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
            </span>
        </motion.button>
    );
}
