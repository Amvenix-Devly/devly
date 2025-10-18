"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MarketPlacePage() {
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
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/osman-logo.png"
                alt="OsMan"
                width={140}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 font-medium"
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

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, i) => (
              <div key={i}>
                <a
                  href={item.link}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
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

      {/* Footer */}
      <footer className="bg-white border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About OsMan</h3>
            <p className="text-gray-500 text-sm">
              OsMan is a global online marketplace connecting farmers and businesses with customers worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="/helpcenter">Help Center</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/shipping">Shipping</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="/">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} OsMan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
