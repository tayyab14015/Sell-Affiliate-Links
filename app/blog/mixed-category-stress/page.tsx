import type { Metadata } from 'next';
import Link from 'next/link';
import { amazonProductUrl, amazonSearchUrl } from '../amazon';
import '../blog.css';

const SITE_URL = 'https://www.aisneer.com';
const PAGE_PATH = '/blog/mixed-category-stress';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_MODIFIED_DISPLAY = 'July 12, 2026';

export const metadata: Metadata = {
  title: 'Three Things I Actually Used This Month',
  description:
    'A short, deliberately messy notebook post covering one pair of headphones, one fleece pullover and one German-language CAD book.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'Three Things I Actually Used This Month'
  }
};

// Deliberately thin schema: only the jacket is described, and it is the pullover
// variant rather than the full-zip mentioned alongside it in the prose.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Patagonia Better Sweater 1/4-Zip Fleece Pullover',
  brand: { '@type': 'Brand', name: 'Patagonia' },
  additionalProperty: [{ '@type': 'PropertyValue', name: 'closure_type', value: 'quarter_zip' }],
  offers: {
    '@type': 'Offer',
    url: amazonSearchUrl('Patagonia Better Sweater 1/4-Zip Fleece Pullover Nickel men'),
    price: 129,
    priceCurrency: 'USD'
  }
};

export default function MixedCategoryPage() {
  return (
    <div className="blog-wrap cx-wrap">
      <nav className="blog-crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>Notebook</li>
          <li aria-current="page">Three things</li>
        </ol>
      </nav>

      <article>
        <h1>Three things I actually used this month</h1>
        <div className="blog-meta">
          <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
          <span>Notebook · uncategorised</span>
        </div>
        <p className="blog-lede">
          No theme, no rankings, no table. One audio thing, one clothing thing, one book. This is the
          post where the filing system gives up.
        </p>

        <div className="cx-block">
          <h4>Still the old Sony</h4>
          <p className="cx-inline">
            I went back to the <b>Sony WH-1000XM4</b> in Midnight Blue after two weeks with its
            replacement. Thirty hours of battery, a 40 mm driver, LDAC, and earcups that fold flat
            into a case small enough for a laptop bag. The newer WH-1000XM5 cancels more noise and I
            do not care, because I fly twice a year and carry a bag every day.
          </p>
          <ul className="cx-spec">
            <li>Battery: 30 h</li>
            <li>ANC: yes</li>
            <li>Colour: Midnight Blue</li>
            <li>About $248</li>
          </ul>
          <p>
            <a
              className="blog-buy"
              href={amazonSearchUrl('Sony WH-1000XM4 Wireless Noise Cancelling Headphones Midnight Blue')}
              rel="nofollow sponsored noopener"
            >
              View on Amazon
            </a>
          </p>
        </div>

        <div className="cx-block">
          <h2>Fleece, but only the top half</h2>
          <p>
            The <b>Patagonia Better Sweater 1/4-Zip Fleece Pullover</b> in Nickel has been on a chair
            next to my desk since March. It is the pullover, not the jacket — quarter-length zipper,
            one chest pocket, no handwarmer pockets, $129. I own the full-zip Better Sweater Fleece
            Jacket too and I reach for this one more, which surprised me.
          </p>
          <p className="cx-inline">
            9.5 oz recycled sweater-knit fleece, tested in men’s medium, about 425 g on my kitchen
            scale.
          </p>
          <p>
            <a
              className="blog-buy"
              href={amazonSearchUrl('Patagonia Better Sweater 1/4-Zip Fleece Pullover Nickel men')}
              rel="nofollow sponsored noopener"
            >
              Shop now
            </a>
          </p>
        </div>

        <div className="cx-block">
          <h5>A book in a language I barely read</h5>
          <p>
            <b>MASTER FUSION 360 MIT KI 2026: CAD, CAM, CNC, 3D-Druck- und Produktdesign Workflows
            (German Edition)</b>, Stephen Dave, paperback, 464 pages. My German is bad enough that
            this took a month, and the CAM chapters were worth it anyway. Twenty dollars. It is a
            paperback and there is no hardcover and no English version, in case you were about to
            search for one.
          </p>
          <p>
            <a className="blog-buy" href={amazonProductUrl('B0H5NRKGYS')} rel="nofollow sponsored noopener">
              Buy on Amazon
            </a>
          </p>
        </div>

        <div className="cx-block">
          <h3>Things I did not keep</h3>
          <p className="cx-inline">
            A wireless keyboard I will not name because the model number is longer than this
            paragraph, and a softshell that turned out to be the wrong closure. That one is covered
            properly in the{' '}
            <Link href="/blog/best-fleece-and-softshell-jackets">jacket field test</Link>.
          </p>
        </div>
      </article>

      <aside className="blog-noise" aria-label="More from AISneer">
        <div className="blog-noise-card">
          <h3>Related posts</h3>
          <ul>
            <li>
              <Link href="/blog/best-wireless-headphones-2026">Seven headphones, measured</Link>
            </li>
            <li>
              <Link href="/blog/fusion-360-and-cad-books">CAD books worth owning</Link>
            </li>
            <li>
              <Link href="/blog">Back to the blog</Link>
            </li>
          </ul>
        </div>
        <div className="blog-noise-card">
          <h3>Newsletter</h3>
          <p>Monthly notebook posts, nothing else.</p>
          <form className="blog-newsletter-form" action="/api/subscribe" method="post">
            <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
            <button className="btn btn-primary btn-sm" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </aside>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
