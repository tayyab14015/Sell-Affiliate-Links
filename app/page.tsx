import Link from 'next/link';
import { laptops, categories } from './data/laptops';

export const runtime = 'edge';

export const metadata = {
  title: 'AISneer — Curated Laptop Deals for Work, Gaming, Study & Creators',
  description:
    'AISneer is a curated laptop store. Compare hand-picked ultrabooks, gaming laptops, business notebooks, MacBooks, and student laptops with real specs and direct deal links.',
  alternates: { canonical: 'https://aisneer.com/' }
};

const categoryMeta: Record<string, { blurb: string; icon: string }> = {
  Ultrabook: { blurb: 'Thin, light, all-day battery', icon: '✦' },
  Gaming: { blurb: 'High-refresh displays, RTX GPUs', icon: '◆' },
  Business: { blurb: 'Secure, serviceable, enterprise-ready', icon: '■' },
  Creator: { blurb: 'Color-accurate displays, pro GPUs', icon: '◈' },
  Student: { blurb: 'Affordable everyday workhorses', icon: '●' },
  '2-in-1': { blurb: 'Convertibles and touch-first designs', icon: '◉' },
  'Budget Gaming': { blurb: 'Great fps-per-dollar rigs', icon: '◆' },
  Chromebook: { blurb: 'Fast, simple, web-first', icon: '◇' },
  Workstation: { blurb: 'ISV-certified, pro-grade power', icon: '▲' }
};

