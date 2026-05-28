export type UsbHub = {
  slug: string;
  category: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  priceFrom: string;
  image: string;
  highlights: string[];
  rating: string;
  ratingStars: number;
  searchUrl: string;
  featured?: boolean;
};

const searchLink = (title: string) =>
  `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(title)}`;

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const formatPrice = (price: number, currency: string) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price);

type RawProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  brand: string;
  highlights: string[];
  ratingStars: number;
  featured?: boolean;
};

const raw: RawProduct[] = [
  {
    id: '11',
    title: 'Acer 10 Gbps USB C Hub, USBC Splitter with 4 USB C 3.2 and 100W PD Port',
    description:
      'Fast-transfer Type-C multiport adapter with four USB-C 3.2 ports and 100W Power Delivery for host charging. Compatible with MacBook Pro/M2/M1, iPad, Surface Pro, and XPS. No video output — data and charging only.',
    price: 25.99,
    currency: 'USD',
    image: '/images/product11.PNG',
    category: 'USB-C Hub',
    brand: 'Acer',
    highlights: [
      '10 Gbps USB-C 3.2 shared bandwidth',
      '4× USB-C ports + 100W PD pass-through',
      'MacBook, iPad Pro, Surface Pro, XPS compatible'
    ],
    ratingStars: 4.7,
    featured: true
  },
  {
    id: '1',
    title: 'USB C to USB Hub Multiport Adapter',
    description:
      'Aluminum 4 Ports USB C Splitter for Laptop, MacBook Pro/Air, iPad Pro, Dell, Chromebook Keyboard, Mouse, HDD',
    price: 4.49,
    currency: 'USD',
    image: '/images/product1.jpg',
    category: 'USB-C Hub',
    brand: 'Multiport',
    highlights: ['4-port USB-C hub', 'Aluminum build', 'MacBook, iPad Pro, Dell compatible'],
    ratingStars: 4.6
  },
  {
    id: '2',
    title: 'USB Hub 4 Ports Multiple USB 3.0',
    description: 'USBA Splitter for Laptop, Extender for A Port Laptop, PC, Desktop and More',
    price: 4.49,
    currency: 'USD',
    image: '/images/product2.jpg',
    category: 'USB 3.0 Hub',
    brand: 'Generic',
    highlights: ['4× USB 3.0 ports', 'Laptop & desktop extender', 'Plug-and-play splitter'],
    ratingStars: 4.5
  },
  {
    id: '3',
    title: 'INVZI USB Hub 3.0 4-Port Ultra Slim',
    description:
      'Data USB Splitter with 2ft Extended Cable Compatible for PC, MacBook, Mac Pro/Mini, iMac, Laptop, Surface Pro, PS4, XPS, Flash Drive, Xbox One, Mobile HDD',
    price: 4.99,
    currency: 'USD',
    image: '/images/product3.jpg',
    category: 'USB 3.0 Hub',
    brand: 'INVZI',
    highlights: ['Ultra-slim 4-port hub', '2ft extended cable', 'PC, Mac, Surface, console ready'],
    ratingStars: 4.7
  },
  {
    id: '4',
    title: 'MEANHIGH USB 3.0 Hub 4 Port',
    description:
      'USB Hub for Laptop Multiport Splitter for Computer USB Port Expander for MacBook pro iMac HP, Dell, Asus, PC, Flash Drive, Mobile HDD',
    price: 4.02,
    currency: 'USD',
    image: '/images/product4.jpg',
    category: 'USB 3.0 Hub',
    brand: 'MEANHIGH',
    highlights: ['4-port USB 3.0 expander', 'Multiport laptop splitter', 'Works with major PC brands'],
    ratingStars: 4.4
  },
  {
    id: '5',
    title: 'USB 3.0 Hub 4-Port Splitter Expander',
    description:
      'USB Hub USB Splitter USB Expander for Laptop, Xbox, Flash Drive, HDD, Console, Printer, Camera, Keyboard, Mouse and More',
    price: 3.9,
    currency: 'USD',
    image: '/images/product5.jpg',
    category: 'USB 3.0 Hub',
    brand: 'Generic',
    highlights: ['Budget 4-port hub', 'Console & printer friendly', 'Keyboard, mouse, HDD support'],
    ratingStars: 4.3
  },
  {
    id: '6',
    title: '4 Ports USB C to USB Hub Aluminum',
    description:
      'Type C to USB A 3.0 Adapter, Plug and Play USB Extender for MacBook Pro/Air, Laptop, Keyboard and Mouse',
    price: 4.99,
    currency: 'USD',
    image: '/images/product6.jpg',
    category: 'USB-C Hub',
    brand: 'QAJOPFN',
    highlights: ['USB-C to USB-A 3.0', 'Aluminum 4-port hub', 'Plug and play for MacBook'],
    ratingStars: 4.6
  },
  {
    id: '7',
    title: '3Pack USB C to USB Adapter',
    description:
      'High-speed data Transfer, USB C Male to USB 3.0 Female OTG Adapter for iPhone 17 16 15, Mac, iPad, Samsung Galaxy S24 S25, Notebook, and More Type C Devices',
    price: 4.79,
    currency: 'USD',
    image: '/images/product7.jpg',
    category: 'USB-C Adapter',
    brand: 'Duyasurs',
    highlights: ['3-pack OTG adapters', 'USB-C to USB 3.0', 'Phone, Mac, iPad, Galaxy compatible'],
    ratingStars: 4.5
  },
  {
    id: '8',
    title: 'USB C to USB 3.0 Adapter 2 Pack',
    description:
      'USB C Male to USB Female OTG Cable Thunderbolt3 to USB Adapter Compatible with MacBook Pro/Air, iPhone 17 Pro Max/17 Plus/17/16/15, Galaxy S24/S23/S22/S21',
    price: 4.99,
    currency: 'USD',
    image: '/images/product8.jpg',
    category: 'USB-C Adapter',
    brand: 'Generic',
    highlights: ['2-pack USB-C OTG', 'Thunderbolt 3 compatible', 'MacBook & Galaxy support'],
    ratingStars: 4.6
  },
  {
    id: '9',
    title: 'USB3.0 OTG Adapter USB-A to USB-C',
    description:
      'USB-A Female to USB-C Male Adaptor, 5Gbps Type C Dongle OTG Converter for iPhone 17e 17 Air 17 Pro 17 Pro Max MacBook, Samsung, Pixel, Camera, Flash Drive',
    price: 4.99,
    currency: 'USD',
    image: '/images/product9.jpg',
    category: 'OTG Adapter',
    brand: 'Generic',
    highlights: ['USB-A to USB-C dongle', '5Gbps data rate', 'Phone, camera, flash drive ready'],
    ratingStars: 4.5
  },
  {
    id: '10',
    title: 'USB C to USB Adapter 2-Pack',
    description:
      'Thunderbolt 3 to USB 3.0 OTG Adapter Compatible with MacBook Pro, Chromebook, Pixelbook, Microsoft Surface Go, Samsung Galaxy S10 S20 S21 S22 Ultra, iPhone 15 16 17 Pro Max',
    price: 3.99,
    currency: 'USD',
    image: '/images/product10.jpg',
    category: 'USB-C Adapter',
    brand: 'Generic',
    highlights: ['Best-value 2-pack', 'Thunderbolt 3 to USB 3.0', 'Chromebook & Surface Go ready'],
    ratingStars: 4.4
  }
];

export const usbHubs: UsbHub[] = raw.map((p) => ({
  slug: slugify(p.title),
  category: p.category,
  brand: p.brand,
  title: p.title,
  description: p.description,
  price: p.price,
  currency: p.currency,
  priceFrom: formatPrice(p.price, p.currency),
  image: p.image,
  highlights: p.highlights,
  rating: `${p.ratingStars.toFixed(1)} / 5`,
  ratingStars: p.ratingStars,
  searchUrl: searchLink(p.title),
  featured: p.featured
}));

/** Pinned featured pick first, then lowest-priced alternatives. */
export function withFeaturedFirst(hubs: UsbHub[]): UsbHub[] {
  const featured = hubs.filter((h) => h.featured);
  const rest = hubs.filter((h) => !h.featured);
  return [...featured, ...rest];
}

export const bestValueUsbHubPicks: UsbHub[] = (() => {
  const featured = usbHubs.find((h) => h.featured);
  const others = usbHubs
    .filter((h) => !h.featured)
    .sort((a, b) => a.price - b.price)
    .slice(0, 4);
  return featured ? [featured, ...others] : others.slice(0, 5);
})();

export const usbHubCategories = Array.from(new Set(usbHubs.map((h) => h.category)));
