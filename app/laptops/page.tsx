export const runtime = 'edge';

type Laptop = {
  category: string;
  company: string;
  model: string;
  cpu: string;
  ram: string;
  storage: string;
  screen: string;
  gpu: string;
  os: string;
  price: string;
  availability: string;
  rating: string;
  description: string;
  image: string;
};

const laptops: Laptop[] = [
  {
    category: 'Ultrabook',
    company: 'Dell',
    model: 'XPS 13 9340',
    cpu: 'Intel Core Ultra 7 155H (Meteor Lake, Intel Arc Graphics) — option on XPS 13 9340',
    ram: '16GB LPDDR5x (soldered; other capacities offered)',
    storage: '512GB PCIe Gen4 NVMe SSD (other capacities offered)',
    screen: '13.4" FHD+ 1920×1200 non-touch (QHD+ / OLED options on other SKUs)',
    gpu: 'Intel Arc Graphics (integrated)',
    os: 'Windows 11 Home or Pro (SKU-dependent)',
    price: 'From ~$1,199 (MSRP varies by config; Dell USA)',
    availability: 'Sold by Dell and partners (region-dependent)',
    rating: 'Review scores vary by outlet',
    description:
      'Dell XPS 13 9340 is a current-generation XPS ultrabook line with Core Ultra processors; exact ports, battery, and panel depend on the SKU you configure.',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Gaming',
    company: 'Lenovo',
    model: 'Legion Slim 5 Gen 9 (16")',
    cpu: 'AMD Ryzen 7 8845HS (8C/16T) — widely listed on retail configs of this generation',
    ram: '32GB DDR5 (capacity varies by SKU)',
    storage: '1TB PCIe SSD (capacity varies by SKU)',
    screen: '16" WQXGA 2560×1600 high-refresh IPS-class (exact Hz varies by panel SKU)',
    gpu: 'NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6',
    os: 'Windows 11 Home',
    price: 'Typical street pricing $1,500–$1,900+ (varies)',
    availability: 'Retail / Lenovo (region-dependent)',
    rating: 'Review scores vary by outlet',
    description:
      'Named to match commonly sold “Legion Slim 5 Gen 9 16” configs pairing Ryzen 7 8845HS with RTX 4070. “Legion 5 Pro” is a different chassis line—always verify the exact MTM on Lenovo PSREF or the listing.',
    image:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Business',
    company: 'HP',
    model: 'EliteBook 840 14 inch G11',
    cpu: 'Intel Core Ultra 5 125U (MTL) — CPU option documented by HP for this series',
    ram: '16GB DDR5 (max varies by SKU)',
    storage: '512GB SSD (up to 1TB+ on other SKUs)',
    screen: '14" WUXGA 1920×1200 IPS anti-glare (touch / higher-res options on other SKUs)',
    gpu: 'Intel Arc Graphics (integrated) on many Core Ultra EliteBook configs (verify SKU)',
    os: 'Windows 11 Pro',
    price: 'Business / channel pricing (request quote)',
    availability: 'HP and enterprise resellers',
    rating: 'Review scores vary by outlet',
    description:
      'HP EliteBook 840 G11 is a current business-class 14" notebook with Core Ultra options and enterprise manageability features; vPro and graphics branding depend on the exact part number.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Creator',
    company: 'Apple',
    model: 'MacBook Pro 14-inch (M3 Pro, Nov 2023)',
    cpu: 'Apple M3 Pro — 11-core CPU (per Apple tech specs for this tier)',
    ram: '18GB unified memory',
    storage: '512GB SSD',
    screen: '14.2" Liquid Retina XDR — 3024×1964, ProMotion up to 120Hz',
    gpu: 'Apple M3 Pro with 14-core GPU (base config; 18-core GPU on higher tiers)',
    os: 'macOS (ships current OS; updates via Software Update)',
    price: 'From $1,999 (USA Apple Store MSRP for 18GB / 512GB M3 Pro config when introduced)',
    availability: 'Apple and authorized resellers',
    rating: 'Review scores vary by outlet',
    description:
      'Specifications follow Apple’s published tech specs for the 14-inch MacBook Pro with M3 Pro (introduced November 2023). Higher-end M3 Pro/Max configs change CPU/GPU core counts and memory options.',
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Student',
    company: 'Acer',
    model: 'Aspire 5 (A515 series)',
    cpu: 'Intel Core i5-13420H',
    ram: '16GB (DDR4 or LPDDR5 depending on sub-model)',
    storage: '512GB PCIe NVMe SSD',
    screen: '15.6" FHD 1920×1080 IPS',
    gpu: 'Intel UHD Graphics (integrated)',
    os: 'Windows 11 Home',
    price: 'From ~$500–$750+ street (model-dependent)',
    availability: 'Major retailers (region-dependent)',
    rating: 'Review scores vary by outlet',
    description:
      'Aspire 5 is a long-running Acer family; the i5-13420H + 16GB + 512GB + FHD pattern matches multiple current A515 listings—confirm exact model code (e.g. A515-xxxxx) on Acer’s product page before buying.',
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: '2-in-1',
    company: 'Microsoft',
    model: 'Surface Laptop Studio 2',
    cpu: '13th Gen Intel Core i7-13700H',
    ram: '32GB LPDDR5x (soldered; 64GB on other configs)',
    storage: '1TB SSD (other capacities offered)',
    screen: '14.4" PixelSense Flow touch — 2400×1600, 120Hz, 3:2',
    gpu: 'NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6',
    os: 'Windows 11 Home or Pro (SKU-dependent)',
    price: 'From ~$2,100+ (MSRP varies widely by RAM/storage bundle)',
    availability: 'Microsoft Store and partners',
    rating: 'Review scores vary by outlet',
    description:
      'Microsoft’s convertible “studio” form factor with discrete RTX graphics; exact weight, battery, and bundle vary—see Microsoft’s official spec page for the precise configuration you select.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Gaming',
    company: 'ASUS',
    model: 'ROG Zephyrus G14 (2024) GA403',
    cpu: 'AMD Ryzen 9 8945HS',
    ram: '32GB LPDDR5X onboard (non-upgradable)',
    storage: '1TB PCIe 4.0 NVMe SSD',
    screen: '14" 3K OLED 2880×1800, 120Hz (panel varies by SKU; ROG lists 3K OLED configs)',
    gpu: 'NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6 (TGP varies by profile)',
    os: 'Windows 11 Home',
    price: 'From ~$2,199 (MSRP band per ASUS US product pages; promos vary)',
    availability: 'ASUS and retailers',
    rating: 'Review scores vary by outlet',
    description:
      '2024 Zephyrus G14 uses AMD Ryzen 8000-class HS processors and RTX 40-series GPUs; display and TGP can differ—check the exact GA403xx model on ASUS / PSREF.',
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Business',
    company: 'Lenovo',
    model: 'ThinkPad X1 Carbon Gen 12 (14")',
    cpu: 'Intel Core Ultra 7 165U (offered on Gen 12 configs)',
    ram: '32GB LPDDR5x-6400 (soldered; other sizes offered)',
    storage: '1TB PCIe 4.0 SSD',
    screen: '14" 2.8K OLED 120Hz (other panel options exist)',
    gpu: 'Intel integrated graphics (Arc branding on many Core Ultra configs)',
    os: 'Windows 11 Pro',
    price: 'Enterprise / retail pricing (varies)',
    availability: 'Lenovo and business partners',
    rating: 'Review scores vary by outlet',
    description:
      'Lenovo documents Core Ultra U/H series choices, LPDDR5x memory, and multiple 14" display options for X1 Carbon Gen 12; WWAN, vPro, and exact panel are SKU-specific.',
    image:
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Budget Gaming',
    company: 'MSI',
    model: 'Katana 15 B13VFK',
    cpu: 'Intel Core i7-13620H',
    ram: '16GB DDR5 (two SODIMM slots on many units)',
    storage: '1TB NVMe SSD (512GB on some SKUs)',
    screen: '15.6" FHD 1920×1080 144Hz IPS-level',
    gpu: 'NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6',
    os: 'Windows 11 Home',
    price: 'Street pricing often ~$999–$1,299 (region/promo dependent)',
    availability: 'Retailers globally',
    rating: 'Review scores vary by outlet',
    description:
      'MSI publishes Katana 15 B13 family specs including i7-13620H and RTX 4060 combinations; panel may be FHD 144Hz or QHD on different part numbers—confirm the full model suffix.',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Chromebook',
    company: 'Samsung',
    model: 'Galaxy Chromebook Plus (15.6")',
    cpu: 'Intel Core 3 processor — as listed on Samsung product pages for recent Galaxy Chromebook Plus 15.6" models',
    ram: '8GB',
    storage: '256GB',
    screen: '15.6" AMOLED FHD (per Samsung Chromebook Plus product pages)',
    gpu: 'Intel processor graphics (integrated)',
    os: 'ChromeOS',
    price: 'From ~$775 (Samsung USA starting price band; sales vary)',
    availability: 'Samsung and retailers',
    rating: 'Review scores vary by outlet',
    description:
      'Samsung’s “Galaxy Chromebook Plus” line has been updated; memory/storage and CPU branding differ by region—always verify the exact XE… model number on samsung.com for your country.',
    image:
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=640&q=80'
  },
  {
    category: 'Workstation',
    company: 'Dell',
    model: 'Precision 5680',
    cpu: 'Intel Core i9-13900H (up to; other CPUs offered)',
    ram: '64GB LPDDR5 (up to; speed per Dell workstation documentation)',
    storage: '2TB PCIe Gen4 SSD (up to 8TB across slots on some configs)',
    screen: '16" 16:10 UHD+ / QHD+ / FHD+ options — up to UHD+ OLED on premium SKUs',
    gpu: 'NVIDIA RTX 5000 Ada Generation Laptop GPU (up to 16GB VRAM)',
    os: 'Windows 11 Pro for Workstations (SKU-dependent)',
    price: 'Workstation pricing (build-to-order; request quote)',
    availability: 'Dell Precision sales channels',
    rating: 'Review scores vary by outlet',
    description:
      'Dell’s Precision 5680 tech materials document Core i9 H-class CPUs, ISV certifications, and professional RTX Ada/B-series GPUs; exact TGP, display, and VRAM depend on the selected configuration.',
    image:
      'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=640&q=80'
  }
];

