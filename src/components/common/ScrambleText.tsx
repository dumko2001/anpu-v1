"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface ScrambleTextProps {
    text: string;
    className?: string;
}

const CHARS = "0123456789";

export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [hasRevealed, setHasRevealed] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    const runScramble = useCallback(() => {
        const chars = text.split("");
        let revealedCount = 0;

        const revealInterval = setInterval(() => {
            if (revealedCount >= chars.length) {
                clearInterval(revealInterval);
                setDisplayText(text);
                return;
            }

            const display = chars
                .map((char, index) => {
                    if (index < revealedCount) return char;
                    if (index === revealedCount) {
                        if (/[0-9]/.test(char)) {
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        }
                        return char;
                    }
                    if (/[0-9]/.test(char)) return "_";
                    return char;
                })
                .join("");

            setDisplayText(display);
            revealedCount++;
        }, 80);

        return () => clearInterval(revealInterval);
    }, [text]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasRevealed) {
                        setHasRevealed(true);
                        runScramble();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [hasRevealed, runScramble]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}
