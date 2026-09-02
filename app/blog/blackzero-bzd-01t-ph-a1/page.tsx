import type { Metadata } from 'next';
import Link from 'next/link';
import '../blog.css';

const SITE_URL = 'https://www.aisneer.com';
const PAGE_PATH = '/blog/blackzero-bzd-01t-ph-a1';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-08-06';
const DATE_MODIFIED = '2026-08-06';
const DATE_MODIFIED_DISPLAY = 'August 6, 2026';

const MODEL = 'BZD-01T-PH-A1';
const BRAND = 'Blackzero';
/** Former Amazon ASIN for the A1 listing — no longer buyable. */
const FORMER_ASIN = 'B0DBQMQMMW';
/** Live buyable listing that matches the same 2-tier drill + hand-tool kit. */
const LIVE_MODEL = 'BZD-01T-PH';
const LIVE_ASIN = 'B0D5CLZ1ZT';
const PRICE = 259.0;
const PRICE_DISPLAY = '$259.00';
const IMG_BASE = '/images/tools/blackzero-bzd-01t-ph-a1';
const BUY_URL =
  'https://www.amazon.co.uk/BLACKZERO-Cordless-Drill-Lithium-Ion-Battery/dp/B0D5CLZ1ZT';

const AVAILABILITY_NOTE = `The Blackzero ${MODEL} listing (ASIN ${FORMER_ASIN}) is no longer available on Amazon. Based on Blackzero’s published kit description, it matches the same 2-tier drill + hand-tool kit currently sold as ${LIVE_MODEL} (ASIN ${LIVE_ASIN}). We link to the live listing so you can check today’s price and availability.`;

const TITLE =
  'Blackzero BZD-01T-PH-A1 Explained: Exact Specifications, Five Modes and Model Differences';
const META_TITLE = 'Blackzero BZD-01T-PH-A1: Specs, Modes & Differences';
const META_DESCRIPTION =
  'Exact specs for the Blackzero BZD-01T-PH-A1 (former ASIN B0DBQMQMMW), all 5 working modes explained, and how it maps to the live BZD-01T-PH listing.';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: 'Daniel Kessler' }],
  keywords: [
    'Blackzero BZD-01T-PH-A1',
    'BZD-01T-PH-A1 specs',
    'Blackzero cordless drill',
    'BZD-01T-PH',
    'B0DBQMQMMW',
    'Blackzero 2-in-1 tool kit',
    'Blackzero drill 5 modes'
  ],
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
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: META_TITLE,
    description: META_DESCRIPTION,
    siteName: 'AISneer',
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    authors: ['Daniel Kessler'],
    images: [
      {
        url: `/images/tools/blackzero-bzd-01t-ph-a1/drill-hero.jpg`,
        width: 1024,
        height: 997,
        alt: 'Blackzero BZD-01T-PH-A1 cordless drill with both case tiers open'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [`/images/tools/blackzero-bzd-01t-ph-a1/drill-hero.jpg`]
  }
};

const SIBLING_MODELS = [
  {
    model: 'BZD-01',
    asin: 'B0D5CKFVB4',
    listingColor: 'Bzd-01',
    listingName: 'BLACKZERO Cordless Drill Kit, 5 Working Modes, Essential Mechanics Tools Kit, BZD-01',
    note:
      'The base drill listing. No "T" tier suffix, sold on its own as an "Essential Mechanics Tools Kit" rather than a multi-tier stackable case.'
  },
  {
    model: 'BZD-01T-PH',
    asin: LIVE_ASIN,
    listingColor: 'Black',
    listingName: 'BLACKZERO Cordless Drill, 16V Lithium-Ion Drill with Battery, BZD-01T-PH',
    note:
      'The live buyable listing. Same 2-tier portable case as A1: one tier is the drill and bits, the other is a hand-tool set (hammer, screwdrivers, pliers, tape measure). This is the Amazon ASIN we link for price and availability.',
    live: true
  },
  {
    model: 'BZD-01T-PS',
    asin: 'B0D5CJRL8X',
    listingColor: 'Bzd-01t-ps',
    listingName:
      'BLACKZERO Brushless Cordless Drill Tool Set, 60nm Powerful Torque, Smart Display, Mechanics Tools Kit',
    note:
      'Paired with a hardware/fastener tier (stainless hex-socket screws, barrel nuts, expansion screws, cold-pressed round terminals) instead of the PH hand-tool tier. Amazon lists this listing with 45W Type-C charging (50-minute fill) and a 1,800 W input rating on the charging spec line.'
  },
  {
    model: 'BZD-01T-PH-A1',
    asin: FORMER_ASIN,
    listingColor: 'Black',
    listingName: 'Blackzero BZD-01T-PH-A1 — Cordless Drill/Driver, 5 Operation Modes',
    note:
      'The subject of this page (former ASIN). Same 2-tier drill + hand-tool kit as BZD-01T-PH. The A1 Amazon listing is no longer available; buy via the live BZD-01T-PH ASIN instead.',
    current: true
  }
] as const;

