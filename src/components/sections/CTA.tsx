import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export function CTA() {
    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden">
            {/* Background Image with parallax */}
            <div className="absolute inset-0">
                <Image
                    src="/images/exterior/DSC08518 copy.jpg"
                    alt="Anpu at evening"
                    fill
                    className="object-cover parallax-slow"
                    sizes="100vw"
                    quality={70}
                />
                <div className="absolute inset-0 bg-charcoal/80" />
            </div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center scroll-fade-up">
                <span className="font-mono text-sm text-cream/60">05</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-cream kinetic-heading kinetic-spread">
                    Ready to Experience Earth?
                </h2>
                <p className="mt-6 text-cream/80 text-lg max-w-xl mx-auto">
                    Book your stay via WhatsApp for instant response and personalized assistance.
                </p>

                {/* CTA Button with glow */}
                <div className="mt-10">
                    <Button asChild size="lg" className="text-base px-8 py-6 hover-glow">
                        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                            Start Conversation
                        </a>
                    </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-16 pt-8 border-t border-cream/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-cream/60">
                    <span className="animated-underline">{SITE_CONFIG.email}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>WhatsApp preferred</span>
                </div>
            </div>
        </section>
    );
}
