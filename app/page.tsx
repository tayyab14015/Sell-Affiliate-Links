import type { Metadata } from 'next';

export const runtime = 'edge';

const SITE_NAME = 'dilóo';
const PRODUCT_NAME =
  'MASTER FUSION 360 MIT KI 2026: CAD, CAM, CNC, 3D-Druck- und Produktdesign Workflows (German Edition)';

const BOOK_TITLE =
  'Master Fusion 360 Mit KI 2026: CAD, CAM, CNC, 3D-Druck- und Produktdesign Workflows';

const SHORT_TITLE = 'Master Fusion 360 Mit KI 2026';
const AUTHOR_NAME = 'Stephen Dave';
const ISBN_13 = '9798181845473';
const PAGE_COUNT = 464;
const DATE_PUBLISHED = '2026-06-16';
const DATE_PUBLISHED_DISPLAY = 'June 16, 2026';

const SITE_URL = 'https://www.diloo.com';
const PAGE_URL = `${SITE_URL}/`;
const AMAZON_BUY_URL =
  'https://www.amazon.com/MASTER-FUSION-360-2026-Produktdesign/dp/B0H5NRKGYS/ref=sr_1_1?crid=2R05H0SML0TW5&dib=eyJ2IjoiMSJ9.97JdYBlKrHpCYuBHSoB0-4Mhs8p0TdGmk-rzBj06FW-bX0_zRVUxSei4TQ5BHBuY.Lf2GjMXZ8E6EKNjJyHPuy1FsAoB62NrrK1CjeGN1wUo&dib_tag=se&keywords=ki+cad&qid=1d4794657&sprefix=ki+cad%2Caps%2C362&sr=8-1';
const BOOK_IMAGE_PATH = '/images/books/master-fusion-360-mit-ki-2026.png';
const BOOK_IMAGE_URL = `${SITE_URL}${BOOK_IMAGE_PATH}`;
const PRICE_USD = 20.0;
const PRICE_DISPLAY = '$20.00';
const PRICE_CURRENCY = 'USD';
const PRICE_VALID_UNTIL = '2027-12-31';

const META_TITLE = 'Master Fusion 360 Mit KI 2026 | German Fusion 360 + AI Book';
const META_DESCRIPTION =
  'Master Fusion 360 Mit KI 2026 is a German-language book by Stephen Dave covering AI-assisted Fusion 360 workflows, CAD, CAM, CNC, 3D printing and product design.';

const LEARN_TOPICS = [
  'Fusion 360 CAD modeling workflows',
  'AI-assisted design and modeling workflows',
  'Product design and concept development',
  'Moving from CAD models into CAM workflows',
  'CNC preparation and manufacturing workflows',
  'Preparing models for 3D printing',
  'Design refinement and optimization',
  'Reducing repetitive modeling and workflow steps',
  'Connecting design decisions with manufacturing requirements',
  'Practical workflows for freelancers, engineers and product developers'
] as const;

const FAQ_ITEMS = [
  {
    question: `What is ${SHORT_TITLE}?`,
    answer: `${SHORT_TITLE} is a German-language book by ${AUTHOR_NAME} about using Fusion 360 alongside AI-assisted workflows for CAD, CAM, CNC, 3D printing and product design.`
  },
  {
    question: `Is ${SHORT_TITLE} written in German?`,
    answer:
      'Yes. The book is the German Edition and is written for German-speaking readers working with Fusion 360 and AI-assisted design and manufacturing workflows.'
  },
  {
    question: `Who is ${SHORT_TITLE} for?`,
    answer:
      'The book is aimed at designers, mechanical engineers, product developers, freelancers and other Fusion 360 users who want to incorporate AI-assisted workflows into CAD and manufacturing-related projects.'
  },
  {
    question: 'Does the book cover Fusion 360 CAD?',
    answer: 'Yes. CAD modeling and 3D design workflows are central topics of the book.'
  },
  {
    question: 'Does the book cover CAM and CNC?',
    answer:
      'Yes. The book covers workflows connecting Fusion 360 CAD work with CAM and CNC-oriented manufacturing processes.'
  },
  {
    question: 'Does the book cover 3D printing?',
    answer:
      'Yes. 3D printing is one of the major topics covered alongside CAD, CAM, CNC and product design.'
  },
  {
    question: 'Does the book cover AI?',
    answer:
      'Yes. The book focuses specifically on AI-assisted workflows used alongside Fusion 360 for planning, modeling, design refinement and related tasks.'
  },
  {
    question: 'Who is the author?',
    answer: `The author is ${AUTHOR_NAME}.`
  },
  {
    question: 'How many pages does the book have?',
    answer: `The paperback has ${PAGE_COUNT} pages.`
  },
  {
    question: 'What is the ISBN?',
    answer: `The ISBN-13 is ${ISBN_13}.`
  },
  {
    question: `Where can I buy ${SHORT_TITLE}?`,
    answer: `${SITE_NAME} provides information about the book and directs readers to the current Amazon retailer listing, where the German Edition paperback can be purchased. Price and availability are set by the retailer.`
  }
] as const;