const GALLERY = [
  {
    src: `${IMG_BASE}/drill-hero.jpg`,
    alt: `${BRAND} ${MODEL} cordless drill with both case tiers open, showing bits and hand tools`,
    caption: 'The drill plus both open case tiers',
    width: 1024,
    height: 997
  },
  {
    src: `${IMG_BASE}/drill-detail.jpg`,
    alt: `${BRAND} ${MODEL} drill tier product detail — labeled charging cable, bits, step drill bit and screwdriver sets`,
    caption: 'Drill tier, item-by-item',
    width: 1024,
    height: 1024
  },
  {
    src: `${IMG_BASE}/hand-tools-detail.jpg`,
    alt: `${BRAND} ${MODEL} hand-tool tier product detail — labeled hammer, tape measure, wrench, pliers and screwdrivers`,
    caption: 'Hand-tool tier, item-by-item',
    width: 1024,
    height: 1024
  },
  {
    src: `${IMG_BASE}/case-size.jpg`,
    alt: `${BRAND} ${MODEL} combination tool box size diagram — 13.2 x 9.5 x 6.4 inch double-layer case`,
    caption: 'Case dimensions',
    width: 1024,
    height: 1024
  },
  {
    src: `${IMG_BASE}/toolbox-locking.jpg`,
    alt: `${BRAND} ${MODEL} combination toolbox set — modular locking system, monolayer and multi-storey`,
    caption: 'Modular locking system',
    width: 1024,
    height: 1024
  }
] as const;

const OG_IMAGE = `${SITE_URL}${IMG_BASE}/drill-hero.jpg`;

const DRILL_TIER_ITEMS = [
  '16V multi-speed smart electric drill',
  'USB-C charging cable',
  'Drill bit set',
  'Step drill bit',
  'Rotary drill bit holder',
  '1" screwdriver set',
  '2" screwdriver set',
  'Nut driver kit',
  '1/4" extended bit holder',
  '2" magnetic Phillips screwdriver bit'
] as const;

const HAND_TOOL_TIER_ITEMS = [
  'Short pole screwdriver',
  'Long pole screwdriver',
  '20-piece bit set',
  'Claw hammer with rubber hammer-head cap',
  '10ft tape measure',
  'Art/utility knife',
  'Adjustable wrench',
  'Multifunctional needle-nose pliers'
] as const;

const MODES = [
  {
    num: 1,
    name: 'Small screws',
    range: '0–400 RPM',
    detail: 'Lowest speed band, for small fasteners where over-driving strips the head or the material.'
  },
  {
    num: 2,
    name: 'Medium screws',
    range: '0–700 RPM',
    detail: 'A middle speed step for standard wood and drywall screws.'
  },
  {
    num: 3,
    name: 'Large screws',
    range: '0–850 RPM',
    detail: 'The top screwing-mode speed, for longer or larger-gauge fasteners.'
  },
  {
    num: 4,
    name: 'Drilling',
    range: '0–1,000 RPM',
    detail: 'The dedicated drilling mode, for boring holes rather than driving fasteners.'
  },
  {
    num: 5,
    name: 'Auto / smart mode',
    range: 'up to 1,000 RPM',
    detail:
      'An automatic mode that ramps speed for the task at hand instead of holding a single fixed step.'
  }
] as const;

