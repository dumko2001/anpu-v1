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
}: TestimonialsColumnProps) {
    return (
        <div className={cn("overflow-hidden", className)}>
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
                className="flex flex-col gap-6 pb-6"
            >
                {/* Duplicate testimonials for seamless loop */}
                {[...Array(2)].map((_, loopIndex) => (
                    <React.Fragment key={loopIndex}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`${loopIndex}-${index}`}
                                className="w-full max-w-xs rounded-2xl border border-border bg-card p-6 shadow-sm"
                            >
                                {/* Quote */}
                                <p className="text-foreground leading-relaxed text-sm">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="mt-4 pt-4 border-t border-border">
                                    <div className="font-medium text-foreground">
                                        {testimonial.name}
                                    </div>
                                    {testimonial.date && (
                                        <div className="text-xs text-muted-foreground mt-1">
                                            {testimonial.date}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
