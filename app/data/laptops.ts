export type Laptop = {
  slug: string;
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
  priceFrom: string;
  availability: string;
  rating: string;
  ratingStars: number;
  highlights: string[];
  description: string;
  image: string;
  buyUrl: string;
};

const slugify = (brand: string, model: string) =>
  `${brand}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const raw: Omit<Laptop, 'slug'>[] = [
  {
    category: 'Ultrabook',
    company: 'Dell',
    model: 'XPS 13 9348',
    cpu: 'Intel Core Ultra 7 155H (Meteor Lake, Intel Arc Graphics) — option on XPS 13 9348',
    ram: '16GB LPDDR5x (soldered; other capacities offered)',
    storage: '512GB PCIe Gen4 NVMe SSD (other capacities offered)',
    screen: '13.4" FHD+ 1920×1200 non-touch (QHD+ / OLED options on other SKUs)',
    gpu: 'Intel Arc Graphics (integrated)',
    os: 'Windows 11 Home or Pro (SKU-dependent)',
    price: 'From ~$1,199 (MSRP varies by config; Dell USA)',
    priceFrom: '$1,199',
    availability: 'Sold by Dell and partners (region-dependent)',
    rating: '4.5 / 5',
    ratingStars: 4.5,
    highlights: [
      'Intel Core Ultra 7 155H',
      '16GB LPDDR5x · 512GB NVMe',
      '13.4" FHD+ · Intel Arc iGPU'
    ],
    description:
      'Dell XPS 13 9348 is a current-generation XPS ultrabook line with Core Ultra processors; exact ports, battery, and panel depend on the SKU you configure.',
    image: '/images/laptops/dell-xps-13-9348.jpg',
    buyUrl: 'https://www.dell.com/en-us/shop/dell-laptops/xps-13-laptop/spd/xps-13-9345-laptop'
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
    priceFrom: '$1,499',
    availability: 'Retail / Lenovo (region-dependent)',
    rating: '4.6 / 5',
    ratingStars: 4.6,
    highlights: [
      'Ryzen 7 8845HS · RTX 4070 8GB',
      '32GB DDR5 · 1TB NVMe',
      '16" WQXGA high-refresh IPS'
    ],
    description:
      'Named to match commonly sold "Legion Slim 5 Gen 9 16" configs pairing Ryzen 7 8845HS with RTX 4070. "Legion 5 Pro" is a different chassis line—always verify the exact MTM on Lenovo PSREF or the listing.',
    image: '/images/laptops/lenovo-legion-slim-5.jpg',
    buyUrl:
      'https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-slim-series/legion-slim-5-gen-9-16-inch-amd/len101g0027'
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
    priceFrom: '$1,399',
    availability: 'HP and enterprise resellers',
    rating: '4.4 / 5',
    ratingStars: 4.4,
    highlights: [
      'Intel Core Ultra 5 125U',
      '16GB DDR5 · 512GB SSD',
      '14" WUXGA · Win 11 Pro'
    ],
    description:
      'HP EliteBook 840 G11 is a current business-class 14" notebook with Core Ultra options and enterprise manageability features; vPro and graphics branding depend on the exact part number.',
    image: '/images/laptops/hp-elitebook-840.jpg',
    buyUrl: 'https://www.hp.com/us-en/shop/pdp/hp-elitebook-840-14-inch-g11-notebook-pc'
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
    priceFrom: '$1,999',
    availability: 'Apple and authorized resellers',
    rating: '4.8 / 5',
    ratingStars: 4.8,
    highlights: [
      'Apple M3 Pro · 14-core GPU',
      '18GB unified · 512GB SSD',
      '14.2" Liquid Retina XDR 120Hz'
    ],
    description:
      'Specifications follow Apple\u2019s published tech specs for the 14-inch MacBook Pro with M3 Pro (introduced November 2023). Higher-end M3 Pro/Max configs change CPU/GPU core counts and memory options.',
    image: '/images/laptops/macbook-pro-14.jpg',
    buyUrl: 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch'
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
    priceFrom: '$499',
    availability: 'Major retailers (region-dependent)',
    rating: '4.2 / 5',
    ratingStars: 4.2,
    highlights: [
      'Intel Core i5-13420H',
      '16GB RAM · 512GB NVMe',
      '15.6" FHD IPS · Win 11 Home'
    ],
    description:
      'Aspire 5 is a long-running Acer family; the i5-13420H + 16GB + 512GB + FHD pattern matches multiple current A515 listings—confirm exact model code (e.g. A515-xxxxx) on Acer\u2019s product page before buying.',
    image: '/images/laptops/acer-aspire-5.jpg',
    buyUrl: 'https://www.acer.com/us-en/laptops/aspire/aspire-5'
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
    priceFrom: '$2,099',
    availability: 'Microsoft Store and partners',
    rating: '4.5 / 5',
    ratingStars: 4.5,
    highlights: [
      'Intel Core i7-13700H · RTX 4060',
      '32GB LPDDR5x · 1TB SSD',
      '14.4" PixelSense Flow touch 120Hz'
    ],
    description:
      'Microsoft\u2019s convertible "studio" form factor with discrete RTX graphics; exact weight, battery, and bundle vary—see Microsoft\u2019s official spec page for the precise configuration you select.',
    image: '/images/laptops/surface-laptop-studio-2.jpg',
    buyUrl: 'https://www.microsoft.com/en-us/surface/devices/surface-laptop-studio-2'
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
    priceFrom: '$2,199',
    availability: 'ASUS and retailers',
    rating: '4.7 / 5',
    ratingStars: 4.7,
    highlights: [
      'Ryzen 9 8945HS · RTX 4070',
      '32GB LPDDR5X · 1TB NVMe',
      '14" 3K OLED 120Hz'
    ],
    description:
      '2024 Zephyrus G14 uses AMD Ryzen 8000-class HS processors and RTX 40-series GPUs; display and TGP can differ—check the exact GA403xx model on ASUS / PSREF.',
    image: '/images/laptops/asus-zephyrus-g14.jpg',
    buyUrl: 'https://www.asus.com/us/laptops/for-gaming/rog-zephyrus/rog-zephyrus-g14-2024/'
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
    priceFrom: '$1,699',
    availability: 'Lenovo and business partners',
    rating: '4.6 / 5',
    ratingStars: 4.6,
    highlights: [
      'Intel Core Ultra 7 165U',
      '32GB LPDDR5x · 1TB PCIe 4.0',
      '14" 2.8K OLED 120Hz'
    ],
    description:
      'Lenovo documents Core Ultra U/H series choices, LPDDR5x memory, and multiple 14" display options for X1 Carbon Gen 12; WWAN, vPro, and exact panel are SKU-specific.',
    image: '/images/laptops/thinkpad-x1-carbon.jpg',
    buyUrl:
      'https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-gen-12-14-inch-intel/len101t0071'
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
    priceFrom: '$999',
    availability: 'Retailers globally',
    rating: '4.3 / 5',
    ratingStars: 4.3,
    highlights: [
      'Intel Core i7-13620H · RTX 4060',
      '16GB DDR5 · 1TB NVMe',
      '15.6" FHD 144Hz IPS-level'
    ],
    description:
      'MSI publishes Katana 15 B13 family specs including i7-13620H and RTX 4060 combinations; panel may be FHD 144Hz or QHD on different part numbers—confirm the full model suffix.',
    image: '/images/laptops/msi-katana-15.jpg',
    buyUrl: 'https://www.msi.com/Laptop/Katana-15-B13V'
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
    priceFrom: '$775',
    availability: 'Samsung and retailers',
    rating: '4.3 / 5',
    ratingStars: 4.3,
    highlights: [
      'Intel Core 3 · ChromeOS',
      '8GB RAM · 256GB storage',
      '15.6" AMOLED FHD'
    ],
    description:
      'Samsung\u2019s "Galaxy Chromebook Plus" line has been updated; memory/storage and CPU branding differ by region—always verify the exact XE… model number on samsung.com for your country.',
    image: '/images/laptops/galaxy-chromebook-plus.jpg',
    buyUrl: 'https://www.samsung.com/us/computing/chromebooks/'
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
    priceFrom: '$2,899',
    availability: 'Dell Precision sales channels',
    rating: '4.7 / 5',
    ratingStars: 4.7,
    highlights: [
      'Intel Core i9-13900H',
      'Up to 64GB LPDDR5 · 2TB NVMe',
      'RTX 5000 Ada · 16" UHD+ OLED'
    ],
    description:
      'Dell\u2019s Precision 5680 tech materials document Core i9 H-class CPUs, ISV certifications, and professional RTX Ada/B-series GPUs; exact TGP, display, and VRAM depend on the selected configuration.',
    image: '/images/laptops/dell-precision-5680.jpg',
    buyUrl:
      'https://www.dell.com/en-us/shop/workstations-isv-certified/precision-16-5680-workstation/spd/precision-16-5680-laptop'
  }
];

export const laptops: Laptop[] = raw.map((l) => ({
  ...l,
  slug: slugify(l.company, l.model)
}));

export const categories = Array.from(new Set(laptops.map((l) => l.category)));

export function getLaptopBySlug(slug: string): Laptop | undefined {
  return laptops.find((l) => l.slug === slug);
}

export function laptopsInCategory(category: string): Laptop[] {
  return laptops.filter((l) => l.category === category);
}

export function parsePrice(priceFrom: string): number {
  return Number(priceFrom.replace(/[^0-9.]/g, '')) || 0;
}
