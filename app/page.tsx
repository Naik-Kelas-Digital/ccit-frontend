import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>This Is Home Page</h1>
      <Link href="/products">Go to Products</Link>
    </main>
  );
}