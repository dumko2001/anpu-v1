"use client";

import { useEffect } from "react";

/**
 * Forces scroll to top on page load/reload
 * Fixes browser scroll restoration behavior
 */
export function ScrollToTop() {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Also handle hash-based navigation
        if (window.location.hash === "") {
            window.scrollTo(0, 0);
        }
    }, []);

    return null;
}
