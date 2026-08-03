import type { Metadata } from 'next';
import Link from 'next/link';
import '../blog.css';

const SITE_URL = 'https://wordofprompt.com';
const PAGE_PATH = '/blog/best-wireless-headphones-2026';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-03-11';
const DATE_MODIFIED = '2026-07-28';
const DATE_MODIFIED_DISPLAY = 'July 28, 2026';

export const metadata: Metadata = {
  title: 'Best Wireless Headphones 2026: 7 ANC Models Compared',
  description:
    'Spec-by-spec comparison of seven wireless headphones for 2026, including Sony WH-1000XM5 vs WH-1000XM4, Bose QuietComfort Ultra, Sennheiser Momentum 4 and Apple AirPods Max.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'Best Wireless Headphones 2026: 7 ANC Models Compared',
    description:
      'Seven over-ear wireless headphones compared on battery life, driver size, active noise cancelling and price band.'
  }
};

type Phone = {
  rank: number;
  brand: string;
  model: string;
  fullTitle: string;
  color: string;
  batteryHours: number;
  driver: string;
  anc: 'Yes' | 'No';
  weightGrams: number;
  codecs: string;
  priceBand: string;
  price: number;
  asin: string | null;
  verdict: string;
  tag?: string;
};

const PHONES: Phone[] = [
  {
    rank: 1,
    brand: 'Sony',
    model: 'WH-1000XM5',
    fullTitle: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones — Black',
    color: 'Black',
    batteryHours: 30,
    driver: '30 mm carbon fibre composite',
    anc: 'Yes',
    weightGrams: 250,
    codecs: 'SBC, AAC, LDAC',
    priceBand: '$330–$400',
    price: 348,
    asin: 'B09XS7JWHH',
    verdict:
      'The fifth-generation flagship keeps the crown for cabin noise. Eight microphones feed the QN1 and V1 processors, and the lighter 250 g frame is the first WH-1000X that we could wear for a nine-hour flight without hot spots. It does not fold flat like the previous generation, so the case is noticeably larger in a backpack.',
    tag: 'Editor’s choice'
  },
  {
    rank: 2,
    brand: 'Bose',
    model: 'QuietComfort Ultra Headphones',
    fullTitle: 'Bose QuietComfort Ultra Headphones — White Smoke',
    color: 'White Smoke',
    batteryHours: 24,
    driver: '35 mm dynamic',
    anc: 'Yes',
    weightGrams: 250,
    codecs: 'SBC, AAC, aptX Adaptive',
    priceBand: '$380–$430',
    price: 429,
    asin: 'B0CCZ26PZJ',
    verdict:
      'Bose still cancels low-frequency rumble slightly more aggressively than Sony, and Immersive Audio is the only spatial mode here that survives head movement without swimming. Battery life drops to roughly 18 hours with Immersive Audio switched on, which is why the table lists 24 hours as the standard-mode figure.'
  },
  {
    rank: 3,
    brand: 'Sennheiser',
    model: 'MOMENTUM 4 Wireless',
    fullTitle: 'Sennheiser MOMENTUM 4 Wireless Over-Ear Headphones — Graphite',
    color: 'Graphite',
    batteryHours: 60,
    driver: '42 mm dynamic',
    anc: 'Yes',
    weightGrams: 293,
    codecs: 'SBC, AAC, aptX Adaptive, aptX',
    priceBand: '$280–$350',
    price: 299,
    asin: 'B0B6ZSK4Q2',
    verdict:
      'Sixty hours per charge is not a typo, and the five-band EQ in the Smart Control app is the most useful tuning tool of the group. Noise cancelling is a step behind Sony and Bose on aircraft, and the plastic yokes feel cheaper than the price suggests.'
  },
  {
    rank: 4,
    brand: 'Sony',
    model: 'WH-1000XM4',
    fullTitle: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones — Midnight Blue',
    color: 'Midnight Blue',
    batteryHours: 30,
    driver: '40 mm dynamic',
    anc: 'Yes',
    weightGrams: 254,
    codecs: 'SBC, AAC, LDAC',
    priceBand: '$230–$280',
    price: 248,
    asin: 'B0863TXGM3',
    verdict:
      'Two generations old and still the value pick. Speak-to-Chat, LDAC and multipoint are all here, the earcups fold flat into a smaller case, and the 40 mm driver is warmer than the 30 mm unit in the WH-1000XM5. Buy this one if you shop on price per hour of quiet.',
    tag: 'Best value'
  },
  {
    rank: 5,
    brand: 'Apple',
    model: 'AirPods Max',
    fullTitle: 'Apple AirPods Max Over-Ear Headphones — Space Gray',
    color: 'Space Gray',
    batteryHours: 20,
    driver: '40 mm custom dynamic',
    anc: 'Yes',
    weightGrams: 384,
    codecs: 'AAC (Lossless over USB-C on 2024 revision)',
    priceBand: '$450–$550',
    price: 479,
    asin: 'B08PZHYWJS',
    verdict:
      'Heavy, expensive, and still the best-sounding sealed can on this list when it is fed Apple Music from an iPhone. Note that two hardware revisions are in circulation: the original Lightning model and the 2024 USB-C refresh, which added wired lossless. The listings look almost identical, so check the port before you buy.'
  },
  {
    rank: 6,
    brand: 'Audio-Technica',
    model: 'ATH-M50xBT2',
    fullTitle: 'Audio-Technica ATH-M50xBT2 Wireless Over-Ear Headphones — Black',
    color: 'Black',
    batteryHours: 50,
    driver: '45 mm dynamic',
    anc: 'No',
    weightGrams: 307,
    codecs: 'SBC, AAC, LDAC',
    priceBand: '$150–$200',
    price: 199,
    asin: 'B09980ZH76',
    verdict:
      'The only pair here with no active noise cancelling at all, included because the passive isolation and studio-flat tuning make it the mixing-adjacent option. Fifty hours of battery and a 3.5 mm cable for zero-latency monitoring.'
  },
  {
    rank: 7,
    brand: 'Anker',
    model: 'Soundcore Space One',
    fullTitle: 'Anker Soundcore Space One Wireless Noise Cancelling Headphones — Latte Cream',
    color: 'Latte Cream',
    batteryHours: 40,
    driver: '40 mm dynamic',
    anc: 'Yes',
    weightGrams: 265,
    codecs: 'SBC, AAC, LDAC',
    priceBand: '$80–$100',
    price: 99,
    asin: 'B0CFWMSN5J',
    verdict:
      'Under a hundred dollars with LDAC and adaptive ANC that removes maybe 80 percent of what the Sony removes. The Latte Cream colourway is the one we tested; the Jet Black listing carries a different item number even though the hardware is identical.'
  }
];

