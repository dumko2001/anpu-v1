"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
    { href: "#rooms", label: "Rooms", number: "01" },
    { href: "#story", label: "The Story", number: "02" },
    { href: "#location", label: "Location", number: "03" },
    { href: "#faq", label: "Questions", number: "04" },
    { href: "#contact", label: "Book", number: "05" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;

            setScrolled(scrollTop > 50);
            setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass shadow-sm" : "bg-transparent"
            )}
        >
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        "font-display text-2xl tracking-tight transition-colors duration-300",
                        scrolled ? "text-foreground" : "text-cream"
                    )}
                >
                    {SITE_CONFIG.name}
                    <span className="inline-block w-2 h-2 bg-teal rounded-full ml-1 align-middle" />
                </Link>

                {/* Menu Button - circular, always visible */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            className={cn(
                                "w-12 h-12 rounded-full border flex items-center justify-center",
                                "transition-all duration-300",
                                scrolled
                                    ? "border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                                    : "border-cream/40 text-cream hover:bg-cream/20"
                            )}
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:w-[420px] bg-card p-0">
                        <div className="flex flex-col h-full p-8">
                            {/* Logo in sheet */}
                            <div className="flex items-center justify-between mb-12">
                                <span className="font-display text-xl text-foreground">
                                    {SITE_CONFIG.name}
                                </span>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 flex flex-col gap-2">
                                {NAV_LINKS.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-4 py-3 border-b border-border/50"
                                        >
                                            <span className="text-sm text-muted-foreground font-mono w-6">
                                                {link.number}
                                            </span>
                                            <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            {/* Footer in sheet */}
                            <div className="pt-8 mt-auto">
                                <p className="text-sm text-muted-foreground">
                                    {SITE_CONFIG.location.name}
                                </p>
                                <p className="text-xs text-primary font-mono mt-1">
                                    {SITE_CONFIG.location.coordinates.display}
                                </p>
                                {SITE_CONFIG.social.airbnb !== "#" && (
                                    <a
                                        href={SITE_CONFIG.social.airbnb}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                                    >
                                        View on Airbnb →
                                    </a>
                                )}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Scroll Progress Line */}
            <div className={cn("h-0.5", scrolled ? "bg-border" : "bg-cream/20")}>
                <div
                    className="h-full bg-primary transition-all duration-150 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </header>
    );
}
