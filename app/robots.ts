import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

/**
 * Allow the full public site. Brave Search does not advertise a distinct crawler
 * UA and will not crawl pages that Googlebot cannot reach, so Googlebot must stay
 * allowed. Bingbot is listed explicitly so Bing indexing is not affected.
 */
const SEARCH_CRAWLERS = ['*', 'Googlebot', 'Bingbot', 'DuckDuckBot'] as const;

const AI_CRAWLERS = [
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
  'Gemini-Deep-Research'
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [...SEARCH_CRAWLERS, ...AI_CRAWLERS].map((userAgent) => ({
      userAgent,
      allow: '/'
    })),
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL
  };
}
