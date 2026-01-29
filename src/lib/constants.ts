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
    whatsapp: "91XXXXXXXXXX",
    email: "hello@anpu.in",

    // Location
    location: {
        name: "Near Auroville",
        state: "Auroville Bioregion",
        country: "India",
        coordinates: {
            lat: 12.0076,
            lng: 79.8520,
            display: "12°00'27.4\"N 79°51'07.2\"E",
        },
        routeNote: "Easy access via the Chennai-Cuddalore Highway. Take the turn at the Edayanchavadi Toll Booth towards Adishakti.",
    },

    // Nearby places with distances
    nearbyPlaces: [
        { name: "Kalarigram", distance: "75m" },
        { name: "Adishakti Theatre", distance: "50m" },
        { name: "Auroville Visitor Centre", distance: "4 km" },
        { name: "Matrimandir", distance: "4 km" },
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
            "The Suite — 'Beauty'. Bharati saw beauty not as superficial, but as Shakti—power and creative energy. He celebrated the 'Modern Woman' (Pudhumai Penn) as the protector of culture and the bearer of freedom. This spacious suite is a tribute to that spirit: a place where tradition meets the freedom of expression, designed for inspiration.",
        amenities: ["AC", "WiFi", "Hot Water", "Kitchenette", "Veranda"],
        images: [
            "/images/optimized/exterior/azhagu-1.jpg",
            "/images/optimized/exterior/azhagu-2.jpg",
        ],
        cardRotation: "1.5deg",
        borderSide: "left",
    },
    {
        id: "anbu",
        name: "ANBU",
        slug: "anbu",
        description:
            "'Love'. For Bharati, Anbu was the revolutionary force that could shatter barriers of caste and creed. 'There are no castes, my child,' he wrote. This room is the heart of the home—a warm, inclusive space where boundaries dissolve and kindness prevails.",
        amenities: ["AC", "WiFi", "Hot Water"],
        images: [
            "/images/optimized/exterior/anbu-1.jpg",
            "/images/optimized/exterior/anbu-2.jpg",
        ],
        cardRotation: "-1deg",
        borderSide: "top",
    },
    {
        id: "retreat", // Kept ID for now to minimize breakage if used elsewhere, but name updated
        name: "ANNAM",
        slug: "annam",
        description:
            "'Nourishment'. Bharati fiercely believed that hunger was an insult to humanity: 'If one man goes hungry, we will destroy the world.' Annam represents deep rest, grounding, and the comfort of having one's needs met in abundance. A space to feel truly sustained.",
        amenities: ["AC", "WiFi", "Hot Water", "Terrace"],
        images: [
            "/images/optimized/exterior/annam-1.jpg",
            "/images/optimized/exterior/annam-2.jpg",
        ],
        cardRotation: "-1.5deg",
        borderSide: "right",
    },
    {
        id: "arivu",
        name: "ARIVU",
        slug: "arivu",
        description:
            "'Wisdom'. True Arivu, Bharati argued, wasn't just book learning but the clarity to question fear and superstition. 'Fear not,' was his mantra. This room is a sanctuary for clear thought—a clean, quiet space to unclutter the mind and find one's truth.",
        amenities: ["AC", "WiFi", "Hot Water"],
        images: [
            "/images/optimized/exterior/arivu-1.jpg",
            "/images/optimized/exterior/arivu-2.jpg",
        ],
        cardRotation: "1deg",
        borderSide: "bottom",
    },
];

// FAQ data - clearer, more helpful
export const FAQ_ITEMS = [
    {
        question: "What makes Anpu different from other stays?",
        answer:
            "Anpu is built entirely of cob—an ancient technique where compressed earth forms walls up to 60cm thick. These walls naturally regulate temperature (no AC needed for most of the year), create a deeply calming atmosphere, and age beautifully. The property was designed by the same architect behind Adishakti Theatre.",
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
            "Yes—we have reliable WiFi, and the quiet environment is ideal for focused work. The Suite has a dedicated workspace area. Many guests split their days between work and exploring Auroville or Pondicherry.",
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