const FAQ_ITEMS = [
  {
    question: `What is the Blackzero ${MODEL}?`,
    answer:
      `The Blackzero ${MODEL} is a 16V cordless brushless drill/driver sold as part of a 2-in-1 portable tool case (former Amazon ASIN ${FORMER_ASIN}). One case tier holds the drill, bits and charging cable; the other holds a hand-tool set. It uses a touchscreen display to switch between 5 working modes and charges over USB-C. That A1 listing is no longer available; the same kit is currently sold as ${LIVE_MODEL} (ASIN ${LIVE_ASIN}).`
  },
  {
    question: `What does the "A1" in ${MODEL} mean?`,
    answer:
      `Blackzero has not published an official explanation of the A1 suffix. Amazon previously listed ${MODEL} (ASIN ${FORMER_ASIN}) separately from ${LIVE_MODEL} (ASIN ${LIVE_ASIN}), even though both describe the same 2-tier drill-and-hand-tool kit. That is the naming pattern Amazon typically uses for a distinct packaging, photo set or bundle variant of the same base model rather than a hardware revision. The A1 ASIN is no longer buyable; use the live ${LIVE_MODEL} listing instead.`
  },
  {
    question: `How much does the ${MODEL} cost?`,
    answer: `${PRICE_DISPLAY} was the last published price we recorded for this kit. Because the former A1 listing (ASIN ${FORMER_ASIN}) is gone, check the live ${LIVE_MODEL} listing (ASIN ${LIVE_ASIN}) for today’s price and any active deals.`
  },
  {
    question: `What voltage and torque does the ${MODEL} drill have?`,
    answer:
      'Blackzero lists the BZD-01T drill platform at 16V nominal (16.8V max) with up to 60 N·m of peak torque, driven by a brushless motor.'
  },
  {
    question: 'What are the 5 working modes on this drill?',
    answer:
      'The intelligent display shows the current operating mode, a dual-mode indicator, and forward/backward prompts, switched with one tap. Independent reviews of the same BZD-01T drill platform describe the 5 modes as three screwing speeds (roughly 0–400, 0–700 and 0–850 RPM for small, medium and large screws), a drilling mode up to 1,000 RPM, and an automatic/smart mode. Blackzero has not published a numbered mode chart specific to the A1 listing.'
  },
  {
    question: 'How many screws can it drive per charge?',
    answer:
      'Per Blackzero\'s own listing copy, the 1600mAh battery can drive (unscrew) up to 850 screws on a full charge.'
  },
  {
    question: 'Does the battery double as a phone charger?',
    answer:
      'Yes. The removable 1600mAh battery charges via USB-C and can reverse-charge a phone or other USB device when detached from the drill.'
  },
  {
    question: `Is the ${MODEL} a standalone drill or a full tool kit?`,
    answer:
      'It is a 2-in-1 portable kit. One tier of the case holds the drill, its USB-C charging cable, drill bits, a universal head and a step drill bit. The other tier holds a hand-tool set, including a sheepshead hammer with a magnetic nail driver design and a non-slip head cover, for general home repair, appliance work, toy assembly, garden woodworking and other DIY tasks.'
  },
  {
    question: `Where can I buy the ${MODEL} drill?`,
    answer: `AISneer does not sell this drill directly. The ${MODEL} listing (ASIN ${FORMER_ASIN}) is no longer available on Amazon. Based on Blackzero’s published kit description, it matches the same 2-tier drill + hand-tool kit currently sold as ${LIVE_MODEL} (ASIN ${LIVE_ASIN}). We link to that live listing so you can check today’s price, availability and seller.`
  }
] as const;

const blogPostingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  image: GALLERY.map((g) => `${SITE_URL}${g.src}`),
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    name: 'Daniel Kessler',
    description:
      'Writes tool and hardware explainers for AISneer, focusing on matching exact model numbers and ASINs to the correct specs.'
  },
  publisher: {
    '@type': 'Organization',
    name: 'AISneer',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`
    }
  },
  about: `${BRAND} ${MODEL} cordless drill`
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: `${BRAND} ${MODEL}`, item: PAGE_URL }
  ]
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${BRAND} ${MODEL} Cordless Drill/Driver 2-in-1 Tool Kit`,
  brand: { '@type': 'Brand', name: BRAND },
  model: MODEL,
  sku: LIVE_ASIN,
  category: 'Drills > Drill Drivers',
  image: GALLERY.map((g) => `${SITE_URL}${g.src}`),
  description:
    `Cordless Drill/Driver, 5 Operation Modes, sold as a 2-in-1 portable tool kit with a hand-tool tier. Former Amazon ASIN ${FORMER_ASIN} (no longer available); currently buyable as ${LIVE_MODEL} (ASIN ${LIVE_ASIN}). 16V brushless motor, up to 60 N·m torque, USB-C rechargeable 1600mAh battery good for up to 850 screws per charge.`,
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'voltage', value: '16V (16.8V max)' },
    { '@type': 'PropertyValue', name: 'max_torque', value: '60 N·m' },
    { '@type': 'PropertyValue', name: 'battery', value: '1600mAh Li-ion, USB-C rechargeable' },
    { '@type': 'PropertyValue', name: 'working_modes', value: 5 },
    { '@type': 'PropertyValue', name: 'motor_type', value: 'Brushless' },
    { '@type': 'PropertyValue', name: 'screws_per_charge', value: 'up to 850' },
    { '@type': 'PropertyValue', name: 'former_asin', value: FORMER_ASIN },
    { '@type': 'PropertyValue', name: 'live_asin', value: LIVE_ASIN },
    { '@type': 'PropertyValue', name: 'live_model', value: LIVE_MODEL }
  ],
  offers: {
    '@type': 'Offer',
    url: BUY_URL,
    price: PRICE,
    priceCurrency: 'USD',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@type': 'Organization', name: 'Amazon' },
    name: `${BRAND} ${LIVE_MODEL} (live listing matching ${MODEL})`
  }
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

