"use client";

import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { ScrambleText } from "@/components/common/ScrambleText";

export function Footer() {
    return (
        <footer className="bg-card py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                    {/* Left: Large CTA text */}
                    <div>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
                            Visit
                            <br />
                            {SITE_CONFIG.name}
                        </h2>
                    </div>

                    {/* Right: Contact info */}
                    <div className="flex flex-col gap-4 md:items-end">
                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                        >
                            <span className="font-sans">Message on WhatsApp</span>
                        </a>
                        <p className="text-muted-foreground font-sans">
                            {SITE_CONFIG.location.name}
                        </p>
                        <p className="font-mono text-sm text-primary">
                            <ScrambleText text={SITE_CONFIG.location.coordinates.display} />
                        </p>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom strip */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {SITE_CONFIG.name}</p>
                    <p className="font-sans">Built with earth, designed for seekers</p>
                </div>
            </div>
        </footer>
    );
}
