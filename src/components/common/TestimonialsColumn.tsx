"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
    text: string;
    name: string;
    role?: string;
    date?: string;
    rating?: number;
};

interface TestimonialsColumnProps {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}

/**
 * Auto-scrolling testimonials column
 * Uses Framer Motion for smooth infinite scroll animation
 */
export function TestimonialsColumn({
    className,
    testimonials,
    duration = 15,
    onReviewClick,
}: TestimonialsColumnProps & { onReviewClick?: (testimonial: Testimonial) => void }) {
    return (
        <div className={cn("", className)}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 will-change-transform"
            >
                {/* Duplicate testimonials for seamless loop */}
                {[...Array(2)].map((_, loopIndex) => (
                    <React.Fragment key={loopIndex}>
                        {testimonials.map((testimonial, index) => (
                            <motion.button
                                key={`${loopIndex}-${index}`}
                                onClick={() => onReviewClick?.(testimonial)}
                                className="w-full max-w-xs rounded-2xl border border-border bg-card p-6 shadow-sm text-left transition-all hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer relative hover:z-10"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Quote */}
                                <p className="text-foreground leading-relaxed text-sm line-clamp-6">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="mt-4 pt-4 border-t border-border">
                                    <div className="font-medium text-foreground">
                                        {testimonial.name}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        {testimonial.rating && (
                                            <div className="flex text-amber-500 text-xs gap-0.5">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>
                                        )}
                                        {testimonial.date && (
                                            <div className="text-xs text-muted-foreground">
                                                {testimonial.date}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
