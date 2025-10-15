"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  /** Hero slider */
  const banners = [
    "/images/banner/banner1.JPG",
    "/images/banner/banner2.JPG",
    "/images/banner/banner3.JPG",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  /** Navbar items */
  const menuItems = [
    { name: "Home", link: "#" },
    {
      name: "Categories",
      link: "#",
      submenu: [
        { name: "Agriculture", link: "#" },
        { name: "Electronics", link: "#" },
        { name: "Clothing", link: "#" },
        { name: "Home & Kitchen", link: "#" },
        { name: "Machinery", link: "#" },
      ],
    },
    { name: "Deals", link: "#" },
    { name: "Suppliers", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Contact", link: "#" },
  ];

  /** Featured deals */
  const deals = [
    { name: "Garlic", price: "$20", image: "/images\products\garlic.PNG" },
    { name: "Wheat", price: "$15", image: "/images\products\wheat.PNG" },
    { name: "Onion", price: "$10", image: "/images\products\onion.PNG" },
    { name: "Jute", price: "$25", image: "images\products\jute.PNGg" },
    { name: "Rice", price: "$18", image: "/images\products\rice.PNG" },
    { name: "Tea", price: "$12", image: "/images\products\tea.PNG" },
  ];

  /** Categories */
  const categories = [
    { name: "Agriculture", image: "/images\categories\agriculture.JPG" },
    { name: "Electronics", image: "/images\categories\electronics.JPG" },
    { name: "Clothing", image: "/images\categories\clothing.JPG" },
    { name: "Home & Kitchen", image: "/images\categories\home.JPG" },
    { name: "Machinery", image: "/images/categories/machinery.JPG" },
  ];

  /** Partners */
  const partners = [
    "/images/partners/gco.PNG",
    "/images/partners/agritech.JPG",
        "/images/partners/amvenix-logo.PNG",
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/images/logo/amvenix-logo.PNG"
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

      {/* Hero Slider */}
      <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={banner}
              alt={`Banner ${idx}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === current ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Welcome to Amvenix
          </h1>
        </div>
      </section>

      {/* Stock Business / Supplier Invitation Section */}
      <section className="bg-yellow-50 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">
              Start Your Stock Business with Amvenix
            </h2>
            <p className="text-yellow-800 mb-6">
              Join thousands of suppliers and wholesalers expanding their business globally.
              We offer easy onboarding, global reach, secure transactions, marketing support,
              and amazing growth opportunities!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-yellow-600 text-white px-6 py-3 rounded shadow hover:bg-yellow-700 transition"
              >
                Join as Supplier
              </a>
              <a
                href="#"
                className="bg-white text-yellow-600 border border-yellow-600 px-6 py-3 rounded shadow hover:bg-yellow-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80">
            <Image
              src="/images/supplier/supplier-banner.JPG"
              alt="Stock Business"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-yellow-300 rounded-full opacity-20"></div>
      </section>

      {/* Featured Deals */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
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
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
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

      {/* Partners Carousel */}
      <section className="bg-gray-100 py-8">
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

      {/* Footer */}
      <footer className="bg-white border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Amvenix</h3>
            <p className="text-gray-500 text-sm">
              Amvenix is a global online marketplace connecting farmers and
              businesses with customers worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Deals</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
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
