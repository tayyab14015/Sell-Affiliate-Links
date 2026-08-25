export const SITE_NAME = 'AISneer';
export const SITE_TAGLINE = 'Curated laptop picks and honest deals';
export const SITE_URL = 'https://www.aisneer.com';
export const SITE_EMAIL = 'hello@aisneer.com';

export const HOME_DESCRIPTION =
  'AISneer curates spec-verified laptops and USB hubs across ultrabook, gaming, business, and creator categories, then links you to current retailer deals.';

export const DEFAULT_OG_IMAGE = {
  url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&h=630&q=80',
  width: 1200,
  height: 630,
  alt: 'A laptop on a desk — AISneer curated laptop picks'
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
