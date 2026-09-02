import type { Metadata } from 'next';
import Link from 'next/link';
import { amazonSearchUrl } from '../amazon';
import '../blog.css';

const SITE_URL = 'https://www.aisneer.com';
const PAGE_PATH = '/blog/pc-games-editions-explained';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DATE_PUBLISHED = '2026-04-08';
const DATE_MODIFIED = '2026-07-15';
const DATE_MODIFIED_DISPLAY = 'July 15, 2026';

export const metadata: Metadata = {
  title: 'PC and Console Game Editions Explained: Digital vs Disc',
  description:
    'Standard, Deluxe, Ultimate — and the part that actually matters, whether you are buying a download code or a disc. Five games broken down edition by edition.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'PC and Console Game Editions Explained: Digital vs Disc',
    description:
      'An edition matrix for five games, with the delivery format spelled out for every listing.'
  }
};

type Sku = {
  label: string;
  platform: string;
  edition: 'Standard' | 'Deluxe' | 'Ultimate' | 'Expansion';
  distribution: 'digital' | 'physical_disc' | 'physical_cartridge';
  distributionLabel: string;
  price: string;
  amazonQuery: string | null;
  note: string;
};

type Game = {
  title: string;
  publisher: string;
  developer: string;
  released: string;
  blurb: string;
  skus: Sku[];
};

const GAMES: Game[] = [
  {
    title: 'Cyberpunk 2077: Ultimate Edition',
    publisher: 'CD Projekt Red',
    developer: 'CD Projekt Red',
    released: 'December 2023',
    blurb:
      'Base game plus the Phantom Liberty expansion in one package. This is the title where the digital-versus-disc distinction bites hardest, because the two listings carry the same name, the same cover art and a price difference of about fifteen dollars.',
    skus: [
      {
        label: 'Cyberpunk 2077: Ultimate Edition — PC',
        platform: 'PC (Windows)',
        edition: 'Ultimate',
        distribution: 'digital',
        distributionLabel: 'Online game code, no disc shipped',
        price: '$54.99',
        amazonQuery: 'Cyberpunk 2077 Ultimate Edition PC Steam code',
        note:
          'Delivered as a Steam activation key by email. Nothing arrives in the post. There is no PC disc release of the Ultimate Edition at all.'
      },
      {
        label: 'Cyberpunk 2077: Ultimate Edition — PlayStation 5',
        platform: 'PlayStation 5',
        edition: 'Ultimate',
        distribution: 'physical_disc',
        distributionLabel: 'Blu-ray disc in a case',
        price: '$49.99',
        amazonQuery: 'Cyberpunk 2077 Ultimate Edition PlayStation 5',
        note:
          'A physical Blu-ray disc. Requires the PS5 model with an optical drive; the Digital Edition console cannot read it. Roughly 70 GB installs from the disc, then patches over the network.'
      }
    ]
  },
  {
    title: 'Baldur’s Gate 3',
    publisher: 'Larian Studios',
    developer: 'Larian Studios',
    released: 'August 2023',
    blurb:
      'The Deluxe Edition is a physical object with a soundtrack CD, a map and a dice set. The Standard Edition on PC is not an object at all. Same game, entirely different purchase.',
    skus: [
      {
        label: 'Baldur’s Gate 3: Deluxe Edition — PlayStation 5',
        platform: 'PlayStation 5',
        edition: 'Deluxe',
        distribution: 'physical_disc',
        distributionLabel: 'Blu-ray disc plus physical extras',
        price: '$69.99',
        amazonQuery: 'Baldurs Gate 3 Deluxe Edition PlayStation 5',
        note:
          'Two discs, a cloth map, an art booklet, a dice set and a soundtrack CD. The extras are the reason this edition exists; the game data is identical to the standard release.'
      },
      {
        label: 'Baldur’s Gate 3: Standard Edition — PC',
        platform: 'PC (Windows, macOS)',
        edition: 'Standard',
        distribution: 'digital',
        distributionLabel: 'Digital download only',
        price: '$59.99',
        amazonQuery: 'Baldurs Gate 3 PC digital code',
        note:
          'Sold as a download through Steam and GOG. We have deliberately left the item number off this entry: Larian does not sell a PC disc, and any listing you find that claims to ship one is a key in a box.'
      }
    ]
  },
  {
    title: 'Elden Ring Shadow of the Erdtree',
    publisher: 'Bandai Namco Entertainment',
    developer: 'FromSoftware',
    released: 'June 2024',
    blurb:
      'An expansion that requires the base game, sold both as a standalone download and inside a physical bundle with the base game on disc. The names differ by four words and the products differ completely.',
    skus: [
      {
        label: 'Elden Ring Shadow of the Erdtree — Expansion',
        platform: 'PC (Windows)',
        edition: 'Expansion',
        distribution: 'digital',
        distributionLabel: 'Downloadable content code',
        price: '$39.99',
        amazonQuery: 'Elden Ring Shadow of the Erdtree PC DLC code',
        note:
          'Requires Elden Ring to already be installed and licensed. This is a DLC code and cannot be played on its own.'
      },
      {
        label: 'Elden Ring Shadow of the Erdtree Edition — PlayStation 5',
        platform: 'PlayStation 5',
        edition: 'Deluxe',
        distribution: 'physical_disc',
        distributionLabel: 'Blu-ray disc, base game plus expansion',
        price: '$79.99',
        amazonQuery: 'Elden Ring Shadow of the Erdtree Edition PlayStation 5',
        note:
          'The bundle: base game on disc with the expansion included. If you already own Elden Ring, this is the wrong purchase and you want the standalone expansion above.'
      }
    ]
  },
  {
    title: 'Hogwarts Legacy',
    publisher: 'Warner Bros. Games',
    developer: 'Avalanche Software',
    released: 'February 2023',
    blurb:
      'The clearest Standard-versus-Deluxe split of the group, and a useful reminder that the edition tier and the delivery format are two independent choices.',
    skus: [
      {
        label: 'Hogwarts Legacy: Standard Edition — Xbox Series X',
        platform: 'Xbox Series X|S',
        edition: 'Standard',
        distribution: 'physical_disc',
        distributionLabel: 'Blu-ray disc in a case',
        price: '$39.99',
        amazonQuery: 'Hogwarts Legacy Standard Edition Xbox Series X',
        note:
          'A disc. Plays on Xbox Series X and on Xbox One with the older build; the Series S has no drive and cannot use it.'
      },
      {
        label: 'Hogwarts Legacy: Digital Deluxe Edition — Xbox',
        platform: 'Xbox Series X|S, Xbox One',
        edition: 'Deluxe',
        distribution: 'digital',
        distributionLabel: 'Online game code',
        price: '$69.99',
        amazonQuery: 'Hogwarts Legacy Digital Deluxe Edition Xbox code',
        note:
          'Adds the Dark Arts Pack, Thestral mount and 72-hour early access, and exists only as a code. There is no disc version of the Deluxe Edition on any platform.'
      }
    ]
  },
  {
    title: 'The Legend of Zelda: Echoes of Wisdom',
    publisher: 'Nintendo',
    developer: 'Grezzo',
    released: 'September 2024',
    blurb:
      'Included as the awkward case. Nintendo ships physical media that is not a disc, so a catalogue with only two delivery categories has nowhere to put it.',
    skus: [
      {
        label: 'The Legend of Zelda: Echoes of Wisdom — Nintendo Switch',
        platform: 'Nintendo Switch',
        edition: 'Standard',
        distribution: 'physical_cartridge',
        distributionLabel: 'Game card (cartridge), not a disc',
        price: '$59.99',
        amazonQuery: 'The Legend of Zelda Echoes of Wisdom Nintendo Switch',
        note:
          'Physical, but a solid-state game card. It is not a disc and it is not a download, and the Switch has no optical drive of any kind.'
      }
    ]
  }
];

