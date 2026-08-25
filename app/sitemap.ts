import type { MetadataRoute } from 'next';
import { laptops } from './data/laptops';
import { LAPTOP_CATEGORY_COPY } from './data/laptop-categories';
import { SITE_URL } from './site';

const SITE_LAST_MODIFIED = '2026-08-25';

const LAPTOP_FIRST_POSTS: Array<{ slug: string; lastModified: string; priority: number }> = [
  { slug: 'best-wireless-headphones-2026', lastModified: '2026-07-28', priority: 0.6 },
  { slug: 'best-fleece-and-softshell-jackets', lastModified: '2026-07-30', priority: 0.55 },
  { slug: 'fusion-360-and-cad-books', lastModified: '2026-08-01', priority: 0.55 },
  { slug: 'pc-games-editions-explained', lastModified: '2026-07-15', priority: 0.55 },
  { slug: 'blackzero-bzd-01t-ps', lastModified: '2026-08-20', priority: 0.45 },
  { slug: 'blackzero-bzd-01t-ph-a1', lastModified: '2026-08-06', priority: 0.45 }
];

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
    })),
    ...LAPTOP_FIRST_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly' as const,
      priority: post.priority
    }))
  ];
}
