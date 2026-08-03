import type { Metadata } from 'next';
import Link from 'next/link';
import '../blog.css';

const SITE_URL = 'https://wordofprompt.com';
const PAGE_PATH = '/blog/best-fleece-and-softshell-jackets';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-01-19';
const DATE_MODIFIED = '2026-07-30';
const DATE_MODIFIED_DISPLAY = 'July 30, 2026';

export const metadata: Metadata = {
  title: 'The Best Fleece and Softshell Jackets: Full-Zip vs Pullover',
  description:
    'Six fleece and softshell jackets tested, with the zipper question answered: full-zip, quarter-zip or pullover. Includes the Patagonia Better Sweater in both closures and the Arc’teryx Delta line.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'The Best Fleece and Softshell Jackets: Full-Zip vs Pullover',
    description:
      'Six fleece and softshell jackets tested across a Cascades winter, with closure type called out for every model.'
  }
};

type Jacket = {
  brand: string;
  model: string;
  fullName: string;
  closureLabel: string;
  closureValue: 'full_zip' | 'quarter_zip' | 'pullover';
  fabric: string;
  weight: string;
  colorTested: string;
  sizeTested: string;
  price: number | null;
  priceLabel: string;
  asin: string | null;
  pitch: string;
  bullets: string[];
  inSchema: boolean;
};