const jsonLd = [blogPostingJsonLd, breadcrumbJsonLd, productJsonLd, faqJsonLd];

export default function BlackzeroBzd01tPhA1Page() {
  return (
    <div className="blog-wrap">
      <nav className="blog-crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>Tools</li>
          <li aria-current="page">{BRAND} {MODEL}</li>
        </ol>
      </nav>

      <article>
        <header>
          <p className="blog-kicker">Tools · Cordless Drills</p>
          <h1>{TITLE}</h1>
          <div className="blog-meta">
            <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
            <span>By Daniel Kessler</span>
            <span>9 min read</span>
            <span>Category: Tools &gt; Power Tools &gt; Cordless Drills</span>
          </div>
          <p className="blog-lede">
            The <strong>{BRAND} {MODEL}</strong> is a 16V cordless brushless drill/driver sold in a
            2-in-1 portable tool case. Its former Amazon listing (ASIN {FORMER_ASIN}) is no longer
            available; the same kit is currently sold as <strong>{LIVE_MODEL}</strong> (ASIN{' '}
            {LIVE_ASIN}). Below are its exact listed specifications, what&apos;s in the case, what
            each of the 5 modes does, and how this model number differs from the other Blackzero
            BZD-01 listings it&apos;s easy to confuse it with.
          </p>
        </header>

        <aside className="tl-avail" aria-label="Availability note">
          <strong>Availability note:</strong> {AVAILABILITY_NOTE}
        </aside>

        <nav className="tl-toc" aria-label="On this page">
          <span className="tl-toc-label">On this page:</span>{' '}
          <a href="#specs">Specifications</a> · <a href="#in-the-box">What&apos;s in the case</a> ·{' '}
          <a href="#modes">The 5 modes</a> · <a href="#differences">Model differences</a> ·{' '}
          <a href="#faq">FAQ</a> · <a href="#where-to-buy">Price &amp; availability</a>
        </nav>

        <div className="tl-gallery" aria-label={`${BRAND} ${MODEL} product images`}>
          {GALLERY.map((g, i) => (
            <figure key={g.src} className="tl-gallery-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="tl-gallery-credit">
          Product images from Blackzero&apos;s kit listing for the same 2-tier drill + hand-tool
          platform (live ASIN {LIVE_ASIN}; former A1 ASIN {FORMER_ASIN}).
        </p>

        <div className="tl-quick">
          <h2>Quick answer</h2>
          <p>
            <strong>{BRAND} {MODEL}</strong> (former ASIN {FORMER_ASIN}) is a 16V, brushless, USB-C
            rechargeable cordless drill/driver with up to 60 N·m of torque and 5 working modes
            selected from an intelligent touchscreen display. It ships in a 2-tier portable case:
            one tier holds the drill and bits, the other holds a hand-tool set including a
            sheepshead hammer — the same kit design now sold live as <strong>{LIVE_MODEL}</strong>{' '}
            (ASIN {LIVE_ASIN}). Last recorded price for this kit was{' '}
            <strong>{PRICE_DISPLAY}</strong>; check the live listing for today&apos;s price.
          </p>
          <span className="tl-rating" aria-label="Amazon rating">
            ★ 4.8 / 5 — 6 ratings on the former Amazon listing
          </span>
        </div>

        <section className="blog-section" aria-labelledby="specs">
          <h2 id="specs">Exact {MODEL} specifications</h2>
          <p>
            These are the specifications published for the {MODEL} kit (former ASIN {FORMER_ASIN}),
            cross-checked against Blackzero&apos;s live {LIVE_MODEL} listing (ASIN {LIVE_ASIN}), the
            BZD-01T-PS listing, and independent reviews of the same BZD-01T drill platform.
          </p>
          <div className="hp-tablewrap">
            <table className="hp-table">
              <caption>{BRAND} {MODEL} — published specifications</caption>
              <tbody>
                <tr>
                  <th scope="row">Brand</th>
                  <td>{BRAND}</td>
                </tr>
                <tr>
                  <th scope="row">Model</th>
                  <td>{MODEL}</td>
                </tr>
                <tr>
                  <th scope="row">Former ASIN ({MODEL})</th>
                  <td>
                    {FORMER_ASIN} — no longer available on Amazon
                  </td>
                </tr>
                <tr>
                  <th scope="row">Live buy ASIN ({LIVE_MODEL})</th>
                  <td>
                    {LIVE_ASIN} — same 2-tier drill + hand-tool kit; this is the listing we link
                  </td>
                </tr>
                <tr>
                  <th scope="row">Last recorded price</th>
                  <td className="blog-price">
                    {PRICE_DISPLAY} (check live listing; Amazon prices change)
                  </td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>Drills &gt; Drill Drivers</td>
                </tr>
                <tr>
                  <th scope="row">Drill type</th>
                  <td>Combination drill/driver</td>
                </tr>
                <tr>
                  <th scope="row">Color</th>
                  <td>Black</td>
                </tr>
                <tr>
                  <th scope="row">Power source</th>
                  <td>Battery powered</td>
                </tr>
                <tr>
                  <th scope="row">Voltage</th>
                  <td>16V nominal (16.8V max, per the BZD-01T platform)</td>
                </tr>
                <tr>
                  <th scope="row">Motor</th>
                  <td>Brushless (no carbon brushes to replace)</td>
                </tr>
                <tr>
                  <th scope="row">Max torque</th>
                  <td>60 N·m</td>
                </tr>
                <tr>
                  <th scope="row">Working modes</th>
                  <td>5, selected via an intelligent touchscreen display</td>
                </tr>
                <tr>
                  <th scope="row">Battery</th>
                  <td>1600mAh Li-ion, removable, USB-C rechargeable</td>
                </tr>
                <tr>
                  <th scope="row">Screws per charge</th>
                  <td>Up to 850, per Blackzero&apos;s listing copy</td>
                </tr>
                <tr>
                  <th scope="row">Power-bank function</th>
                  <td>Yes — the detached battery can charge a phone or other USB device</td>
                </tr>
                <tr>
                  <th scope="row">Case</th>
                  <td>2-tier, blow-molded, tough ABS, wear-resistant, stackable or split apart</td>
                </tr>
                <tr>
                  <th scope="row">Case dimensions (double-layer)</th>
                  <td>13.2 × 9.5 × 6.4 in (handle: 7.8 in wide × 2.95 in tall), per Blackzero&apos;s
                    listing diagram
                  </td>
                </tr>
                <tr>
                  <th scope="row">Is electric</th>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th scope="row">Amazon rating</th>
                  <td>4.8 out of 5 (6 ratings on the former listing, before delisting)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ fontSize: '13px', marginTop: '10px' }}>
            Chuck capacity, no-load current, exact charge time and the drill&apos;s weight are not
            listed on Blackzero&apos;s former {FORMER_ASIN} copy or images; the chuck and current
            figures commonly cited for the shared BZD-01T platform (2–10mm chuck, ≤4A no-load
            current) come from the BZD-01T-PH/PS listings and independent reviews in the sources
            section below, not from Blackzero&apos;s A1-specific copy. We do not have a confirmed
            weight for this SKU.
          </p>
        </section>

        <section className="blog-section" aria-labelledby="in-the-box">
          <h2 id="in-the-box">What&apos;s in the {MODEL} case</h2>
          <p>
            The {MODEL} case splits into two lockable, blow-molded ABS tiers (13.2 × 9.5 × 6.4 in
            combined) that can be carried together or unlocked and split apart. Blackzero&apos;s own
            labeled product-detail images list the following contents per tier:
          </p>
          <div className="tl-kit-grid">
            <div>
              <h3>Drill tier</h3>
              <ul className="bullet-list">
                {DRILL_TIER_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Hand-tool tier</h3>
              <ul className="bullet-list">
                {HAND_TOOL_TIER_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            Blackzero&apos;s labeled product image calls the hand-tool tier&apos;s hammer a{' '}
            <strong>claw hammer</strong> with a <strong>rubber hammer-head cap</strong>, while the
            listing&apos;s marketing copy separately describes it as a{' '}
            <strong>sheepshead hammer</strong> with a hardness of 50–56 HRC, a magnetic nail-driver
            design for short or long nails, a magnetic tip that can collect and place nails for
            one-handed use, and a non-slip head cover to protect work surfaces and reduce noise. We
            could not confirm from Blackzero whether &quot;claw hammer&quot; and &quot;sheepshead
            hammer&quot; refer to the same physical tool or two different hammer styles bundled with
            different case runs — both descriptions are included here rather than picking one.
          </p>
        </section>

        <section className="blog-section" aria-labelledby="modes">
          <h2 id="modes">The five working modes, explained</h2>
          <p>
            Blackzero&apos;s own listing copy confirms the display &quot;can show the current
            operating mode, dual mode and forward and backward prompts,&quot; and that a single tap
            of the button at the bottom of the display cycles through the 5 modes at any time — but
            it does not publish a numbered chart mapping each mode to an exact RPM. The breakdown
            below is drawn from independent teardown reviews and technical spec sheets of the same
            BZD-01T drill used across the PH, PS and A1 listings.
          </p>
          <ul className="tl-modes">
            {MODES.map((mode) => (
              <li className="tl-mode" key={mode.num}>
                <span className="tl-mode-num">{mode.num}</span>
                <h3>{mode.name}</h3>
                <p>
                  <strong>{mode.range}</strong> — {mode.detail}
                </p>
              </li>
            ))}
          </ul>
          <div className="tl-unknown">
            We could not find Blackzero documentation that assigns these exact labels to modes 1–5
            in that order for the A1 listing specifically — the sequence above is the most
            consistent reading of published third-party reviews of the shared drill platform. If
            you own this exact unit and can confirm the on-screen mode order, let us know and
            we&apos;ll correct this section.
          </div>
        </section>

        <section className="blog-section" aria-labelledby="differences">
          <h2 id="differences">How BZD-01T-PH-A1 differs from BZD-01T-PH, BZD-01T-PS and BZD-01</h2>
          <p>
            Blackzero sells several near-identical listings built around the same 16V brushless
            drill. The model-number suffix tells you which kit or packaging you&apos;re looking at,
            not a different drill:
          </p>
          <div className="hp-tablewrap">
            <table className="hp-table">
              <caption>Blackzero BZD-01 family — model numbers and what each ASIN actually is</caption>
              <thead>
                <tr>
                  <th scope="col">Model</th>
                  <th scope="col">ASIN</th>
                  <th scope="col">Listing color/style</th>
                  <th scope="col">What it is</th>
                </tr>
              </thead>
              <tbody>
                {SIBLING_MODELS.map((m) => (
                  <tr key={m.model}>
                    <th scope="row">
                      {m.model}
                      {'current' in m && m.current ? <span className="hp-tag">This page</span> : null}
                      {'live' in m && m.live ? <span className="hp-tag">Live buy</span> : null}
                    </th>
                    <td>{m.asin}</td>
                    <td>{m.listingColor}</td>
                    <td>{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            In short: <strong>BZD-01</strong> is the base drill-only or essential-kit listing,{' '}
            <strong>{LIVE_MODEL}</strong> is the live 2-tier drill + hand-tool kit (ASIN{' '}
            {LIVE_ASIN}),{' '}
            <Link href="/blog/blackzero-bzd-01t-ps">
              <strong>BZD-01T-PS</strong>
            </Link>{' '}
            pairs the same drill with a hardware/fastener tier instead, and <strong>{MODEL}</strong>{' '}
            is the former listing for that same
            drill-plus-hand-tool kit (ASIN {FORMER_ASIN}, no longer available). All four share the
            same 16V brushless motor, 60 N·m torque rating and 5-mode touchscreen design described
            above. For buying, use the live {LIVE_MODEL} listing.
          </p>
        </section>

        <section className="blog-section" aria-labelledby="who-for">
          <h2 id="who-for">Who the {MODEL} is for</h2>
          <ul className="bullet-list">
            <li>
              <strong>Home DIYers</strong> who want one drill that also charges a phone in a pinch,
              without carrying a second proprietary battery charger.
            </li>
            <li>
              <strong>Buyers replacing a worn brushed drill</strong> who want the lower maintenance
              and quieter operation of a brushless motor at a mainstream price point.
            </li>
            <li>
              <strong>Anyone comparing Blackzero listings</strong> who searched for {MODEL} /{' '}
              {FORMER_ASIN} and needs the intentional map to the live {LIVE_MODEL} buy link (ASIN{' '}
              {LIVE_ASIN}).
            </li>
          </ul>
        </section>

        <section className="blog-section blog-faq" aria-labelledby="faq">
          <h2 id="faq">Frequently asked questions</h2>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="blog-section" aria-labelledby="where-to-buy">
          <h2 id="where-to-buy">Where to check the current price</h2>
          <aside className="tl-avail" aria-label="Availability note">
            <strong>Availability note:</strong> {AVAILABILITY_NOTE}
          </aside>
          <p>
            AISneer does not sell this drill directly. Last recorded price for this kit was{' '}
            <strong className="blog-price">{PRICE_DISPLAY}</strong>. Because the former{' '}
            {MODEL} listing (ASIN {FORMER_ASIN}) is gone, we link to the live{' '}
            <strong>{LIVE_MODEL}</strong> Amazon listing (ASIN {LIVE_ASIN}) so you can confirm
            today&apos;s price, seller and availability before buying.
          </p>
          <a
            className="btn btn-primary btn-lg"
            href={BUY_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            Check live {LIVE_MODEL} price on Amazon →
          </a>
        </section>

        <section className="tl-source-note" aria-labelledby="sources">
          <h2 id="sources" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            How we compiled this page
          </h2>
          <p>
            We did not physically test this exact unit. Specs and kit contents were compiled from
            Blackzero&apos;s published listing copy and product images for the former {MODEL} ASIN{' '}
            {FORMER_ASIN}, then cross-checked against the live {LIVE_MODEL} listing (ASIN{' '}
            {LIVE_ASIN}), BZD-01T-PS, BZD-01, and independent reviews of the same drill platform:
          </p>
          <ul>
            <li>
              Amazon listing copy and product images — former ASIN {FORMER_ASIN} ({MODEL}, no longer
              available)
            </li>
            <li>
              Amazon live listing — ASIN {LIVE_ASIN} ({LIVE_MODEL}; buy link on this page)
            </li>
            <li>Amazon listing, ASIN B0D5CJRL8X (BZD-01T-PS)</li>
            <li>Amazon listing, ASIN B0D5CKFVB4 (BZD-01)</li>
            <li>3rd Planet Techies — Blackzero BZD-01 cordless drill review and performance test</li>
            <li>The Gadgeteer — BlackZero 2 Tier Portable Tool Kit review</li>
            <li>Geeks Under Grace — Review of the BlackZero 3-in-1 Tool Set</li>
          </ul>
          <p>
            Where sources disagreed, or a figure (like exact weight or a numbered mode-to-RPM
            chart) simply was not published anywhere for this SKU, we flagged it in the relevant
            section above instead of presenting it as confirmed A1-specific fact.
          </p>
        </section>
      </article>

      <aside className="blog-noise" aria-label="More from AISneer">
        <div className="blog-noise-card">
          <h2>Newsletter</h2>
          <p>One email a week. Gear tests, no press releases.</p>
          <form className="blog-newsletter-form" action="/api/subscribe" method="post">
            <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
            <button className="btn btn-primary btn-sm" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="blog-noise-card">
          <h2>Related posts</h2>
          <ul>
            <li>
              <Link href="/blog/blackzero-bzd-01t-ps">
                Blackzero BZD-01T-PS: fastener kit specs and differences
              </Link>
            </li>
            <li>
              <Link href="/blog/creator-laptops-under-1500">Creator laptops under $1,500</Link>
            </li>
            <li>
              <Link href="/usb-hubs">Shop USB hubs</Link>
            </li>
          </ul>
        </div>
        <div className="blog-noise-card">
          <h2>About the author</h2>
          <div className="blog-author">
            <span className="blog-author-avatar" aria-hidden>
              DK
            </span>
            <p>
              Daniel Kessler writes tool and hardware explainers for AISneer, focusing on matching
              exact model numbers and ASINs to the correct specs before you buy.
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
