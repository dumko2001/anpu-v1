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
        src: "/images/exterior/DSC08512 copy.jpg",
        alt: "Anpu retreat at twilight",
        category: "exterior",
        caption: "The retreat bathed in twilight hues",
        aspect: "wide",
    },
    {
        id: "ext-2",
        src: "/images/exterior/DSC08518 copy.jpg",
        alt: "Evening view of the property",
        category: "exterior",
        caption: "Evening falls on cob walls",
        aspect: "tall",
    },
    {
        id: "ext-3",
        src: "/images/exterior/DSC08272 copy.jpg",
        alt: "Architectural details",
        category: "exterior",
        caption: "Handcrafted details",
    },
    // Room shots
    {
        id: "room-1",
        src: "/images/exterior/DSC08232 copy.jpg",
        alt: "The Suite interior",
        category: "rooms",
        caption: "The Suite — Spacious and serene",
        aspect: "tall",
    },
    {
        id: "room-2",
        src: "/images/exterior/DSC08237 copy.jpg",
        alt: "Room with natural light",
        category: "rooms",
        caption: "Morning light through wooden shutters",
    },
    // Details
    {
        id: "detail-1",
        src: "/images/exterior/DSC08213 copy.jpg",
        alt: "Cob texture",
        category: "details",
        caption: "Textured cob walls",
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
