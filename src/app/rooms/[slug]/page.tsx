import { ROOMS, getWhatsAppUrl, SITE_CONFIG } from "@/lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

const ROOM_SUBTITLES: Record<string, string> = {
  azhagu: "Upstairs Suite with Private Kitchen & Veranda",
  anbu: "Ground-Floor Room with Private Veranda",
  arivu: "Minimalist Ground-Floor Room",
  annam: "Ground-Floor Room with Terrace Access",
};

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) return {};

  const subtitle = ROOM_SUBTITLES[slug] ?? "Room at Anpu";

  return {
    title: `${room.name} — ${subtitle}`,
    description: `${room.name} at Anpu cob retreat near Auroville, Pondicherry. ${room.description.slice(0, 120)}`,
    keywords: [
      room.name,
      `${room.name} Anpu`,
      `${room.name} room Pondicherry`,
      "cob retreat Pondicherry",
      "eco room near Auroville",
      "boutique stay Pondicherry",
      "Anpu retreat",
      subtitle,
    ],
    openGraph: {
      title: `${room.name} — ${subtitle} | Anpu Cob Retreat`,
      description: `${room.name} at Anpu cob retreat near Auroville, Pondicherry. ${room.description.slice(0, 120)}`,
      url: `https://anpu.in/rooms/${slug}/`,
      images: [
        {
          url: `https://anpu.in${room.images[0]}`,
          alt: `${room.name} at Anpu Cob Retreat near Auroville`,
        },
      ],
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) return notFound();

  const subtitle = ROOM_SUBTITLES[slug] ?? "Room at Anpu";
  const whatsappUrl = getWhatsAppUrl(room.name);

  const roomJsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "@id": `https://anpu.in/rooms/${slug}/#room`,
    "name": room.name,
    "description": room.description,
    "url": `https://anpu.in/rooms/${slug}/`,
    "image": room.images.map((img) => `https://anpu.in${img}`),
    "containedInPlace": {
      "@type": "VacationRental",
      "@id": "https://anpu.in/#vacation-rental",
      "name": "Anpu",
      "url": "https://anpu.in",
    },
    "amenityFeature": room.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true,
    })),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Kalarigram, Edayanchavadi",
      "addressLocality": "Auroville Bioregion",
      "addressRegion": "Tamil Nadu",
      "postalCode": "605101",
      "addressCountry": "IN",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Anpu",
        "item": "https://anpu.in/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rooms",
        "item": "https://anpu.in/#rooms",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": room.name,
        "item": `https://anpu.in/rooms/${slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen bg-[#0d0d0d] text-[#f5f0e8] font-sans">
        {/* Nav */}
        <nav className="px-6 py-5 border-b border-white/10">
          <Link
            href="/"
            className="text-sm text-[#c8b89a] hover:text-[#f5f0e8] transition-colors tracking-widest uppercase"
          >
            ← Back to Anpu
          </Link>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb (visible) */}
          <p className="text-xs text-[#c8b89a]/60 tracking-widest uppercase mb-8">
            <Link href="/" className="hover:text-[#c8b89a] transition-colors">
              Anpu
            </Link>
            {" / "}
            <Link href="/#rooms" className="hover:text-[#c8b89a] transition-colors">
              Rooms
            </Link>
            {" / "}
            <span>{room.name}</span>
          </p>

          {/* Room heading */}
          <h1 className="font-serif text-5xl md:text-7xl tracking-widest mb-3">
            {room.name}
          </h1>
          <p className="text-[#c8b89a] text-sm tracking-widest uppercase mb-12">
            {subtitle}
          </p>

          {/* Hero image */}
          <div className="relative w-full aspect-[4/3] mb-12 overflow-hidden rounded-sm">
            <Image
              src={room.images[0]}
              alt={`${room.name} at Anpu cob retreat near Auroville`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-[#f5f0e8]/80 mb-12 max-w-2xl">
            {room.description}
          </p>

          {/* Amenities */}
          <section className="mb-16">
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#c8b89a] mb-6">
              In this room
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {room.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="text-sm text-[#f5f0e8]/70 border border-white/10 px-4 py-3 rounded-sm"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </section>

          {/* Gallery */}
          {room.images.length > 1 && (
            <section className="mb-16">
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#c8b89a] mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {room.images.slice(1).map((img, i) => (
                  <div key={`${slug}-img-${i}`} className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={img}
                      alt={`${room.name} at Anpu — view ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 440px"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c8b89a] text-[#0d0d0d] text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#f5f0e8] transition-colors"
            >
              Inquire via WhatsApp
            </a>
            <Link
              href="/#rooms"
              className="text-sm text-[#c8b89a] hover:text-[#f5f0e8] transition-colors tracking-widest uppercase"
            >
              View all rooms →
            </Link>
          </div>

          {/* Location note */}
          <p className="mt-12 text-xs text-[#c8b89a]/50 leading-relaxed">
            Anpu is located near {SITE_CONFIG.nearbyPlaces[0].name},{" "}
            Edayanchavadi, in the {SITE_CONFIG.location.state},{" "}
            {SITE_CONFIG.location.country} — 12 km north of Pondicherry.
          </p>
        </main>
      </div>
    </>
  );
}
