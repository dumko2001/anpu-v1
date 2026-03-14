import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://anpu.in"),
  title: {
    default: "Anpu | Cob Retreat near Auroville",
    template: "%s | Anpu",
  },
  description:
    "Experience sustainable luxury at Anpu, a boutique cob retreat designed by the architect of Adishakti. 4 unique rooms near Auroville, Pondicherry.",
  keywords: [
    // Brand
    "Anpu",
    "Anpu retreat",
    "Anpu stay Pondicherry",
    "Anpu cob retreat",
    // Short-tail
    "cob retreat",
    "eco retreat Pondicherry",
    "boutique stay Auroville",
    "unique stay near Auroville",
    "Auroville",
    "Pondicherry",
    // Long-tail
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
    "cob house stay Tamil Nadu",
    // Landmarks
    "Kalarigram",
    "Adishakti",
    "Edayanchavadi",
    "Tamil Nadu",
    // Themes
    "earth architecture",
    "sustainable accommodation",
    "conscious living",
    "quiet retreat",
    "meditation space",
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
    url: "https://anpu.in",
    siteName: "Anpu",
    title: "Anpu | Cob Retreat near Auroville",
    description:
      "Experience sustainable luxury at Anpu, a boutique cob retreat near Auroville, Pondicherry.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anpu Cob Retreat",
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
  // JSON-LD for "VacationRental" (More specific than LodgingBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": "https://anpu.in/#vacation-rental",
    "identifier": "https://anpu.in",
    "additionalType": "https://schema.org/LodgingBusiness",
    "name": "Anpu",
    "description": "Experience sustainable luxury at Anpu, a boutique cob retreat designed by the architect of Adishakti. 4 unique rooms near Auroville, Pondicherry.",
    "image": [
      "https://anpu.in/images/optimized/exterior/hero-main.jpg",
      "https://anpu.in/anpu-images/exterior/exterior-main-building-night.jpg",
      "https://anpu.in/anpu-images/exterior/exterior-garden-seating.jpg",
      "https://anpu.in/anpu-images/exterior/exterior-gate-entrance.jpg",
      "https://anpu.in/anpu-images/exterior/exterior-porch-garden-view.jpg",
      "https://anpu.in/anpu-images/suite/suite-bedroom-ac.jpg",
      "https://anpu.in/anpu-images/anpu/anpu-bedroom.jpg",
      "https://anpu.in/anpu-images/arivu/arivu-bedroom.jpg",
      "https://anpu.in/anpu-images/annam/annam-bedroom.jpg"
    ],
    "telephone": "+918606279946",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Kalarigram, Edayanchavadi",
      "addressLocality": "Auroville Bioregion",
      "addressRegion": "Tamil Nadu",
      "postalCode": "605101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.988768,
      "longitude": 79.792475
    },
    "url": "https://anpu.in",
    "priceRange": "₹₹",
    "numberOfRooms": 4,
    "checkinTime": "14:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Cob Architecture", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Natural Cooling", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Common Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Salt-water Pool Access", "value": true }
    ],
    "containsPlace": [
      {
        "@type": "Accommodation",
        "@id": "https://anpu.in/rooms/azhagu/#room",
        "name": "AZHAGU",
        "description": "The upstairs suite with a wide veranda. Named after Bharati's belief that beauty protects culture, art, and freedom of expression. Ideal for long stays and artists.",
        "url": "https://anpu.in/rooms/azhagu/",
        "image": "https://anpu.in/anpu-images/suite/suite-bedroom-ac.jpg",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Private Kitchen", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Mini Fridge", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Expansive Veranda", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "AC + Ceiling Fan", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Attached Bathroom", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "High-speed WiFi", "value": true }
        ]
      },
      {
        "@type": "Accommodation",
        "@id": "https://anpu.in/rooms/anbu/#room",
        "name": "ANPU",
        "description": "The ground-floor room with the private veranda. The warm heart of the house. Named after Bharati's vision of love that breaks caste and gender barriers.",
        "url": "https://anpu.in/rooms/anbu/",
        "image": "https://anpu.in/anpu-images/anpu/anpu-bedroom.jpg",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Private Veranda", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "AC + Ceiling Fan", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Attached Bathroom", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "High-speed WiFi", "value": true }
        ]
      },
      {
        "@type": "Accommodation",
        "@id": "https://anpu.in/rooms/arivu/#room",
        "name": "ARIVU",
        "description": "The minimalist ground-floor room designed for clarity and deep silence. Named after Bharati's call to live fearlessly, free from colonial rule and superstition.",
        "url": "https://anpu.in/rooms/arivu/",
        "image": "https://anpu.in/anpu-images/arivu/arivu-bedroom.jpg",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "AC + Ceiling Fan", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Attached Bathroom", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "High-speed WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Womb-like Silence", "value": true }
        ]
      },
      {
        "@type": "Accommodation",
        "@id": "https://anpu.in/rooms/annam/#room",
        "name": "ANNAM",
        "description": "The grounding ground-floor room with terrace access. Named after Bharati's demand that no one should go hungry — food, rest, and safety are human rights.",
        "url": "https://anpu.in/rooms/annam/",
        "image": "https://anpu.in/anpu-images/annam/annam-bedroom.jpg",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Terrace Access", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "AC + Ceiling Fan", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Attached Bathroom", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "High-speed WiFi", "value": true }
        ]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "14",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Harsh" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Amazing experience. The property is beautifully nestled within a forest setting, offering a serene, healing atmosphere. The aesthetic appeal combined with the peaceful environment made the experience truly rejuvenating. The entire property was clean, hygienic, and thoughtfully maintained."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lakshmi" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "For anyone visiting the Kalarigram or Adishakti area, this guesthouse is a sanctuary. The aesthetics are deeply calming — the kind of space that inspires you to stay forever. Ideal for artists, practitioners, or anyone seeking a quiet, soulful retreat."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Deep" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We had an amazing stay. The place is much more beautiful in real. The rooms and surroundings were comfortably cool. The room is very well designed and organised. Very peaceful — we would definitely go back."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vinitha" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We had an absolutely amazing experience. The room's earthy, eco-friendly design felt incredibly natural and breathable. Being surrounded by lush greenery was a breath of fresh air. The hosts were exceptionally warm and attentive."
      }
    ]
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
