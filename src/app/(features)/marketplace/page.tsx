"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MarketPlacePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  

  /** Featured Products (Sample) */
  const products = [
    { name: "Garlic", price: "$20", image: "/images/products/garlic.png" },
    { name: "Wheat", price: "$15", image: "/images/products/wheat.png" },
    { name: "Onion", price: "$10", image: "/images/products/onion.png" },
    { name: "Jute", price: "$25", image: "/images/products/jute.png" },
    { name: "Rice", price: "$18", image: "/images/products/rice.png" },
    { name: "Tea", price: "$12", image: "/images/products/tea.png" },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-blue-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Market Place
          </h1>
          <p className="text-lg md:text-2xl">
            Buy & Sell Anything, Anytime, Anywhere
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-40">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  <Link href="/addtocart">Add to Cart</Link>
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{prod.name}</h3>
                <p className="text-red-600 font-bold">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

          </div>
  );
}
