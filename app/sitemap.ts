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
      url: `${SITE_URL}/blog/blackzero-bzd-01t-ps`,
      lastModified: '2026-08-20',
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${SITE_URL}/blog/blackzero-bzd-01t-ph-a1`,
      lastModified: '2026-08-06',
      changeFrequency: 'monthly',
      priority: 0.65
    },
    {
      url: `${SITE_URL}/blog/best-wireless-headphones-2026`,
      lastModified: '2026-07-28',
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${SITE_URL}/blog/best-fleece-and-softshell-jackets`,
      lastModified: '2026-07-30',
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${SITE_URL}/blog/fusion-360-and-cad-books`,
      lastModified: '2026-08-01',
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${SITE_URL}/blog/pc-games-editions-explained`,
      lastModified: '2026-07-15',
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${SITE_URL}/blog/mixed-category-stress`,
      lastModified: '2026-07-12',
      changeFrequency: 'yearly',
      priority: 0.4
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
