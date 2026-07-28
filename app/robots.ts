import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.diloo.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/']
        // ARCHIVED — laptop & USB hub routes disabled; site is book-only
        // allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'GPTBot',
        allow: ['/']
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/']
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/']
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/']
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/']
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/']
      },
      {
        userAgent: 'Gemini',
        allow: ['/']
      },
      {
        userAgent: 'Googlebot',
        allow: ['/']
      },
      {
        userAgent: 'Gemini-Deep-Research',
        allow: ['/']
      }
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, '/sitemap.xml'],
    host: SITE_URL
  };
}