const JACKETS: Jacket[] = [
  {
    brand: 'Patagonia',
    model: 'Better Sweater Fleece Jacket',
    fullName: 'Patagonia Better Sweater Fleece Jacket — Stonewash',
    closureLabel: 'Full-zip',
    closureValue: 'full_zip',
    fabric: '100% recycled polyester sweater-knit fleece, 9.5 oz',
    weight: '482 g (17 oz), men’s medium',
    colorTested: 'Stonewash',
    sizeTested: 'Men’s M',
    price: 159,
    priceLabel: '$159',
    asin: 'B0BJ5V1QRQ',
    pitch:
      'The one everybody owns, and the one that still makes sense. A full-length front zipper with a wind flap behind it, two zippered handwarmer pockets and a chest pocket that fits a phone. Because it opens all the way down, it is the version to buy if you layer it over a shirt during the workday and take it off six times before lunch.',
    bullets: [
      'Closure: full-length front zipper, zip garage at the chin',
      'Two zippered handwarmer pockets plus a zippered chest pocket',
      'Fair Trade Certified sewn; recycled polyester face',
      'Runs true to size with room for a merino base layer'
    ],
    inSchema: true
  },
  {
    brand: 'Patagonia',
    model: 'Better Sweater 1/4-Zip Fleece Pullover',
    fullName: 'Patagonia Better Sweater 1/4-Zip Fleece Pullover — Nickel',
    closureLabel: 'Quarter-zip pullover',
    closureValue: 'quarter_zip',
    fabric: '100% recycled polyester sweater-knit fleece, 9.5 oz',
    weight: '425 g (15 oz), men’s medium',
    colorTested: 'Nickel',
    sizeTested: 'Men’s M',
    price: 129,
    priceLabel: '$129',
    asin: 'B0BJ5W4KDS',
    pitch:
      'Same fabric, same fit, different garment. The quarter-zip pullover has no front opening below the sternum, one chest pocket, and no handwarmer pockets at all. It is warmer in wind and thirty dollars cheaper, and it is the wrong purchase if you wanted the jacket. These two show up on the same retail page constantly, so read the closure before you check out.',
    bullets: [
      'Closure: quarter-length zipper, pulls over the head',
      'One zippered chest pocket, no handwarmer pockets',
      'Roughly 55 g lighter than the full-zip jacket',
      'Stand-up collar sits higher than the full-zip version'
    ],
    inSchema: true
  },
  {
    brand: 'Arc’teryx',
    model: 'Delta LT Jacket',
    fullName: 'Arc’teryx Delta LT Jacket — Black Sapphire',
    closureLabel: 'Full-zip',
    closureValue: 'full_zip',
    fabric: 'Torrent 3820 hardface fleece, Polartec Classic 100 backing',
    weight: '365 g (12.9 oz), men’s medium',
    colorTested: 'Black Sapphire',
    sizeTested: 'Men’s M',
    price: 179,
    priceLabel: '$179',
    asin: 'B09XKQ7NPD',
    pitch:
      'The Delta LT is the trim technical midlayer that disappears under a shell, and it opens from hem to collar so you can dump heat on a climb without stopping. Arc’teryx names its fleece family Delta and then differentiates only by suffix, which is how people end up with the wrong closure.',
    bullets: [
      'Closure: full front zipper with a Cohaesive-adjusted hem',
      'Hardface treatment on the outer face resists abrasion under a pack',
      'Trim fit, drops straight from the shoulder, no hood',
      'Two hand pockets sit above a hipbelt'
    ],
    inSchema: true
  },
  {
    brand: 'Arc’teryx',
    model: 'Delta Half Zip',
    fullName: 'Arc’teryx Delta Half Zip — Forage',
    closureLabel: 'Half-zip pullover',
    closureValue: 'pullover',
    fabric: 'Torrent 3820 hardface fleece',
    weight: '340 g (12 oz), men’s medium',
    colorTested: 'Forage',
    sizeTested: 'Men’s M',
    price: 159,
    priceLabel: '$159',
    asin: null,
    pitch:
      'The pullover sibling of the Delta LT. No hand pockets, a half-length zipper that stops at the sternum, and a slightly cleaner line under a harness. We prefer it for ski touring and dislike it for anything involving a laptop bag and a train platform.',
    bullets: [
      'Closure: half-length zipper, pulls over the head',
      'No hand pockets at all',
      'About 25 g lighter than the Delta LT jacket',
      'Sold under its own item number despite the shared Delta name'
    ],
    inSchema: true
  },
  {
    brand: 'The North Face',
    model: 'Apex Bionic 3 Jacket',
    fullName: 'The North Face Apex Bionic 3 Jacket — TNF Black',
    closureLabel: 'Full-zip',
    closureValue: 'full_zip',
    fabric: 'Apex ClimateBlock woven softshell with fleece backer, DWR finish',
    weight: '703 g (24.8 oz), men’s medium',
    colorTested: 'TNF Black',
    sizeTested: 'Men’s L',
    price: 149,
    priceLabel: '$149',
    asin: 'B0C9K8X4T7',
    pitch:
      'This is the softshell in the group, not a fleece: a woven face that blocks essentially all wind, a brushed backer for warmth, and a full-length centre-front zipper with an internal storm flap. Heavy for what it is, and unbeatable for standing on a sideline in February.',
    bullets: [
      'Closure: full centre-front zipper, storm flap behind it',
      'ClimateBlock membrane, rated fully windproof by the manufacturer',
      'Adjustable hem cinch, elasticated cuff tabs',
      'Third generation of the Apex Bionic pattern; fit is boxier than the LT fleeces'
    ],
    inSchema: true
  },
  {
    brand: 'Columbia',
    model: 'Steens Mountain Full Zip 2.0 Fleece Jacket',
    fullName: 'Columbia Steens Mountain Full Zip 2.0 Fleece Jacket — Collegiate Navy',
    closureLabel: 'Full-zip',
    closureValue: 'full_zip',
    fabric: 'MTR filament fleece, 100% polyester',
    weight: '510 g (18 oz), men’s medium',
    colorTested: 'Collegiate Navy',
    sizeTested: 'Men’s XL',
    price: 44.99,
    priceLabel: '$44.99',
    asin: 'B00OW1WJK2',
    pitch:
      'Forty-five dollars, sold in about twenty colours, and warmer than its price suggests. The zipper is cheap and the fleece pills after a season, but as a car-and-campsite layer nothing beats it. We tested Collegiate Navy in XL; the colour and size are not the product, the Steens Mountain Full Zip 2.0 name is.',
    bullets: [
      'Closure: full-length zipper, chin guard, no wind flap',
      'Two zippered pockets, elastic cuffs and drawcord hem',
      'Machine washable and effectively disposable at this price',
      'Available in tall and big sizing under the same model name'
    ],
    inSchema: false
  }
];

const amazonUrl = (asin: string) => `https://www.amazon.com/dp/${asin}`;

