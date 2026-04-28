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
        userAgent: 'GoogleOther',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'GoogleOther-Image',
        allow: ['/', '/laptops']
      },
      {
        userAgent: 'GoogleOther-Video',
        allow: ['/', '/laptops']
      }
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, '/sitemap.xml'],
    host: SITE_URL
  };
}
