import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

const BLOG_SLUGS = [
  'blackzero-bzd-01t-ph-a1',
  'best-wireless-headphones-2026',
  'creator-laptops-under-1500',
  'best-fleece-and-softshell-jackets',
  'fusion-360-and-cad-books',
  'pc-games-editions-explained',
  'mixed-category-stress'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/laptops`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/usb-hubs`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 }
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticRoutes, ...blogRoutes];
}
