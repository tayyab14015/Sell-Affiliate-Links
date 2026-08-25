import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  DEFAULT_OG_IMAGE,
  HOME_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL
} from './site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`
  },
  description: HOME_DESCRIPTION,
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
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url]
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
  '@type': 'Organization',
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
  email: SITE_EMAIL,
  description:
    'AISneer is an independent laptop discovery site. We curate laptops across ultrabook, gaming, business, creator, student, and workstation categories and link you to current retailer deals. We do not hold inventory.',
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
    'USB hubs'
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
    'Hand-picked laptops and USB hubs with spec-accurate buying guides and current retailer deal links.',
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
              <Link href="/laptops/category/gaming">Gaming</Link>
              <Link href="/about">About</Link>
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
                AISneer is an independent laptop discovery site that curates spec-verified
                laptops across every category, then links you straight to the current retailer deal.
              </p>
            </div>

            <div className="footer-cols">
              <div>
                <h4>Shop</h4>
                <ul>
                  <li><Link href="/laptops">All laptops</Link></li>
                  <li><Link href="/usb-hubs">USB hubs</Link></li>
                  <li><Link href="/laptops/category/gaming">Gaming</Link></li>
                  <li><Link href="/laptops/category/ultrabook">Ultrabooks</Link></li>
                  <li><Link href="/laptops/category/business">Business</Link></li>
                  <li><Link href="/laptops/category/student">Student</Link></li>
                  <li><Link href="/laptops/category/creator">Creator</Link></li>
                </ul>
              </div>
              <div>
                <h4>Guides</h4>
                <ul>
                  <li>
                    <Link href="/blog/creator-laptops-under-1500">Creator laptops under $1,500</Link>
                  </li>
                  <li><Link href="/blog">Laptop guides</Link></li>
                  <li><Link href="/laptops/category/gaming">Gaming hub</Link></li>
                  <li><Link href="/usb-hubs">USB hubs</Link></li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><Link href="/about">About AISneer</Link></li>
                  <li><Link href="/privacy">Privacy</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                  <li><Link href="/#faq">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4>Help</h4>
                <ul>
                  <li><a href={`mailto:${SITE_EMAIL}`}>Contact</a></li>
                  <li><Link href="/#buying-guide">Buying guide</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {SITE_NAME}. All prices and availability subject to change.</span>
            <span className="muted">
              Disclosure: Product links may be affiliate links. We may earn a commission on qualifying purchases.{' '}
              <Link href="/privacy">Privacy</Link>
              {' · '}
              <Link href="/terms">Terms</Link>
            </span>
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=false;function g(){if(l)return;l=true;var s=document.createElement('script');s.src='https://api.llmaffiliate.com/static/onboarding-snippet.js';s.setAttribute('data-site-id','site_395b368f9af8e71e1d0a77018e3f5080');s.setAttribute('data-token','llmafftm_65992f34858e19ea895d72d802a8b16cf3b04261472255de604c034236327d8e');document.body.appendChild(s);}['pointerdown','keydown','scroll'].forEach(function(e){window.addEventListener(e,g,{once:true,passive:true});});setTimeout(g,4000);})();`
          }}
        />
      </body>
    </html>
  );
}
