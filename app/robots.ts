import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: '  Claude-SearchBot',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'Gemini',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
      {
        userAgent: 'Gemini-Deep-Research',
        allow: ['/', '/laptops', '/usb-hubs', '/blog']
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL
  };
}
