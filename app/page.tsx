import Link from 'next/link';

export const runtime = 'edge';

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="title">Laptop Listings Demo</h1>
      <p className="subtitle">
        Open the server-rendered listing page at <Link href="/laptops">/laptops</Link>.
      </p>
    </main>
  );
}