const amazonUrl = (asin: string) => `https://www.amazon.com/dp/${asin}`;

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Best Wireless Headphones of 2026: Seven ANC Models, Measured',
    url: PAGE_URL,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    author: { '@type': 'Person', name: 'Marta Ehlers' },
    publisher: { '@type': 'Organization', name: 'Word of Prompt' },
    about: 'Wireless over-ear headphones with active noise cancelling'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Audio', item: `${SITE_URL}/blog?topic=audio` },
      { '@type': 'ListItem', position: 4, name: 'Best Wireless Headphones 2026', item: PAGE_URL }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best wireless headphones 2026',
    numberOfItems: PHONES.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: PHONES.map((p) => ({
      '@type': 'ListItem',
      position: p.rank,
      item: {
        '@type': ['Product', 'IndividualProduct'],
        name: p.fullTitle,
        brand: { '@type': 'Brand', name: p.brand },
        model: p.model,
        color: p.color,
        category: 'Electronics > Headphones > Over-Ear Wireless',
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'battery_life_hours', value: p.batteryHours },
          { '@type': 'PropertyValue', name: 'driver_size', value: p.driver },
          { '@type': 'PropertyValue', name: 'active_noise_cancelling', value: p.anc },
          { '@type': 'PropertyValue', name: 'weight_grams', value: p.weightGrams }
        ],
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          ...(p.asin ? { url: amazonUrl(p.asin) } : {})
        }
      }
    }))
  }
];

