import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.aisneer.com';

/** Other blog posts (tool explainers are listed separately so they can sit near the top). */
const OTHER_BLOG_POSTS: Array<{ slug: string; lastModified: string }> = [
  { slug: 'best-wireless-headphones-2026', lastModified: '2026-07-28' },
  { slug: 'creator-laptops-under-1500', lastModified: '2026-07-21' },
  { slug: 'best-fleece-and-softshell-jackets', lastModified: '2026-07-30' },
  { slug: 'fusion-360-and-cad-books', lastModified: '2026-08-01' },
  { slug: 'pc-games-editions-explained', lastModified: '2026-07-15' },
  { slug: 'mixed-category-stress', lastModified: '2026-07-12' }
];

const SITE_LAST_MODIFIED = '2026-08-13';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${SITE_URL}/blog/blackzero-bzd-01t-ph-a1`,
      lastModified: '2026-08-06',
      changeFrequency: 'weekly',
      priority: 0.95
    },
    {
      url: `${SITE_URL}/blog/blackzero-bzd-01t-ps`,
      lastModified: '2026-08-13',
      changeFrequency: 'weekly',
      priority: 0.94
    },
    {
      url: `${SITE_URL}/laptops`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${SITE_URL}/usb-hubs`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    ...OTHER_BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }))
  ];
}
