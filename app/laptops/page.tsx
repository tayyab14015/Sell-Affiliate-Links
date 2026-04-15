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
  buyLink: string;
};

const laptops: Laptop[] = [
  {
    category: 'Ultrabook',
    company: 'Dell',
    model: 'XPS 13 9340',
    cpu: 'Intel Core Ultra 7 155H',
    ram: '16GB LPDDR5x',
    storage: '512GB NVMe SSD',
    screen: '13.4" FHD+ 1920x1200',
    gpu: 'Intel Arc integrated',
    os: 'Windows 11 Home',
    price: '$1,199',
    availability: 'In Stock',
    rating: '4.6/5',
    description:
      'Portable premium ultrabook with bright display, excellent keyboard, and strong all-day battery.',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=640&q=80',
    buyLink: 'https://example.com/buy/dell-xps-13'
  },
  {
    category: 'Gaming',
    company: 'Lenovo',
    model: 'Legion 5 Pro 16',
    cpu: 'AMD Ryzen 7 8845HS',
    ram: '32GB DDR5',
    storage: '1TB NVMe SSD',
    screen: '16" 2560x1600 165Hz',
    gpu: 'NVIDIA GeForce RTX 4070',
    os: 'Windows 11 Home',
    price: '$1,699',
    availability: 'Limited Stock',
    rating: '4.7/5',
    description:
      'Powerful gaming laptop with high-refresh display and advanced cooling for demanding titles and creators.',
    image:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=640&q=80',
    buyLink: 'https://example.com/buy/lenovo-legion-5-pro'
  },
  {
    category: 'Business',
    company: 'HP',
    model: 'EliteBook 840 G11',
    cpu: 'Intel Core Ultra 5 125U',
    ram: '16GB DDR5',
    storage: '512GB NVMe SSD',
    screen: '14" WUXGA 1920x1200',
    gpu: 'Intel integrated graphics',
    os: 'Windows 11 Pro',
    price: '$1,349',
    availability: 'Preorder',
    rating: '4.4/5',
    description:
      'Enterprise-focused laptop with strong build quality, modern security features, and reliable conferencing tools.',
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=640&q=80',
    buyLink: 'https://example.com/buy/hp-elitebook-840'
  }
];

export default function LaptopsPage() {
  return (
    <main className="container">
      <h1 className="title">Laptop Listings</h1>
      <p className="subtitle">
        Server-rendered laptops page with embedded JSON data (Edge Runtime compatible).
      </p>

      <ul className="laptop-list">
        {laptops.map((laptop) => (
          <li key={`${laptop.company}-${laptop.model}`} className="laptop-card">
            <div className="laptop-head">
              <h2 className="laptop-name">
                {laptop.company} {laptop.model}
              </h2>
              <span className="price">{laptop.price}</span>
            </div>

            <div className="laptop-grid">
              <p className="detail">
                <strong>Category:</strong> {laptop.category}
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
            </div>

            <p className="desc">
              <strong>Description:</strong> {laptop.description}
            </p>

            <div className="media">
              <img
                className="laptop-image"
                src={laptop.image}
                alt={`${laptop.company} ${laptop.model}`}
                loading="lazy"
              />
              <p className="detail">
                <strong>Image:</strong> {laptop.image}
              </p>
              <p className="detail">
                <strong>Buy Link:</strong>{' '}
                <a href={laptop.buyLink} target="_blank" rel="noreferrer">
                  {laptop.buyLink}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <script
        type="application/json"
        id="laptop-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laptops) }}
      />
    </main>
  );
}
