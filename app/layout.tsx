import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';

const SITE_NAME = 'AISneer';
const SITE_TAGLINE = 'Curated laptop picks and honest deals';
const SITE_URL = 'https://www.aisneer.com';

const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`
  },
  description:
    'AISneer helps you buy the right laptop. Hand-picked ultrabooks, gaming rigs, business notebooks, creator machines, and student laptops with transparent specs and current deal links.',
  applicationName: SITE_NAME,
  keywords: [
    'laptops',
    'buy laptop',
    'best laptops',
    'gaming laptop',
    'ultrabook',
    'MacBook',
    'ThinkPad',
    'XPS',
    'affiliate laptop deals',
    'AISneer'
  ],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg'
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Hand-picked laptops for work, play, study, and creators. Compare real specs and jump straight to the best current deal.',
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: SITE_NAME }]
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Hand-picked laptops for work, play, study, and creators. Compare real specs and jump straight to the best current deal.',
    images: [DEFAULT_OG_IMAGE]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'HUflqUM_F5ZMMR88OX7mZNeO6ZUc5I1w61uy9DO_E4E',
    other: {
      'msvalidate.01': '4E41430E96AA23E7CC885A534DC2BBF2'
    }
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512
  },
  image: `${SITE_URL}/logo.svg`,
  email: 'hello@aisneer.com',
  description:
    'AISneer is an independent laptop discovery store. We curate laptops across ultrabook, gaming, business, creator, student, and workstation categories and link you to current retailer deals.',
  slogan: SITE_TAGLINE,
  areaServed: 'Worldwide',
  knowsAbout: [
    'Laptops',
    'Ultrabooks',
    'Gaming laptops',
    'Business laptops',
    'MacBooks',
    'Creator laptops',
    'Chromebooks',
    'Mobile workstations',
    'USB hubs',
    'Cordless drills'
  ]
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'en',
  description:
    'Hand-picked laptops, USB hubs, and spec-accurate buying guides with current retailer deal links.',
  publisher: { '@id': `${SITE_URL}/#organization` }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand" aria-label={`${SITE_NAME} home`}>
              <span className="brand-mark" aria-hidden>
                AS
              </span>
              <span className="brand-text">
                <span className="brand-name">{SITE_NAME}</span>
                <span className="brand-tagline">Laptops, curated.</span>
              </span>
            </Link>

            <nav className="site-nav" aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/laptops">Shop Laptops</Link>
              <Link href="/usb-hubs">USB Hubs</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/#categories">Categories</Link>
              <Link href="/#about">About</Link>
              <Link href="/#faq">FAQ</Link>
            </nav>

            <Link href="/laptops" className="btn btn-primary btn-sm header-cta">
              Browse Deals
            </Link>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-brand">
              <div className="brand">
                <span className="brand-mark" aria-hidden>
                  AS
                </span>
                <span className="brand-text">
                  <span className="brand-name">{SITE_NAME}</span>
                  <span className="brand-tagline">Curated laptop deals</span>
                </span>
              </div>
              <p className="footer-blurb">
                AISneer is an independent laptop store that curates the best-selling and best-reviewed
                laptops across every category, then links you straight to the current deal.
              </p>
            </div>

            <div className="footer-cols">
              <div>
                <h4>Shop</h4>
                <ul>
                  <li><Link href="/laptops">All laptops</Link></li>
                  <li><Link href="/usb-hubs">USB hubs</Link></li>
                  <li><Link href="/laptops?category=Gaming">Gaming</Link></li>
                  <li><Link href="/laptops?category=Ultrabook">Ultrabooks</Link></li>
                  <li><Link href="/laptops?category=Business">Business</Link></li>
                  <li><Link href="/laptops?category=Creator">Creator</Link></li>
                </ul>
              </div>
              <div>
                <h4>Guides</h4>
                <ul>
                  <li><Link href="/blog">All guides</Link></li>
                  <li><Link href="/blog/blackzero-bzd-01t-ps">Blackzero BZD-01T-PS</Link></li>
                  <li><Link href="/blog/blackzero-bzd-01t-ph-a1">Blackzero BZD-01T-PH-A1</Link></li>
                  <li><Link href="/blog/creator-laptops-under-1500">Creator laptops under $1,500</Link></li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><Link href="/#about">About AISneer</Link></li>
                  <li><Link href="/#why-us">Why shop with us</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/#faq">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4>Help</h4>
                <ul>
                  <li><a href="mailto:hello@aisneer.com">Contact</a></li>
                  <li><Link href="/#buying-guide">Buying guide</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {SITE_NAME}. All prices and availability subject to change.</span>
            <span className="muted">
              Disclosure: Product links may be affiliate links. We may earn a commission on qualifying purchases.
            </span>
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
<script
  src="https://api.llmaffiliate.com/static/onboarding-snippet.js"
  data-site-id="site_395b368f9af8e71e1d0a77018e3f5080"
  data-token="llmafftm_65992f34858e19ea895d72d802a8b16cf3b04261472255de604c034236327d8e">
</script>
      </body>
    </html>
  );
}
