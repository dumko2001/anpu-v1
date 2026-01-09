import { Star } from "lucide-react";

const REVIEWS = [
    {
        name: "Priya M.",
        rating: 5,
        text: "A truly unique experience. The rammed earth walls keep the rooms perfectly cool, and the location near Auroville is magical.",
        date: "December 2025",
    },
    {
        name: "Thomas K.",
        rating: 5,
        text: "We stayed in The Suite for a week. The architecture is stunning and the attention to detail is remarkable.",
        date: "November 2025",
    },
    {
        name: "Anjali R.",
        rating: 5,
        text: "Perfect retreat for artists and seekers. The silence and beauty of this place is unmatched.",
        date: "October 2025",
    },
];

export function Reviews() {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground">
                        What Guests Say
                    </h2>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, index) => (
                        <div
                            key={index}
                            className="bg-secondary rounded-lg p-6"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-ochre text-ochre"
                                    />
                                ))}
                            </div>

                            {/* Review text */}
                            <p className="text-foreground leading-relaxed mb-4">
                                {'"'}{review.text}{'"'}
                            </p>

                            {/* Reviewer */}
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-foreground">
                                    {review.name}
                                </span>
                                <span className="text-muted-foreground">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
