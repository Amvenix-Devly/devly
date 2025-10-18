"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const deals = [
  { name: "Garlic", price: "$20", image: "/images/products/garlic.png" },
  { name: "Wheat", price: "$15", image: "/images/products/wheat.png" },
  { name: "Onion", price: "$10", image: "/images/products/onion.png" },
  { name: "Jute", price: "$25", image: "/images/products/jute.png" },
  { name: "Rice", price: "$18", image: "/images/products/rice.png" },
  { name: "Tea", price: "$12", image: "/images/products/tea.png" },
];

const categories = [
  { name: "Agriculture", image: "/images/categories/agriculture.jpg" },
  { name: "Electronics", image: "/images/categories/electronics.jpg" },
  { name: "Clothing", image: "/images/categories/clothing.jpg" },
  { name: "Home-Kitchen", image: "/images/categories/home.jpg" },
  { name: "Machinery", image: "/images/categories/machinery.jpg" },
];

const partners = [
  "/images/partners/gco.png",
  "/images/partners/amvenix-logo.png",
  "/images/partners/agritech.jpg",
];

export default function DealsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Categories",
      link: "#",
      submenu: [
          { name: "Agriculture", link: "/agriculture" },
        { name: "Electronics", link: "/electronics" },
        { name: "Clothing", link: "/clothing" },
        { name: "Home-Kitchen", link: "/kitchen" },
        { name: "Machinery", link: "/machinery" },
      ],
    },
    { name: "Deals", link: "/deals" },
{ name: "Stocktrader", link: "/stocktrader" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-gray-50 font-sans">
 
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/banner/deals.jpg"
          alt="Deals"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Amazing Deals on OsMan
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Browse and shop top deals from trusted suppliers worldwide.
          </p>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Featured Deals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.name}
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-40">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{deal.name}</h3>
                <p className="text-red-600 font-bold">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative h-40 rounded-lg overflow-hidden shadow hover:scale-105 transition"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-semibold">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">
          Our Trusted Partners
        </h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto space-x-8">
          {partners.map((p, i) => (
            <div
              key={i}
              className="h-16 w-32 relative flex-shrink-0 grayscale hover:grayscale-0 transition"
            >
              <Image
                src={p}
                alt={`Partner ${i + 1}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </section>

         </div>
  );
}




