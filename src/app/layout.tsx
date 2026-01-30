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
    "Anpu",
    "cob",
    "Auroville",
    "Pondicherry",
    "boutique stay",
    "eco retreat",
    "sustainable accommodation",
    "Kalarigram",
    "Adishakti",
    "Tamil Nadu",
    "earth architecture",
    "architectural stay",
    "conscious living",
    "quiet retreat",
    "meditation space",
  ],
  authors: [{ name: "Anpu Retreat" }],
  creator: "Anpu Retreat",
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
        url: "/images/optimized/exterior/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Anpu Cob Retreat at twilight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anpu | Cob Retreat near Auroville",
    description:
      "Experience sustainable luxury at Anpu, a boutique cob retreat near Auroville.",
    images: ["/images/optimized/exterior/hero-main.jpg"],
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
    "name": "Anpu",
    "description": "Experience sustainable luxury at Anpu, a boutique cob retreat designed by the architect of Adishakti. 4 unique rooms near Auroville, Pondicherry.",
    "image": "https://anpu.in/images/optimized/exterior/hero-main.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Kalarigram, Edayanchavadi", // Update with precise address if available
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
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Cob Architecture" },
      { "@type": "LocationFeatureSpecification", "name": "Natural Cooling" },
      { "@type": "LocationFeatureSpecification", "name": "WiFi" },
      { "@type": "LocationFeatureSpecification", "name": "Kitchen Access" }
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
