import type { Metadata } from 'next';
import Link from 'next/link';
import '../blog.css';

const SITE_URL = 'https://wordofprompt.com';
const PAGE_PATH = '/blog/creator-laptops-under-1500';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-05-02';
const DATE_MODIFIED = '2026-07-21';
const DATE_MODIFIED_DISPLAY = 'July 21, 2026';

export const metadata: Metadata = {
  title: 'Creator Laptops Under $1,500 (2026): Six Machines Compared',
  description:
    'Six creator notebooks under $1,500 compared on CPU, GPU, RAM, storage, display and weight — including the ASUS Vivobook 16 OLED, Dell XPS 14, Lenovo Yoga Pro 7 and Apple MacBook Air 15.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'Creator Laptops Under $1,500 (2026)',
    description:
      'CPU, GPU, RAM, storage, panel and weight for six creator notebooks under $1,500.'
  }
};

type Laptop = {
  heading: string;
  brand: string;
  model: string;
  sku: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  display: string;
  weight: string;
  price: number | null;
  priceLabel: string;
  asin: string | null;
  eyebrow: string;
  body: string;
  variantNote?: string;
  inSchema: boolean;
};

const LAPTOPS: Laptop[] = [
  {
    heading: 'ASUS Vivobook 16 OLED (2026)',
    brand: 'ASUS',
    model: 'Vivobook 16 OLED',
    sku: 'M1605YA-ES74',
    cpu: 'AMD Ryzen 7 7730U',
    gpu: 'AMD Radeon integrated graphics',
    ram: '16 GB DDR4',
    storage: '512 GB PCIe 3.0 SSD',
    display: '16-inch 3.2K (3200 × 2000) OLED, 120 Hz',
    weight: '1.88 kg (4.14 lb)',
    price: 749,
    priceLabel: '$749',
    asin: 'B0BSLNCBSD',
    eyebrow: 'Best panel for the money',
    body:
      'The retail box says Vivobook 16 OLED and nothing else, but the sticker underneath reads M1605YA-ES74, and that string is the only reliable way to tell this configuration apart from the 2025 model that shipped with a 1920 × 1200 IPS panel. The Ryzen 7 7730U is a Zen 3 part, so treat it as a fast office chip rather than a render workstation. What you are buying is a colour-accurate 3.2K OLED for well under a thousand dollars.',
    variantNote:
      'Two storage variants share this product line: the 512 GB SSD configuration (M1605YA-ES74, $749) and the 1 TB SSD configuration (M1605YA-ES96, $869). The chassis, panel and CPU are identical.',
    inSchema: true
  },
  {
    heading: 'Dell XPS 14 9440',
    brand: 'Dell',
    model: 'XPS 14 9440',
    sku: 'XPS9440-7175SLV-PUS',
    cpu: 'Intel Core Ultra 7 155H',
    gpu: 'NVIDIA GeForce RTX 4050 Laptop GPU, 6 GB GDDR6',
    ram: '32 GB LPDDR5x-6400',
    storage: '1 TB PCIe 4.0 SSD',
    display: '14.5-inch 3.2K (3200 × 2000) OLED touch, 120 Hz',
    weight: '1.74 kg (3.8 lb)',
    price: 1449,
    priceLabel: '$1,449',
    asin: 'B0CVDVJ64Y',
    eyebrow: 'Best all-round build',
    body:
      'Do not confuse the machine name with the chip name: the laptop is the XPS 14 9440, and the Core Ultra 7 155H inside it is the processor. Reviewers mix these up constantly. Dell pairs it with an RTX 4050 that is power-limited to 30 W, which is enough for Premiere Pro timeline scrubbing and DaVinci Resolve noise reduction but not for sustained Blender cycles. The capacitive touch function row remains the most divisive part of the design.',
    inSchema: true
  },
  {
    heading: 'Lenovo Yoga Pro 7 14ASP9',
    brand: 'Lenovo',
    model: 'Yoga Pro 7 14ASP9',
    sku: '83HN000EUS',
    cpu: 'AMD Ryzen AI 9 365',
    gpu: 'AMD Radeon 880M integrated',
    ram: '32 GB LPDDR5x-7500 (soldered)',
    storage: '1 TB PCIe 4.0 SSD',
    display: '14.5-inch 3K (2944 × 1840) IPS, 120 Hz',
    weight: '1.49 kg (3.28 lb)',
    price: 1249,
    priceLabel: '$1,249',
    asin: 'B0D9XZ9XN2',
    eyebrow: 'Best battery under load',
    body:
      'Another naming trap: Ryzen AI 9 365 is the processor, 14ASP9 is the chassis generation, and 83HN000EUS is the SKU that Lenovo actually ships. Twelve Zen 5 cores and a Radeon 880M give you the best performance-per-watt here, and the 73 Wh battery survived a full workday of Lightroom Classic exports. There is no discrete GPU, which is the trade you are making for the weight.',
    inSchema: true
  },
  {
    heading: 'Apple MacBook Air 15-inch (M4, 2025)',
    brand: 'Apple',
    model: 'MacBook Air 15-inch M4',
    sku: 'MC9K4LL/A',
    cpu: 'Apple M4 (10-core CPU)',
    gpu: 'Apple M4 10-core GPU',
    ram: '16 GB unified memory',
    storage: '512 GB SSD',
    display: '15.3-inch 2880 × 1864 Liquid Retina, 60 Hz',
    weight: '1.51 kg (3.3 lb)',
    price: 1299,
    priceLabel: '$1,299',
    asin: 'B0DZDCG7LL',
    eyebrow: 'Best for silent editing',
    body:
      'Fanless, so it throttles on long exports, and it is the only machine here that cannot be configured with 32 GB of memory at this price. Everything else about it is unfair: 18 hours of real battery, a genuinely quiet chassis and the best trackpad on any laptop. The 256 GB base configuration is the one to avoid because it uses a single NAND package and halves SSD read speed.',
    variantNote:
      'Sold in 256 GB, 512 GB and 1 TB storage variants under the same 15-inch M4 name. The price above is the 512 GB unified-memory configuration.',
    inSchema: true
  },
  {
    heading: 'ProArt P16 Creator Notebook (H7606WV)',
    brand: 'ASUS',
    model: 'ProArt P16 H7606WV',
    sku: 'H7606WV-DS96T',
    cpu: 'AMD Ryzen AI 9 HX 370',
    gpu: 'NVIDIA GeForce RTX 4060 Laptop GPU, 8 GB GDDR6',
    ram: '32 GB LPDDR5x-7500',
    storage: '1 TB PCIe 4.0 SSD',
    display: '16-inch 4K (3840 × 2400) OLED touch, 60 Hz',
    weight: '1.85 kg (4.08 lb)',
    price: 1499,
    priceLabel: '$1,499',
    asin: 'B0D9YCFZ8T',
    eyebrow: 'Most GPU per dollar',
    body:
      'The listing that most retailers use drops the manufacturer name entirely and leads with the sub-brand, which is why this card is headed the way it is. It is a 16-inch creator machine with an RTX 4060, a 4K OLED touch panel, a physical DialPad next to the trackpad and a 90 Wh battery. At exactly $1,499 it is the fastest thing in this guide that still clears our budget.',
    inSchema: true
  },
  {
    heading: 'Acer Swift Go 14 AI',
    brand: 'Acer',
    model: 'Swift Go 14 AI',
    sku: 'SFG14-64T-79LT',
    cpu: 'Intel Core Ultra 7 258V',
    gpu: 'Intel Arc 140V integrated',
    ram: '16 GB LPDDR5x',
    storage: '1 TB PCIe 4.0 SSD',
    display: '14-inch 2880 × 1800 OLED touch, 120 Hz',
    weight: '1.32 kg (2.91 lb)',
    price: null,
    priceLabel: 'Street price varies, typically $1,000–$1,150',
    asin: null,
    eyebrow: 'Lightest of the six',
    body:
      'We could not pin a stable listing to this configuration, so there is no direct link below — search the model name and check that the panel is the 2880 × 1800 OLED rather than the 1920 × 1200 IPS that ships in the cheaper trim. The Lunar Lake chip is the efficiency champion of the group and the chassis is under 1.35 kg.',
    inSchema: false
  }
];

