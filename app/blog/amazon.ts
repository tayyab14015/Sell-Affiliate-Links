const AMAZON_BASE_URL = 'https://www.amazon.com';

export function amazonSearchUrl(query: string) {
  return `${AMAZON_BASE_URL}/s?k=${encodeURIComponent(query)}`;
}

export function amazonProductUrl(asin: string) {
  return `${AMAZON_BASE_URL}/dp/${asin}`;
}