const badgeClass = (d: Sku['distribution']) =>
  d === 'digital' ? 'gm-badge gm-badge-digital' : 'gm-badge gm-badge-disc';

const FAQ_ITEMS = [
  {
    question: 'What is the difference between a game edition and a delivery format?',
    answer:
      'Edition names — Standard, Deluxe, Ultimate, Complete — describe bundled content. Delivery format is whether a disc, a Nintendo game card, or an email activation code arrives. Those two choices are independent: Hogwarts Legacy sells a Digital Deluxe with no disc anywhere, and Baldur’s Gate 3 sells a Deluxe that exists only as a box.'
  },
  {
    question: 'Can a PS5 Digital Edition or Xbox Series S play a disc copy?',
    answer:
      'No. Neither console has an optical drive, so the Cyberpunk 2077: Ultimate Edition Blu-ray and the Hogwarts Legacy Standard Edition disc are both dead ends on those machines. You need a digital code, or a console with a drive.'
  },
  {
    question: 'Does buying a PC Ultimate or Deluxe edition mean a disc ships?',
    answer:
      'Almost never. Baldur’s Gate 3 on PC and Cyberpunk 2077: Ultimate Edition on PC are both downloads regardless of how the listing is photographed. There is no PC disc release of Cyberpunk 2077 Ultimate Edition. A listing that claims to ship a PC disc is usually a key in a box.'
  },
  {
    question: 'Is Elden Ring Shadow of the Erdtree a full game or DLC?',
    answer:
      'The $39.99 PC download is DLC and requires Elden Ring already installed and licensed. The $79.99 PlayStation 5 Shadow of the Erdtree Edition disc is the bundle: base game plus expansion. If you already own Elden Ring, the disc bundle is the wrong purchase.'
  },
  {
    question: 'Is a Nintendo Switch game card a disc?',
    answer:
      'No. The Legend of Zelda: Echoes of Wisdom ships as a solid-state game card. It is physical and resellable, but it is not a disc, and the Switch has no optical drive of any kind.'
  }
] as const;

