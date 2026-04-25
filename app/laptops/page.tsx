export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = {
  title: 'Shop Laptops — AISneer',
  description:
    'AISneer curated laptop catalog with visible laptop products, prices, specifications, and Amazon purchase links.',
  alternates: { canonical: 'https://www.aisneer.com/laptops' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' }
};

type LaptopProduct = {
  category: string;
  name: string;
  description: string;
  price: string;
  specs: string[];
  searchQuery: string;
  buyLabel: string;
};

const laptops: LaptopProduct[] = [
  {
    category: 'Ultrabook',
    name: 'Dell XPS 13 9340',
    description:
      'Dell premium ultrabook with Intel Core Ultra performance and compact 13.4 inch design.',
    price: 'From $1,199',
    specs: [
      'Intel Core Ultra 7 155H',
      '16GB LPDDR5x RAM',
      '512GB NVMe SSD',
      '13.4 inch FHD+ display'
    ],
    searchQuery: 'Dell+XPS+13+9340',
    buyLabel: 'Buy Dell XPS 13 9340 on Amazon'
  },
  {
    category: 'Gaming',
    name: 'Lenovo Legion Slim 5 Gen 9 16 inch',
    description:
      'Gaming laptop with Ryzen 7 performance, RTX graphics, and a large high-refresh display.',
    price: 'From $1,499',
    specs: [
      'AMD Ryzen 7 8845HS',
      'NVIDIA GeForce RTX 4070',
      '32GB DDR5 RAM',
      '1TB NVMe SSD'
    ],
    searchQuery: 'Lenovo+Legion+Slim+5+Gen+9+16',
    buyLabel: 'Buy Lenovo Legion Slim 5 on Amazon'
  },
  {
    category: 'Business',
    name: 'HP EliteBook 840 14 inch G11',
    description:
      'Business-class laptop designed for professional work, security, and manageability.',
    price: 'From $1,399',
    specs: [
      'Intel Core Ultra 5 125U',
      '16GB DDR5 RAM',
      '512GB SSD',
      '14 inch WUXGA display'
    ],
    searchQuery: 'HP+EliteBook+840+14+inch+G11',
    buyLabel: 'Buy HP EliteBook 840 G11 on Amazon'
  },
  {
    category: 'Creator',
    name: 'Apple MacBook Pro 14-inch M3 Pro',
    description:
      'Creator-focused MacBook with Apple Silicon performance and Liquid Retina XDR display.',
    price: 'From $1,999',
    specs: [
      'Apple M3 Pro chip',
      '18GB unified memory',
      '512GB SSD',
      '14.2 inch Liquid Retina XDR display'
    ],
    searchQuery: 'Apple+MacBook+Pro+14+M3+Pro',
    buyLabel: 'Buy MacBook Pro 14 M3 Pro on Amazon'
  },
  {
    category: 'Student',
    name: 'Acer Aspire 5 A515 Series',
    description:
      'Affordable everyday Windows laptop suitable for students, browsing, office work, and study.',
    price: 'From $499',
    specs: [
      'Intel Core i5-13420H',
      '16GB RAM',
      '512GB NVMe SSD',
      '15.6 inch FHD display'
    ],
    searchQuery: 'Acer+Aspire+5+A515',
    buyLabel: 'Buy Acer Aspire 5 on Amazon'
  },
  {
    category: '2-in-1',
    name: 'Microsoft Surface Laptop Studio 2',
    description:
      'Flexible Surface laptop for creators, drawing, productivity, and premium Windows workflows.',
    price: 'From $2,099',
    specs: [
      'Intel Core i7-13700H',
      'NVIDIA RTX 4060',
      '32GB LPDDR5x RAM',
      '14.4 inch PixelSense Flow touch display'
    ],
    searchQuery: 'Microsoft+Surface+Laptop+Studio+2',
    buyLabel: 'Buy Surface Laptop Studio 2 on Amazon'
  },
  {
    category: 'Gaming',
    name: 'ASUS ROG Zephyrus G14 2024 GA403',
    description:
      'Compact gaming and creator laptop with Ryzen 9 performance and RTX 4070 graphics.',
    price: 'From $2,199',
    specs: [
      'AMD Ryzen 9 8945HS',
      'NVIDIA RTX 4070',
      '32GB LPDDR5X RAM',
      '14 inch 3K OLED 120Hz display'
    ],
    searchQuery: 'ASUS+ROG+Zephyrus+G14+2024+GA403',
    buyLabel: 'Buy ASUS ROG Zephyrus G14 on Amazon'
  },
  {
    category: 'Business',
    name: 'Lenovo ThinkPad X1 Carbon Gen 12 14 inch',
    description:
      'Premium business ultrabook with lightweight design, strong keyboard, and enterprise features.',
    price: 'From $1,699',
    specs: [
      'Intel Core Ultra 7 165U',
      '32GB LPDDR5x RAM',
      '1TB PCIe SSD',
      '14 inch 2.8K OLED display'
    ],
    searchQuery: 'Lenovo+ThinkPad+X1+Carbon+Gen+12',
    buyLabel: 'Buy ThinkPad X1 Carbon Gen 12 on Amazon'
  },
  {
    category: 'Budget Gaming',
    name: 'MSI Katana 15 B13VFK',
    description:
      'Budget gaming laptop with Intel Core i7 processor and RTX 4060 graphics.',
    price: 'From $999',
    specs: [
      'Intel Core i7-13620H',
      'NVIDIA RTX 4060',
      '16GB DDR5 RAM',
      '15.6 inch FHD 144Hz display'
    ],
    searchQuery: 'MSI+Katana+15+B13VFK',
    buyLabel: 'Buy MSI Katana 15 on Amazon'
  },
  {
    category: 'Chromebook',
    name: 'Samsung Galaxy Chromebook Plus 15.6 inch',
    description:
      'Large-screen Chromebook for browser-based productivity, study, and lightweight work.',
    price: 'From $775',
    specs: [
      'Intel Core 3 processor',
      '8GB RAM',
      '256GB storage',
      '15.6 inch AMOLED FHD display'
    ],
    searchQuery: 'Samsung+Galaxy+Chromebook+Plus+15.6',
    buyLabel: 'Buy Galaxy Chromebook Plus on Amazon'
  },
  {
    category: 'Workstation',
    name: 'Dell Precision 5680',
    description:
      'Mobile workstation for professional creative, engineering, and high-performance workflows.',
    price: 'From $2,899',
    specs: [
      'Intel Core i9-13900H',
      'Up to 64GB LPDDR5 RAM',
      'Up to 2TB NVMe SSD',
      'NVIDIA RTX 5000 Ada graphics'
    ],
    searchQuery: 'Dell+Precision+5680',
    buyLabel: 'Buy Dell Precision 5680 on Amazon'
  }
];

const AFFILIATE_TAG = 'llmaffiliat0f-20';

const buildAmazonUrl = (query: string) =>
  `https://www.amazon.com/s?k=${query}&tag=${AFFILIATE_TAG}`;

const parsePriceToNumber = (price: string) => {
  const match = price.match(/[\d,]+/);
  if (!match) return '0';
  return match[0].replace(/,/g, '');
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AISneer Laptop Catalog',
  numberOfItems: laptops.length,
  itemListElement: laptops.map((l, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: l.name,
      brand: { '@type': 'Brand', name: l.name.split(' ')[0] },
      category: l.category,
      offers: {
        '@type': 'Offer',
        price: parsePriceToNumber(l.price),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: buildAmazonUrl(l.searchQuery)
      }
    }
  }))
};

