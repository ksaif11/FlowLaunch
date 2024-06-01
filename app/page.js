'use client';

import { useState, useEffect } from 'react';
import ProductDetails from './components/ProductDetails';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const products = await res.json();
      setProducts(products);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl underline text-slate-400 font-bold text-center m-8">FlowLaunch Product Listing</h1>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-black  mb-8 p-3 border border-gray-300 rounded w-full md:w-1/2 mx-auto block"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-cyan-500 mt-2"> price : ${product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}
