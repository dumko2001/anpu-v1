// Site constants - single source of truth for content
export const SITE_CONFIG = {
    name: "Anpu",
    tagline: "Rooted in Earth",
    description: "A cob retreat near Auroville",

    // Value proposition - clear offering
    offering: {
        headline: "Where stillness meets sustainable design",
        subheadline: "Four cob rooms in the Auroville bioregion",
        features: [
            "Handcrafted cob architecture",
            "Natural temperature regulation",
            "Minutes from Auroville and Pondicherry",
            "Designed by the architect of Adishakti",
        ],
    },

    // Contact (replace with real number when available)
    whatsapp: "918606279946",
    email: "hello@anpu.in",

    // Location
    location: {
        name: "Near Auroville",
        state: "Auroville Bioregion",
        country: "India",
        coordinates: {
            lat: 11.988768,
            lng: 79.792475,
            display: "11°59'19.6\"N 79°47'32.9\"E",
        },
        routeNote: "Easy access via the Chennai-Cuddalore Highway. Take the turn at the Edayanchavadi Toll Booth towards Adishakti.",
    },

    // Nearby places with distances
    nearbyPlaces: [
        { name: "Kalarigram", distance: "75m" },
        { name: "Adishakti Theatre", distance: "50m" },
        { name: "Auroville Visitor Centre", distance: "4 km" },
        { name: "Pondicherry Airport", distance: "6.5 km" },
        { name: "Pondicherry Railway Station", distance: "10 km" },
        { name: "Pondicherry/White Town", distance: "10 km" },
    ],

    // Social links
    social: {
        instagram: "https://instagram.com/anpu.retreat",
        airbnb: "#", // Add your Airbnb URL here
    },
} as const;

// Room data
export interface Room {
    id: string;
    name: string;
    slug: string;
    description: string;
    amenities: string[];
    images: string[];
    cardRotation: string;
    borderSide: "left" | "top" | "right" | "bottom";
}

export const ROOMS: Room[] = [
    {
        id: "azhagu",
        name: "AZHAGU",
        slug: "azhagu",
        description:
            "Azhagu – Beauty as power. The upstairs suite with the wide veranda. The room with space to pace, think, or create. Named after Bharati's belief that beauty protects culture, art, and freedom of expression. For long stays. For artists. For anyone who needs room to breathe.",
        amenities: ["Private Kitchen", "Mini Fridge", "Expansive Veranda", "Upstairs (First Floor)", "AC + Ceiling Fan", "Attached Bathroom", "High-speed WiFi"],
        images: [
            "/anpu-images/suite/suite-bedroom-ac.jpg",
            "/anpu-images/suite/suite-bedroom-workspace.jpg",
            "/anpu-images/suite/suite-porch-view.jpg",
        ],
        cardRotation: "1.5deg",
        borderSide: "left",
    },
    {
        id: "anbu",
        name: "ANPU",
        slug: "anbu",
        description:
            "Anpu – Love that includes. The ground-floor room with the private veranda. The warm heart of the house. Named after Bharati's vision of love that breaks caste and gender barriers. For rest. For quiet. For feeling held.",
        amenities: ["Private Veranda", "Ground Floor", "AC + Ceiling Fan", "Attached Bathroom", "High-speed WiFi"],
        images: [
            "/anpu-images/anpu/anpu-bedroom.jpg",
            "/anpu-images/anpu/anpu-porch.jpg",
            "/anpu-images/anpu/anpu-bathroom.jpg",
        ],
        cardRotation: "-1deg",
        borderSide: "top",
    },
    {
        id: "arivu",
        name: "ARIVU",
        slug: "arivu",
        description:
            "Arivu – Wisdom without fear. The minimalist ground-floor room. Designed for clarity and deep silence. Named after Bharati's call to live fearlessly, free from colonial rule and superstition. For deep sleep. For clearing your mind. For stopping.",
        amenities: ["Ground Floor", "AC + Ceiling Fan", "Attached Bathroom", "High-speed Wi-Fi", "Womb-like Silence"],
        images: [
            "/anpu-images/arivu/arivu-bedroom.jpg",
            "/anpu-images/arivu/arivu-exterior.jpg",
            "/anpu-images/arivu/arivu-porch.jpg",
        ],
        cardRotation: "1deg",
        borderSide: "bottom",
    },
    {
        id: "annam", // Updated ID to match name for consistency, though slug is what matters usually. Previous was 'retreat' but labeled ANNAM
        name: "ANNAM",
        slug: "annam",
        description:
            "Annam – Nourishment for the soul. The grounding ground-floor room with terrace access. Named after Bharati's demand that no one should go hungry - food, rest, and safety are human rights. For exhaustion. For recovery. For sleeping 12 hours straight.",
        amenities: ["Terrace Access", "Ground Floor", "AC + Ceiling Fan", "Attached Bathroom", "High-speed WiFi"],
        images: [
            "/anpu-images/annam/annam-bedroom.jpg",
            "/anpu-images/annam/annam-exterior-front.jpg",
            "/anpu-images/annam/annam-bathroom.jpg",
        ],
        cardRotation: "-1.5deg",
        borderSide: "right",
    },
];