const productNodes = JACKETS.filter((j) => j.inSchema).map((j) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: j.fullName,
  brand: { '@type': 'Brand', name: j.brand },
  model: j.model,
  color: j.colorTested,
  material: j.fabric,
  size: j.sizeTested,
  category: 'Clothing > Outdoor > Jackets',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'closure_type', value: j.closureValue },
    { '@type': 'PropertyValue', name: 'closure_description', value: j.closureLabel },
    { '@type': 'PropertyValue', name: 'weight', value: j.weight }
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    ...(j.price ? { price: j.price } : {}),
    availability: 'https://schema.org/InStock',
    ...(j.asin ? { url: amazonUrl(j.asin) } : {})
  }
}));

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: DATE_MODIFIED,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Full-zip or pullover — which should I buy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Buy full-zip if the jacket comes on and off during the day: the Patagonia Better Sweater Fleece Jacket, the Arc’teryx Delta LT Jacket and The North Face Apex Bionic 3 Jacket all open from hem to collar. Buy a pullover if it stays on under a shell for hours: the Patagonia Better Sweater 1/4-Zip Fleece Pullover and the Arc’teryx Delta Half Zip are warmer in wind and lighter, but neither has handwarmer pockets.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is the Better Sweater 1/4-Zip the same garment as the Better Sweater Jacket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. They share the 9.5 oz recycled sweater-knit fleece and the fit, but the 1/4-Zip Fleece Pullover has no front opening below the sternum and no handwarmer pockets, and it sells for $129 against $159 for the full-zip jacket. They are separate products with separate item numbers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is a softshell warmer than a fleece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'In wind, yes. The North Face Apex Bionic 3 Jacket has a woven windproof face and a fleece backer, so it beats an equivalent-weight fleece outdoors. Indoors it is too warm and far less breathable than the Arc’teryx Delta LT Jacket.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does colour or size change which product I am buying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. Collegiate Navy in XL and Black in medium are the same Columbia Steens Mountain Full Zip 2.0 Fleece Jacket. Colour and size are attributes of the listing, not different models. Closure type is the attribute that changes the product.'
      }
    }
  ]
};

const articleNode = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Zipper Question: Six Fleece and Softshell Jackets, One Decision',
  url: PAGE_URL,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  author: { '@type': 'Person', name: 'Hanne Voss' }
};

const jsonLd = [articleNode, faqPage, ...productNodes];