const amazonUrl = (asin: string) => `https://www.amazon.com/dp/${asin}`;

const productNodes = LAPTOPS.filter((l) => l.inSchema).map((l) => ({
  '@type': 'Product',
  '@id': `${PAGE_URL}#${l.sku}`,
  name: `${l.brand} ${l.model}`,
  brand: { '@type': 'Brand', name: l.brand },
  model: l.model,
  mpn: l.sku,
  category: 'Electronics > Computers > Laptops',
  description: `${l.cpu}, ${l.ram}, ${l.storage}, ${l.display}.`,
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'cpu', value: l.cpu },
    { '@type': 'PropertyValue', name: 'gpu', value: l.gpu },
    { '@type': 'PropertyValue', name: 'ram', value: l.ram },
    { '@type': 'PropertyValue', name: 'storage', value: l.storage },
    { '@type': 'PropertyValue', name: 'display', value: l.display },
    { '@type': 'PropertyValue', name: 'weight', value: l.weight }
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    ...(l.price ? { price: l.price } : {}),
    availability: 'https://schema.org/InStock',
    ...(l.asin ? { url: amazonUrl(l.asin) } : {})
  }
}));

// Second storage configuration of the Vivobook line, schema only.
const vivobookOneTerabyte = {
  '@type': 'Product',
  '@id': `${PAGE_URL}#M1605YA-ES96`,
  name: 'ASUS Vivobook 16 OLED',
  brand: { '@type': 'Brand', name: 'ASUS' },
  model: 'Vivobook 16 OLED',
  mpn: 'M1605YA-ES96',
  category: 'Electronics > Computers > Laptops',
  description: 'AMD Ryzen 7 7730U, 16 GB DDR4, 1 TB PCIe 3.0 SSD, 16-inch 3.2K OLED 120 Hz.',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'storage', value: '1 TB PCIe 4.0 SSD' },
    { '@type': 'PropertyValue', name: 'ram', value: '16 GB DDR4' }
  ],
  offers: {
    '@type': 'Offer',
    price: 869,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://www.amazon.com/dp/B0CJKQ7Y2P'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': `${PAGE_URL}#article`,
      headline: 'Creator Laptops Under $1,500: The Six We Would Actually Buy',
      url: PAGE_URL,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      author: { '@type': 'Person', name: 'Devin Oyelaran' },
      publisher: { '@type': 'Organization', name: 'Word of Prompt' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Electronics', item: `${SITE_URL}/blog?topic=electronics` },
        { '@type': 'ListItem', position: 3, name: 'Computers', item: `${SITE_URL}/blog?topic=computers` },
        { '@type': 'ListItem', position: 4, name: 'Laptops', item: PAGE_URL }
      ]
    },
    ...productNodes,
    vivobookOneTerabyte
  ]
};

