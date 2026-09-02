import type { Metadata } from 'next';
import Link from 'next/link';
import '../blog.css';

const SITE_URL = 'https://www.aisneer.com';
const PAGE_PATH = '/blog/blackzero-bzd-01t-ps';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-08-13';
const DATE_MODIFIED = '2026-08-20';
const DATE_MODIFIED_DISPLAY = 'August 20, 2026';
const IMG_BASE = '/images/tools/blackzero-bzd-01t-ps';

const MODEL = 'BZD-01T-PS';
const BRAND = 'Blackzero';
const ASIN = 'B0D5CJRL8X';
const SIBLING_A1_MODEL = 'BZD-01T-PH-A1';
const SIBLING_A1_ASIN = 'B0DBQMQMMW';
const SIBLING_PH_MODEL = 'BZD-01T-PH';
const SIBLING_PH_ASIN = 'B0D5CLZ1ZT';
const PRICE = 169.99;
const PRICE_DISPLAY = '$169.99';
const BUY_URL = `https://www.amazon.com/dp/${ASIN}`;

const AVAILABILITY_NOTE = `The Blackzero ${MODEL} (ASIN ${ASIN}) is a live Amazon listing for the 2-tier drill + fastener/hardware kit. It is not the hand-tool kit sold as ${SIBLING_PH_MODEL} (ASIN ${SIBLING_PH_ASIN}) or the former ${SIBLING_A1_MODEL} listing (ASIN ${SIBLING_A1_ASIN}). We link to ASIN ${ASIN} so you can check today’s price and availability.`;

const TITLE =
  'Blackzero BZD-01T-PS Explained: Exact Specifications, Fastener Kit and Model Differences';
const META_TITLE = 'Blackzero BZD-01T-PS: Specs, Fastener Kit & Differences';
const META_DESCRIPTION =
  'Blackzero BZD-01T-PS specs: 16V brushless drill, 5 modes, stainless fastener kit, and how it differs from PH and PH-A1.';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: 'Daniel Kessler' }],
  keywords: [
    'Blackzero BZD-01T-PS',
    'BZD-01T-PS specs',
    'Blackzero cordless drill',
    'B0D5CJRL8X',
    'Blackzero fastener kit',
    'BZD-01T-PS vs BZD-01T-PH',
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
        url: `${IMG_BASE}/drill-detail.jpg`,
        width: 1024,
        height: 1024,
        alt: 'Blackzero BZD-01T-PS 16V brushless cordless drill in the drill-tier case'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [`${IMG_BASE}/drill-detail.jpg`]
  }
};

const GALLERY = [
  {
    src: `${IMG_BASE}/drill-detail.jpg`,
    alt: `${BRAND} ${MODEL} drill tier — 16V brushless drill, bits, nut drivers and USB-C charging cable`,
    caption: 'Drill tier (shared BZD-01T platform)',
    width: 1024,
    height: 1024
  },
  {
    src: `${IMG_BASE}/case-size.jpg`,
    alt: `${BRAND} ${MODEL} 2-tier combination toolbox size diagram`,
    caption: 'Case dimensions',
    width: 1024,
    height: 1024
  },
  {
    src: `${IMG_BASE}/toolbox-locking.jpg`,
    alt: `${BRAND} ${MODEL} stackable ABS case with modular locking system`,
    caption: 'Modular locking case',
    width: 1024,
    height: 1024
  }
] as const;

const PRODUCT_IMAGES = GALLERY.map((g) => `${SITE_URL}${g.src}`);

