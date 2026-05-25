import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'Gemini',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/laptops', '/usb-hubs']
      },
      {
        userAgent: 'Gemini-Deep-Research',
        allow: ['/', '/laptops', '/usb-hubs']
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, '/sitemap.xml'],
    host: SITE_URL
  };
}