// Intentionally partial schema: only three of the nine listings appear here, one of
// them without an offer at all. The rest exist in HTML only.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Game Editions Explained: Standard, Deluxe, and the Disc You Might Not Get',
    url: PAGE_URL,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    author: { '@type': 'Person', name: 'Tobias Kern' }
  },
  {
    '@context': 'https://schema.org',
    '@type': ['VideoGame', 'Product'],
    name: 'Cyberpunk 2077: Ultimate Edition — PlayStation 5',
    gamePlatform: 'PlayStation 5',
    publisher: { '@type': 'Organization', name: 'CD Projekt Red' },
    brand: { '@type': 'Brand', name: 'CD Projekt Red' },
    category: 'Video Games > PlayStation 5 > Games',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'distribution', value: 'physical_disc' },
      { '@type': 'PropertyValue', name: 'edition', value: 'Ultimate' }
    ],
    offers: {
      '@type': 'Offer',
      url: amazonSearchUrl('Cyberpunk 2077 Ultimate Edition PlayStation 5'),
      price: 49.99,
      priceCurrency: 'USD'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': ['VideoGame', 'Product'],
    name: 'Cyberpunk 2077: Ultimate Edition — PC',
    gamePlatform: 'PC',
    publisher: { '@type': 'Organization', name: 'CD Projekt Red' },
    brand: { '@type': 'Brand', name: 'CD Projekt Red' },
    category: 'Video Games > PC > Digital Games',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'distribution', value: 'digital' },
      { '@type': 'PropertyValue', name: 'edition', value: 'Ultimate' }
    ],
    offers: {
      '@type': 'Offer',
      url: amazonSearchUrl('Cyberpunk 2077 Ultimate Edition PC Steam code'),
      price: 54.99,
      priceCurrency: 'USD'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Hogwarts Legacy: Digital Deluxe Edition',
    gamePlatform: ['Xbox Series X|S', 'Xbox One'],
    publisher: { '@type': 'Organization', name: 'Warner Bros. Games' },
    additionalProperty: [{ '@type': 'PropertyValue', name: 'edition', value: 'Deluxe' }]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: DATE_MODIFIED,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  }
];

