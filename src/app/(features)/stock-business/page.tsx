"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function StockBusinessPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Navbar Menu */
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
    { name: "StockTrader", link: "/stocktrader" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  /** Features of Stock Business */
  const stockFeatures = [
    {
      icon: "📦",
      title: "Global Reach",
      desc: "Expand your stock business to international markets easily.",
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      desc: "All trades are safe and verified for supplier protection.",
    },
    {
      icon: "📈",
      title: "Real-time Analytics",
      desc: "Monitor sales, stock, and performance anytime.",
    },
    {
      icon: "💼",
      title: "Business Support",
      desc: "Marketing, logistics, and management support for suppliers.",
    },
  ];

  /** Sample Stock Items */
  const stockItems = [
    { name: "Garlic", price: "$20", image: "/images/products/garlic.png" },
    { name: "Wheat", price: "$15", image: "/images/products/wheat.png" },
    { name: "Onion", price: "$10", image: "/images/products/onion.png" },
    { name: "Rice", price: "$18", image: "/images/products/rice.png" },
    { name: "Tea", price: "$12", image: "/images/products/tea.png" },
  ];

  /** Partners */
  const partners = [
    "/images/partners/agritech.jpg",
    "/images/partners/gco.png",
    "/images/partners/amvenix-logo.png",
  ];

  return (
    <div className="bg-gray-50 font-sans">
     
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[550px] bg-blue-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Stock Business with OsMan
          </h1>
          <p className="text-lg md:text-2xl">
            Stock Anything, Anytime, Anywhere
          </p>
          <Link
            href="/stockman"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Join as Supplier
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-36 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Stock Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stockFeatures.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Stock Items */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Sample Stock Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stockItems.map((item) => (
            <div
              key={item.name}
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-red-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-100 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">Our Partners</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-8">
          {partners.map((p, i) => (
            <div key={i} className="h-16 w-32 relative flex-shrink-0">
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
