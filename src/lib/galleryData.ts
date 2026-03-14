/**
 * Gallery Data Structure
 * 
 * Centralized gallery image data with categories.
 * User can add their images later - reusing existing images for now.
 * 
 * @maintainer Add new images by following the GalleryImage interface.
 *             Categories: exterior, rooms, details, surroundings
 */

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: "exterior" | "rooms" | "details";
    /** Optional caption shown in lightbox */
    caption?: string;
    /** Aspect ratio: 'normal' (4/3), 'tall' (3/4), 'wide' (spans 2 cols) */
    aspect?: "normal" | "tall" | "wide";
}

/**
 * Gallery categories for filter tabs
 */
export const GALLERY_CATEGORIES = [
    { id: "all", label: "All" },
    { id: "exterior", label: "Exterior" },
    { id: "rooms", label: "Rooms" },
    { id: "details", label: "Details" },
] as const;

export type GalleryCategory = typeof GALLERY_CATEGORIES[number]["id"];

/**
 * Gallery images data
 * Using existing images as placeholders - user will add more later
 */
export const GALLERY_IMAGES: GalleryImage[] = [
    // Exterior shots
    {
        id: "ext-1",
        src: "/anpu-images/exterior/exterior-main-building-night.jpg",
        alt: "Anpu cob retreat main building illuminated at night, Edayanchavadi near Auroville",
        category: "exterior",
        caption: "Main building glowing in the evening",
        aspect: "wide",
    },
    {
        id: "ext-2",
        src: "/anpu-images/exterior/exterior-garden-seating.jpg",
        alt: "Outdoor garden seating area at Anpu cob retreat, Auroville bioregion, Tamil Nadu",
        category: "exterior",
        caption: "Peaceful garden seating",
        aspect: "normal",
    },
    {
        id: "ext-3",
        src: "/anpu-images/exterior/exterior-gate-entrance.jpg",
        alt: "Entrance gate to Anpu cob retreat near Kalarigram and Adishakti Theatre, Auroville",
        category: "exterior",
        caption: "Welcome to Anpu",
        aspect: "normal",
    },
    {
        id: "ext-4",
        src: "/anpu-images/exterior/exterior-porch-garden-view.jpg",
        alt: "Tropical green garden view from the porch at Anpu cob retreat near Pondicherry",
        category: "exterior",
        caption: "Lush greenery surrounding the porch",
        aspect: "tall",
    },

    // Room shots
    {
        id: "room-1",
        src: "/anpu-images/suite/suite-bedroom-ac.jpg",
        alt: "AZHAGU suite interior — spacious cob room with AC at Anpu retreat near Auroville",
        category: "rooms",
        caption: "AZHAGU - Spacious and airy",
        aspect: "normal",
    },
    {
        id: "room-2",
        src: "/anpu-images/anpu/anpu-bedroom.jpg",
        alt: "ANPU room bedroom — earth-walled cob room with natural cooling at Anpu retreat",
        category: "rooms",
        caption: "ANPU - Warm and inviting",
        aspect: "normal",
    },
    {
        id: "room-3",
        src: "/anpu-images/arivu/arivu-bedroom.jpg",
        alt: "ARIVU room bedroom — minimalist cob room designed for deep silence at Anpu retreat",
        category: "rooms",
        caption: "ARIVU - Minimalist calm",
        aspect: "normal",
    },
    {
        id: "room-4",
        src: "/anpu-images/annam/annam-bedroom.jpg",
        alt: "ANNAM room bedroom — grounded cob room with terrace access at Anpu retreat near Pondicherry",
        category: "rooms",
        caption: "ANNAM - Grounded comfort",
        aspect: "normal",
    },

    // Details/Surroundings
    {
        id: "surround-1",
        src: "/anpu-images/suite/suite-porch-view.jpg",
        alt: "Green view from AZHAGU suite's expansive veranda at Anpu cob retreat near Auroville",
        category: "details",
        caption: "Private veranda views",
        aspect: "tall",
    },
    {
        id: "detail-1",
        src: "/anpu-images/arivu/arivu-porch.jpg",
        alt: "ARIVU room shaded porch seating — quiet outdoor corner at Anpu retreat, Auroville bioregion",
        category: "details",
        caption: "Quiet corners for reflection",
        aspect: "normal",
    },
    {
        id: "ext-night",
        src: "/anpu-images/exterior/exterior-complex-night-2.jpg",
        alt: "Anpu cob retreat complex at night — peaceful eco accommodation near Auroville and Pondicherry",
        category: "exterior",
        caption: "Serene night atmosphere",
        aspect: "wide",
    },
    {
        id: "room-5",
        src: "/anpu-images/suite/suite-bedroom-workspace.jpg",
        alt: "AZHAGU suite dedicated workspace — ideal for remote work and artist retreats near Auroville",
        category: "rooms",
        caption: "A dedicated space for flow",
        aspect: "normal",
    },
    {
        id: "room-6",
        src: "/anpu-images/annam/annam-exterior-front.jpg",
        alt: "ANNAM room exterior front view — ground floor cob room with terrace at Anpu retreat",
        category: "rooms",
        caption: "ANNAM - Ground floor access",
        aspect: "normal",
    },
    {
        id: "room-7",
        src: "/anpu-images/anpu/anpu-porch.jpg",
        alt: "ANPU room private veranda — secluded porch at Anpu cob retreat near Auroville",
        category: "rooms",
        caption: "The private veranda at Anpu",
        aspect: "tall",
    },
    {
        id: "detail-2",
        src: "/anpu-images/annam/annam-exterior-aerial.jpg",
        alt: "Aerial view of ANNAM room's handcrafted cob structure at Anpu retreat, Auroville bioregion",
        category: "details",
        caption: "Bird's eye view of the cob structure",
        aspect: "wide",
    },
    {
        id: "detail-3",
        src: "/anpu-images/arivu/arivu-exterior.jpg",
        alt: "ARIVU room exterior — handcrafted earth cob walls at Anpu retreat near Pondicherry",
        category: "details",
        caption: "Handcrafted earth walls",
        aspect: "normal",
    },
    {
        id: "detail-4",
        src: "/anpu-images/suite/suite-exterior.jpg",
        alt: "AZHAGU suite entrance — stairway to upstairs cob suite at Anpu retreat near Auroville",
        category: "details",
        caption: "Entrance to the upper suite",
        aspect: "normal",
    },
];

/**
 * Filter gallery images by category
 */
export function filterGalleryImages(
    images: GalleryImage[],
    category: GalleryCategory
): GalleryImage[] {
    if (category === "all") return images;
    return images.filter((img) => img.category === category);
}
