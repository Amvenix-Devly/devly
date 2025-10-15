"use client";

import Image from "next/image";
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
  { name: "Home & Kitchen", image: "/images/categories/home.jpg" },
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
    { name: "Home", link: "/home" },
    {
      name: "Categories",
      link: "#",
      submenu: [
          { name: "Agriculture", link: "/agriculture" },
        { name: "Electronics", link: "/electronics" },
        { name: "Clothing", link: "/clothing" },
        { name: "Home & Kitchen", link: "/kitchen" },
        { name: "Machinery", link: "/machinery" },
      ],
    },
    { name: "Deals", link: "/deals" },
    { name: "Suppliers", link: "/Suppliers" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/images/logo/amvenix-logo.png"
              alt="Amvenix"
              width={140}
              height={40}
            />
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <a
                  href={item.link}
                  className={`font-medium ${
                    item.link === "/deals"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.submenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <input
              type="text"
              placeholder="Search products"
              className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, i) => (
              <div key={i}>
                <a
                  href={item.link}
                  className={`block font-medium ${
                    item.link === "/deals"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.link}
                        className="block text-gray-600 py-1"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/banner/deals-hero.jpg"
          alt="Deals"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Amazing Deals on Amvenix
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

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Amvenix</h3>
            <p className="text-gray-500 text-sm">
              Amvenix connects suppliers and buyers worldwide with ease, security, and growth opportunities.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Amvenix. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
