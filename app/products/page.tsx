'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Products() {
  const [viewMode, setViewMode] = useState<'list' | 'grid' | 'split'>('list');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto my-10 p-0 px-[20px] w-[1050px] h-[598px] gap-[40px] opacity-100">
      {/* Filter Row */}
      <div className="flex items-center justify-between mb-4 pb-10">
        {/* Showing Result */}
        <div className="text-gray-500">
          Showing {products.length} results
        </div>

        {/* View Modes */}
        <div className="flex space-x-2">
          <button
            className={`border rounded-md py-2 px-4 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
          <button
            className={`border rounded-md py-2 px-4 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`border rounded-md py-2 px-4 ${viewMode === 'split' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
            onClick={() => setViewMode('split')}
          >
            Split
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <select className="border rounded-md py-2 px-4 text-gray-400 focus:outline-none">
            <option value="">Filter</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      {/* Products Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {products.slice(0, 12).map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="w-full flex flex-col items-center border overflow-hidden shadow-lg mb-4 gap-0 opacity-100 cursor-pointer">
              <Image
                src={product.image}
                alt={product.name}
                className="rounded-md"
                width={300}
                height={300}
              />
              <div className="w-full h-1/3 flex flex-col justify-center items-center p-2">
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">{product.type}</p>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center pb-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Previous
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
          Next
        </button>
      </div>
    </div>
  );
}
