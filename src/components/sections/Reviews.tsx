"use client";

import { TestimonialsColumn, type Testimonial } from "@/components/common/TestimonialsColumn";

const REVIEWS: Testimonial[] = [
    {
        name: "Priya M.",
        text: "A truly unique experience. The rammed earth walls keep the rooms perfectly cool, and the location near Auroville is magical.",
        date: "December 2025",
    },
    {
        name: "Thomas K.",
        text: "We stayed in The Suite for a week. The architecture is stunning and the attention to detail is remarkable.",
        date: "November 2025",
    },
    {
        name: "Anjali R.",
        text: "Perfect retreat for artists and seekers. The silence and beauty of this place is unmatched.",
        date: "October 2025",
    },
    {
        name: "Michael S.",
        text: "The compressed earth walls create such a peaceful atmosphere. Waking up here feels like being held by the earth itself.",
        date: "September 2025",
    },
    {
        name: "Lakshmi N.",
        text: "Every corner tells a story. The architect's vision is evident in every detail. A must-visit for architecture lovers.",
        date: "August 2025",
    },
    {
        name: "David L.",
        text: "We came for a weekend and stayed a week. The energy here is transformative. Already planning our return.",
        date: "July 2025",
    },
    {
        name: "Meera K.",
        text: "The harmonious blend of traditional techniques and modern comfort is exceptional. Truly sustainable luxury.",
        date: "June 2025",
    },
    {
        name: "Robert J.",
        text: "After visiting countless resorts, Anpu stands out. Authentic, peaceful, and deeply connected to the land.",
        date: "May 2025",
    },
    {
        name: "Aisha P.",
        text: "The natural temperature regulation is remarkable! Cool rooms without AC - exactly what sustainable living should be.",
        date: "April 2025",
    },
];

// Split reviews into 3 columns
const firstColumn = REVIEWS.slice(0, 3);
const secondColumn = REVIEWS.slice(3, 6);
const thirdColumn = REVIEWS.slice(6, 9);

export function Reviews() {
    return (
        <section className="py-16 px-6 bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center scroll-fade-up">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground kinetic-heading">
                        What Guests Say
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Experiences from those who've stayed with us
                    </p>
                </div>

                {/* Scrolling Testimonials Columns */}
                <div
                    className="flex justify-center gap-6 max-h-[600px] overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                    }}
                >
                    <TestimonialsColumn
                        testimonials={firstColumn}
                        duration={18}
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        duration={22}
                        className="hidden md:block"
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        duration={16}
                        className="hidden lg:block"
                    />
                </div>
            </div>
        </section>
    );
}
