import type { Metadata } from 'next';
import Link from 'next/link';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../site';
import './blog.css';

const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: 'Laptop Buying Guides',
  description:
    'How AISneer writes laptop buying guides: part numbers, manufacturer listings, and the public cluster of creator, ultrabook, gaming, and business notebooks.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Laptop Buying Guides',
    description:
      'Laptop buying guides from AISneer, led by creator notebooks under $1,500.',
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laptop Buying Guides',
    images: [DEFAULT_OG_IMAGE.url]
  }
};

const blogIndexJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AISneer Laptop Guides',
  url: PAGE_URL,
  isPartOf: { '@type': 'WebSite', name: 'AISneer', url: SITE_URL },
  hasPart: [
    {
      '@type': 'ItemList',
      name: 'Laptop buying guides',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: `${SITE_URL}/blog/creator-laptops-under-1500`,
          name: 'Creator Laptops Under $1,500'
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: `${SITE_URL}/laptops`,
          name: 'Curated laptop catalog'
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: `${SITE_URL}/blog/blackzero-bzd-01t-ps`,
          name: 'Blackzero BZD-01T-PS specs'
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: `${SITE_URL}/laptops/category/ultrabook`,
          name: 'Ultrabook hub'
        }
      ]
    }
  ]
};

export default function BlogIndexPage() {
  return (
    <div className="blog-wrap">
      <nav className="blog-crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">Blog</li>
        </ol>
      </nav>

      <header>
        <p className="blog-kicker">AISneer</p>
        <h1>Laptop buying guides</h1>
        <p className="blog-lede">
          This index is the editorial front door for the laptop cluster on www.aisneer.com. The
          flagship comparison is creator notebooks under $1,500. Category hubs and individual spec
          pages sit next to it so a crawler — or a shopper — can move from “how we write” to a
          chassis code without leaving the public set.
        </p>
      </header>

      <div className="blog-index-copy">
        <h2>What belongs in the public cluster</h2>
        <p>
          AISneer is a laptop discovery site, not a store. We do not hold inventory. A guide earns
          a place on this hostname when it helps someone match a job (travel, classes, CUDA, Final
          Cut, managed Windows) to a manufacturer listing they can actually open. That is why the
          indexable set includes laptop spec pages, USB-C hubs, the creator comparison, Blackzero
          tool-kit explainers, and the other buying guides listed below. Every URL on this hub is
          indexable. Start at the <Link href="/laptops">laptop catalog</Link> or open a guide card.
        </p>

        <h2>How a guide is written</h2>
        <p>
          Every published comparison starts with a part number, an MTM, or a four-digit chassis
          code — not a marketing family name. “XPS 13,” “Legion Slim 5,” and “MacBook Pro 14” each
          cover several CPUs, panels, and memory configs. We write the configuration we would
          actually buy, then point the deal button at the manufacturer page for that family so you
          can confirm the SKU before you pay. Affiliate links use rel=&quot;sponsored&quot;. Commission
          does not change which chassis we list.
        </p>
        <p>
          Specs are copied from manufacturer product pages and labeled as SKU-dependent where RAM,
          TGP, or the panel option changes the machine. We do not invent in-stock badges. Street
          prices are typical US bands, not a live cart. When a generation is replaced, we update
          the model name and the outbound URL together so schema Offer.url matches the chassis we
          describe. That is why the ultrabook pick is the Dell XPS 13 9340 (Core Ultra 7 155H),
          not a Snapdragon 9345 listing pasted onto an Intel spec sheet.
        </p>
        <p>
          Length is a floor, not a style. Category hubs and product pages are written so a reader
          can answer “who this is for,” “what to verify on the configure page,” and “what nearby
          machine is the better alternative” without opening a second tab. The creator guide does
          the same at comparison scale: six notebooks, six part numbers, one budget cap.
        </p>

        <h2>Where to go next</h2>
        <p>
          Use the card below for the long-form creator comparison. Use the catalog when you already
          know the category. Use a hub when you are still choosing a shape: 13-inch bag, 16-inch
          gaming, 14-inch business, or a student 15.6-inch FHD. USB-C hubs live in their own
          catalog because a two-port ultrabook almost always needs one, not because we are trying
          to be an accessories magazine.
        </p>
        <ul>
          <li>
            <Link href="/blog/creator-laptops-under-1500">
              Creator laptops under $1,500
            </Link>{' '}
            — six configs with part numbers
          </li>
          <li>
            <Link href="/laptops">All curated laptops</Link> — spec pages with manufacturer deal
            URLs
          </li>
          <li>
            <Link href="/laptops/category/ultrabook">Ultrabook hub</Link>
            {' · '}
            <Link href="/laptops/category/gaming">Gaming</Link>
            {' · '}
            <Link href="/laptops/category/business">Business</Link>
            {' · '}
            <Link href="/laptops/category/student">Student</Link>
            {' · '}
            <Link href="/laptops/category/creator">Creator</Link>
          </li>
          <li>
            <Link href="/laptops/dell-xps-13-9340">Dell XPS 13 9340</Link>
            {' · '}
            <Link href="/laptops/apple-macbook-pro-14-inch-m3-pro-nov-2023">MacBook Pro 14</Link>
            {' · '}
            <Link href="/laptops/lenovo-thinkpad-x1-carbon-gen-12-14">ThinkPad X1 Carbon</Link>
          </li>
          <li>
            <Link href="/usb-hubs">USB hubs</Link>
            {' · '}
            <Link href="/about">Editors and method</Link>
            {' · '}
            <Link href="/blog/blackzero-bzd-01t-ps">Blackzero BZD-01T-PS</Link>
            {' · '}
            <Link href="/blog/best-wireless-headphones-2026">Headphones</Link>
          </li>
        </ul>
      </div>

      <ul className="bx-grid">
        <li className="bx-card">
          <span className="bx-badge">Computers</span>
          <h2>
            <Link href="/blog/creator-laptops-under-1500">
              Creator Laptops Under $1,500: The Six We Would Actually Buy
            </Link>
          </h2>
          <p>
            CPU, GPU, memory, storage, panel and weight for six creator notebooks, plus the part
            numbers that tell configurations apart.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Card grid with spec chips · updated July 21, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Tools</span>
          <h2>
            <Link href="/blog/blackzero-bzd-01t-ps">
              Blackzero BZD-01T-PS: Specs, Fastener Kit and Model Differences
            </Link>
          </h2>
          <p>
            Exact specifications for the 16V brushless drill kit, the stainless fastener tier, and
            how BZD-01T-PS differs from PH and PH-A1.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Spec explainer · updated August 20, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Tools</span>
          <h2>
            <Link href="/blog/blackzero-bzd-01t-ph-a1">
              Blackzero BZD-01T-PH-A1: Specs, Modes and Model Differences
            </Link>
          </h2>
          <p>
            Five working modes, the retired A1 listing, and the live BZD-01T-PH kit it maps to.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Spec explainer · updated August 6, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Audio</span>
          <h2>
            <Link href="/blog/best-wireless-headphones-2026">
              Best Wireless Headphones 2026: 7 ANC Models Compared
            </Link>
          </h2>
          <p>
            Sony, Bose, Sennheiser and AirPods Max compared on battery, drivers, ANC and price.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Comparison · updated July 28, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Apparel</span>
          <h2>
            <Link href="/blog/best-fleece-and-softshell-jackets">
              The Best Fleece and Softshell Jackets: Full-Zip vs Pullover
            </Link>
          </h2>
          <p>
            Six jackets compared, with closure type called out for every model.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Field test · updated July 30, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Books</span>
          <h2>
            <Link href="/blog/fusion-360-and-cad-books">
              Fusion 360 and CAD Books Worth Owning in 2026
            </Link>
          </h2>
          <p>
            Four CAD references compared on edition, language, binding and page count.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Guide · updated August 1, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Games</span>
          <h2>
            <Link href="/blog/pc-games-editions-explained">
              PC and Console Game Editions Explained: Digital vs Disc
            </Link>
          </h2>
          <p>
            Standard, Deluxe and Ultimate broken down, including whether you get a download or a disc.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Explainer · updated July 15, 2026
          </p>
        </li>
        <li className="bx-card">
          <span className="bx-badge">Notes</span>
          <h2>
            <Link href="/blog/mixed-category-stress">
              Three Things I Actually Used This Month
            </Link>
          </h2>
          <p>
            A short notebook post covering headphones, a fleece pullover, and a CAD book.
          </p>
          <p className="muted" style={{ fontSize: '13px' }}>
            Notes · updated July 12, 2026
          </p>
        </li>
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />
    </div>
  );
}
