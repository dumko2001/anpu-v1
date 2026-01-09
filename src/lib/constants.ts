// Site constants - single source of truth for content
export const SITE_CONFIG = {
    name: "Anpu",
    tagline: "Rooted in Earth",
    description: "A rammed earth retreat near Auroville",

    // Contact (replace with real number when available)
    whatsapp: "91XXXXXXXXXX",
    email: "hello@anpu.in",

    // Location
    location: {
        name: "Near Auroville, Pondicherry",
        state: "Tamil Nadu",
        country: "India",
        coordinates: {
            lat: 12.0076,
            lng: 79.8520,
            display: "12°00'45.6\"N 79°51'12.3\"E",
        },
    },

    // Nearby places with distances
    nearbyPlaces: [
        { name: "Auroville", distance: "3 km" },
        { name: "Kalarigram", distance: "0.5 km" },
        { name: "Adishakti Theatre", distance: "1 km" },
        { name: "Pondicherry", distance: "12 km" },
        { name: "Matrimandir", distance: "4 km" },
    ],

    // Social links
    social: {
        instagram: "https://instagram.com/anpu.retreat",
        airbnb: "#", // Add when available
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
            "Our largest room featuring a private kitchenette and spacious veranda. The rammed earth walls breathe naturally, keeping the space cool throughout the day.",
        amenities: ["AC", "WiFi", "Hot Water", "Kitchenette", "Veranda"],
        images: [
            "/images/exterior/DSC08232 copy.jpg",
            "/images/exterior/DSC08237 copy.jpg",
        ],
        cardRotation: "-2deg",
        borderSide: "left",
    },
    {
        id: "haven",
        name: "The Haven",
        slug: "the-haven",
        description:
            "A peaceful single room with traditional craftsmanship and modern comforts. Wake up to natural light filtering through wooden shutters.",
        amenities: ["AC", "WiFi", "Hot Water"],
        images: [
            "/images/exterior/DSC08213 copy.jpg",
            "/images/exterior/DSC08272 copy.jpg",
        ],
        cardRotation: "1.5deg",
        borderSide: "top",
    },
    {
        id: "sanctuary",
        name: "The Sanctuary",
        slug: "the-sanctuary",
        description:
            "Find your calm in this thoughtfully designed space. The ochre walls and dark wood furniture create a meditative atmosphere.",
        amenities: ["AC", "WiFi", "Hot Water"],
        images: [
            "/images/exterior/DSC08272 copy.jpg",
            "/images/exterior/DSC08237 copy.jpg",
        ],
        cardRotation: "-1deg",
        borderSide: "right",
    },
    {
        id: "retreat",
        name: "The Retreat",
        slug: "the-retreat",
        description:
            "A corner room with a private terrace overlooking the garden. Perfect for those who seek both solitude and connection with nature.",
        amenities: ["AC", "WiFi", "Hot Water", "Terrace"],
        images: [
            "/images/exterior/DSC08237 copy.jpg",
            "/images/exterior/DSC08213 copy.jpg",
        ],
        cardRotation: "2deg",
        borderSide: "bottom",
    },
];

// FAQ data
export const FAQ_ITEMS = [
    {
        question: "What is rammed earth construction?",
        answer:
            "Rammed earth is an ancient building technique where natural materials like earth, chalk, and lime are compressed to create thick, solid walls. These walls naturally regulate temperature, keeping rooms cool in summer and warm in winter, while blending seamlessly with the landscape.",
    },
    {
        question: "How far is Anpu from Pondicherry?",
        answer:
            "Anpu is located approximately 12 km from Pondicherry city center, just 0.5 km from Kalarigram and 3 km from the Auroville Visitor Centre. The drive from Pondicherry takes about 25-30 minutes.",
    },
    {
        question: "Is breakfast included?",
        answer:
            "Breakfast arrangements can be made upon request. We can connect you with local home-cooked meal services or guide you to nearby authentic eateries in the Auroville area.",
    },
    {
        question: "Can I book directly or only through Airbnb?",
        answer:
            "You can book directly by contacting us via WhatsApp. We offer the same rates and a more personalized experience when you book directly.",
    },
    {
        question: "Are pets allowed?",
        answer:
            "We welcome well-behaved pets on a case-by-case basis. Please mention your furry companion when making an inquiry so we can prepare accordingly.",
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
        ? `Hi! I'm interested in booking "${roomName}" at Anpu.`
        : `Hi! I'm interested in staying at Anpu.`;

    const message = encodeURIComponent(
        `${baseMessage}\n\nCould you please share availability and rates?`
    );

    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`;
}
