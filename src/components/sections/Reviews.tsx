"use client";

import { useState, useEffect } from "react";
import { TestimonialsColumn, type Testimonial } from "@/components/common/TestimonialsColumn";
import { Sparkles } from "@/components/effects/SectionEffects";
import { ChevronLeft, ChevronRight, Quote, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS: Testimonial[] = [
    {
        name: "Abdul Basheer",
        rating: 5,
        text: "The place was neat and well-maintained, and the host was very helpful. The Wi-Fi could be improved, as the internet was intermittently unavailable—especially since mobile network coverage is limited at the property. Overall, the stay was pleasant. As it’s a private property surrounded by greenery, do expect some mosquitoes.",
        // Reply removed as per request, kept in comments if needed
    },
    {
        name: "Deep",
        rating: 5,
        text: "We had an amazing stay. The place is much more beautiful in real and the best part is Sreenivasan has designed it himself. The weather outside was a bit hot but the rooms and surrounding was so comfortably cold. The room is very well designed and organised. It is a bit in outskirts but for us it was the best part as it’s very peaceful. Sreenivasan and Akka at the place were very helpful and warm. We really loved staying there and would definitely go back.",
    },
    {
        name: "Vishnu",
        rating: 5,
        text: "Quiet private secluded space far from human crowds. Perfect for a quiet staycation. The host Sreenivasan and Sangeetha are very proactive. They helped us very patiently at the middle of the night for our late check-in with clear instructions.",
    },
    {
        name: "Vinitha",
        rating: 5,
        text: "We had an absolutely amazing experience at this beautiful property. The highlight was the room’s earthy, eco-friendly design—it felt incredibly natural, breathable, and thoughtfully crafted. Being surrounded by lush greenery and so many trees was a breath of fresh air. Beyond the scenery, the host and caretakers were exceptionally warm, courteous, and attentive to every detail of our stay. If you are looking for a peaceful, nature-filled escape in Pondy, this is exactly where you need to be.",
    },
    {
        name: "Rishita",
        rating: 5,
        text: "The airbnb exceeded every expectation from the room and greenery to how peaceful it was. It is located 30 mins away from Auroville but wasn't a big problem as we had scooty. Zomato and restuarants are easily available. The highway is also located pretty close for when we needed to travel to White town. There are mosquitoes but keeping the doors and windows closed during evenings works well. We were also provided amenities and there was a working fridge to keep our food. It was an excellent experience and the host helped us with everything allowing us to enjoy our stay in pondicherry. I look forward to coming back to this place again.",
    },
    {
        name: "Lakshmi",
        rating: 5,
        text: "For anyone visiting the Kalarigram or Adishakti area, this guesthouse is a sanctuary. The aesthetics are deeply calming - the kind of space that inspires you to stay forever. Sangita Sreenivasan is a phenomenal host; she was incredibly patient and helpful when I arrived early and guided me step-by-step through the property when I had to take the 'scenic route' in the dark! Between the kindness of the caretaker and the proximity to such vibrant cultural hubs, it was a perfect, grounding stay. Ideal for artists, practitioners, or anyone seeking a quiet, soulful retreat! Thank you. I am definitely coming back again!",
    },
    {
        name: "Harsh",
        rating: 5,
        text: "Amazing experience ✨ The owner of the property was extremely helpful and went above and beyond to ensure complete guest satisfaction. Their warm and generous hospitality truly made the stay special. The property is beautifully nestled within a forest setting, offering a serene, healing atmosphere with refreshing weather and oxygen-rich surroundings. The aesthetic appeal, combined with the peaceful and calm environment, made the experience truly rejuvenating. The kitchen facilities were well maintained, and Amma was exceptionally kind and supportive, adding a homely touch to our stay. The entire property was clean, hygienic, and thoughtfully maintained. I highly recommend this property for families and friends looking for a peaceful, nature-rich, and relaxing getaway.",
    },
    {
        name: "Merlin",
        rating: 5,
        text: "One of the best stays ever in Auroville. Such a peaceful stay. Will visit again for sure. Thank you Sreenivasan",
    },
    {
        name: "Aswin",
        rating: 5,
        text: "Very peaceful stay which is also very close to the main spots in and around Pondicherry",
    },
    {
        name: "Swagato",
        rating: 4,
        text: "Beautiful property nestled inside a calm and peaceful area surrounded by trees. The room has an earthlt charm with all necessary amenities that you need. For city bred tourists like us, presence of worms and insects may be a problem. Otherwise had an amazing stay.",
    },
    {
        name: "Saurav",
        rating: 5,
        text: "Medha was really a great host and very supportive about everything. The caretaker Tapan was really nice guy. Really enjoyed the staying. Only thing you have to careful is the insects 😃😃",
    },
    {
        name: "Rema",
        rating: 4,
        text: "Great place, built sustainably. Easy to locate, courteous hosts and great vibe. The space itself is quite inspiring and creative with theatre rehearsals and practices going on. It’s very easy to find and well lit in the night. Very safe and easy to commute. There is a shared kitchen with basic needs and a fridge. Room is spacious and clean. Very beautifully built with sustainable materials. Highly recommended Being the first guest, there were some communication gap about the check in which they quickly rectified and redeemed. Loved the stay and highly recommended for people enjoying a peaceful serene and calm place",
    },
    {
        name: "Vasisht",
        rating: 5,
        text: "A quiet and lovely place. Great hospitality and a gorgeously designed room.",
    },
    {
        name: "Kruthika",
        rating: 5,
        text: "It was a lovely home for our family. We all enjoyed the stay, slept peacefully and rested well :)",
    },
];

// Split reviews into 3 columns
const firstColumn = REVIEWS.slice(0, 5);
const secondColumn = REVIEWS.slice(5, 10);
const thirdColumn = REVIEWS.slice(10, 15);

// Animation variants matching RoomModal's smooth feel but with an "unfolding" twist
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30, rotateX: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 } as const, // Added as const
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.2 },
    },
};

