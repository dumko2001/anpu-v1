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
    /** Grid span for bento layout: 1 = normal, 2 = wide */
    span?: 1 | 2;
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
        span: 2,
    },
    {
        id: "ext-2",
        src: "/images/exterior/DSC08518 copy.jpg",
        alt: "Evening view of the property",
        category: "exterior",
        caption: "Evening falls on rammed earth walls",
    },
    {
        id: "ext-3",
        src: "/images/exterior/DSC08272 copy.jpg",
        alt: "Architectural details",
        category: "exterior",
        caption: "Traditional Tamil Nadu craftsmanship",
    },
    // Room shots
    {
        id: "room-1",
        src: "/images/exterior/DSC08232 copy.jpg",
        alt: "The Suite interior",
        category: "rooms",
        caption: "The Suite — Spacious and serene",
        span: 2,
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
        alt: "Rammed earth texture",
        category: "details",
        caption: "Textured rammed earth walls",
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
