import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_EMAIL, SITE_NAME, SITE_URL, absoluteUrl, DEFAULT_OG_IMAGE } from '../site';

const PAGE_URL = absoluteUrl('/about');
const TITLE = 'About AISneer Editors and How We Pick Laptops';
const DESCRIPTION =
  'Meet the AISneer editors who verify laptop specs from manufacturer pages and write buying guides. We curate deals; we do not hold inventory.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${PAGE_URL}#page`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` }
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#devin-oyelaran`,
      name: 'Devin Oyelaran',
      jobTitle: 'Laptop editor',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/blog/creator-laptops-under-1500`
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#daniel-kessler`,
      name: 'Daniel Kessler',
      jobTitle: 'Product explainer editor',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/about`
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>About</span>
          </nav>
          <h1 className="catalog-title">About AISneer</h1>
          <p className="catalog-sub">
            We help people buy the right laptop — not the loudest one. Named editors verify specs
            against manufacturer pages and send you to a retailer to check out.
          </p>
        </div>
      </section>

      <article className="container section about-page">
        <p>
          AISneer is an independent laptop discovery site, not a warehouse. We do not hold stock,
          we do not take payment for a laptop, and we do not invent star ratings. When you click
          a deal, you leave our pages and buy from Apple, Dell, Lenovo, HP, ASUS, MSI, Microsoft,
          Samsung, Acer, or another retailer that actually ships the machine.
        </p>
        <p>
          Shopping for a laptop online is still painful. Search results repeat the same chassis
          photo, review sites rank by SEO, and the SKU you need is buried under “up to” copy. We
          started AISneer to do the boring work: read the official product page, keep CPU / GPU /
          RAM / panel tied to a model string, and only list machines we would recommend to a
          friend. When a generation replaces a config, we update or retire the listing.
        </p>
        <p>
          The catalog covers ultrabooks, gaming laptops, business ThinkPads and EliteBooks, creator
          machines, student notebooks, Chromebooks, and mobile workstations, plus USB hubs for the
          same audience. Each laptop now has its own URL so crawlers and readers can cite a
          specific machine instead of a hash fragment on a giant grid.
        </p>
        <p>
          Product links may be affiliate links. We may earn a commission on qualifying purchases,
          at no extra cost to you. That does not change which SKU we list; it does mean we should
          say so in the footer and here.
        </p>

        <h2>Who writes this</h2>
        <p>
          Guides carry a byline. The laptop and creator coverage is led by <strong>Devin Oyelaran</strong>,
          who writes the <Link href="/blog/creator-laptops-under-1500">creator laptops under $1,500</Link> comparison.
          Product explainers that are not laptops or USB-C are kept off the public search cluster
          (<code>noindex</code>) so this site stays a laptop discovery destination.
        </p>

        <h2>How we choose laptops</h2>
        <ul className="bullet-list">
          <li>Current, verifiable manufacturer spec pages — not aggregator blurbs.</li>
          <li>A real category fit: ultrabook, gaming, business, creator, student, or workstation.</li>
          <li>We would recommend it to a friend for that job. Catalog size stays small on purpose.</li>
        </ul>

        <h2>Conflicts and commissions</h2>
        <p>
          We may earn an affiliate commission when you buy after clicking a sponsored outbound
          link. That does not let us invent <code>InStock</code> for inventory we do not hold, and
          it does not replace manufacturer spec sheets. If a street listing disagrees with the
          vendor sheet, we trust the vendor sheet and tell you to match the part number. We do
          not accept payment to add a laptop that fails that bar.
        </p>
        <p>
          Methodology in short: one SKU family per URL, 400-plus words of buying notes, a
          manufacturer listing as the deal target, and first-party catalog images on this domain.
          Privacy and terms live at <Link href="/privacy">/privacy</Link> and{' '}
          <Link href="/terms">/terms</Link>.
        </p>

        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>. For buying help, start with the{' '}
          <Link href="/laptops">laptop catalog</Link> or the{' '}
          <Link href="/blog/creator-laptops-under-1500">creator guide</Link>.
        </p>
        <div className="hero-cta">
          <Link href="/laptops" className="btn btn-primary">Shop laptops</Link>
          <Link href="/" className="btn btn-ghost">Back to home</Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
