import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Rooms } from "@/components/sections/Rooms";
import { Story } from "@/components/sections/Story";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Story />
        <Reviews />
        <Location />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
