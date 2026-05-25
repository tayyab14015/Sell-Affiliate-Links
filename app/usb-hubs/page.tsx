import Link from 'next/link';
import type { Metadata } from 'next';
import { usbHubs, usbHubCategories, type UsbHub } from '../data/usb-hubs';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Shop USB Hubs — AISneer',
  description:
    'Browse USB-C hubs, USB 3.0 splitters, and OTG adapters for laptops, MacBooks, phones, and desktops. Compare options under $5 and search current prices on Google.',
  alternates: {
    canonical: 'https://aisneer.com/usb-hubs'
  }
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

function ProductCard({ hub }: { hub: UsbHub }) {
  return (
    <article id={hub.slug} className="product-card product-card-lg">
      <div className="product-media">
        <img src={hub.image} alt={hub.title} loading="lazy" />
        <span className="product-badge">{hub.category}</span>
      </div>

      <div className="product-body">
        <div className="product-title">
          <span className="product-brand">{hub.brand}</span>
          <h2>{hub.title}</h2>
        </div>

        <div className="product-rating">
          <Stars value={hub.ratingStars} />
          <span className="muted">{hub.rating}</span>
        </div>

        <ul className="product-highlights">
          {hub.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <p className="product-desc">{hub.description}</p>

        <details className="spec-toggle">
          <summary>Product details</summary>
          <dl className="spec-list">
            <div><dt>Category</dt><dd>{hub.category}</dd></div>
            <div><dt>Brand</dt><dd>{hub.brand}</dd></div>
            <div><dt>Typical price</dt><dd>{hub.priceFrom}</dd></div>
            <div><dt>Currency</dt><dd>{hub.currency}</dd></div>
          </dl>
        </details>

        <div className="product-foot">
          <div className="product-price">
            <span className="price-label">From</span>
            <span className="price">{hub.priceFrom}</span>
          </div>
          <a
            className="btn btn-primary"
            href={hub.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Search prices →
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function UsbHubsPage({
  searchParams
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const activeCategory =
    params.category && usbHubCategories.includes(params.category) ? params.category : null;
  const sort = params.sort ?? 'featured';

  let visible = activeCategory
    ? usbHubs.filter((h) => h.category === activeCategory)
    : usbHubs;

  if (sort === 'price-asc') {
    visible = [...visible].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    visible = [...visible].sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    visible = [...visible].sort((a, b) => b.ratingStars - a.ratingStars);
  }

  const productListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: activeCategory ? `${activeCategory} on AISneer` : 'USB hubs and adapters on AISneer',
    numberOfItems: visible.length,
    itemListElement: visible.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: h.title,
        brand: { '@type': 'Brand', name: h.brand },
        category: h.category,
        description: h.description,
        image: h.image,
        url: `https://aisneer.com/usb-hubs#${h.slug}`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.ratingStars,
          bestRating: 5,
          ratingCount: 1
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: h.currency,
          price: h.price,
          availability: 'https://schema.org/InStock',
          url: h.searchUrl
        }
      }
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
            {activeCategory ? (
              <>
                <span aria-hidden>/</span>
                <span>{activeCategory}</span>
              </>
            ) : null}
          </nav>
          <h1 className="catalog-title">
            {activeCategory ? `${activeCategory}` : 'Shop USB hubs & adapters'}
          </h1>
          <p className="catalog-sub">
            {activeCategory
              ? `Curated ${activeCategory.toLowerCase()} picks for laptops, MacBooks, phones, and desktops.`
              : 'USB-C hubs, USB 3.0 splitters, and OTG adapters — all under $5. Compare features and search current prices on Google Shopping.'}
          </p>

          <div className="catalog-meta">
            <span><strong>{visible.length}</strong> {visible.length === 1 ? 'product' : 'products'}</span>
            <span aria-hidden>·</span>
            <span>Budget-friendly</span>
            <span aria-hidden>·</span>
            <span>Google Shopping price search</span>
          </div>
        </div>
      </section>

      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <div className="chip-row" role="tablist" aria-label="Filter by category">
            <Link
              href="/usb-hubs"
              className={`chip ${!activeCategory ? 'chip-active' : ''}`}
            >
              All ({usbHubs.length})
            </Link>
            {usbHubCategories.map((cat) => {
              const count = usbHubs.filter((h) => h.category === cat).length;
              const active = activeCategory === cat;
              return (
                <Link
                  key={cat}
                  href={`/usb-hubs?category=${encodeURIComponent(cat)}`}
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
        <div>
          {visible.length === 0 ? (
            <p className="empty">
              No products match this filter yet. <Link href="/usb-hubs">See all USB hubs</Link>.
            </p>
          ) : (
            <ul className="product-grid">
              {visible.map((hub) => (
                <li key={hub.slug}>
                  <ProductCard hub={hub} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside className="sidebar">
          <section className="widget">
            <h3 className="widget-title">Need a laptop too?</h3>
            <p className="widget-body">
              Pair your new hub with a curated laptop from our main catalog — ultrabooks, gaming,
              business, and student picks.
            </p>
            <Link href="/laptops" className="btn btn-ghost btn-sm widget-cta">
              Shop laptops →
            </Link>
          </section>

          <section className="widget">
            <h3 className="widget-title">Best value this week</h3>
            <ul className="side-list">
              {[...usbHubs]
                .sort((a, b) => a.price - b.price)
                .slice(0, 5)
                .map((item) => (
                  <li key={`${item.slug}-value`} className="side-list-item">
                    <img src={item.image} alt="" className="thumb" loading="lazy" />
                    <span className="side-list-text">
                      <span className="side-list-name">{item.title}</span>
                      <span className="side-list-meta">
                        {item.priceFrom} · <Stars value={item.ratingStars} />
                      </span>
                    </span>
                  </li>
                ))}
            </ul>
          </section>

          <section className="widget widget-cta-card">
            <h3 className="widget-title">How we link</h3>
            <ul className="bullet-list">
              <li>No affiliate checkout links</li>
              <li>Google Shopping price search</li>
              <li>Compare before you buy</li>
            </ul>
            <Link href="/#about" className="btn btn-primary btn-sm widget-cta">
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
          <details>
            <summary>Do I need a USB-C hub or a USB 3.0 hub?</summary>
            <p>
              If your laptop or tablet only has USB-C ports, pick a USB-C hub or adapter. If you still
              have full-size USB-A ports, a USB 3.0 splitter is usually the cheaper option.
            </p>
          </details>
          <details>
            <summary>What is the best budget USB hub in this list?</summary>
            <p>
              The USB 3.0 Hub 4-Port Splitter Expander at $3.90 is the lowest-priced option here —
              good for keyboards, mice, flash drives, and printers on a tight budget.
            </p>
          </details>
          <details>
            <summary>Are these good for MacBook and iPhone?</summary>
            <p>
              Yes. Several picks explicitly support MacBook Pro/Air, iPad, and recent iPhones via
              USB-C OTG adapters. Always confirm your exact port type (USB-C vs USB-A) before buying.
            </p>
          </details>
          <details>
            <summary>Why does the buy button open Google Shopping?</summary>
            <p>
              We link to Google Shopping search results so you can compare current prices across
              retailers yourself — no affiliate redirects from this page.
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
