import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, ROOMS, ALL_PROPERTY_IMAGES } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anpu | Cob Retreat near Auroville",
    template: "%s | Anpu",
  },
  description:
    "Experience sustainable luxury at Anpu, a boutique cob retreat designed by the architect of Adishakti. 4 unique rooms near Auroville, Pondicherry.",
  keywords: [
    // ── Brand ──────────────────────────────────────────────────────────────
    "Anpu",
    "Anpu retreat",
    "Anpu stay",
    "Anpu stay Pondicherry",
    "Anpu cob retreat",
    "Anpu Auroville",
    "anpustay.com",
    // ── Room names ─────────────────────────────────────────────────────────
    "AZHAGU room",
    "ANPU room",
    "ARIVU room",
    "ANNAM room",
    "AZHAGU suite Auroville",
    "ARIVU minimalist room",
    "ANNAM terrace room",
    // ── Short-tail: what people type first ─────────────────────────────────
    "cob retreat",
    "cob house stay",
    "eco retreat",
    "eco stay",
    "boutique stay Auroville",
    "boutique stay Pondicherry",
    "unique stay Pondicherry",
    "nature stay Pondicherry",
    "Auroville stay",
    "Pondicherry stay",
    "Auroville guesthouse",
    "Pondicherry guesthouse",
    "earth house stay India",
    // ── Long-tail: high-intent phrases ─────────────────────────────────────
    "cob retreat near Auroville Pondicherry",
    "eco stay near Auroville",
    "sustainable stay near Pondicherry",
    "boutique hotel near Pondicherry",
    "vacation rental Auroville bioregion",
    "holiday home near Auroville",
    "nature retreat near Pondicherry",
    "architectural stay near Auroville",
    "earth architecture retreat India",
    "best stay near Auroville",
    "peaceful retreat near Pondicherry",
    "remote work retreat Auroville",
    "digital nomad stay Auroville",
    "artist retreat near Auroville",
    "yoga retreat near Pondicherry",
    "wellness retreat near Pondicherry",
    "cob house accommodation India",
    "sustainable villa near Pondicherry",
    "unique accommodation near Auroville",
    "off-beat stay near Pondicherry",
    "quiet stay near Auroville",
    "deep sleep retreat Pondicherry",
    "slow travel stay Pondicherry",
    "conscious travel Pondicherry",
    "long stay Auroville accommodation",
    "heritage architecture stay India",
    "Subramania Bharati themed retreat",
    "stay near Adishakti theatre",
    "accommodation near Kalarigram",
    // ── Location variants ──────────────────────────────────────────────────
    "Kalarigram",
    "Adishakti",
    "Adishakti theatre",
    "Edayanchavadi",
    "Auroville Bioregion",
    "Auroville",
    "Pondicherry",
    "Puducherry",
    "Tamil Nadu",
    "South India eco stay",
    "Tamil Nadu sustainable stay",
    "Tamil Nadu boutique hotel",
    // ── Themes ─────────────────────────────────────────────────────────────
    "earth architecture",
    "cob architecture",
    "sustainable accommodation",
    "eco-friendly stay",
    "conscious living",
    "quiet retreat",
    "meditation space",
    "forest stay India",
    "nature immersion retreat",
    "heritage eco stay",
  ],
  authors: [{ name: "Anpu Retreat" }],
  creator: "Anpu Retreat",
  icons: {
    icon: "/favicon.ico?v=3",
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-icon.png?v=3",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192.png?v=3",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512.png?v=2",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Anpu",
    title: "Anpu | Cob Retreat near Auroville",
    description:
      "Experience sustainable luxury at Anpu, a boutique cob retreat near Auroville, Pondicherry.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anpu Cob Retreat near Auroville, Pondicherry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anpu | Cob Retreat near Auroville",
    description:
      "Experience sustainable luxury at Anpu, a boutique cob retreat near Auroville.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data — VacationRental (schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": `${SITE_URL}/#vacation-rental`,
    "identifier": SITE_URL,
    "additionalType": "https://schema.org/LodgingBusiness",
    "name": "Anpu",
    "description": "Experience sustainable luxury at Anpu, a boutique cob retreat designed by the architect of Adishakti. 4 unique rooms near Auroville, Pondicherry.",
    // All 24 property images — sourced from /public/anpu-images/ and /public/images/
    "image": ALL_PROPERTY_IMAGES.map((path) => `${SITE_URL}${path}`),
    "telephone": "+918606279946",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Kalarigram, Edayanchavadi",
      "addressLocality": "Auroville Bioregion",
      "addressRegion": "Tamil Nadu",
      "postalCode": "605101",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.988768,
      "longitude": 79.792475,
    },
    "url": SITE_URL,
    "priceRange": "₹₹",
    "numberOfRooms": 4,
    "checkinTime": "T14:00",
    "checkoutTime": "T11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Cob Architecture", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Natural Cooling", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Common Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Washing Machine", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Salt-water Pool Access", "value": true },
    ],
    "containsPlace": ROOMS.map((room) => ({
      "@type": "Accommodation",
      "@id": `${SITE_URL}/rooms/${room.slug}/#room`,
      "name": room.name,
      "description": room.description,
      "url": `${SITE_URL}/rooms/${room.slug}/`,
      "image": room.images.map((img) => `${SITE_URL}${img}`),
      "amenityFeature": room.amenities.map((amenity) => ({
        "@type": "LocationFeatureSpecification",
        "name": amenity,
        "value": true,
      })),
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 14,
      "bestRating": 5,
      "worstRating": 1,
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Harsh" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "Amazing experience. The property is beautifully nestled within a forest setting, offering a serene, healing atmosphere. The aesthetic appeal combined with the peaceful environment made the experience truly rejuvenating. The entire property was clean, hygienic, and thoughtfully maintained.",
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lakshmi" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "For anyone visiting the Kalarigram or Adishakti area, this guesthouse is a sanctuary. The aesthetics are deeply calming — the kind of space that inspires you to stay forever. Ideal for artists, practitioners, or anyone seeking a quiet, soulful retreat.",
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Deep" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "We had an amazing stay. The place is much more beautiful in real. The rooms and surroundings were comfortably cool. The room is very well designed and organised. Very peaceful — we would definitely go back.",
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vinitha" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "We had an absolutely amazing experience. The room's earthy, eco-friendly design felt incredibly natural and breathable. Being surrounded by lush greenery was a breath of fresh air. The hosts were exceptionally warm and attentive.",
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vishnu" },
        "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
        "reviewBody": "Quiet private secluded space far from human crowds. Perfect for a quiet staycation. The host Sreenivasan and Sangeetha are very proactive. They helped us very patiently at the middle of the night for our late check-in with clear instructions.",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
