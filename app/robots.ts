import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'Gemini',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'Gemini-Deep-Research',
        allow: ['/', '/laptops']
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, '/sitemap.xml'],
    host: SITE_URL
  };
}