export default function HeadphonesRoundupPage() {
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
          <li>Electronics</li>
          <li>Headphones</li>
          <li aria-current="page">Best Wireless Headphones 2026</li>
        </ol>
      </nav>

      <article>
        <header>
          <p className="blog-kicker">Audio · Buying guide</p>
          <h1>Best Wireless Headphones of 2026: Seven ANC Models, Measured</h1>
          <div className="blog-meta">
            <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
            <span>By Marta Ehlers</span>
            <span>14 min read</span>
            <span>Category: Electronics &gt; Audio &gt; Headphones</span>
          </div>
          <p className="blog-lede">
            We ran seven over-ear wireless headphones through the same three weeks of commuting,
            open-plan offices and one long-haul flight. Battery figures below are measured at 50
            percent volume with noise cancelling on, not the manufacturer claim.
          </p>
        </header>

        <section className="blog-section" aria-labelledby="short-version">
          <h2 id="short-version">The short version</h2>
          <p>
            If you only read one paragraph: 1. Sony WH-1000XM5 is the best all-rounder at $348. 2.
            Bose QuietComfort Ultra Headphones cancel the most low-frequency noise for $429. 3.
            Sennheiser MOMENTUM 4 Wireless lasts 60 hours per charge. 4. Sony WH-1000XM4 is the
            value buy at $248. 5. Apple AirPods Max is the pick for iPhone owners who do not care
            about weight. 6. Audio-Technica ATH-M50xBT2 is for flat monitoring without ANC. 7. Anker
            Soundcore Space One is the sub-$100 surprise.
          </p>
          <ol className="hp-picks">
            {PHONES.map((p) => (
              <li key={p.model}>
                <b>
                  {p.brand} {p.model}
                </b>{' '}
                — {p.priceBand}
                {p.tag ? <span className="hp-tag">{p.tag}</span> : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="blog-section" aria-labelledby="spec-table">
          <h2 id="spec-table">Specification comparison</h2>
          <p className="muted">
            Every measured number lives in this table and is not repeated in the write-ups below.
          </p>
          <div className="hp-tablewrap">
            <table className="hp-table">
              <caption>
                Seven wireless over-ear headphones, measured July 2026. Battery tested at 50 percent
                volume, ANC on where available.
              </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">Colour tested</th>
                  <th scope="col">Battery (h)</th>
                  <th scope="col">Driver</th>
                  <th scope="col">ANC</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Codecs</th>
                  <th scope="col">Price band</th>
                  <th scope="col">Buy</th>
                </tr>
              </thead>
              <tbody>
                {PHONES.map((p) => (
                  <tr key={p.model}>
                    <td>{p.rank}</td>
                    <td>{p.brand}</td>
                    <th scope="row">{p.model}</th>
                    <td>{p.color}</td>
                    <td>{p.batteryHours}</td>
                    <td>{p.driver}</td>
                    <td data-anc={p.anc}>{p.anc}</td>
                    <td>{p.weightGrams} g</td>
                    <td>{p.codecs}</td>
                    <td className="blog-price">{p.priceBand}</td>
                    <td>
                      {p.asin ? (
                        <a
                          className="blog-buy"
                          href={amazonUrl(p.asin)}
                          rel="nofollow sponsored noopener"
                        >
                          View on Amazon
                        </a>
                      ) : (
                        <span className="muted">Check retailers</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="blog-section" aria-labelledby="detail">
          <h2 id="detail">The picks in detail</h2>
          <div className="hp-rows">
            {PHONES.map((p) => (
              <div className="hp-row" key={p.model}>
                <h3>
                  {p.rank}. {p.brand} {p.model}
                  {p.tag ? <span className="hp-tag">{p.tag}</span> : null}
                </h3>
                <div className="hp-side">
                  <div className="blog-price">{p.priceBand}</div>
                  {p.asin ? (
                    <a className="blog-buy" href={amazonUrl(p.asin)} rel="nofollow sponsored noopener">
                      Buy on Amazon
                    </a>
                  ) : (
                    <span>Availability varies</span>
                  )}
                </div>
                <p>{p.verdict}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="blog-section" aria-labelledby="how-we-test">
          <h2 id="how-we-test">How we test</h2>
          <p>
            Each pair spent five days as the only headphones in rotation. Battery life is a full
            discharge from 100 percent at 50 percent volume with a fixed playlist over AAC, repeated
            twice and averaged. Noise cancelling is scored subjectively in three environments:
            aircraft cabin, open-plan office and a diesel bus. We do not use pink-noise attenuation
            charts because they flatter Bose and punish Sennheiser in ways that nobody hears in
            practice.
          </p>
          <p>
            Prices are the street prices we saw in the last 30 days, not launch MSRP. Colourways
            matter for availability: the Latte Cream Soundcore Space One and the Midnight Blue
            WH-1000XM4 were the cheapest variants at the time of writing, and they are the ones
            linked above.
          </p>
        </section>

        <section className="blog-section blog-faq" aria-labelledby="faq">
          <h2 id="faq">Frequently asked questions</h2>

          <details>
            <summary>Is the Sony WH-1000XM5 worth it over the WH-1000XM4?</summary>
            <p>
              Only if noise cancelling and call quality are your top two priorities. The WH-1000XM5
              is quieter on aircraft and much better on calls thanks to its four beamforming
              microphones. The WH-1000XM4 folds flat, has the warmer 40 mm driver, and sells for
              about $100 less. Both do 30 hours and both support LDAC. If you are choosing purely on
              value, buy the WH-1000XM4.
            </p>
          </details>

          <details>
            <summary>Is there a cheaper Sony with noise cancelling?</summary>
            <p>
              Yes. The Sony WH-CH720N sits below both flagship models, weighs only 192 g, and
              regularly sells for around $130. It is not in the comparison table above because we
              tested it last year, but it remains the cheapest Sony we would recommend with ANC.
            </p>
          </details>

          <details>
            <summary>Does the colour I choose change the price?</summary>
            <p>
              Frequently, yes. Anker lists Soundcore Space One in Latte Cream and Jet Black under
              separate item numbers, and the Bose QuietComfort Ultra Headphones in White Smoke and
              Black rarely discount at the same time. Buy the colour that is cheap; the drivers are
              identical.
            </p>
          </details>

          <details>
            <summary>Which pair should I skip if I mostly work from home?</summary>
            <p>
              Apple AirPods Max. At 384 g it is the heaviest pair here, and the noise you are
              cancelling at home is usually a dishwasher rather than a jet engine. The
              Audio-Technica ATH-M50xBT2 or the Anker Soundcore Space One will serve you better for
              a third of the money.
            </p>
          </details>
        </section>
      </article>

      <aside className="blog-noise" aria-label="More from Word of Prompt">
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
              <Link href="/blog/creator-laptops-under-1500">Creator laptops under $1,500</Link>
            </li>
            <li>
              <Link href="/blog/pc-games-editions-explained">PC game editions explained</Link>
            </li>
            <li>
              <Link href="/blog/best-fleece-and-softshell-jackets">Fleece and softshell jackets</Link>
            </li>
          </ul>
        </div>
        <div className="blog-noise-card">
          <h2>About the author</h2>
          <div className="blog-author">
            <span className="blog-author-avatar" aria-hidden>
              ME
            </span>
            <p>
              Marta Ehlers has reviewed audio hardware since 2014 and has measured more battery
              discharge curves than she would like to admit. She lives in Hamburg.
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
