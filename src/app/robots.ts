import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Allow all standard crawlers
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            // Explicitly allow AI crawlers for GEO/AEO visibility
            // These bots power ChatGPT, Claude, Perplexity, and Google AI Overviews.
            // Blocking them means Anpu won't appear in AI-generated travel recommendations.
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'Applebot-Extended', allow: '/' },
            { userAgent: 'Amazonbot', allow: '/' },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
