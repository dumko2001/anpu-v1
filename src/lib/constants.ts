// Site constants - single source of truth for content
export const SITE_CONFIG = {
    name: "Anpu",
    tagline: "Rooted in Earth",
    description: "A rammed earth retreat near Auroville",

    // Value proposition - clear offering
    offering: {
        headline: "Where stillness meets sustainable design",
        subheadline: "Four rammed earth rooms in the Auroville bioregion",
        features: [
            "Handcrafted rammed earth architecture",
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
        name: "Near Auroville, Tamil Nadu",
        state: "Tamil Nadu",
        country: "India",
        coordinates: {
            lat: 12.0076,
            lng: 79.8520,
            display: "12°00'27.4\"N 79°51'07.2\"E",
        },
    },

    // Nearby places with distances
    nearbyPlaces: [
        { name: "Kalarigram", distance: "500m" },
        { name: "Adishakti Theatre", distance: "1 km" },
        { name: "Auroville Visitor Centre", distance: "3 km" },
        { name: "Matrimandir", distance: "4 km" },
        { name: "Pondicherry Beach", distance: "12 km" },
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
        id: "suite",
        name: "The Suite",
        slug: "the-suite",
        description:
            "Our most spacious room with a private kitchenette and generous veranda. The thick rammed earth walls breathe naturally, keeping the space cool by day and cozy by night. Perfect for longer stays or those who appreciate more room to spread out.",
        amenities: ["AC", "WiFi", "Hot Water", "Kitchenette", "Veranda"],
        images: [
            "/images/exterior/DSC08232 copy.jpg",
            "/images/exterior/DSC08237 copy.jpg",
        ],
        cardRotation: "-3deg",
        borderSide: "left",
    },
    {
        id: "haven",
        name: "The Haven",
        slug: "the-haven",
        description:
            "A peaceful single room where morning light filters through wooden shutters onto ochre walls. Traditional craftsmanship meets modern comfort in this cozy retreat, ideal for solo travelers or couples seeking simplicity.",
        amenities: ["AC", "WiFi", "Hot Water"],
        images: [
            "/images/exterior/DSC08213 copy.jpg",
            "/images/exterior/DSC08272 copy.jpg",
        ],
        cardRotation: "2.5deg",
        borderSide: "top",
    },
    {
        id: "sanctuary",
        name: "The Sanctuary",
        slug: "the-sanctuary",
        description:
            "Find your center in this thoughtfully designed space. The warm ochre walls and dark wood furniture create a meditative atmosphere, while the turquoise accents remind you of the nearby coast. A room for reflection.",
        amenities: ["AC", "WiFi", "Hot Water"],
        images: [
            "/images/exterior/DSC08272 copy.jpg",
            "/images/exterior/DSC08237 copy.jpg",
        ],
        cardRotation: "-2deg",
        borderSide: "right",
    },
    {
        id: "retreat",
        name: "The Retreat",
        slug: "the-retreat",
        description:
            "Our corner room opens onto a private terrace where you can watch the garden come alive at dawn. For those who seek both solitude and connection with nature—this is your space to simply be.",
        amenities: ["AC", "WiFi", "Hot Water", "Terrace"],
        images: [
            "/images/exterior/DSC08237 copy.jpg",
            "/images/exterior/DSC08213 copy.jpg",
        ],
        cardRotation: "3deg",
        borderSide: "bottom",
    },
];

// FAQ data - clearer, more helpful
export const FAQ_ITEMS = [
    {
        question: "What makes Anpu different from other stays?",
        answer:
            "Anpu is built entirely of rammed earth—an ancient technique where compressed earth forms walls up to 60cm thick. These walls naturally regulate temperature (no AC needed for most of the year), create a deeply calming atmosphere, and age beautifully. The property was designed by the same architect behind Adishakti Theatre.",
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
