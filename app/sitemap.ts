import type { MetadataRoute } from 'next';
import { laptops } from './data/laptops';
import { LAPTOP_CATEGORY_COPY } from './data/laptop-categories';
import { SITE_URL } from './site';

const SITE_LAST_MODIFIED = '2026-08-25';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${SITE_URL}/laptops`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.95
    },
    {
      url: `${SITE_URL}/blog/creator-laptops-under-1500`,
      lastModified: '2026-07-21',
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.75
    },
    {
      url: `${SITE_URL}/usb-hubs`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.65
    },
    ...LAPTOP_CATEGORY_COPY.map((cat) => ({
      url: `${SITE_URL}/laptops/category/${cat.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.72
    })),
    ...laptops.map((laptop) => ({
      url: `${SITE_URL}/laptops/${laptop.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }))
  ];
}
