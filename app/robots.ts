import type { MetadataRoute } from 'next';
import { SITE_URL } from './site';

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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: CRAWLERS.map((userAgent) => ({
      userAgent,
      allow: '/'
    })),
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL
  };
}
