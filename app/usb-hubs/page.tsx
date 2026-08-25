import Link from 'next/link';
import type { Metadata } from 'next';
import {
  usbHubs,
  usbHubCategories,
  bestValueUsbHubPicks,
  type UsbHub
} from '../data/usb-hubs';
import { SITE_NAME, SITE_URL, categoryToSlug, DEFAULT_OG_IMAGE } from '../site';

const PAGE_URL = `${SITE_URL}/usb-hubs`;
const TITLE = 'USB-C Hubs, Splitters, and OTG Adapters';
const DESCRIPTION =
  'USB-C hubs, USB 3.0 splitters, and OTG adapters for laptops and phones. Compare budget picks and search current Google Shopping prices.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url]
  }
};

const USB_FAQS = [
  {
    q: 'Do I need a USB-C hub or a USB 3.0 hub?',
    a: 'If your laptop or tablet only has USB-C ports, pick a USB-C hub or adapter. If you still have full-size USB-A ports, a USB 3.0 splitter is usually the cheaper option.'
  },
  {
    q: 'What is the best budget USB hub in this list?',
    a: 'The USB 3.0 Hub 4-Port Splitter Expander at $3.90 is the lowest-priced option here — good for keyboards, mice, flash drives, and printers on a tight budget.'
  },
  {
    q: 'Are these good for MacBook and iPhone?',
    a: 'Yes. Several picks explicitly support MacBook Pro/Air, iPad, and recent iPhones via USB-C OTG adapters. Always confirm your exact port type (USB-C vs USB-A) before buying.'
  },
  {
    q: 'Why does the buy button open Google Shopping?',
    a: 'We link to Google Shopping search results so you can compare current prices across retailers yourself. AISneer does not stock these hubs.'
  }
];

function ProductCard({ hub }: { hub: UsbHub }) {
  const imageSrc = hub.image.startsWith('http') ? hub.image : hub.image;
  return (
    <article id={hub.slug} className="product-card product-card-lg">
      <div className="product-media">
        <img src={imageSrc} alt={hub.title} width={800} height={500} loading="lazy" />
        <span className="product-badge">{hub.category}</span>
      </div>

      <div className="product-body">
        <div className="product-title">
          <span className="product-brand">{hub.brand}</span>
          <h3>{hub.title}</h3>
        </div>

        <ul className="product-highlights">
          {hub.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="product-desc">{hub.description}</p>

        <div className="product-foot">
          <div className="product-price">
            <span className="price-label">From</span>
            <span className="price">{hub.priceFrom}</span>
          </div>
          <a
            className="btn btn-primary"
            href={hub.searchUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            Search prices →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function UsbHubsPage() {
  const grouped = usbHubCategories.map((cat) => ({
    cat,
    slug: categoryToSlug(cat),
    hubs: usbHubs.filter((h) => h.category === cat)
  }));

  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'USB hubs and adapters on AISneer',
    numberOfItems: usbHubs.length,
    itemListElement: usbHubs.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${PAGE_URL}#${h.slug}`,
      name: h.title
    }))
  };

  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>USB Hubs</span>
          </nav>
          <h1 className="catalog-title">Shop USB hubs &amp; adapters</h1>
          <p className="catalog-sub">
            USB-C hubs, USB 3.0 splitters, and OTG adapters from budget picks to 10 Gbps multiport
            hubs. Compare features and search current prices on Google Shopping. AISneer does not
            stock these products.
          </p>

          <div className="catalog-meta">
            <span><strong>{usbHubs.length}</strong> products</span>
            <span aria-hidden>·</span>
            <span>Budget-friendly</span>
            <span aria-hidden>·</span>
            <span>Google Shopping price search</span>
          </div>
        </div>
      </section>

      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <div className="chip-row" role="navigation" aria-label="Jump to category">
            {grouped.map(({ cat, slug, hubs }) => (
              <a key={cat} href={`#${slug}`} className="chip">
                {cat} ({hubs.length})
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container catalog-layout">
        <div>
          {grouped.map(({ cat, slug, hubs }) => (
            <section key={cat} id={slug} className="usb-category-block">
              <h2 className="section-title">{cat}</h2>
              <ul className="product-grid">
                {hubs.map((hub) => (
                  <li key={hub.slug}>
                    <ProductCard hub={hub} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside className="sidebar">
          <section className="widget">
            <h2 className="widget-title">Need a laptop too?</h2>
            <p className="widget-body">
              Pair your new hub with a curated laptop from our main catalog — ultrabooks, gaming,
              business, and student picks.
            </p>
            <Link href="/laptops" className="btn btn-ghost btn-sm widget-cta">
              Shop laptops →
            </Link>
          </section>

          <section className="widget">
            <h2 className="widget-title">Best value this week</h2>
            <ul className="side-list">
              {bestValueUsbHubPicks.map((item) => (
                <li key={`${item.slug}-value`} className="side-list-item">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={40}
                    className="thumb"
                    loading="lazy"
                  />
                  <span className="side-list-text">
                    <a href={`#${item.slug}`} className="side-list-name">{item.title}</a>
                    <span className="side-list-meta">{item.priceFrom}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="widget widget-cta-card">
            <h2 className="widget-title">How we link</h2>
            <ul className="bullet-list">
              <li>We do not hold inventory</li>
              <li>Google Shopping price search</li>
              <li>Compare before you buy</li>
            </ul>
            <Link href="/about" className="btn btn-primary btn-sm widget-cta">
              About us →
            </Link>
          </section>
        </aside>
      </div>

      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">USB hub buying FAQ</h2>
        </div>
        <div className="faq">
          {USB_FAQS.map((item) => (
            <article className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
    </>
  );
}
