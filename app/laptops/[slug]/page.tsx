import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLaptopBySlug, laptops, parsePrice } from '../../data/laptops';
import { getLaptopGuide } from '../../data/laptop-guides';
import { getCategoryCopy } from '../../data/laptop-categories';
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  categoryToSlug,
  laptopCategoryUrl,
  laptopUrl
} from '../../site';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return laptops.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const laptop = getLaptopBySlug(slug);
  if (!laptop) return {};

  const title = `${laptop.company} ${laptop.model} Specs and Deals`;
  const description = `${laptop.company} ${laptop.model} specs on AISneer. ${laptop.highlights[0]}. Compare the configuration and open a current retailer deal.`;
  const url = laptopUrl(laptop.slug);
  const image = absoluteUrl(laptop.image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, width: 1200, height: 800, alt: `${laptop.company} ${laptop.model}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default async function LaptopPdpPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const laptop = getLaptopBySlug(slug);
  if (!laptop) notFound();

  const guide = getLaptopGuide(laptop.slug);
  const categoryCopy = getCategoryCopy(laptop.category);
  const related = guide
    ? laptops.filter((l) => l.slug === guide.relatedSlug)
    : [];
  const pageUrl = laptopUrl(laptop.slug);
  const image = absoluteUrl(laptop.image);
  const price = parsePrice(laptop.priceFrom);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Laptops', item: `${SITE_URL}/laptops` },
        {
          '@type': 'ListItem',
          position: 3,
          name: laptop.category,
          item: laptopCategoryUrl(laptop.category)
        },
        { '@type': 'ListItem', position: 4, name: `${laptop.company} ${laptop.model}`, item: pageUrl }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${laptop.company} ${laptop.model}`,
      brand: { '@type': 'Brand', name: laptop.company },
      category: laptop.category,
      description: guide?.verdict ?? laptop.description,
      image,
      url: pageUrl,
      sku: laptop.slug,
      offers: {
        '@type': 'Offer',
        url: laptop.buyUrl,
        priceCurrency: 'USD',
        price,
        seller: { '@type': 'Organization', name: laptop.company }
      }
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
            <Link href={`/laptops/category/${categoryToSlug(laptop.category)}`}>{laptop.category}</Link>
            <span aria-hidden>/</span>
            <span>{laptop.model}</span>
          </nav>
          <p className="eyebrow">{laptop.company}</p>
          <h1 className="catalog-title">{laptop.company} {laptop.model}</h1>
          <p className="catalog-sub">{guide?.whoThisIsFor ?? laptop.description}</p>
        </div>
      </section>

      <article className="container section pdp-article">
        <div className="catalog-layout">
          <div className="product-card product-card-lg pdp-card">
            <div className="product-media">
              <img
                src={laptop.image}
                alt={`${laptop.company} ${laptop.model}`}
                width={1200}
                height={800}
                loading="eager"
              />
              <span className="product-badge">{laptop.category}</span>
            </div>
            <div className="product-body">
              <ul className="product-highlights">
                {laptop.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <p className="product-desc">
                <strong>Who this is for.</strong> {guide?.whoThisIsFor ?? categoryCopy?.whoFor}
              </p>
              {guide ? <p className="product-desc">{guide.verdict}</p> : null}

              <h2>Specifications</h2>
              <dl className="spec-list">
                <div><dt>CPU</dt><dd>{laptop.cpu}</dd></div>
                <div><dt>RAM</dt><dd>{laptop.ram}</dd></div>
                <div><dt>Storage</dt><dd>{laptop.storage}</dd></div>
                <div><dt>GPU</dt><dd>{laptop.gpu}</dd></div>
                <div><dt>Display</dt><dd>{laptop.screen}</dd></div>
                <div><dt>OS</dt><dd>{laptop.os}</dd></div>
                <div><dt>Sold by</dt><dd>{laptop.availability}</dd></div>
                <div><dt>Typical price</dt><dd>{laptop.price}</dd></div>
              </dl>

              <div className="product-foot">
                <div className="product-price">
                  <span className="price-label">From</span>
                  <span className="price">{laptop.priceFrom}</span>
                </div>
                <a
                  className="btn btn-primary"
                  href={laptop.buyUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                >
                  View {laptop.company} listing →
                </a>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <section className="widget">
              <h2 className="widget-title">Category</h2>
              <p className="widget-body">{categoryCopy?.whoFor ?? laptop.category}</p>
              <Link
                href={`/laptops/category/${categoryToSlug(laptop.category)}`}
                className="btn btn-ghost btn-sm widget-cta"
              >
                More {laptop.category.toLowerCase()} laptops →
              </Link>
            </section>
            {related.map((item) => (
              <section className="widget" key={item.slug}>
                <h2 className="widget-title">Also consider</h2>
                <ul className="side-list">
                  <li className="side-list-item">
                    <img
                      src={item.image}
                      alt={`${item.company} ${item.model}`}
                      width={64}
                      height={40}
                      className="thumb"
                      loading="lazy"
                    />
                    <span className="side-list-text">
                      <Link href={`/laptops/${item.slug}`} className="side-list-name">
                        {item.company} {item.model}
                      </Link>
                      <span className="side-list-meta">{item.priceFrom}</span>
                    </span>
                  </li>
                </ul>
              </section>
            ))}
          </aside>
        </div>

        {guide ? (
          <section className="pdp-prose">
            <h2>Buying notes for the {laptop.company} {laptop.model}</h2>
            {guide.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </section>
        ) : null}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