export const metadata: Metadata = {
  title: {
    absolute: META_TITLE
  },
  description: META_DESCRIPTION,
  keywords: [
    'Master Fusion 360 Mit KI 2026',
    'German Fusion 360 book',
    'Fusion 360 AI book',
    'Fusion 360 CAD CAM CNC',
    'Fusion 360 3D printing',
    'Stephen Dave',
    'German Edition',
    'dilóo'
  ],
  alternates: {
    canonical: PAGE_URL
  },
  openGraph: {
    type: 'book',
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: META_TITLE,
    description: META_DESCRIPTION,
    locale: 'en_US',
    authors: [AUTHOR_NAME],
    isbn: ISBN_13,
    releaseDate: DATE_PUBLISHED,
    images: [
      {
        url: BOOK_IMAGE_URL,
        width: 800,
        height: 1200,
        alt: `${SHORT_TITLE} German Edition by ${AUTHOR_NAME} book cover`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [BOOK_IMAGE_URL]
  }
};

const productOfferJsonLd = {
  '@type': 'Offer',
  url: AMAZON_BUY_URL,
  price: PRICE_USD.toFixed(2),
  priceCurrency: PRICE_CURRENCY,
  priceValidUntil: PRICE_VALID_UNTIL,
  availability: 'https://schema.org/InStock',
  itemCondition: 'https://schema.org/NewCondition',
  seller: {
    '@type': 'Organization',
    name: 'Amazon'
  },
  shippingDetails: {
    '@type': 'OfferShippingDetails',
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: '0',
      currency: PRICE_CURRENCY
    },
    shippingDestination: {
      '@type': 'DefinedRegion',
      addressCountry: 'US'
    },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 0,
        maxValue: 2,
        unitCode: 'DAY'
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 7,
        unitCode: 'DAY'
      }
    }
  },
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'US',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 30,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
    merchantReturnLink:
      'https://www.amazon.com/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKWX7'
  }
};

const bookJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Book', 'Product'],
  '@id': `${PAGE_URL}#book`,
  name: PRODUCT_NAME,
  alternateName: [SHORT_TITLE, BOOK_TITLE],
  image: [BOOK_IMAGE_URL],
  author: {
    '@type': 'Person',
    name: AUTHOR_NAME
  },
  brand: {
    '@type': 'Brand',
    name: AUTHOR_NAME
  },
  inLanguage: 'de',
  bookFormat: 'https://schema.org/Paperback',
  numberOfPages: PAGE_COUNT,
  isbn: ISBN_13,
  gtin13: ISBN_13,
  datePublished: DATE_PUBLISHED,
  publisher: {
    '@type': 'Organization',
    name: 'Amazon Digital Services LLC - Kdp'
  },
  description: META_DESCRIPTION,
  genre: [
    'CAD',
    'Computer-Aided Design',
    'CAM',
    'CNC',
    '3D Printing',
    'Product Design',
    'Artificial Intelligence'
  ],
  about: [
    { '@type': 'Thing', name: 'Autodesk Fusion 360' },
    { '@type': 'Thing', name: 'Artificial Intelligence' },
    { '@type': 'Thing', name: 'CAD' },
    { '@type': 'Thing', name: 'CAM' },
    { '@type': 'Thing', name: 'CNC' },
    { '@type': 'Thing', name: '3D Printing' },
    { '@type': 'Thing', name: 'Product Design' }
  ],
  url: PAGE_URL,
  sameAs: [AMAZON_BUY_URL],
  offers: productOfferJsonLd
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: META_TITLE,
  description: META_DESCRIPTION,
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL
  },
  about: { '@id': `${PAGE_URL}#book` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: BOOK_IMAGE_URL
  },
  mainEntity: { '@id': `${PAGE_URL}#book` }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: SITE_NAME,
      item: PAGE_URL
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: SHORT_TITLE,
      item: PAGE_URL
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <article className="container section book-product">
        <header className="book-product-header">
          <div className="book-product-hero">
            <img
              className="book-cover"
              src={BOOK_IMAGE_PATH}
              alt={`${SHORT_TITLE} German Edition by ${AUTHOR_NAME} book cover`}
              width={800}
              height={1200}
            />
            <div className="book-product-hero-copy">
              <p className="eyebrow">German Fusion 360 + AI · Paperback · {PAGE_COUNT} pages</p>
              <h1 className="book-product-title">{PRODUCT_NAME}</h1>
              <p className="book-product-lead">
                A German-language Fusion 360 and AI book by {AUTHOR_NAME} covering CAD modeling,
                CAM, CNC manufacturing, 3D printing, and product-design workflows.
              </p>
              <p className="book-product-lead">
                For German-speaking freelancers speeding up CAD-to-CNC workflows with AI —{' '}
                <strong>{SHORT_TITLE}</strong> connects Autodesk Fusion 360 with AI-assisted
                methods across design and manufacturing.
              </p>
              <div className="product-foot book-product-price-row">
                <div className="product-price">
                  <span className="price-label">Listed price</span>
                  <span className="price">{PRICE_DISPLAY}</span>
                </div>
                <a
                  className="btn btn-primary"
                  href={AMAZON_BUY_URL}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                >
                  Check current availability and price on Amazon →
                </a>
              </div>
              <p className="muted book-price-note">
                Retailer price on Amazon may vary. Shipping and returns follow Amazon&apos;s
                policies.
              </p>
            </div>
          </div>
        </header>

        <section className="book-product-block" aria-labelledby="about-book">
          <h2 id="about-book">About the Book</h2>
          <p>
            <strong>{SHORT_TITLE}</strong> is a German-language practical guide by{' '}
            <strong>{AUTHOR_NAME}</strong> for readers who want to combine Autodesk Fusion 360 with
            modern AI-assisted workflows.
          </p>
          <p>
            The book connects CAD modeling and product design with manufacturing-oriented workflows
            including CAM, CNC and 3D printing. It is intended for designers, engineers, product
            developers, freelancers and other technical users who want to move from design concepts
            toward manufacturing-ready results.
          </p>
          <p>
            Rather than focusing only on individual Fusion 360 tools, the book emphasizes practical
            workflows for planning, modeling, refining designs and preparing projects for
            manufacturing or 3D printing. That entity relationship — book, author, language, Fusion
            360, AI, CAD, CAM, CNC, 3D printing and product design — is the core of what this
            German Edition paperback teaches.
          </p>
          <p>
            Published in {DATE_PUBLISHED_DISPLAY} as a {PAGE_COUNT}-page paperback (ISBN-13{' '}
            {ISBN_13}), {SHORT_TITLE} sits in the 2026 landscape of German Fusion 360 resources for
            people who need clearer CAD-to-production habits, not only isolated software tips.
          </p>
        </section>

        <section className="book-product-block" aria-labelledby="what-you-learn">
          <h2 id="what-you-learn">What You Will Learn</h2>
          <p>
            Concrete topics covered by this German Fusion 360 + AI book include the skills and
            workflow transitions most readers look for when searching for CAD, CAM, CNC and 3D
            printing guidance:
          </p>
          <ul className="bullet-list book-benefits">
            {LEARN_TOPICS.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>

        <section className="book-product-block" aria-labelledby="fusion-ai">
          <h2 id="fusion-ai">Fusion 360 + AI Workflows</h2>
          <p>
            The book explores how AI can support Fusion 360 workflows across planning, modeling,
            design refinement and product development. The focus is not simply on using AI as a
            general-purpose assistant, but on applying AI-assisted methods alongside CAD and
            manufacturing workflows.
          </p>
          <p>
            Readers looking for a German Fusion 360 AI book will find the emphasis on pairing
            Autodesk Fusion 360 with AI inside real project steps — so design intent, modeling
            choices and manufacturing prep stay connected rather than treated as separate hobbies.
          </p>
        </section>

        <section className="book-product-block" aria-labelledby="cad-cam-cnc">
          <h2 id="cad-cam-cnc">CAD, CAM, CNC and 3D Printing</h2>
          <p>
            {SHORT_TITLE} treats CAD → CAM → CNC / 3D-print as a continuous pipeline. CAD modeling
            builds the geometry; CAM turns design intent into toolpaths and manufacturing plans;
            CNC and 3D printing are the production endpoints where models must be clean, complete
            and shop-ready.
          </p>
          <p>
            That chain matters for freelancers and product developers who cannot afford endless
            manual iterations between a pretty Fusion 360 model and a part that actually machines
            or prints. The book&apos;s German Edition framing keeps those manufacturing concepts
            accessible for German-speaking technical readers.
          </p>
        </section>

        <section className="book-product-block" aria-labelledby="who-for">
          <h2 id="who-for">Who This Book Is For</h2>
          <p>
            {SHORT_TITLE} is written for German-speaking readers who already use Fusion 360 — or are
            ready to — and want AI-assisted help moving from concept to production.
          </p>
          <ul className="book-audience-list">
            <li>
              <strong>Fusion 360 users</strong> — people who want to improve their CAD workflow and
              incorporate AI-assisted methods.
            </li>
            <li>
              <strong>Mechanical engineers and designers</strong> — readers working with product
              development, CAD modeling and manufacturing-oriented design.
            </li>
            <li>
              <strong>CNC and manufacturing users</strong> — readers interested in connecting CAD
              designs with CAM and CNC workflows.
            </li>
            <li>
              <strong>3D-printing enthusiasts</strong> — people who want to move from Fusion 360
              models toward practical 3D-print preparation.
            </li>
            <li>
              <strong>Freelancers and product developers</strong> — professionals looking to reduce
              repetitive work and improve the transition from concept to production.
            </li>
          </ul>
        </section>

        <section className="book-product-block" aria-labelledby="book-details">
          <h2 id="book-details">Book Details</h2>
          <p>
            These bibliographic identifiers match the book&apos;s external footprint (title, author,
            ISBN, page count and publication date):
          </p>
          <table className="book-details-table">
            <tbody>
              <tr>
                <th scope="row">Title</th>
                <td>{SHORT_TITLE}</td>
              </tr>
              <tr>
                <th scope="row">Full title</th>
                <td>{BOOK_TITLE}</td>
              </tr>
              <tr>
                <th scope="row">Author</th>
                <td>{AUTHOR_NAME}</td>
              </tr>
              <tr>
                <th scope="row">Language</th>
                <td>German</td>
              </tr>
              <tr>
                <th scope="row">Edition</th>
                <td>German Edition</td>
              </tr>
              <tr>
                <th scope="row">Format</th>
                <td>Paperback</td>
              </tr>
              <tr>
                <th scope="row">Pages</th>
                <td>{PAGE_COUNT}</td>
              </tr>
              <tr>
                <th scope="row">Publication date</th>
                <td>{DATE_PUBLISHED_DISPLAY}</td>
              </tr>
              <tr>
                <th scope="row">ISBN-13</th>
                <td>{ISBN_13}</td>
              </tr>
              <tr>
                <th scope="row">Topics</th>
                <td>Fusion 360, AI, CAD, CAM, CNC, 3D printing, product design</td>
              </tr>
              <tr>
                <th scope="row">Listed price</th>
                <td>
                  {PRICE_DISPLAY} {PRICE_CURRENCY} (confirm live Amazon price)
                </td>
              </tr>
              <tr>
                <th scope="row">Price and availability</th>
                <td>See the current retailer listing on Amazon</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="book-product-block" aria-labelledby="about-author">
          <h2 id="about-author">About the Author</h2>
          <h3 className="book-author-name">About {AUTHOR_NAME}</h3>
          <p>
            <strong>{AUTHOR_NAME}</strong> is the author of <em>{SHORT_TITLE}</em>, a practical
            guide focused on Fusion 360, AI-assisted workflows, CAD, CAM, CNC, 3D printing and
            product design.
          </p>
          <p>
            His technical books focus on practical workflows that help readers apply modern software
            and AI-assisted techniques to specialized creative, engineering and production tasks.
          </p>
        </section>

        <section className="book-product-cta" aria-labelledby="where-to-buy">
          <h2 id="where-to-buy">Where to Buy the Book</h2>
          <p>
            {SITE_NAME} does not sell or ship the book directly. We provide information about{' '}
            <em>{SHORT_TITLE}</em> and link you to the current retailer listing, where you can check
            the latest price, availability and shipping options.
          </p>
          <p>
            Buy the German Edition paperback on Amazon when you are ready to compare the live offer.
            Our listed reference price is {PRICE_DISPLAY} {PRICE_CURRENCY}; Amazon may show a
            different current price.
          </p>
          <div className="product-foot book-product-price-row">
            <div className="product-price">
              <span className="price-label">Listed price</span>
              <span className="price">{PRICE_DISPLAY}</span>
            </div>
            <a
              className="btn btn-primary btn-lg"
              href={AMAZON_BUY_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              Check current availability and price → Amazon
            </a>
          </div>
          <p className="book-product-extractor" aria-label="Exact product name for extractors">
            PRODUCT_NAME: {PRODUCT_NAME}
          </p>
        </section>

        <section className="book-product-block" aria-labelledby="faq">
          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="faq">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
