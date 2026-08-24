import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

/**
 * Allow the full public site for search, AI, and social crawlers.
 * Brave Search does not always advertise a distinct UA and will not crawl
 * pages that Googlebot cannot reach, so Googlebot must stay allowed.
 * Bravebot is listed explicitly as well.
 */
const CRAWLERS = [
  '*',

  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',

  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',

  // Google
  'Googlebot',
  'Google-Extended',
  'Gemini',
  'Gemini-Deep-Research',
  'GoogleOther',
  'GoogleOther-Image',
  'GoogleOther-Video',
  'Google-InspectionTool',

  // Perplexity
  'PerplexityBot',
  'Perplexity-User',

  // Microsoft
  'Bingbot',
  'msnbot',

  // Apple
  'Applebot',
  'Applebot-Extended',

  // Meta
  'Meta-ExternalAgent',
  'FacebookBot',

  // Amazon
  'Amazonbot',

  // Brave
  'Bravebot',

  // Others
  'cohere-ai',
  'Bytespider',
  'CCBot',
  'DuckDuckBot',
  'YandexBot'
] as const;

/** Every public route and asset prefix, listed explicitly. `/` remains the catch-all. */
const ALLOW_PATHS = [
  '/',
  '/laptops',
  '/usb-hubs',
  '/blog',
  '/blog/',
  '/blog/blackzero-bzd-01t-ph-a1',
  '/blog/blackzero-bzd-01t-ps',
  '/blog/best-wireless-headphones-2026',
  '/blog/creator-laptops-under-1500',
  '/blog/best-fleece-and-softshell-jackets',
  '/blog/fusion-360-and-cad-books',
  '/blog/pc-games-editions-explained',
  '/blog/mixed-category-stress',
  '/images',
  '/images/',
  '/logo.svg',
  '/llms.txt',
];

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