export default function JacketsPage() {
  return (
    <div className="blog-wrap blog-narrow">
      <nav className="blog-crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>Clothing</li>
          <li>Outdoor</li>
          <li aria-current="page">Fleece &amp; Softshell Jackets</li>
        </ol>
      </nav>

      <article>
        <header className="jk-head">
          <p className="blog-kicker">Field test · Cascades, winter 2026</p>
          <h1>The Zipper Question</h1>
          <div className="blog-meta" style={{ justifyContent: 'center' }}>
            <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
            <span>Words by Hanne Voss</span>
            <span>Photographs by Idris Nakamura</span>
          </div>
          <p className="blog-lede" style={{ margin: '0 auto' }}>
            Six fleece and softshell jackets, four months, one question that decides all of them:
            does the zipper go all the way down?
          </p>
        </header>

        <div className="jk-body">
          <div className="jk-cols">
            <p className="jk-dropcap">
              Nobody returns a fleece because it was the wrong colour. They return it because they
              wanted a jacket and a pullover arrived, or because they wanted the pullover and paid
              thirty dollars extra for two pockets they will never use. Closure type is the only
              specification on a midlayer that you cannot fix after purchase, and it is the one that
              retail listings bury under a photograph.
            </p>
            <p>
              So this review is organised around the zipper. Everything else — the fabric weights,
              the recycled content, the fit notes — sits in the callouts. Read those second.
            </p>
            <p>
              We wore each of these through a Pacific Northwest winter: commuting, two ski tours, a
              week of standing around a job site in Bend, and roughly forty school pickups in the
              rain. Two pairs among the six are near twins of each other, deliberately, because that pairing
              is where most buying mistakes happen.
            </p>
            <p>
              The Patagonia Better Sweater has existed in both closures for over a decade. The
              Arc’teryx Delta family does the same trick with more subtlety, because the suffix
              carries the whole meaning: LT is the jacket, Half Zip is the pullover, and the two
              photograph almost identically on a hanger.
            </p>
          </div>

          <blockquote className="jk-quote">
            A full-zip is a garment you take off. A pullover is a garment you commit to at seven in
            the morning.
            <footer>— Hanne Voss</footer>
          </blockquote>

          <h2>The full-zips</h2>

          <aside className="jk-callout" aria-labelledby="better-sweater-jacket">
            <span className="jk-closure">{JACKETS[0].closureLabel}</span>
            <h3 id="better-sweater-jacket">{JACKETS[0].brand} {JACKETS[0].model}</h3>
            <p className="muted">
              <span className="blog-price">{JACKETS[0].priceLabel}</span> · {JACKETS[0].fabric} ·
              tested in {JACKETS[0].colorTested}, size {JACKETS[0].sizeTested}
            </p>
            <p>{JACKETS[0].pitch}</p>
            <ul>
              {JACKETS[0].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary btn-sm"
              href={amazonUrl(JACKETS[0].asin as string)}
              rel="nofollow sponsored noopener"
            >
              Shop now on Amazon
            </a>
          </aside>

          <div className="jk-cols">
            <p>
              The Delta LT arrived with the least fanfare and got worn the most. It is 365 g, it
              vanishes under a shell, and — this is the part that catches people — it opens from the
              hem to the collar, which the product name does not tell you anywhere. Arc’teryx
              expects you to know that LT means the full-zip jacket in this family.
            </p>
            <p>
              The Apex Bionic 3 is a different animal, a woven softshell rather than a knit fleece.
              It is the only one of the six that we would wear in horizontal rain without a shell
              over the top, and the only one heavy enough that you notice it in a bag.
            </p>
          </div>

          <aside className="jk-callout" aria-labelledby="delta-lt">
            <span className="jk-closure">{JACKETS[2].closureLabel}</span>
            <h3 id="delta-lt">{JACKETS[2].brand} {JACKETS[2].model}</h3>
            <p className="muted">
              <span className="blog-price">{JACKETS[2].priceLabel}</span> · {JACKETS[2].fabric} ·
              tested in {JACKETS[2].colorTested}, size {JACKETS[2].sizeTested}
            </p>
            <p>{JACKETS[2].pitch}</p>
            <ul>
              {JACKETS[2].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary btn-sm"
              href={amazonUrl(JACKETS[2].asin as string)}
              rel="nofollow sponsored noopener"
            >
              View on Amazon
            </a>
          </aside>

          <aside className="jk-callout" aria-labelledby="apex-bionic">
            <span className="jk-closure">{JACKETS[4].closureLabel}</span>
            <h3 id="apex-bionic">{JACKETS[4].brand} {JACKETS[4].model}</h3>
            <p className="muted">
              <span className="blog-price">{JACKETS[4].priceLabel}</span> · {JACKETS[4].fabric} ·
              tested in {JACKETS[4].colorTested}, size {JACKETS[4].sizeTested}
            </p>
            <p>{JACKETS[4].pitch}</p>
            <ul>
              {JACKETS[4].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary btn-sm"
              href={amazonUrl(JACKETS[4].asin as string)}
              rel="nofollow sponsored noopener"
            >
              Buy on Amazon
            </a>
          </aside>

          <h2>The pullovers</h2>

          <div className="jk-cols">
            <p>
              Both pullovers here are cheaper, lighter and warmer in wind than their full-zip
              siblings, and both give up pockets to get there. If the garment lives under a shell or
              a harness, that is a good trade. If it lives on the back of an office chair, it is not.
            </p>
            <p>
              One note on the Delta Half Zip: we could not find a stable listing for the Forage
              colourway at the time of writing, so there is no link on that callout. Search the
              closure in the title rather than the family name.
            </p>
          </div>

          <aside className="jk-callout" aria-labelledby="better-sweater-quarter">
            <span className="jk-closure">{JACKETS[1].closureLabel}</span>
            <h3 id="better-sweater-quarter">{JACKETS[1].brand} {JACKETS[1].model}</h3>
            <p className="muted">
              <span className="blog-price">{JACKETS[1].priceLabel}</span> · {JACKETS[1].fabric} ·
              tested in {JACKETS[1].colorTested}, size {JACKETS[1].sizeTested}
            </p>
            <p>{JACKETS[1].pitch}</p>
            <ul>
              {JACKETS[1].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary btn-sm"
              href={amazonUrl(JACKETS[1].asin as string)}
              rel="nofollow sponsored noopener"
            >
              Buy the pullover on Amazon
            </a>
          </aside>

          <aside className="jk-callout" aria-labelledby="delta-half-zip">
            <span className="jk-closure">{JACKETS[3].closureLabel}</span>
            <h3 id="delta-half-zip">{JACKETS[3].brand} {JACKETS[3].model}</h3>
            <p className="muted">
              <span className="blog-price">{JACKETS[3].priceLabel}</span> · {JACKETS[3].fabric} ·
              tested in {JACKETS[3].colorTested}, size {JACKETS[3].sizeTested}
            </p>
            <p>{JACKETS[3].pitch}</p>
            <ul>
              {JACKETS[3].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="muted">No stable retail listing at the time of writing.</p>
          </aside>

          <h2>The cheap one, and the one we cannot name</h2>

          <aside className="jk-callout" aria-labelledby="steens">
            <span className="jk-closure">{JACKETS[5].closureLabel}</span>
            <h3 id="steens">{JACKETS[5].brand} {JACKETS[5].model}</h3>
            <p className="muted">
              <span className="blog-price">{JACKETS[5].priceLabel}</span> · {JACKETS[5].fabric} ·
              tested in {JACKETS[5].colorTested}, size {JACKETS[5].sizeTested}
            </p>
            <p>{JACKETS[5].pitch}</p>
            <ul>
              {JACKETS[5].bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary btn-sm"
              href={amazonUrl(JACKETS[5].asin as string)}
              rel="nofollow sponsored noopener"
            >
              Shop now
            </a>
          </aside>

          <div className="jk-cols">
            <p>
              Finally, a jacket we cannot properly identify for you. Cotopaxi sent a grid-fleece
              pullover in a colourway they describe as an assortment, and the model name printed on
              the hangtag has already been retired for the 2026 line. It is a good piece — 220 g,
              half-zip, high collar — but we are not going to pretend we know what it will be called
              next season, and we are not linking to a listing that will point at something else in
              three months.
            </p>
            <p>
              If you are shopping this category on a phone in a store, the shortcut is simple: look
              at the bottom of the zipper, not the top.
            </p>
          </div>

          <h2>Frequently asked questions</h2>
          <div className="blog-faq">
            <details>
              <summary>Full-zip or pullover?</summary>
              <p>
                Full-zip if it comes on and off during the day — the Patagonia Better Sweater Fleece
                Jacket, the Arc’teryx Delta LT Jacket, The North Face Apex Bionic 3 Jacket and the
                Columbia Steens Mountain Full Zip 2.0 all open hem to collar. Pullover if it stays on
                for hours under a shell: the Patagonia Better Sweater 1/4-Zip Fleece Pullover and the
                Arc’teryx Delta Half Zip. The pullovers are lighter and warmer in wind; neither has
                handwarmer pockets.
              </p>
            </details>
            <details>
              <summary>Are the two Better Sweaters the same product in different colours?</summary>
              <p>
                No. Same fabric, different garment. The 1/4-Zip Fleece Pullover cannot be opened
                below the sternum and has one chest pocket; the Better Sweater Fleece Jacket has a
                full-length zipper and three pockets. $129 against $159.
              </p>
            </details>
            <details>
              <summary>Does the Arc’teryx Delta name tell me the closure?</summary>
              <p>
                Not on its own. Delta LT Jacket is the full-zip; Delta Half Zip is the pullover. If a
                listing says only Delta, check the photograph and the item number before ordering.
              </p>
            </details>
            <details>
              <summary>How should I size a midlayer?</summary>
              <p>
                True to size for all six, with one caveat: the Apex Bionic 3 is cut boxier, so if
                you are between sizes and wearing it over a hoodie, take the larger. We tested it in
                large and everything else in medium.
              </p>
            </details>
          </div>
        </div>
      </article>

      <aside className="blog-noise" aria-label="More from Word of Prompt">
        <div className="blog-noise-card">
          <h2>The Layering Letter</h2>
          <p>Field notes every other Thursday. Unsubscribe whenever.</p>
          <form className="blog-newsletter-form" action="/api/subscribe" method="post">
            <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
            <button className="btn btn-primary btn-sm" type="submit">
              Join
            </button>
          </form>
        </div>
        <div className="blog-noise-card">
          <h3>Related posts</h3>
          <ul>
            <li>
              <Link href="/blog/best-wireless-headphones-2026">Headphones for the commute</Link>
            </li>
            <li>
              <Link href="/blog/mixed-category-stress">Everything else in the test box</Link>
            </li>
            <li>
              <Link href="/blog">All field tests</Link>
            </li>
          </ul>
        </div>
        <div className="blog-noise-card">
          <h3>About the author</h3>
          <div className="blog-author">
            <span className="blog-author-avatar" aria-hidden>
              HV
            </span>
            <p>
              Hanne Voss has been reviewing outdoor clothing for nine years and owns eleven fleeces,
              which she considers a professional expense.
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
