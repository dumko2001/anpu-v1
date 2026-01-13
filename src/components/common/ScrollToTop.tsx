"use client";

import { useEffect } from "react";

/**
 * Forces scroll to top on page load/reload
 * Fixes browser scroll restoration behavior
 * 
 * Root cause: Browser's scroll restoration remembers position
 * even after clicking anchor links like #rooms
 */
export function ScrollToTop() {
    useEffect(() => {
        // Disable browser's automatic scroll restoration
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        // Clear any hash in the URL that might cause scrolling
        if (window.location.hash) {
            // Replace current URL without the hash
            history.replaceState(null, "", window.location.pathname);
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }, []);

    return null;
}