export default function LaptopsPage() {
  return (
    <main className="container">
      <h1 className="title">Laptop Archive</h1>
      <p className="subtitle">
        Discover top laptop picks for work, gaming, study, and business, all in one place and ready to compare at a
        glance.
      </p>

      <section className="catalog-layout">
        <div>
          <ul className="laptop-list">
            {laptops.map((laptop) => (
              <li key={`${laptop.company}-${laptop.model}`} className="laptop-card">
                <h2 className="laptop-name">
                  {laptop.company} {laptop.model}
                </h2>
                <p className="meta-line">
                  <strong>Category:</strong> {laptop.category} | <strong>Price:</strong> {laptop.price}
                </p>
                <img
                  className="laptop-image"
                  src={laptop.image}
                  alt={`${laptop.company} ${laptop.model}`}
                  loading="lazy"
                />
                <p className="desc">{laptop.description}</p>
                <p className="detail">
                  <strong>Company:</strong> {laptop.company}
                </p>
                <p className="detail">
                  <strong>CPU:</strong> {laptop.cpu}
                </p>
                <p className="detail">
                  <strong>RAM:</strong> {laptop.ram}
                </p>
                <p className="detail">
                  <strong>Storage:</strong> {laptop.storage}
                </p>
                <p className="detail">
                  <strong>Screen:</strong> {laptop.screen}
                </p>
                <p className="detail">
                  <strong>GPU:</strong> {laptop.gpu}
                </p>
                <p className="detail">
                  <strong>OS:</strong> {laptop.os}
                </p>
                <p className="detail">
                  <strong>Availability:</strong> {laptop.availability}
                </p>
                <p className="detail">
                  <strong>Rating:</strong> {laptop.rating}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="sidebar">
          <section className="widget">
            <h3 className="widget-title">Upcoming Events</h3>
            <p className="detail">APRIL: No launch event</p>
            <p className="detail">MAY: New models expected</p>
          </section>
          <section className="widget">
            <h3 className="widget-title">Popular</h3>
            <ul className="side-list">
              {laptops.slice(0, 6).map((item) => (
                <li key={`${item.company}-${item.model}-popular`} className="side-list-item">
                  <img src={item.image} alt={item.model} className="thumb" loading="lazy" />
                  <span>
                    {item.company} {item.model}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>

      <section className="faq">
        <h2 className="title">Frequently Asked Questions</h2>
        <details>
          <summary>Which laptop is best overall for beginners?</summary>
          <p>
            For mainstream ease of use, Apple’s 14-inch MacBook Pro with M3 Pro includes long battery life and strong
            performance for everyday work (see Apple’s published battery and tech specs for the configuration you choose).
          </p>
        </details>
        <details>
          <summary>What is the best budget laptop in this list?</summary>
          <p>
            In this list, the Acer Aspire 5 (A515 family) is typically the lowest-cost Windows option with a current
            Core i5 H-class CPU—compare exact model numbers and RAM type (DDR4 vs LPDDR5) on Acer’s site.
          </p>
        </details>
        <details>
          <summary>Is HP EliteBook 840 G11 good for business use?</summary>
          <p>
            Yes, HP EliteBook 840 G11 is a solid business laptop with dependable performance,
            professional build quality, and useful security features.
          </p>
        </details>
      </section>

      <script
        type="application/json"
        id="laptop-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laptops) }}
      />
    </main>
  );
}
