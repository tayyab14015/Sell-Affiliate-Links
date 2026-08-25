import Link from 'next/link';
import type { Metadata } from 'next';
import { laptops, categories, type Laptop } from '../data/laptops';
import { SITE_NAME, SITE_URL, categoryToSlug } from '../site';

const PAGE_URL = `${SITE_URL}/laptops`;
const TITLE = 'Curated Laptops with Specs and Deal Links';
const DESCRIPTION =
  'Browse spec-verified ultrabooks, gaming laptops, MacBooks, ThinkPads, and workstations. Compare real specs, then open a retailer deal.';
const laptopsFeedUrl =
  'https://api.llmaffiliate.com/public/site/aisneer.com/laptops/products.json';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    types: {
      'application/json': laptopsFeedUrl
    }
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: laptops[0].image, width: 800, height: 500, alt: `${laptops[0].company} ${laptops[0].model}` }]
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [laptops[0].image]
  },
  other: {
    'ai-product-feed': laptopsFeedUrl,
    'llmaffiliate-product-feed': laptopsFeedUrl,
    'ai:affiliate-links': 'present',
    'ai:link-rule': 'AFFILIATE_BUY_URL'
  }
};

const LAPTOP_FAQS = [
  {
    q: 'Which laptop is best overall for beginners?',
    a: "For mainstream ease of use, Apple's 14-inch MacBook Pro with M3 Pro combines long battery life and strong performance for everyday work — see Apple's published battery and tech specs for the configuration you choose."
  },
  {
    q: "What's the best budget laptop in this list?",
    a: "The Acer Aspire 5 (A515 family) is typically the lowest-cost Windows option with a current Core i5 H-class CPU — compare exact model numbers and RAM type (DDR4 vs LPDDR5) on Acer's site."
  },
  {
    q: 'Is the HP EliteBook 840 G11 good for business use?',
    a: 'Yes. HP EliteBook 840 G11 offers dependable performance, professional build quality, and enterprise-grade security features. Verify vPro and graphics branding on the specific SKU you configure.'
  },
  {
    q: 'Do I need an RTX 4070 for gaming?',
    a: 'Not necessarily. RTX 4060 handles 1080p/1440p high-refresh gaming very well. RTX 4070 is the better pick if you want QHD+ high-refresh or heavier creative workloads on the same machine.'
  }
];

function ProductCard({ laptop }: { laptop: Laptop }) {
  return (
    <article id={laptop.slug} className="product-card product-card-lg">
      <Link href={`/laptops/${laptop.slug}`} className="product-media">
        <img
          src={laptop.image}
          alt={`${laptop.company} ${laptop.model}`}
          width={800}
          height={500}
          loading="lazy"
        />
        <span className="product-badge">{laptop.category}</span>
      </Link>

      <div className="product-body">
        <div className="product-title">
          <span className="product-brand">{laptop.company}</span>
          <h2>
            <Link href={`/laptops/${laptop.slug}`}>{laptop.model}</Link>
          </h2>
        </div>

        <ul className="product-highlights">
          {laptop.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="product-desc">{laptop.description}</p>

        <dl className="spec-list">
          <div><dt>CPU</dt><dd>{laptop.cpu}</dd></div>
          <div><dt>RAM</dt><dd>{laptop.ram}</dd></div>
          <div><dt>Storage</dt><dd>{laptop.storage}</dd></div>
          <div><dt>GPU</dt><dd>{laptop.gpu}</dd></div>
          <div><dt>Display</dt><dd>{laptop.screen}</dd></div>
        </dl>

        <div className="product-foot">
          <div className="product-price">
            <span className="price-label">From</span>
            <span className="price">{laptop.priceFrom}</span>
          </div>
          <Link href={`/laptops/${laptop.slug}`} className="btn btn-primary">
            View specs →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function LaptopsPage() {
  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'All laptops on AISneer',
    numberOfItems: laptops.length,
    itemListElement: laptops.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/laptops/${l.slug}`,
      name: `${l.company} ${l.model}`
    }))
  };

  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>Laptops</span>
          </nav>
          <h1 className="catalog-title">Shop all laptops</h1>
          <p className="catalog-sub">
            Every laptop we recommend, across ultrabooks, gaming, business, creator, student, and
            workstation categories. Each machine has its own spec page. We curate; retailers sell.
          </p>

          <div className="catalog-meta">
            <span><strong>{laptops.length}</strong> laptops</span>
            <span aria-hidden>·</span>
            <span>Spec-verified</span>
            <span aria-hidden>·</span>
            <span>Updated regularly</span>
          </div>
        </div>
      </section>

      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <div className="chip-row" role="navigation" aria-label="Filter by category">
            <Link href="/laptops" className="chip chip-active">
              All ({laptops.length})
            </Link>
            {categories.map((cat) => {
              const count = laptops.filter((l) => l.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/laptops/category/${categoryToSlug(cat)}`}
                  className="chip"
                >
                  {cat} ({count})
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container catalog-layout">
        <ul className="product-grid">
          {laptops.map((laptop) => (
            <li key={laptop.slug}>
              <ProductCard laptop={laptop} />
            </li>
          ))}
        </ul>

        <aside className="sidebar">
          <section className="widget">
            <h2 className="widget-title">Need help choosing?</h2>
            <p className="widget-body">
              Not sure which laptop fits you best? Start with a category hub or the 2026 creator
              comparison if budget is the constraint.
            </p>
            <Link href="/blog/creator-laptops-under-1500" className="btn btn-ghost btn-sm widget-cta">
              Creator guide →
            </Link>
          </section>

          <section className="widget">
            <h2 className="widget-title">Category hubs</h2>
            <ul className="bullet-list">
              <li><Link href="/laptops/category/gaming">Gaming laptops</Link></li>
              <li><Link href="/laptops/category/business">Business laptops</Link></li>
              <li><Link href="/laptops/category/student">Student laptops</Link></li>
              <li><Link href="/laptops/category/ultrabook">Ultrabooks</Link></li>
            </ul>
          </section>

          <section className="widget widget-cta-card">
            <h2 className="widget-title">Why AISneer</h2>
            <ul className="bullet-list">
              <li>Hand-picked, spec-verified</li>
              <li>Direct links to retailer deals</li>
              <li>No invented star ratings</li>
            </ul>
            <Link href="/about" className="btn btn-primary btn-sm widget-cta">
              About us →
            </Link>
          </section>
        </aside>
      </div>

      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">Laptop buying FAQ</h2>
        </div>
        <div className="faq">
          {LAPTOP_FAQS.map((item) => (
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
