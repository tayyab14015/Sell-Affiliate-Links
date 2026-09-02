export const SITE_NAME = 'AISneer';
export const SITE_TAGLINE = 'Curated laptop picks and honest deals';
export const SITE_URL = 'https://www.aisneer.com';
export const SITE_EMAIL = 'hello@aisneer.com';

export const HOME_DESCRIPTION =
  'AISneer curates spec-verified laptops and USB hubs across ultrabook, gaming, business, and creator categories, then links you to current retailer deals.';

/** Bing Webmaster requires meta descriptions between 25 and 160 characters. */
export const META_DESCRIPTION_MIN = 25;
export const META_DESCRIPTION_MAX = 160;

export function fitMetaDescription(text: string): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= META_DESCRIPTION_MAX) return normalized;

  const slice = normalized.slice(0, META_DESCRIPTION_MAX);
  const breakAt = Math.max(
    slice.lastIndexOf(' '),
    slice.lastIndexOf('—'),
    slice.lastIndexOf('–')
  );
  return (breakAt >= META_DESCRIPTION_MIN ? slice.slice(0, breakAt) : slice)
    .replace(/[,;:.!?…\-–—]+$/u, '')
    .trim();
}

export const DEFAULT_OG_IMAGE = {
  url: '/images/og-home.jpg',
  width: 1200,
  height: 630,
  alt: 'AISneer curated laptop picks'
};

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function categoryToSlug(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function laptopUrl(slug: string): string {
  return absoluteUrl(`/laptops/${slug}`);
}

export function laptopCategoryUrl(category: string): string {
  return absoluteUrl(`/laptops/category/${categoryToSlug(category)}`);
}
