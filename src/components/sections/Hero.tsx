import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/exterior/DSC08512 copy.jpg"
                alt="Anpu Rammed Earth Retreat at twilight"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDESH/2gAMAwEAAhEDEQA/AKuo6jcXOpT3U7bpJnLscY5NW9O6t1C002C1SWMxQxrGpKE8Acc0pVS0bqC9u1P/2Q=="
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)",
                }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Massive ANPU text with breathing animation */}
                <h1 className="hero-text font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-light tracking-tight leading-none select-none breathing">
                    ANPU
                </h1>

                {/* Tagline */}
                <p className="mt-4 font-display text-lg md:text-xl tracking-[0.3em] uppercase text-cream/90">
                    {SITE_CONFIG.tagline}
                </p>
            </div>

            {/* Location Badge */}
            <div className="absolute top-20 right-6 z-10">
                <Badge
                    variant="outline"
                    className="bg-charcoal/20 backdrop-blur-sm border-cream/40 text-cream px-4 py-2 text-sm font-sans"
                >
                    {SITE_CONFIG.location.state}
                </Badge>
            </div>

            {/* Scroll Indicator with breathing animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-cream/70 text-sm tracking-widest uppercase font-sans">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-cream/70 to-transparent breathing" />
            </div>
        </section>
    );
}
