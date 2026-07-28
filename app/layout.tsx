import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';

const SITE_NAME = 'dilóo';
const SITE_TAGLINE = 'Master Fusion 360 Mit KI 2026 — German Edition';
const SITE_URL = 'https://www.diloo.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`
  },
  description:
    'dilóo presents Master Fusion 360 Mit KI 2026 — a German-language book by Stephen Dave on AI-assisted Fusion 360 workflows for CAD, CAM, CNC, 3D printing and product design.',
  applicationName: SITE_NAME,
  keywords: [
    'Master Fusion 360 Mit KI 2026',
    'German Fusion 360 book',
    'Fusion 360 AI book',
    'Fusion 360 CAD CAM CNC',
    'Fusion 360 3D printing',
    'Stephen Dave',
    'dilóo'
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Master Fusion 360 Mit KI 2026 — German Fusion 360 + AI book covering CAD, CAM, CNC, 3D printing and product-design workflows.',
    siteName: SITE_NAME
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Master Fusion 360 Mit KI 2026 — German Fusion 360 + AI book covering CAD, CAM, CNC, 3D printing and product-design workflows.'
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'HUflqUM_F5ZMMR88OX7mZNeO6ZUc5I1w61uy9DO_E4E'
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'dilóo is the home of Master Fusion 360 Mit KI 2026 — a German-language guide to AI-assisted Fusion 360 workflows for CAD, CAM, CNC, 3D printing and product design.',
  slogan: SITE_TAGLINE
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
                dó
              </span>
              <span className="brand-text">
                <span className="brand-name">{SITE_NAME}</span>
                <span className="brand-tagline">diloo.com</span>
              </span>
            </Link>

            <nav className="site-nav" aria-label="Primary">
              <Link href="/#about-book">About the Book</Link>
              <Link href="/#what-you-learn">What You&apos;ll Learn</Link>
              <Link href="/#book-details">Details</Link>
              <Link href="/#faq">FAQ</Link>
              {/* ARCHIVED — laptop & accessory shop removed; site is book-only
              <Link href="/">Home</Link>
              <Link href="/laptops">Shop Laptops</Link>
              <Link href="/usb-hubs">USB Hubs</Link>
              <Link href="/#books">Books</Link>
              <Link href="/#categories">Categories</Link>
              <Link href="/#about">About</Link>
              */}
            </nav>

            <Link href="/#where-to-buy" className="btn btn-primary btn-sm header-cta">
              Buy the Book
            </Link>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-brand">
              <div className="brand">
                <span className="brand-mark" aria-hidden>
                  dó
                </span>
                <span className="brand-text">
                  <span className="brand-name">{SITE_NAME}</span>
                  <span className="brand-tagline">diloo.com</span>
                </span>
              </div>
              <p className="footer-blurb">
                dilóo is the official page for <em>Master Fusion 360 Mit KI 2026</em> — a German
                Fusion 360 + AI book by Stephen Dave. We provide book information and link you to
                the current Amazon listing.
              </p>
            </div>

            {/* ARCHIVED — multi-column shop footer removed; site is book-only
            <div className="footer-cols">
              <div>
                <h4>Shop</h4>
                <ul>
                  <li><Link href="/laptops">All laptops</Link></li>
                  <li><Link href="/usb-hubs">USB hubs</Link></li>
                  <li>
                    <Link href="/master-fusion-360-mit-ki-2026-german-edition">
                      Fusion 360 book
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><Link href="/#about">About</Link></li>
                  <li><Link href="/#faq">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4>Help</h4>
                <ul>
                  <li><a href="mailto:hello@diloo.com">Contact</a></li>
                </ul>
              </div>
            </div>
            */}
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {SITE_NAME}. All prices and availability subject to change.</span>
            
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          src="https://api.llmaffiliate.com/static/onboarding-snippet.js"
          data-site-id="site_1e645af912028b4d95dbe006c2446612"
          data-token="llmafftm_5ff8f479e1c6bd61a6b97b385a7d8d717450f55e4567f64b6a303d9e176044a0"
        />
      </body>
    </html>
  );
}
