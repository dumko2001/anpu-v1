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
    category: "exterior" | "rooms" | "details" | "surroundings";
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
    { id: "surroundings", label: "Surroundings" },
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
        alt: "Anpu retreat main building at night",
        category: "exterior",
        caption: "Main building glowing in the evening",
        aspect: "wide",
    },
    {
        id: "ext-2",
        src: "/anpu-images/exterior/exterior-garden-seating.jpg",
        alt: "Garden seating area",
        category: "exterior",
        caption: "Peaceful garden seating",
        aspect: "normal",
    },
    {
        id: "ext-3",
        src: "/anpu-images/exterior/exterior-gate-entrance.jpg",
        alt: "Entrance gate",
        category: "exterior",
        caption: "Welcome to Anpu",
        aspect: "normal",
    },
    {
        id: "ext-4",
        src: "/anpu-images/exterior/exterior-porch-garden-view.jpg",
        alt: "View of the garden from the porch",
        category: "exterior",
        caption: "Lush greenery surrounding the porch",
        aspect: "tall",
    },

    // Room shots
    {
        id: "room-1",
        src: "/anpu-images/suite/suite-bedroom-ac.jpg",
        alt: "The Suite Interior",
        category: "rooms",
        caption: "AZHAGU - Spacious and airy",
        aspect: "normal",
    },
    {
        id: "room-2",
        src: "/anpu-images/anpu/anpu-bedroom.jpg",
        alt: "Anpu Bedroom",
        category: "rooms",
        caption: "ANPU - Warm and inviting",
        aspect: "normal",
    },
    {
        id: "room-3",
        src: "/anpu-images/arivu/arivu-bedroom.jpg",
        alt: "Arivu Bedroom",
        category: "rooms",
        caption: "ARIVU - Minimalist calm",
        aspect: "normal",
    },
    {
        id: "room-4",
        src: "/anpu-images/annam/annam-bedroom.jpg",
        alt: "Annam Bedroom",
        category: "rooms",
        caption: "ANNAM - Grounded comfort",
        aspect: "normal",
    },

    // Details/Surroundings
    {
        id: "surround-1",
        src: "/anpu-images/suite/suite-porch-view.jpg",
        alt: "View from Suite Porch",
        category: "surroundings",
        caption: "Private veranda views",
        aspect: "tall",
    },
    {
        id: "detail-1",
        src: "/anpu-images/arivu/arivu-porch.jpg",
        alt: "Arivu Porch Seating",
        category: "details",
        caption: "Quiet corners for reflection",
        aspect: "normal",
    },
    {
        id: "ext-night",
        src: "/anpu-images/exterior/exterior-complex-night-2.jpg",
        alt: "Night view of the complex",
        category: "exterior",
        caption: "Serene night atmosphere",
        aspect: "wide",
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