export function Reviews() {
    const [selectedReview, setSelectedReview] = useState<Testimonial | null>(null);

    // Find index of selected review
    const selectedIndex = selectedReview ? REVIEWS.indexOf(selectedReview) : -1;

    const handleNext = () => {
        if (selectedIndex === -1) return;
        const nextIndex = (selectedIndex + 1) % REVIEWS.length;
        setSelectedReview(REVIEWS[nextIndex]);
    };

    const handlePrev = () => {
        if (selectedIndex === -1) return;
        const prevIndex = (selectedIndex - 1 + REVIEWS.length) % REVIEWS.length;
        setSelectedReview(REVIEWS[prevIndex]);
    };

    const handleClose = () => setSelectedReview(null);

    // Lock body scroll when open
    useEffect(() => {
        if (selectedReview) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selectedReview]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedReview) return;
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedReview, selectedIndex]);

    return (
        <section className="relative py-16 px-6 bg-background overflow-hidden">
            {/* Sparkle effects */}
            <Sparkles count={10} />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center scroll-fade-up">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground kinetic-heading">
                        What Guests Say
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Experiences from our guests
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
                        duration={45}
                        onReviewClick={setSelectedReview}
                    />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        duration={50} // Slightly slower as it often has longer texts
                        className="hidden md:block"
                        onReviewClick={setSelectedReview}
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        duration={32} // Faster/Lower duration because it has fewer items (4 vs 5)
                        className="hidden lg:block"
                        onReviewClick={setSelectedReview}
                    />
                </div>
            </div>

            {/* Custom Modal Overlay */}
            <AnimatePresence>
                {selectedReview && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
                            onClick={handleClose}
                        />

                        {/* Modal Card */}
                        <motion.div
                            className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            layoutId="review-modal" // Stable ID ensures the box stays while content changes
                            layout // Animates layout changes (height/width) smoothly
                            transition={{
                                layout: { duration: 0.4, type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Content container - Animate inner content changes */}
                            <div className="flex-1 overflow-hidden flex flex-col">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedReview.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="p-8 pb-4 relative z-10 shrink-0">
                                            {/* Background texture hint */}
                                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                                <Quote className="w-32 h-32" />
                                            </div>

                                            <div className="relative z-10 space-y-6">
                                                {/* Header */}
                                                <div className="flex items-start justify-between pr-10">
                                                    <div>
                                                        <h3 className="font-display text-2xl md:text-3xl text-foreground">
                                                            {selectedReview.name}
                                                        </h3>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <div className="flex text-amber-500 text-sm gap-0.5">
                                                                {[...Array(selectedReview.rating || 5)].map((_, i) => (
                                                                    <span key={i}>★</span>
                                                                ))}
                                                            </div>
                                                            {selectedReview.date && (
                                                                <span className="text-sm text-muted-foreground">
                                                                    • {selectedReview.date}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Divider */}
                                                <div className="w-full h-px bg-border/50" />
                                            </div>
                                        </div>

                                        {/* Scrollable Text Area */}
                                        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
                                            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-serif whitespace-pre-wrap">
                                                "{selectedReview.text}"
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Footer - Stable outside the content animation */}
                                <div className="p-4 border-t border-border bg-muted/30 flex items-center justify-between mt-auto z-20 shrink-0">
                                    <button
                                        onClick={handlePrev}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-background/50"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </button>
                                    <span className="text-xs text-muted-foreground font-mono">
                                        {selectedIndex + 1} / {REVIEWS.length}
                                    </span>
                                    <button
                                        onClick={handleNext}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-background/50"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
