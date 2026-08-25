import type { Metadata } from 'next';
import Link from 'next/link';
import { DEFAULT_OG_IMAGE, SITE_EMAIL, SITE_NAME, SITE_URL, absoluteUrl } from '../site';

const PAGE_URL = absoluteUrl('/privacy');
const TITLE = 'Privacy Policy';
const DESCRIPTION =
  'How AISneer collects, uses, and does not sell personal data. We are a laptop curation site; checkout happens on manufacturer and retailer sites.';

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

export default function PrivacyPage() {
  return (
    <>
      <section className="catalog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>Privacy</span>
          </nav>
          <h1 className="catalog-title">Privacy Policy</h1>
          <p className="catalog-sub">Last updated August 25, 2026. AISneer is operated as an independent laptop discovery site at {SITE_URL}.</p>
        </div>
      </section>
      <article className="container section about-page">
        <p>
          This policy describes how we handle information when you visit www.aisneer.com. We do not
          operate a warehouse checkout. When you click a product listing, you leave our site and
          the manufacturer or retailer&apos;s privacy policy applies to that purchase.
        </p>
        <h2>What we collect</h2>
        <p>
          Our hosting provider (typically Vercel) and CDN partners receive standard server logs:
          IP address, user agent, referrer, and timestamps. We use those logs to keep the site
          available, debug errors, and understand which pages are requested. We do not sell a
          marketing list of visitors.
        </p>
        <p>
          If you email {SITE_EMAIL}, we receive whatever you put in the message, including your
          address. We use that only to reply. We do not add email correspondents to a newsletter
          unless you explicitly ask.
        </p>
        <h2>Cookies, analytics, and third-party scripts</h2>
        <p>
          Pages may load a deferred script from api.llmaffiliate.com used for affiliate-link
          onboarding. That vendor may set cookies or receive request metadata according to their
          own policy. The script is not required to read our editorial content; it loads after
          interaction or a short delay so it does not block first paint.
        </p>
        <p>
          We may use privacy-oriented analytics in the future. If we add a new tracker, we will
          update this page. Embedded images are first-party files on this domain where possible;
          older posts may still reference retailer or manufacturer assets.
        </p>
        <h2>Affiliate links</h2>
        <p>
          Some outbound links are affiliate links. We may earn a commission if you buy something
          after clicking. Commission does not give us your payment card, shipping address, or
          order contents — the retailer processes the order. Those links are marked{' '}
          <code>rel=&quot;sponsored&quot;</code> in HTML.
        </p>
        <h2>What we do not do</h2>
        <ul className="bullet-list">
          <li>We do not sell personal information as a product.</li>
          <li>We do not require an account to read guides or catalog pages.</li>
          <li>We do not store inventory, payment cards, or government IDs.</li>
        </ul>
        <h2>Retention and requests</h2>
        <p>
          Email to {SITE_EMAIL} is kept as long as needed to answer you, then deleted or archived
          with our ordinary mailbox retention. Server logs follow the host&apos;s retention. To
          ask what we hold about a specific email thread, write to that address from the same
          account.
        </p>
        <p>
          For legal process we will disclose information when required by law. This site is
          intended for a general audience and is not directed at children under 13.
        </p>
        <p>
          Related: <Link href="/terms">Terms of use</Link> and <Link href="/about">About AISneer</Link>.
        </p>
      </article>
    </>
  );
}