export default function CreatorLaptopsPage() {
  return (
    <div className="blog-wrap">
      <div className="cl-hero">
        <nav className="blog-crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Electronics</li>
            <li>Computers</li>
            <li aria-current="page">Laptops</li>
          </ol>
        </nav>
        <p className="blog-kicker" style={{ color: '#93c5fd' }}>
          Computers · Creator hardware
        </p>
        <h1>Creator Laptops Under $1,500: The Six We Would Actually Buy</h1>
        <div className="blog-meta">
          <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
          <span>By Devin Oyelaran</span>
          <span>11 min read</span>
        </div>
        <p>
          Six notebooks for photo, video and CAD work, all of them under $1,500 as configured. Every
          card lists the exact processor, graphics part, memory, storage and panel, because the
          marketing name almost never tells you which configuration you are looking at.
        </p>
      </div>

      <article>
        <section className="blog-section" aria-labelledby="picks">
          <h2 id="picks">The six machines</h2>
          <div className="cl-grid">
            {LAPTOPS.map((l) => (
              <article className="cl-card" key={l.sku}>
                <header>
                  <span className="cl-eyebrow">{l.eyebrow}</span>
                  <h3>{l.heading}</h3>
                  <p className="blog-price">{l.priceLabel}</p>
                </header>

                <ul className="cl-chips">
                  <li>
                    RAM <b>{l.ram.split(' ').slice(0, 2).join(' ')}</b>
                  </li>
                  <li>
                    Storage <b>{l.storage.split(' ').slice(0, 2).join(' ')}</b>
                  </li>
                  <li>
                    Panel <b>{l.display.split(',')[0]}</b>
                  </li>
                  <li>
                    Weight <b>{l.weight.split(' (')[0]}</b>
                  </li>
                </ul>

                <dl>
                  <dt>CPU</dt>
                  <dd>{l.cpu}</dd>
                  <dt>GPU</dt>
                  <dd>{l.gpu}</dd>
                  <dt>Memory</dt>
                  <dd>{l.ram}</dd>
                  <dt>Storage</dt>
                  <dd>{l.storage}</dd>
                  <dt>Display</dt>
                  <dd>{l.display}</dd>
                  <dt>Weight</dt>
                  <dd>{l.weight}</dd>
                  <dt>Part number</dt>
                  <dd>{l.sku}</dd>
                </dl>

                <p>{l.body}</p>

                {l.variantNote ? <p className="cl-variants">{l.variantNote}</p> : null}

                <footer>
                  <span className="muted">{l.gpu.includes('NVIDIA') ? 'Discrete GPU' : 'Integrated GPU'}</span>
                  {l.asin ? (
                    <a
                      className="btn btn-primary btn-sm"
                      href={amazonUrl(l.asin)}
                      rel="nofollow sponsored noopener"
                    >
                      Buy on Amazon
                    </a>
                  ) : (
                    <span className="muted">No current listing</span>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-how" aria-labelledby="how-we-chose">
          <h2 id="how-we-chose">How we chose</h2>
          <p>
            The budget is the configured price including tax-free shipping, not the marketing
            starting price for a trim nobody should buy. Beyond that, three rules:
          </p>
          <ol>
            <li>
              <b>32 GB where possible.</b> Photoshop with a dozen smart objects and Resolve with
              optimised media both eat 16 GB. Four of the six machines here ship 32 GB.
            </li>
            <li>
              <b>1 TB or an upgradeable slot.</b> Proxy files are enormous. The ASUS Vivobook 16
              OLED is the only pick where we accepted 512 GB, because its M.2 slot is user
              accessible.
            </li>
            <li>
              <b>A panel worth colour-grading on.</b> Five of the six are OLED. The MacBook Air 15
              is the exception and its Liquid Retina panel is still better calibrated out of the box
              than most IPS competitors.
            </li>
          </ol>
          <p className="muted">
            Anything with a 45 W H-series chip and a 45 Wh battery was excluded, however cheap.
          </p>
        </section>

        <section className="blog-section" aria-labelledby="config-warning">
          <h2 id="config-warning">Read the part number, not the name</h2>
          <p>
            The single most common way to buy the wrong laptop is to trust the product line name.
            ASUS ships at least four different panels under the Vivobook 16 OLED name; the
            configuration reviewed here is M1605YA-ES74 with 512 GB of storage, and its sibling
            M1605YA-ES96 doubles that to 1 TB for $120 more. Dell sells the XPS 14 9440 with the
            Core Ultra 7 155H and with a Core Ultra 7 165H, and both list under the same title.
            Apple sells the MacBook Air 15-inch M4 in 256 GB, 512 GB and 1 TB storage variants that
            differ in sequential write speed by more than a factor of two.
          </p>
          <p>
            If you are cross-checking a listing against this guide, match the part number in each
            card. A Core Ultra 7 155H is not a model number, and neither is an RTX 4060.
          </p>
        </section>
      </article>

      <aside className="blog-noise" aria-label="More from Word of Prompt">
        <div className="blog-noise-card">
          <h2>Get the next hardware guide</h2>
          <p>We publish one buying guide a month. No affiliate spam.</p>
          <form className="blog-newsletter-form" action="/api/subscribe" method="post">
            <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
            <button className="btn btn-primary btn-sm" type="submit">
              Sign up
            </button>
          </form>
        </div>
        <div className="blog-noise-card">
          <h3>Related posts</h3>
          <ul>
            <li>
              <Link href="/blog/best-wireless-headphones-2026">Best wireless headphones of 2026</Link>
            </li>
            <li>
              <Link href="/blog/fusion-360-and-cad-books">The CAD books worth owning</Link>
            </li>
            <li>
              <Link href="/blog/mixed-category-stress">Our messiest gear notes</Link>
            </li>
          </ul>
        </div>
        <div className="blog-noise-card">
          <h3>About the author</h3>
          <div className="blog-author">
            <span className="blog-author-avatar" aria-hidden>
              DO
            </span>
            <p>
              Devin Oyelaran builds product visualisations for a living and has replaced four
              laptops in six years, mostly by dropping them.
            </p>
          </div>
        </div>
      </aside>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
