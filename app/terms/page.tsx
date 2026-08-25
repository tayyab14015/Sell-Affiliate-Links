import type { Metadata } from 'next';
import Link from 'next/link';
import { DEFAULT_OG_IMAGE, SITE_EMAIL, SITE_NAME, SITE_URL, absoluteUrl } from '../site';

const PAGE_URL = absoluteUrl('/terms');
const TITLE = 'Terms of Use';
const DESCRIPTION =
  'Terms for using AISneer: editorial opinions, affiliate disclosure, no inventory, and limits on liability. Purchases are completed with manufacturers and retailers.';

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
  }
};

export default function TermsPage() {
  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>Terms</span>
          </nav>
          <h1 className="catalog-title">Terms of Use</h1>
          <p className="catalog-sub">Last updated August 25, 2026. These terms apply to {SITE_URL}.</p>
        </div>
      </section>
      <article className="container section about-page">
        <p>
          By using AISneer you agree to these terms. If you do not agree, do not use the site.
          We may update this page; the date above is the current version.
        </p>
        <h2>What AISneer is</h2>
        <p>
          AISneer is an independent editorial and catalog site. We curate laptops and some
          accessories, explain specifications, and link to manufacturer or retailer listings.
          We are not the merchant of record. We do not take payment for a laptop, we do not
          ship goods, and we do not control stock, tax, or warranty at the seller you check
          out with.
        </p>
        <h2>Opinions and specs</h2>
        <p>
          Specifications are summarized from manufacturer documentation and can change when a
          vendor updates a SKU. Always match the part number on the listing you open. Prices
          marked “from” are typical street or MSRP starting points, not a promise we can sell
          at that number. Editorial verdicts are opinions, not professional engineering advice
          for a specific workplace.
        </p>
        <h2>Affiliate disclosure</h2>
        <p>
          Some links are affiliate links. We may earn a commission on qualifying purchases at
          no extra cost to you. Commission can influence which retailer URL we choose when more
          than one honest listing exists; it does not invent star ratings or InStock claims for
          inventory we do not hold. Outbound commercial links use{' '}
          <code>rel=&quot;sponsored&quot;</code>.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Do not scrape the site in a way that degrades service, impersonate AISneer, or use
          our content to mislead buyers about who sells the product. Text and layout are
          provided for personal, non-commercial reading except as search engines and AI
          crawlers are allowed in robots.txt.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          The site is provided “as is.” To the extent permitted by law, AISneer and its
          editors are not liable for purchase decisions, retailer failures, data loss, or
          indirect damages arising from use of the guides. Your contract for a product is
          with the seller, not with us.
        </p>
        <h2>Contact</h2>
        <p>
          Questions: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>. See also{' '}
          <Link href="/privacy">Privacy Policy</Link> and <Link href="/about">About</Link>.
        </p>
      </article>
    </>
  );
}
