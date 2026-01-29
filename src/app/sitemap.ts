import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://anpu.in'; // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '#rooms',
        '#location',
        '#story',
        '#faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