const SIBLING_MODELS = [
  {
    model: 'BZD-01',
    asin: 'B0D5CKFVB4',
    listingColor: 'Bzd-01',
    listingName: 'BLACKZERO Cordless Drill Kit, 5 Working Modes, Essential Mechanics Tools Kit, BZD-01',
    note:
      'The base drill listing. No "T" tier suffix, sold as an "Essential Mechanics Tools Kit" rather than a multi-tier stackable case.'
  },
  {
    model: 'BZD-01T-PH',
    asin: SIBLING_PH_ASIN,
    listingColor: 'Black',
    listingName: 'BLACKZERO Cordless Drill, 16V Lithium-Ion Drill with Battery, BZD-01T-PH',
    note:
      '2-tier portable case: drill and bits in one tier, a hand-tool set (hammer, screwdrivers, pliers, tape measure) in the other. Live listing; former A1 ASIN mapped to this kit.'
  },
  {
    model: 'BZD-01T-PH-A1',
    asin: SIBLING_A1_ASIN,
    listingColor: 'Black',
    listingName: 'Blackzero BZD-01T-PH-A1 — Cordless Drill/Driver, 5 Operation Modes',
    note:
      'Former Amazon listing for the same 2-tier drill + hand-tool kit as BZD-01T-PH. No longer available; see our A1 explainer for the map to the live PH ASIN.'
  },
  {
    model: 'BZD-01T-PS',
    asin: ASIN,
    listingColor: 'Bzd-01t-ps',
    listingName:
      'BLACKZERO Brushless Cordless Drill Tool Set, 60nm Powerful Torque, Smart Display, Mechanics Tools Kit',
    note:
      'This page. Same 16V brushless drill platform, paired with a hardware/fastener tier (stainless hex-socket screws, barrel nuts, expansion screws, cold-pressed round terminals) instead of the PH hand-tool tier.',
    current: true,
    live: true
  },
  {
    model: 'BZD-01P',
    asin: 'B0D5BGBHQ2',
    listingColor: 'Bzd-01p',
    listingName: 'BLACKZERO BZD-01P (Amazon size/variant of the same drill family)',
    note:
      'Appears as a fourth size option on Amazon’s BZD-01 family picker. We have not confirmed kit contents for this ASIN beyond it sharing the same drill-family listing group.'
  }
] as const;

const DRILL_TIER_ITEMS = [
  '16V multi-speed smart electric drill (shared BZD-01T platform)',
  'USB-C charging cable',
  'Drill bit set',
  'Step drill bit',
  'Rotary drill bit holder',
  'Screwdriver bit sets',
  'Nut driver kit',
  'Extended bit holder'
] as const;

const FASTENER_TIER_ITEMS = [
  'Stainless hexagon socket-head screws',
  'Stainless barrel nuts',
  'Elastic-plastic expansion screws',
  'Cold-pressed round terminals',
  'Compartmented plastic storage box with removable stoppers (DIY compartment sizing)'
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
      `The Blackzero ${MODEL} is a 16V cordless brushless drill/driver sold as a 2-in-1 portable tool case (Amazon ASIN ${ASIN}). One case tier holds the drill, bits and charging cable; the other holds a hardware/fastener assortment — stainless hex-socket screws, barrel nuts, expansion screws and cold-pressed round terminals — not a hammer-and-pliers hand-tool set. It uses a touchscreen display to switch between 5 working modes and charges over USB-C.`
  },
  {
    question: `How is ${MODEL} different from ${SIBLING_PH_MODEL} and ${SIBLING_A1_MODEL}?`,
    answer:
      `${MODEL} (ASIN ${ASIN}) pairs the shared BZD-01T drill with a fastener/hardware tier. ${SIBLING_PH_MODEL} (ASIN ${SIBLING_PH_ASIN}) and the former ${SIBLING_A1_MODEL} listing (ASIN ${SIBLING_A1_ASIN}) pair that same drill with a hand-tool tier. The drill — 16V brushless, 60 N·m, 5-mode display, USB-C battery — is the shared platform. Buy the PS ASIN only if you want the fastener kit; buy the live PH ASIN if you want the hammer, pliers and tape measure.`
  },
  {
    question: `How much does the ${MODEL} cost?`,
    answer: `${PRICE_DISPLAY} was the last published retail price we recorded for this kit (Walmart listing of the same PS tool set). Amazon prices change; check ASIN ${ASIN} for today’s price and any active deals.`
  },
  {
    question: `What voltage and torque does the ${MODEL} drill have?`,
    answer:
      'Blackzero lists the BZD-01T drill platform at 16V nominal (16.8V max) with up to 60 N·m of peak torque, driven by a brushless motor. The PS listing’s Amazon spec table also shows Voltage: 16 Volts and Maximum Power: 1800 Watts — that wattage line is a charging/input rating on the listing, not a claimed 1,800 W drill output.'
  },
  {
    question: 'What are the 5 working modes on this drill?',
    answer:
      'The intelligent display shows the current operating mode, a dual-mode indicator, and forward/backward prompts, switched with one tap. Independent reviews of the same BZD-01T drill platform describe the 5 modes as three screwing speeds (roughly 0–400, 0–700 and 0–850 RPM for small, medium and large screws), a drilling mode up to 1,000 RPM, and an automatic/smart mode. Blackzero has not published a numbered mode chart specific to the PS listing.'
  },
  {
    question: 'How fast does the PS listing say the battery charges?',
    answer:
      'The BZD-01T-PS Amazon copy lists a 45W Type-C charging port that can be filled in 50 minutes, plus reverse charging so the detached battery can charge a phone. That 45W / 50-minute claim is published on the PS listing; it is not stated in the same words on the former A1 copy. Independent reviews of the shared platform more often cite a ~60-minute USB-C fill.'
  },
  {
    question: 'How many screws can it drive per charge?',
    answer:
      'Per Blackzero’s listing copy for this drill platform, the 1600mAh battery can drive (unscrew) up to 850 screws on a full charge.'
  },
  {
    question: `Is the ${MODEL} a standalone drill or a full tool kit?`,
    answer:
      'It is a 2-in-1 portable kit. One tier holds the drill and bits. The other holds a hardware assortment in a compartmented box: stainless hex-socket screws and barrel nuts, elastic-plastic expansion screws, and cold-pressed round terminals. It does not include the PH kit’s claw/sheepshead hammer, tape measure, wrench or pliers.'
  },
  {
    question: `Where can I buy the ${MODEL} drill?`,
    answer: `AISneer does not sell this drill directly. The live Amazon listing is ASIN ${ASIN}. We link to that listing so you can check today’s price, availability and seller. Do not buy ${MODEL} if you wanted the hand-tool kit — that is ${SIBLING_PH_MODEL} (ASIN ${SIBLING_PH_ASIN}).`
  }
] as const;

const blogPostingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  image: PRODUCT_IMAGES,
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
  about: `${BRAND} ${MODEL} cordless drill fastener kit`,
  isPartOf: {
    '@type': 'Blog',
    name: 'AISneer Blog',
    url: `${SITE_URL}/blog`
  }
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
  name: `${BRAND} ${MODEL} Brushless Cordless Drill Tool Set`,
  brand: { '@type': 'Brand', name: BRAND },
  model: MODEL,
  sku: ASIN,
  mpn: MODEL,
  category: 'Drills > Drill Drivers',
  image: PRODUCT_IMAGES,
  description:
    `Brushless cordless drill/driver with 5 operation modes, sold as a 2-in-1 portable kit with a fastener/hardware tier. Amazon ASIN ${ASIN}. 16V brushless motor, up to 60 N·m torque, USB-C rechargeable 1600mAh battery, stainless hex-socket screws, barrel nuts, expansion screws and cold-pressed round terminals.`,
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'voltage', value: '16V (16.8V max)' },
    { '@type': 'PropertyValue', name: 'max_torque', value: '60 N·m' },
    { '@type': 'PropertyValue', name: 'battery', value: '1600mAh Li-ion, USB-C rechargeable' },
    { '@type': 'PropertyValue', name: 'working_modes', value: 5 },
    { '@type': 'PropertyValue', name: 'motor_type', value: 'Brushless' },
    { '@type': 'PropertyValue', name: 'screws_per_charge', value: 'up to 850' },
    { '@type': 'PropertyValue', name: 'kit_type', value: 'drill + fastener/hardware tier' },
    { '@type': 'PropertyValue', name: 'charge_claim', value: '45W Type-C, 50-minute fill (PS listing copy)' },
    { '@type': 'PropertyValue', name: 'asin', value: ASIN }
  ],
  offers: {
    '@type': 'Offer',
    url: BUY_URL,
    price: PRICE,
    priceCurrency: 'USD',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@type': 'Organization', name: 'Amazon' },
    name: `${BRAND} ${MODEL} (ASIN ${ASIN})`
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

export default function BlackzeroBzd01tPsPage() {
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
          <li aria-current="page">
            {BRAND} {MODEL}
          </li>
        </ol>
      </nav>

      <article>
        <header>
          <p className="blog-kicker">Tools · Cordless Drills</p>
          <h1>{TITLE}</h1>
          <div className="blog-meta">
            <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
            <span>By Daniel Kessler</span>
            <span>8 min read</span>
            <span>Category: Tools &gt; Power Tools &gt; Cordless Drills</span>
          </div>
          <p className="blog-lede">
            The <strong>{BRAND} {MODEL}</strong> is a 16V cordless brushless drill/driver sold in a
            2-in-1 portable tool case (Amazon ASIN {ASIN}). The second tier is a{' '}
            <strong>fastener and hardware assortment</strong>, not the hammer-and-pliers hand-tool
            kit on {SIBLING_PH_MODEL}. Below are its exact listed specifications, what is in each
            case tier, what the 5 modes do, and how this model number differs from{' '}
            {SIBLING_PH_MODEL}, {SIBLING_A1_MODEL} and BZD-01.
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
          Product photos of the shared BZD-01T drill and 2-tier ABS case. The {MODEL} listing uses
          this drill/case with a fastener/hardware tier rather than the PH hand-tool tier.
        </p>

        <div className="tl-quick">
          <h2>Quick answer</h2>
          <p>
            <strong>{BRAND} {MODEL}</strong> (ASIN {ASIN}) is a 16V, brushless, USB-C rechargeable
            cordless drill/driver with up to 60 N·m of torque and 5 working modes selected from an
            intelligent touchscreen display. It ships in a 2-tier portable ABS case: one tier holds
            the drill and bits, the other holds stainless hex-socket screws, barrel nuts, expansion
            screws and cold-pressed round terminals. Last recorded retail price for this kit was{' '}
            <strong>{PRICE_DISPLAY}</strong>; check the live listing for today&apos;s price.
          </p>
        </div>

        <section className="blog-section" aria-labelledby="specs">
          <h2 id="specs">Exact {MODEL} specifications</h2>
          <p>
            These are the specifications published for the {MODEL} kit (ASIN {ASIN}), cross-checked
            against Blackzero&apos;s {SIBLING_PH_MODEL} listing (ASIN {SIBLING_PH_ASIN}), the former{' '}
            {SIBLING_A1_MODEL} listing, and independent reviews of the same BZD-01T drill platform.
          </p>
          <div className="hp-tablewrap">
            <table className="hp-table">
              <caption>
                {BRAND} {MODEL} — published specifications
              </caption>
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
                  <th scope="row">Amazon ASIN</th>
                  <td>{ASIN} — live listing; this is the listing we link</td>
                </tr>
                <tr>
                  <th scope="row">Last recorded price</th>
                  <td className="blog-price">
                    {PRICE_DISPLAY} (Walmart listing of the same PS kit; check Amazon — prices change)
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
                  <th scope="row">Listing color/style</th>
                  <td>Bzd-01t-ps</td>
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
                  <th scope="row">Charge claim (PS listing)</th>
                  <td>45W Type-C port, filled in 50 minutes, per Blackzero&apos;s PS copy</td>
                </tr>
                <tr>
                  <th scope="row">Maximum power (Amazon spec line)</th>
                  <td>1,800 W — listed as a charging/input figure, not drill output</td>
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
                  <td>2-tier, tough ABS, wear-resistant; tiers usable together or carried separately</td>
                </tr>
                <tr>
                  <th scope="row">Second tier</th>
                  <td>Hardware/fasteners, not hand tools</td>
                </tr>
                <tr>
                  <th scope="row">Is electric</th>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ fontSize: '13px', marginTop: '10px' }}>
            Chuck capacity, no-load current, kit weight and a numbered mode-to-RPM chart are not
            listed on Blackzero&apos;s {ASIN} copy. Figures commonly cited for the shared BZD-01T
            platform (2–10 mm chuck, ≤4 A no-load current, no-load bands of 0–400 / 0–700 / 0–850 /
            0–1,000 r/min) come from sibling listings and independent reviews in the sources
            section, not from PS-specific copy. We do not have a confirmed weight for this SKU.
          </p>
        </section>

        <section className="blog-section" aria-labelledby="in-the-box">
          <h2 id="in-the-box">What&apos;s in the {MODEL} case</h2>
          <p>
            The {MODEL} case is a 2-tier, lockable ABS toolbox. Tiers can be used together or
            carried separately. Blackzero&apos;s PS listing copy describes the second tier as a
            compartmented hardware box — hex-socket screws and barrel nuts in stainless steel,
            expansion screws in elastic-plastic, plus cold-pressed round terminals — not the PH
            kit&apos;s hammer, tape measure, wrench and pliers.
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
              <h3>Fastener / hardware tier</h3>
              <ul className="bullet-list">
                {FASTENER_TIER_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tl-unknown">
            Blackzero has not published a piece-count for the hex-socket screws, barrel nuts,
            expansion screws or terminals on the {MODEL} listing. Independent reviews of other
            BZD-01 family kits sometimes cite hundreds of hardware pieces; we could not confirm
            that count for ASIN {ASIN} specifically, so it is omitted here.
          </div>
        </section>

        <section className="blog-section" aria-labelledby="modes">
          <h2 id="modes">The five working modes, explained</h2>
          <p>
            Blackzero&apos;s PS listing copy confirms a high-resolution display that shows the
            current operating mode, dual mode and forward/backward prompts, with one tap of the
            button at the bottom of the display cycling through the 5 modes — but it does not
            publish a numbered chart mapping each mode to an exact RPM. The breakdown below is
            drawn from independent reviews and spec sheets of the same BZD-01T drill used across
            the PH, PS and A1 listings.
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
            in that order for the PS listing specifically — the sequence above is the most
            consistent reading of published third-party reviews of the shared drill platform. If
            you own this exact unit and can confirm the on-screen mode order, let us know and
            we&apos;ll correct this section.
          </div>
        </section>

        <section className="blog-section" aria-labelledby="differences">
          <h2 id="differences">
            How {MODEL} differs from {SIBLING_PH_MODEL}, {SIBLING_A1_MODEL} and BZD-01
          </h2>
          <p>
            Blackzero sells several near-identical listings built around the same 16V brushless
            drill. The model-number suffix tells you which kit you are looking at, not a different
            drill:
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
            In short: <strong>BZD-01</strong> is the base essential-kit listing,{' '}
            <strong>{SIBLING_PH_MODEL}</strong> is the live 2-tier drill + hand-tool kit,{' '}
            <strong>{SIBLING_A1_MODEL}</strong> was a former listing for that same hand-tool kit
            (see the{' '}
            <Link href="/blog/blackzero-bzd-01t-ph-a1">{SIBLING_A1_MODEL} explainer</Link>), and{' '}
            <strong>{MODEL}</strong> is the live 2-tier drill + fastener kit (ASIN {ASIN}). All
            share the same 16V brushless motor, 60 N·m torque rating and 5-mode touchscreen. For
            this page&apos;s kit, use the {MODEL} listing.
          </p>
        </section>

        <section className="blog-section" aria-labelledby="who-for">
          <h2 id="who-for">Who the {MODEL} is for</h2>
          <ul className="bullet-list">
            <li>
              <strong>DIYers who already own a hammer and pliers</strong> and would rather get
              stainless fasteners, barrel nuts and expansion screws in the second case tier.
            </li>
            <li>
              <strong>Furniture and fixture work</strong> where hex-socket screws and barrel nuts
              are the consumable, not a claw hammer.
            </li>
            <li>
              <strong>Anyone comparing Blackzero listings</strong> who searched for {MODEL} /{' '}
              {ASIN} and needs it kept distinct from {SIBLING_PH_MODEL} / {SIBLING_A1_MODEL}.
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
            AISneer does not sell this drill directly. Last recorded retail price for this kit was{' '}
            <strong className="blog-price">{PRICE_DISPLAY}</strong>. We link to the live{' '}
            <strong>{MODEL}</strong> Amazon listing (ASIN {ASIN}) so you can confirm today&apos;s
            price, seller and availability before buying.
          </p>
          <a
            className="btn btn-primary btn-lg"
            href={BUY_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            Check live {MODEL} price on Amazon →
          </a>
        </section>

        <section className="tl-source-note" aria-labelledby="sources">
          <h2 id="sources" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            How we compiled this page
          </h2>
          <p>
            We did not physically test this exact unit. Specs and kit contents were compiled from
            Blackzero&apos;s published listing copy for {MODEL} ASIN {ASIN}, then cross-checked
            against {SIBLING_PH_MODEL} (ASIN {SIBLING_PH_ASIN}), the former {SIBLING_A1_MODEL}{' '}
            listing, BZD-01, and independent reviews of the same drill platform:
          </p>
          <ul>
            <li>
              Amazon listing copy — ASIN {ASIN} ({MODEL}; buy link on this page)
            </li>
            <li>
              Amazon live listing — ASIN {SIBLING_PH_ASIN} ({SIBLING_PH_MODEL})
            </li>
            <li>
              Amazon former listing — ASIN {SIBLING_A1_ASIN} ({SIBLING_A1_MODEL}, no longer
              available)
            </li>
            <li>Amazon listing, ASIN B0D5CKFVB4 (BZD-01)</li>
            <li>Amazon family picker also lists BZD-01P, ASIN B0D5BGBHQ2</li>
            <li>Walmart listing of the same PS tool set (last recorded {PRICE_DISPLAY})</li>
            <li>3rd Planet Techies — Blackzero BZD-01 cordless drill review and performance test</li>
            <li>The Gadgeteer — BlackZero 2 Tier Portable Tool Kit review</li>
            <li>How-To Geek — Blackzero 3-in-1 portable tool set overview</li>
          </ul>
          <p>
            Where sources disagreed, or a figure (like exact fastener piece-count or a numbered
            mode-to-RPM chart) was not published for this SKU, we flagged it in the relevant
            section above instead of presenting it as confirmed PS-specific fact.
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
              <Link href="/blog/blackzero-bzd-01t-ph-a1">
                Blackzero BZD-01T-PH-A1: specs, modes and the live PH map
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