export default function HomePage() {
  const featured = [
    laptops.find((l) => l.model.includes('MacBook Pro 14')),
    laptops.find((l) => l.model.includes('Legion Slim 5')),
    laptops.find((l) => l.model.includes('XPS 13')),
    laptops.find((l) => l.model.includes('Zephyrus G14'))
  ].filter((l): l is NonNullable<typeof l> => Boolean(l));

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Laptops on AISneer',
    itemListElement: featured.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://aisneer.com/laptops#${l.slug}`,
      name: `${l.company} ${l.model}`
    }))
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Independent laptop store · est. 2026</span>
            <h1 className="hero-title">
              Buy your next laptop with <span className="accent">confidence</span>.
            </h1>
            <p className="hero-sub">
              AISneer hand-picks the best laptops across every category — ultrabooks, gaming rigs,
              MacBooks, business ThinkPads, creator machines, and budget student picks — then links
              you straight to the current deal. No noise, no clickbait, just real specs and honest
              recommendations.
            </p>
            <div className="hero-cta">
              <Link href="/laptops" className="btn btn-primary">
                Shop all laptops →
              </Link>
              <Link href="#featured" className="btn btn-ghost">
                See featured picks
              </Link>
            </div>
            <ul className="hero-badges" aria-label="Trust highlights">
              <li><strong>{laptops.length}+</strong> models curated</li>
              <li><strong>9</strong> categories covered</li>
              <li><strong>100%</strong> spec-verified</li>
            </ul>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="hero-card hero-card-1">
              <img
                src={featured[0]?.image}
                alt=""
                loading="eager"
              />
              <div className="hero-card-body">
                <span className="badge">{featured[0]?.category}</span>
                <p>{featured[0]?.company} {featured[0]?.model}</p>
                <span className="price">{featured[0]?.priceFrom}</span>
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <img src={featured[1]?.image} alt="" loading="eager" />
              <div className="hero-card-body">
                <span className="badge">{featured[1]?.category}</span>
                <p>{featured[1]?.company} {featured[1]?.model}</p>
                <span className="price">{featured[1]?.priceFrom}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="value-strip">
        <div className="container value-strip-inner">
          <div><strong>Spec-verified</strong><span>Every laptop cross-checked against official product pages.</span></div>
          <div><strong>Always current</strong><span>Prices and availability reviewed regularly.</span></div>
          <div><strong>Direct deal links</strong><span>One click to the best retailer listing we can find.</span></div>
          <div><strong>No SEO filler</strong><span>Real recommendations, not keyword-stuffed reviews.</span></div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="container section">
        <div className="section-head">
          <h2 className="section-title">Shop by category</h2>
          <p className="section-sub">
            Every laptop we list fits one of these use cases. Pick the category closest to how
            you&apos;ll actually use the machine.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((cat) => {
            const meta = categoryMeta[cat] ?? { blurb: 'Curated picks', icon: '◆' };
            const count = laptops.filter((l) => l.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/laptops?category=${encodeURIComponent(cat)}`}
                className="category-card"
              >
                <span className="category-icon" aria-hidden>{meta.icon}</span>
                <span className="category-name">{cat}</span>
                <span className="category-blurb">{meta.blurb}</span>
                <span className="category-count">{count} laptop{count === 1 ? '' : 's'} →</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="container section">
        <div className="section-head">
          <h2 className="section-title">This week&apos;s featured picks</h2>
          <p className="section-sub">
            Four machines we&apos;d recommend right now — one MacBook, one gaming rig, one
            ultrabook, and one creator laptop.
          </p>
        </div>
        <div className="featured-grid">
          {featured.map((l) => (
            <article key={l.slug} className="product-card">
              <div className="product-media">
                <img src={l.image} alt={`${l.company} ${l.model}`} loading="lazy" />
                <span className="product-badge">{l.category}</span>
              </div>
              <div className="product-body">
                <div className="product-title">
                  <span className="product-brand">{l.company}</span>
                  <h3>{l.model}</h3>
                </div>
                <ul className="product-highlights">
                  {l.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="product-foot">
                  <div className="product-price">
                    <span className="price-label">From</span>
                    <span className="price">{l.priceFrom}</span>
                  </div>
                  <a
                    className="btn btn-primary btn-sm"
                    href={l.buyUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                  >
                    View deal
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="section-foot">
          <Link href="/laptops" className="btn btn-ghost">
            See all {laptops.length} laptops →
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container about-inner">
          <div className="about-copy">
            <span className="eyebrow">About AISneer</span>
            <h2 className="section-title">We help people buy the right laptop — not the loudest one.</h2>
            <p>
              AISneer started because shopping for a laptop online is genuinely painful. Every
              search returns a wall of identical-looking listings, affiliate review sites rank by SEO
              instead of quality, and the specs you actually need are buried under marketing.
            </p>
            <p>
              We&apos;re a small, independent team that does the boring work for you: we read the
              official product pages, verify the CPU / GPU / RAM / panel specs, and only list
              machines we&apos;d recommend to a friend. When you click a product, you go straight
              to a retailer where you can buy it today.
            </p>
            <p>
              We cover ultrabooks, gaming laptops, MacBooks, ThinkPads, EliteBooks, Surface devices,
              Chromebooks, and mobile workstations — with new picks added as they become worth
              recommending.
            </p>
            <div className="hero-cta">
              <Link href="/laptops" className="btn btn-primary">Start shopping</Link>
              <a href="mailto:hello@aisneer.com" className="btn btn-ghost">Contact us</a>
            </div>
          </div>
          <aside id="why-us" className="about-stats">
            <h3>Why shop with AISneer</h3>
            <ul>
              <li>
                <strong>Spec-accurate listings.</strong> We pull specs from manufacturer product
                pages, not aggregators.
              </li>
              <li>
                <strong>Honest scope.</strong> We tell you when a price band, panel, or GPU depends
                on the SKU — no &quot;up to&quot; bait.
              </li>
              <li>
                <strong>Direct-to-retailer links.</strong> You buy from the manufacturer or a major
                retailer, never from us.
              </li>
              <li>
                <strong>Independent curation.</strong> We only list laptops we&apos;d actually
                recommend. Our catalog stays small on purpose.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section id="buying-guide" className="container section">
        <div className="section-head">
          <h2 className="section-title">Quick buying guide</h2>
          <p className="section-sub">
            Not sure where to start? Match your primary use case to the right category below.
          </p>
        </div>
        <div className="guide-grid">
          <div className="guide-card">
            <h3>For work &amp; productivity</h3>
            <p>
              Prioritize a comfortable 14" WUXGA+ panel, 16GB+ RAM, Intel Core Ultra or Apple
              Silicon, and all-day battery. Look at the <Link href="/laptops?category=Ultrabook">Ultrabook</Link>,
              {' '}<Link href="/laptops?category=Business">Business</Link>, and Creator categories.
            </p>
          </div>
          <div className="guide-card">
            <h3>For gaming</h3>
            <p>
              RTX 4060 is the sweet spot; RTX 4070 if you want QHD+ high-refresh. 16GB DDR5 minimum,
              1TB NVMe strongly recommended. Browse our <Link href="/laptops?category=Gaming">Gaming</Link> and
              {' '}<Link href="/laptops?category=Budget%20Gaming">Budget Gaming</Link> picks.
            </p>
          </div>
          <div className="guide-card">
            <h3>For students</h3>
            <p>
              15.6" FHD IPS with Core i5 / Ryzen 5, 16GB RAM, 512GB SSD is the comfort zone under
              $800. See our <Link href="/laptops?category=Student">Student</Link> and
              {' '}<Link href="/laptops?category=Chromebook">Chromebook</Link> picks.
            </p>
          </div>
          <div className="guide-card">
            <h3>For creators &amp; pros</h3>
            <p>
              Color-accurate displays (OLED or mini-LED), 32GB+ RAM, and a discrete GPU or Apple
              M-series Pro/Max. See our <Link href="/laptops?category=Creator">Creator</Link> and
              {' '}<Link href="/laptops?category=Workstation">Workstation</Link> picks.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container section">
        <div className="section-head">
          <h2 className="section-title">Frequently asked questions</h2>
        </div>
        <div className="faq">
          <details>
            <summary>Do you actually sell laptops, or do you just link to other stores?</summary>
            <p>
              AISneer is a curation store. We hand-pick laptops we&apos;d recommend, then link you
              to the manufacturer (Apple, Dell, Lenovo, HP, ASUS, MSI, Microsoft, Samsung, Acer) or
              a major retailer where you complete the purchase. We may earn a commission, at no
              extra cost to you.
            </p>
          </details>
          <details>
            <summary>How do you choose which laptops to list?</summary>
            <p>
              We only list laptops that (a) have current, verifiable manufacturer spec pages, (b)
              compete strongly in their category on price/performance/build, and (c) we&apos;d
              recommend to a friend. When a newer generation replaces a model, we update or retire
              the listing.
            </p>
          </details>
          <details>
            <summary>Are the specs on your listings accurate?</summary>
            <p>
              Specs are pulled directly from manufacturer product pages. Because laptop models ship
              in many SKUs, we note where the CPU tier, panel, GPU TGP, or memory depends on the
              exact configuration — always double-check the specific part number before you buy.
            </p>
          </details>
          <details>
            <summary>Which laptop is best overall for beginners?</summary>
            <p>
              For mainstream ease of use, Apple&apos;s 14-inch MacBook Pro with M3 Pro combines
              long battery life with strong everyday performance — see Apple&apos;s published
              battery and tech specs for the configuration you choose.
            </p>
          </details>
          <details>
            <summary>What&apos;s the best budget laptop you list?</summary>
            <p>
              In our current catalog, the Acer Aspire 5 (A515 family) is typically the lowest-cost
              Windows option with a current Core i5 H-class CPU. Compare the exact model code and
              RAM type (DDR4 vs LPDDR5) on Acer&apos;s site.
            </p>
          </details>
          <details>
            <summary>Is HP EliteBook 840 G11 good for business use?</summary>
            <p>
              Yes. HP EliteBook 840 G11 is a solid business laptop with dependable performance,
              professional build quality, and enterprise-grade security features. Verify vPro and
              graphics branding on the specific SKU.
            </p>
          </details>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <div>
            <h2>Ready to find your next laptop?</h2>
            <p>
              {laptops.length} curated laptops across {categories.length} categories. One click to
              the best current deal.
            </p>
          </div>
          <Link href="/laptops" className="btn btn-primary btn-lg">
            Shop all laptops →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}
