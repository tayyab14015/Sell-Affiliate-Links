import type { Metadata } from 'next';
import Link from 'next/link';
import './blog.css';

const SITE_URL = 'https://www.aisneer.com';
const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: 'Blog — Buying Guides and Field Tests',
  description:
    'Buying guides and field tests from AISneer: cordless drills, wireless headphones, creator laptops, fleece and softshell jackets, CAD books and game editions.',
  alternates: { canonical: PAGE_URL }
};

type Post = {
  href: string;
  badge: string;
  title: string;
  summary: string;
  layout: string;
  updated: string;
  notes: string;
};

const POSTS: Post[] = [
  {
    href: '/blog/blackzero-bzd-01t-ph-a1',
    badge: 'Tools',
    title: 'Blackzero BZD-01T-PH-A1 Explained: Exact Specs, Five Modes and Model Differences',
    summary:
      'Exact specs for the Blackzero BZD-01T-PH-A1 (former ASIN B0DBQMQMMW), five modes explained, and the intentional map to the live BZD-01T-PH buy listing (ASIN B0D5CLZ1ZT).',
    layout: 'Spec explainer with availability note, product gallery, comparison table and sourced FAQ',
    updated: 'August 6, 2026',
    notes:
      'Owns the rare A1 query while clearly resolving buyers to the live PH ASIN. Schema offers.url points at B0D5CLZ1ZT; B0DBQMQMMW kept as historical/former ASIN only.'
  },
  {
    href: '/blog/best-wireless-headphones-2026',
    badge: 'Audio',
    title: 'Best Wireless Headphones of 2026: Seven ANC Models, Measured',
    summary:
      'Seven over-ear pairs compared on battery, driver size, noise cancelling and price, with the Sony WH-1000XM5 and WH-1000XM4 side by side.',
    layout: 'Dense comparison table plus compact product rows',
    updated: 'July 28, 2026',
    notes:
      '7 products, specs live only in table cells, two Sony generations side by side, one extra model (WH-CH720N) appears only in the FAQ. Schema: ItemList of Product/IndividualProduct nodes.'
  },
  {
    href: '/blog/creator-laptops-under-1500',
    badge: 'Computers',
    title: 'Creator Laptops Under $1,500: The Six We Would Actually Buy',
    summary:
      'CPU, GPU, memory, storage, panel and weight for six creator notebooks, plus the part numbers that tell configurations apart.',
    layout: 'Card grid with spec chips',
    updated: 'July 21, 2026',
    notes:
      '6 products. CPU and GPU names sit next to model names on purpose, one card omits the manufacturer from its heading, one storage variant exists only in schema, one laptop has no listing at all. Schema: @graph.'
  },
  {
    href: '/blog/best-fleece-and-softshell-jackets',
    badge: 'Outdoor',
    title: 'The Zipper Question: Six Fleece and Softshell Jackets',
    summary:
      'Full-zip, quarter-zip or pullover — the one specification you cannot change after purchase, applied to six garments across five brands.',
    layout: 'Editorial two-column with pull quote and bordered callouts',
    updated: 'July 30, 2026',
    notes:
      'Two near-identical pairs that differ only by closure (Better Sweater jacket vs 1/4-zip, Delta LT vs Delta Half Zip), one product with brand but no usable model, colour and size present but not identity. Schema: FAQPage plus Product nodes.'
  },
  {
    href: '/blog/fusion-360-and-cad-books',
    badge: 'Books',
    title: 'Fusion 360 and CAD Books Worth Owning in 2026',
    summary:
      'Four CAD references, one of them a German-edition paperback, with binding, language, edition and page count spelled out.',
    layout: 'Long-form docs page with sticky table of contents',
    updated: 'August 1, 2026',
    notes:
      'One hero product with full schema (German Edition paperback, real ASIN in offers.url); three further books in HTML definition lists only. Edition, language and binding all masquerade as model numbers.'
  },
  {
    href: '/blog/pc-games-editions-explained',
    badge: 'Games',
    title: 'Game Editions Explained: Standard, Deluxe, and the Disc You Might Not Get',
    summary:
      'Five games, nine listings, three delivery formats. Identical titles separated only by whether a box arrives.',
    layout: 'Dark accordion with a horizontal format scroller',
    updated: 'July 15, 2026',
    notes:
      'Digital versus physical disc for the same title, Deluxe versus Standard as an independent axis, one listing with no item number, one Switch cartridge that is neither, and deliberately incomplete schema covering three of nine listings.'
  },
  {
    href: '/blog/mixed-category-stress',
    badge: 'Notebook',
    title: 'Three Things I Actually Used This Month',
    summary:
      'One pair of headphones, one fleece pullover and one German CAD book in a single short post with no consistent structure.',
    layout: 'Unstructured notebook post',
    updated: 'July 12, 2026',
    notes:
      'Three categories on one URL, heading levels out of order, each product also appears on its own dedicated page, and only the jacket is described in schema.'
  }
];

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
        <h1>Buying guides and field tests</h1>
        <p className="blog-lede">
          Seven posts, seven layouts. Each one covers a single category in depth, lists the exact
          configuration or model number, and links to the listing it&apos;s based on.
        </p>
      </header>

      <ul className="bx-grid">
        {POSTS.map((post) => (
          <li className="bx-card" key={post.href}>
            <span className="bx-badge">{post.badge}</span>
            <h2>
              <Link href={post.href}>{post.title}</Link>
            </h2>
            <p>{post.summary}</p>
            <p className="muted" style={{ fontSize: '13px' }}>
              {post.layout} · updated {post.updated}
            </p>
            <p className="bx-tests">
              <b>What this page covers:</b> {post.notes}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
