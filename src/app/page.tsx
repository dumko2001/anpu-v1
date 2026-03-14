import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Rooms } from "@/components/sections/Rooms";
import { Story } from "@/components/sections/Story";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { FAQ_ITEMS } from "@/lib/constants";

export default function Home() {
  // FAQPage JSON-LD — enables Google featured snippets, voice search answers,
  // and citation by AI engines (ChatGPT, Perplexity, Gemini).
  // This is the #1 AEO (Answer Engine Optimization) signal for this site.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Story />
        <Gallery />
        <Reviews />
        <Location />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
