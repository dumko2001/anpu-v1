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
    default: "Anpu | Rammed Earth Retreat near Auroville",
    template: "%s | Anpu",
  },
  description:
    "Experience sustainable luxury at Anpu, a boutique rammed earth retreat designed by the architect of Adishakti. 4 unique rooms near Auroville, Pondicherry.",
  keywords: [
    "Anpu",
    "rammed earth",
    "Auroville",
    "Pondicherry",
    "boutique stay",
    "eco retreat",
    "sustainable accommodation",
    "Kalarigram",
    "Adishakti",
    "Tamil Nadu",
  ],
  authors: [{ name: "Anpu Retreat" }],
  creator: "Anpu Retreat",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anpu.in",
    siteName: "Anpu",
    title: "Anpu | Rammed Earth Retreat near Auroville",
    description:
      "Experience sustainable luxury at Anpu, a boutique rammed earth retreat near Auroville, Pondicherry.",
    images: [
      {
        url: "/images/exterior/DSC08512 copy.jpg",
        width: 1200,
        height: 630,
        alt: "Anpu Rammed Earth Retreat at twilight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anpu | Rammed Earth Retreat near Auroville",
    description:
      "Experience sustainable luxury at Anpu, a boutique rammed earth retreat near Auroville.",
    images: ["/images/exterior/DSC08512 copy.jpg"],
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
