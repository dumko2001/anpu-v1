"use client";

/**
 * Page Transition Wrapper
 * 
 * Uses Framer Motion's AnimatePresence to create smooth
 * fade-through transitions between routes.
 * 
 * Note: This is a template.tsx (not layout.tsx) because
 * template remounts on route change, triggering exit/enter animations.
 * 
 * @maintainer Future devs: Adjust animation values in pageVariants
 */

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Animation variants for page transitions
 * - initial: Starting state (invisible, shifted down slightly)  
 * - animate: Visible state
 * - exit: Leaving state (fades out, shifts up slightly)
 */
const pageVariants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

interface TemplateProps {
    children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
