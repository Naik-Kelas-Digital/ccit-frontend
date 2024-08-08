'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  type: string;
  rating: number;
  price: string;
  availability: string;
  image: string;
  description: string;
  additionalInfo: string;
  reviews: string;
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'additional-info' | 'reviews'>('description');
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then((data: Product[]) => {
        const product = data.find(p => p.id === Number(id));
        setProduct(product || null);
        setBestSellers(data.filter(p => p.id !== Number(id))); // Exclude current product from bestsellers
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-4 p-6 py-0 w-[1050px] h-[598px] gap-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt="Product Image"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <div className="mb-4">
            <span className="font-semibold">Rating:</span> {product.rating}/5
          </div>
          <div className="mb-4">
            <span className="font-semibold">Harga:</span> {product.price}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Ketersediaan:</span> {product.availability}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Deskripsi:</span>
            <p>{product.description}</p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Checkout
          </button>
        </div>
      </div>

      <div className="mt-6 border-t pt-6">
        <nav className="flex justify-around border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'description' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'additional-info' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('additional-info')}
          >
            Additional Information
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'reviews' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </nav>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">{activeTab === 'description' ? 'Description' : activeTab === 'additional-info' ? 'Additional Information' : 'Reviews'}</h2>
          <p>{activeTab === 'description' ? product.description : activeTab === 'additional-info' ? product.additionalInfo : product.reviews}</p>
        </div>
      </div>

      <div className="my-8 pb-8">
        <h2 className="text-2xl font-bold mb-4">Best Seller</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
            <div key={product.id} className="border rounded-lg p-4 w-full">
              <Image
                src={product.image}
                alt={product.name}
                className="rounded-md"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.type}</p>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
