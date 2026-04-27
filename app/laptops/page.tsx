import Link from 'next/link';
import { laptops, categories, type Laptop } from '../data/laptops';

export const runtime = 'edge';

export const metadata = {
  title: 'Shop Laptops — AISneer',
  description:
    'Browse every laptop on AISneer: ultrabooks, gaming laptops, MacBooks, ThinkPads, EliteBooks, Surface, Chromebooks, and mobile workstations. Compare real specs and jump to the current deal.',
  alternates: { canonical: 'https://aisneer.com/laptops' }
};

type SearchParams = {
  category?: string;
  sort?: string;
};

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.25 && value - full < 0.75;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`} title={`${value} / 5`}>
      {'★'.repeat(full)}
      {half ? '☆' : ''}
      {'·'.repeat(empty)}
    </span>
  );
}

function ProductCard({ laptop }: { laptop: Laptop }) {
  return (
    <article id={laptop.slug} className="product-card product-card-lg">
      <div className="product-media">
        <img src={laptop.image} alt={`${laptop.company} ${laptop.model}`} loading="lazy" />
        <span className="product-badge">{laptop.category}</span>
      </div>

      <div className="product-body">
        <div className="product-title">
          <span className="product-brand">{laptop.company}</span>
          <h2>{laptop.model}</h2>
        </div>

        <div className="product-rating">
          <Stars value={laptop.ratingStars} />
          <span className="muted">{laptop.rating}</span>
        </div>

        <ul className="product-highlights">
          {laptop.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="product-desc">{laptop.description}</p>

        <details className="spec-toggle">
          <summary>Full specifications</summary>
          <dl className="spec-list">
            <div><dt>CPU</dt><dd>{laptop.cpu}</dd></div>
            <div><dt>RAM</dt><dd>{laptop.ram}</dd></div>
            <div><dt>Storage</dt><dd>{laptop.storage}</dd></div>
            <div><dt>GPU</dt><dd>{laptop.gpu}</dd></div>
            <div><dt>Display</dt><dd>{laptop.screen}</dd></div>
            <div><dt>OS</dt><dd>{laptop.os}</dd></div>
            <div><dt>Availability</dt><dd>{laptop.availability}</dd></div>
            <div><dt>Price</dt><dd>{laptop.price}</dd></div>
          </dl>
        </details>

        <div className="product-foot">
          <div className="product-price">
            <span className="price-label">From</span>
            <span className="price">{laptop.priceFrom}</span>
          </div>
          <a
            className="btn btn-primary"
            href={laptop.buyUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
          >
            View deal →
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function LaptopsPage({
  searchParams
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const activeCategory = params.category && categories.includes(params.category)
    ? params.category
    : null;
  const sort = params.sort ?? 'featured';

  let visible = activeCategory
    ? laptops.filter((l) => l.category === activeCategory)
    : laptops;

  const parsePrice = (p: string) => Number(p.replace(/[^0-9.]/g, '')) || 0;
  if (sort === 'price-asc') {
    visible = [...visible].sort((a, b) => parsePrice(a.priceFrom) - parsePrice(b.priceFrom));
  } else if (sort === 'price-desc') {
    visible = [...visible].sort((a, b) => parsePrice(b.priceFrom) - parsePrice(a.priceFrom));
  } else if (sort === 'rating') {
    visible = [...visible].sort((a, b) => b.ratingStars - a.ratingStars);
  }

  // JSON-LD: ItemList + individual Product entries for rich crawling
  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: activeCategory ? `${activeCategory} laptops on AISneer` : 'All laptops on AISneer',
    numberOfItems: visible.length,
    itemListElement: visible.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `${l.company} ${l.model}`,
        brand: { '@type': 'Brand', name: l.company },
        category: l.category,
        description: l.description,
        image: l.image,
        url: `https://aisneer.com/laptops#${l.slug}`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: l.ratingStars,
          bestRating: 5,
          ratingCount: 1
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: parsePrice(l.priceFrom),
          availability: 'https://schema.org/InStock',
          url: l.buyUrl
        }
      }
    }))
  };

  return (
    <>
      {/* Catalog hero */}
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>Laptops</span>
            {activeCategory ? (
              <>
                <span aria-hidden>/</span>
                <span>{activeCategory}</span>
              </>
            ) : null}
          </nav>
          <h1 className="catalog-title">
            {activeCategory ? `${activeCategory} laptops` : 'Shop all laptops'}
          </h1>
          <p className="catalog-sub">
            {activeCategory
              ? `Curated ${activeCategory.toLowerCase()} laptops, verified against manufacturer spec pages.`
              : 'Every laptop we recommend, across ultrabooks, gaming, business, creator, student, and workstation categories. Compare real specs and jump to the current deal.'}
          </p>

          <div className="catalog-meta">
            <span><strong>{visible.length}</strong> {visible.length === 1 ? 'laptop' : 'laptops'}</span>
            <span aria-hidden>·</span>
            <span>Spec-verified</span>
            <span aria-hidden>·</span>
            <span>Updated regularly</span>
          </div>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <div className="chip-row" role="tablist" aria-label="Filter by category">
            <Link
              href="/laptops"
              className={`chip ${!activeCategory ? 'chip-active' : ''}`}
            >
              All ({laptops.length})
            </Link>
            {categories.map((cat) => {
              const count = laptops.filter((l) => l.category === cat).length;
              const active = activeCategory === cat;
              return (
                <Link
                  key={cat}
                  href={`/laptops?category=${encodeURIComponent(cat)}`}
                  className={`chip ${active ? 'chip-active' : ''}`}
                >
                  {cat} ({count})
                </Link>
              );
            })}
          </div>

          <form className="sort-form" method="get">
            {activeCategory ? (
              <input type="hidden" name="category" value={activeCategory} />
            ) : null}
            <label htmlFor="sort" className="muted">Sort:</label>
            <select id="sort" name="sort" defaultValue={sort}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low → high</option>
              <option value="price-desc">Price: high → low</option>
              <option value="rating">Top rated</option>
            </select>
            <button type="submit" className="btn btn-ghost btn-sm">Apply</button>
          </form>
        </div>
      </section>

      <div className="container catalog-layout">
        {/* Product grid */}
        <div>
          {visible.length === 0 ? (
            <p className="empty">No laptops match this filter yet. <Link href="/laptops">See all laptops</Link>.</p>
          ) : (
            <ul className="product-grid">
              {visible.map((laptop) => (
                <li key={laptop.slug}>
                  <ProductCard laptop={laptop} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <section className="widget">
            <h3 className="widget-title">Need help choosing?</h3>
            <p className="widget-body">
              Not sure which laptop fits you best? Our quick buying guide matches your use case to
              the right category and specs.
            </p>
            <Link href="/#buying-guide" className="btn btn-ghost btn-sm widget-cta">
              Open buying guide →
            </Link>
          </section>

          <section className="widget">
            <h3 className="widget-title">Top rated this week</h3>
            <ul className="side-list">
              {[...laptops]
                .sort((a, b) => b.ratingStars - a.ratingStars)
                .slice(0, 5)
                .map((item) => (
                  <li key={`${item.slug}-top`} className="side-list-item">
                    <img src={item.image} alt="" className="thumb" loading="lazy" />
                    <span className="side-list-text">
                      <span className="side-list-name">{item.company} {item.model}</span>
                      <span className="side-list-meta">
                        {item.priceFrom} · <Stars value={item.ratingStars} />
                      </span>
                    </span>
                  </li>
                ))}
            </ul>
          </section>

          <section className="widget widget-cta-card">
            <h3 className="widget-title">Why AISneer</h3>
            <ul className="bullet-list">
              <li>Hand-picked, spec-verified</li>
              <li>Direct links to retailer deals</li>
              <li>No click-bait review filler</li>
            </ul>
            <Link href="/#about" className="btn btn-primary btn-sm widget-cta">
              About us →
            </Link>
          </section>
        </aside>
      </div>

      {/* FAQ */}
      <section className="container section">
        <div className="section-head">
          <h2 className="section-title">Laptop buying FAQ</h2>
        </div>
        <div className="faq">
          <details>
            <summary>Which laptop is best overall for beginners?</summary>
            <p>
              For mainstream ease of use, Apple&apos;s 14-inch MacBook Pro with M3 Pro combines
              long battery life and strong performance for everyday work — see Apple&apos;s
              published battery and tech specs for the configuration you choose.
            </p>
          </details>
          <details>
            <summary>What&apos;s the best budget laptop in this list?</summary>
            <p>
              The Acer Aspire 5 (A515 family) is typically the lowest-cost Windows option with a
              current Core i5 H-class CPU — compare exact model numbers and RAM type (DDR4 vs
              LPDDR5) on Acer&apos;s site.
            </p>
          </details>
          <details>
            <summary>Is the HP EliteBook 840 G11 good for business use?</summary>
            <p>
              Yes. HP EliteBook 840 G11 offers dependable performance, professional build quality,
              and enterprise-grade security features. Verify vPro and graphics branding on the
              specific SKU you configure.
            </p>
          </details>
          <details>
            <summary>Do I need an RTX 4070 for gaming?</summary>
            <p>
              Not necessarily. RTX 4060 handles 1080p/1440p high-refresh gaming very well. RTX 4070
              is the better pick if you want QHD+ high-refresh or heavier creative workloads on the
              same machine.
            </p>
          </details>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
    </>
  );
}
