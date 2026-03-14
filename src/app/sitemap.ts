import { MetadataRoute } from 'next';
import { ROOMS, SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    // NOTE: Hash-fragment URLs like /#rooms, /#faq are NOT valid sitemap entries.
    // Search engines ignore fragment identifiers entirely. Only list real crawlable pages.
    const homepageRoute: MetadataRoute.Sitemap = [
        {
            url: `${SITE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ];

    // Individual room pages — Google crawls these with high priority for rich results
    const roomRoutes: MetadataRoute.Sitemap = ROOMS.map((room) => ({
        url: `${SITE_URL}/rooms/${room.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...homepageRoute, ...roomRoutes];
}