const pageStyles = `
  .aisneer-laptops {
    font-family: Arial, sans-serif;
    background: #f7f7f7;
    color: #222;
    line-height: 1.5;
  }
  .aisneer-laptops .page-header {
    background: #111827;
    color: #fff;
    padding: 28px 20px;
  }
  .aisneer-laptops .page-main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 20px;
  }
  .aisneer-laptops h1 {
    margin: 0 0 8px;
    font-size: 32px;
  }
  .aisneer-laptops .intro {
    max-width: 800px;
    color: #e5e7eb;
  }
  .aisneer-laptops .live-version {
    background: #ecfdf5;
    border: 1px solid #10b981;
    color: #065f46;
    padding: 10px 14px;
    border-radius: 6px;
    margin: 20px 0;
    font-size: 14px;
  }
  .aisneer-laptops .summary {
    background: #fff;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
  .aisneer-laptops .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
  }
  .aisneer-laptops .product {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 18px;
  }
  .aisneer-laptops .product h2 {
    margin: 0 0 8px;
    font-size: 20px;
    color: #111827;
  }
  .aisneer-laptops .category {
    display: inline-block;
    background: #eef2ff;
    color: #3730a3;
    font-size: 13px;
    padding: 3px 8px;
    border-radius: 999px;
    margin-bottom: 10px;
  }
  .aisneer-laptops .price {
    font-weight: bold;
    color: #b45309;
    margin: 8px 0;
  }
  .aisneer-laptops .specs {
    padding-left: 18px;
    margin: 10px 0;
  }
  .aisneer-laptops .buy-link {
    display: inline-block;
    background: #f59e0b;
    color: #111;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 14px;
    border-radius: 6px;
    margin-top: 10px;
  }
  .aisneer-laptops .buy-link:hover {
    background: #d97706;
  }
  .aisneer-laptops .page-footer {
    margin-top: 32px;
    padding: 20px;
    background: #fff;
    border-top: 1px solid #ddd;
    color: #555;
    font-size: 14px;
  }
`;

export default function LaptopsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <div className="aisneer-laptops">
        <header className="page-header">
          <h1>Shop all laptops</h1>
          <p className="intro">
            AISneer is an independent laptop catalog. We curate laptops across ultrabook,
            gaming, business, creator, student, Chromebook, 2-in-1, and workstation categories.
            Every product below includes visible specifications and an Amazon purchase link.
          </p>
        </header>

        <main className="page-main">
          <p id="live-version" className="live-version">
            Live catalog version: AISNEER-LAPTOPS-20260424-AMAZON-001
          </p>

          <section className="summary">
            <strong>Catalog summary:</strong> {laptops.length} laptops, spec-verified, updated regularly.
            Purchases are completed on Amazon. Product prices and availability may change on Amazon.
          </section>

          <section className="products" aria-label="Laptop product listings">
            {laptops.map((laptop) => (
              <article key={laptop.name} className="product">
                <span className="category">{laptop.category}</span>
                <h2>{laptop.name}</h2>
                <p>{laptop.description}</p>
                <p className="price">{laptop.price}</p>
                <ul className="specs">
                  {laptop.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <a
                  className="buy-link"
                  href={buildAmazonUrl(laptop.searchQuery)}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                >
                  {laptop.buyLabel}
                </a>
              </article>
            ))}
          </section>
        </main>

        <footer className="page-footer">
          <p>
            Disclosure: AISneer may earn a commission from qualifying purchases made through product links.
            Prices and availability are checked on Amazon at the time of purchase.
          </p>
        </footer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}