export default function GameEditionsPage() {
  return (
    <div className="blog-wrap">
      <div className="gm-page">
        <nav className="blog-crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>Video Games</li>
            <li aria-current="page">Editions &amp; Formats</li>
          </ol>
        </nav>

        <article>
          <header>
            <p className="blog-kicker" style={{ color: '#7dd3fc' }}>
              Video games · Buying advice
            </p>
            <h1>Game Editions Explained: Standard, Deluxe, and the Disc You Might Not Get</h1>
            <div className="blog-meta">
              <span className="blog-updated">Last updated: {DATE_MODIFIED_DISPLAY}</span>
              <span>By Tobias Kern</span>
              <span>9 min read</span>
            </div>
            <p className="blog-lede">
              Edition names tell you what content you get. They tell you nothing about whether a box
              arrives at your door. Here is the same question asked of five games, nine listings and
              three delivery formats.
            </p>
          </header>

          <section aria-labelledby="formats">
            <h2 id="formats">Three delivery formats, scroll sideways</h2>
            <p>
              <strong>
                Edition names tell you what content you get. They tell you nothing about whether a
                disc, a cartridge, or an email code arrives.
              </strong>{' '}
              Check the delivery format separately from the edition tier.
            </p>
            <div className="gm-scroller">
              <div className="gm-tile">
                <h3>Digital code</h3>
                <p>
                  An activation key by email for Steam, Xbox or PlayStation Store. Nothing ships. Not
                  resellable, not lendable, never out of stock.
                </p>
              </div>
              <div className="gm-tile">
                <h3>Physical disc</h3>
                <p>
                  A Blu-ray in a case. Needs a console with an optical drive, which rules out the PS5
                  Digital Edition and the Xbox Series S entirely.
                </p>
              </div>
              <div className="gm-tile">
                <h3>Game card</h3>
                <p>
                  Nintendo Switch cartridges. Physical, resellable, and not a disc — which breaks most
                  two-way format filters.
                </p>
              </div>
              <div className="gm-tile">
                <h3>Code in a box</h3>
                <p>
                  The worst of both. A retail box containing a slip of paper with a key on it. Common
                  for PC releases that look like they ship media.
                </p>
              </div>
              <div className="gm-tile">
                <h3>Edition tier</h3>
                <p>
                  Standard, Deluxe, Ultimate and Complete describe bundled content, and vary
                  independently of the delivery format.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="matrix">
            <h2 id="matrix">The edition matrix, game by game</h2>
            <p className="blog-lede" style={{ fontSize: '16px' }}>
              Every entry below is a separate purchasable listing. Where two entries share a title,
              the badge is the only thing distinguishing them.
            </p>

            <div className="gm-acc">
              {GAMES.map((game) => (
                <details key={game.title} open={game.title.startsWith('Cyberpunk')}>
                  <summary>
                    {game.title}
                    <span className="gm-editionline">
                      {`${game.publisher} · ${game.released} · ${game.skus.length} listing${
                        game.skus.length > 1 ? 's' : ''
                      }`}
                    </span>
                  </summary>

                  <p>{game.blurb}</p>

                  <ol className="gm-matrix">
                    {game.skus.map((sku) => (
                      <li key={sku.label}>
                        <b>{sku.label}</b>{' '}
                        <span className={badgeClass(sku.distribution)}>
                          {sku.distribution === 'digital' ? 'Digital' : 'Physical'}
                        </span>
                        <span className="gm-editionline">
                          {sku.platform} ·{' '}
                          {sku.edition === 'Expansion' ? 'Expansion' : `${sku.edition} Edition`} ·{' '}
                          {sku.distributionLabel} · <span className="blog-price">{sku.price}</span>
                          {sku.amazonQuery ? ' · Amazon search link available' : ' · no retail item number listed'}
                        </span>
                        <p>{sku.note}</p>
                        {sku.amazonQuery ? (
                          <a
                            className="gm-btn"
                            href={amazonSearchUrl(sku.amazonQuery)}
                            rel="nofollow sponsored noopener"
                          >
                            {sku.distribution === 'digital'
                              ? 'Buy the code on Amazon'
                              : sku.distribution === 'physical_cartridge'
                                ? 'Buy the cartridge on Amazon'
                                : 'Buy the disc on Amazon'}
                          </a>
                        ) : (
                          <p className="muted" style={{ fontSize: '13px' }}>
                            Search for the title on your storefront of choice; there is no physical
                            listing to link.
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>

                  <p style={{ fontSize: '13px' }}>
                    Developer: {game.developer}. Publisher: {game.publisher}.
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="rules">
            <h2 id="rules">Four rules that survive every storefront</h2>
            <ol className="gm-matrix">
              <li>
                <b>Check the console before the edition.</b> A PS5 Digital Edition or an Xbox Series S
                cannot use any disc, so the Cyberpunk 2077: Ultimate Edition Blu-ray and the Hogwarts
                Legacy Standard Edition disc are both dead ends on those machines.
              </li>
              <li>
                <b>PC almost never means media.</b> Baldur’s Gate 3 on PC and Cyberpunk 2077: Ultimate
                Edition on PC are both downloads regardless of how the listing is photographed.
              </li>
              <li>
                <b>Expansions are not editions.</b> Elden Ring Shadow of the Erdtree as a $39.99
                download needs the base game; the $79.99 PlayStation 5 disc includes it.
              </li>
              <li>
                <b>Deluxe is content, not format.</b> Hogwarts Legacy sells a Digital Deluxe with no
                disc anywhere, and Baldur’s Gate 3 sells a Deluxe that exists only as a box.
              </li>
            </ol>
          </section>

          <section className="blog-faq" aria-labelledby="faq">
            <h2 id="faq">Frequently asked questions</h2>
            {FAQ_ITEMS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>
        </article>

        <aside className="blog-noise" aria-label="More from AISneer">
          <div className="blog-noise-card">
            <h2>Weekly deals digest</h2>
            <p>Price drops on discs and codes, once a week.</p>
            <form className="blog-newsletter-form" action="/api/subscribe" method="post">
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                aria-label="Email address"
              />
              <button className="btn btn-primary btn-sm" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="blog-noise-card">
            <h3>Related posts</h3>
            <ul>
              <li>
                <Link href="/blog/creator-laptops-under-1500">Laptops that can actually game</Link>
              </li>
              <li>
                <Link href="/blog/best-wireless-headphones-2026">Headsets and headphones</Link>
              </li>
              <li>
                <Link href="/blog/mixed-category-stress">The leftover gear post</Link>
              </li>
            </ul>
          </div>
          <div className="blog-noise-card">
            <h3>About the author</h3>
            <div className="blog-author">
              <span className="blog-author-avatar" aria-hidden>
                TK
              </span>
              <p>
                Tobias Kern has bought the wrong edition of enough games to write this article from
                memory.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