// FAQ data - clearer, more helpful
export const FAQ_ITEMS = [
    {
        question: "What makes Anpu different from other stays?",
        answer:
            "You'll actually sleep here. Not the shallow, restless kind of sleep you get in noisy guesthouses, the deep, uninterrupted kind. The walls are 60cm thick cob (compressed earth), so they absorb sound and stay naturally cool. Guests say they sleep 12 hours straight and wake up feeling held by the earth.",
    },
    {
        question: "How do I get to Anpu from Pondicherry?",
        answer:
            "We're 12 km north of Pondicherry, a 25-30 minute drive. Head towards Auroville on the East Coast Road, then follow signs to Kalarigram—we're just 500 meters from there. We'll send detailed directions with your booking confirmation.",
    },
    {
        question: "Are meals available?",
        answer:
            "We don't have an on-site restaurant, but we can connect you with excellent local options: home-cooked Tamil meals delivered to your room, or guide you to nearby Auroville cafes and Pondicherry restaurants. Many guests enjoy exploring the area's food scene.",
    },
    {
        question: "Can I book directly or only through Airbnb?",
        answer:
            "Both! You can book through Airbnb for the security of their platform, or contact us directly via WhatsApp for the same rates with a more personal experience. We'll answer questions and help you choose the right room.",
    },
    {
        question: "Is Anpu suitable for remote work?",
        answer:
            "Yes, we have reliable WiFi, and the quiet environment is ideal for focused work. The Suite has a dedicated workspace area. Many guests split their days between work and exploring Auroville or Pondicherry.",
    },
    {
        question: "What shared facilities are available?",
        answer:
            "All guests have access to a fully equipped common kitchen (fridge, washing machine, cooking facilities), outdoor seating surrounded by greenery, and free parking. Guests can also access the salt-water pool next door at Adishakti Theatre (₹300/hour, subject to availability).",
    },
];

// Amenity icons mapping
export const AMENITY_ICONS: Record<string, string> = {
    AC: "Snowflake",
    WiFi: "Wifi",
    "Hot Water": "Droplets",
    Kitchenette: "UtensilsCrossed",
    Veranda: "TreePalm",
    Terrace: "Sun",
};

// WhatsApp helper
export function getWhatsAppUrl(roomName?: string): string {
    const baseMessage = roomName
        ? `Hi! I'd like to inquire about "${roomName}" at Anpu.`
        : `Hi! I'd like to learn more about staying at Anpu.`;

    const message = encodeURIComponent(
        `${baseMessage}\n\nCould you please share availability and rates?`
    );

    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;
}
