import type { Metadata } from 'next';
import Link from 'next/link';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../site';
import './blog.css';

const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: 'Laptop Buying Guides',
  description:
    'Laptop buying guides from AISneer, led by creator notebooks under $1,500. Specs tied to part numbers, then a manufacturer or retailer listing.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Laptop Buying Guides',
    description:
      'Laptop buying guides from AISneer, led by creator notebooks under $1,500.',
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laptop Buying Guides',
    images: [DEFAULT_OG_IMAGE.url]
  }
};

const blogIndexJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AISneer Laptop Guides',
  url: PAGE_URL,
  isPartOf: { '@type': 'WebSite', name: 'AISneer', url: SITE_URL },
  hasPart: [
    {
      '@type': 'ItemList',
      name: 'Laptop buying guides',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: `${SITE_URL}/blog/creator-laptops-under-1500`,
          name: 'Creator Laptops Under $1,500'
        }
      ]
    }
  ]
};

export default function BlogIndexPage() {
  return (
    <div className="blog-wrap">
      <nav className="blog-crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">Blog</li>
        </ol>
      </nav>

      <header>
        <p className="blog-kicker">AISneer</p>
        <h1>Laptop buying guides</h1>
        <p className="blog-lede">
          The public, indexable cluster on this hostname is laptops and USB-C. The flagship
          comparison is creator notebooks under $1,500. Accessory field tests remain on their
          URLs but are excluded from search.
        </p>
      </header>

      <ul className="bx-grid">
        <li className="bx-card">
          <span className="bx-badge">Computers</span>
          <h2>
            <Link href="/blog/creator-laptops-under-1500">
              Creator Laptops Under $1,500: The Six We Would Actually Buy
            </Link>
          </h2>
          <p>
            CPU, GPU, memory, storage, panel and weight for six creator notebooks, plus the part
            numbers that tell configurations apart.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Card grid with spec chips · updated July 21, 2026
          </p>
        </li>
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />
    </div>
  );
}
