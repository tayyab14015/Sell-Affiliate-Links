import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { laptops, laptopsInCategory } from '../../../data/laptops';
import { LAPTOP_CATEGORY_COPY, getCategoryCopy } from '../../../data/laptop-categories';
import { SITE_NAME, SITE_URL, laptopCategoryUrl } from '../../../site';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return LAPTOP_CATEGORY_COPY.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const copy = getCategoryCopy(category);
  if (!copy) return {};
  const url = laptopCategoryUrl(copy.name);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: copy.title,
      description: copy.description
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description
    }
  };
}

export default async function LaptopCategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const copy = getCategoryCopy(category);
  if (!copy) notFound();

  const visible = laptopsInCategory(copy.name);
  const pageUrl = laptopCategoryUrl(copy.name);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Laptops', item: `${SITE_URL}/laptops` },
        { '@type': 'ListItem', position: 3, name: copy.name, item: pageUrl }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: copy.h1,
      url: pageUrl,
      description: copy.description,
      isPartOf: { '@id': `${SITE_URL}/#website` }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${copy.name} laptops on AISneer`,
      numberOfItems: visible.length,
      itemListElement: visible.map((l, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/laptops/${l.slug}`,
        name: `${l.company} ${l.model}`
      }))
    }
  ];

  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/laptops">Laptops</Link>
            <span aria-hidden>/</span>
            <span>{copy.name}</span>
          </nav>
          <h1 className="catalog-title">{copy.h1}</h1>
          <p className="catalog-sub">{copy.intro}</p>
          <div className="catalog-meta">
            <span><strong>{visible.length}</strong> {visible.length === 1 ? 'laptop' : 'laptops'}</span>
            <span aria-hidden>·</span>
            <span>Spec-verified</span>
          </div>
        </div>
      </section>

      <section className="container section">
        {copy.body.map((p) => (
          <p key={p.slice(0, 40)} className="category-prose">{p}</p>
        ))}
        <p className="category-prose"><strong>Who this is for.</strong> {copy.whoFor}</p>
      </section>

      <section className="filter-bar">
        <div className="container filter-bar-inner">
          <div className="chip-row" role="navigation" aria-label="Laptop categories">
            <Link href="/laptops" className="chip">All ({laptops.length})</Link>
            {LAPTOP_CATEGORY_COPY.map((cat) => (
              <Link
                key={cat.slug}
                href={`/laptops/category/${cat.slug}`}
                className={`chip ${cat.slug === copy.slug ? 'chip-active' : ''}`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container catalog-layout">
        <ul className="product-grid">
          {visible.map((laptop) => (
            <li key={laptop.slug}>
              <article className="product-card product-card-lg">
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
            </li>
          ))}
        </ul>
        <aside className="sidebar">
          <section className="widget">
            <h2 className="widget-title">Need a different category?</h2>
            <p className="widget-body">
              Every laptop we list sits on its own URL with specs and a retailer deal link. Browse
              the full catalog if this hub is not the right starting point.
            </p>
            <Link href="/laptops" className="btn btn-ghost btn-sm widget-cta">
              All laptops →
            </Link>
          </section>
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
