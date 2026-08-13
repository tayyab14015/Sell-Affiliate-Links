import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

/** Paths we explicitly allow for search and AI crawlers, including high-priority tool explainers. */
const ALLOW_PATHS = [
  '/',
  '/laptops',
  '/usb-hubs',
  '/blog',
  '/blog/blackzero-bzd-01t-ph-a1',
  '/blog/blackzero-bzd-01t-ps'
];

const CRAWLERS = [
  '*',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Gemini',
  'Googlebot',
  'Gemini-Deep-Research'
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: CRAWLERS.map((userAgent) => ({
      userAgent,
      allow: ALLOW_PATHS
    })),
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL
  };
}
