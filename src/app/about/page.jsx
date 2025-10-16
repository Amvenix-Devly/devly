"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
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
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/banner/about.jpg"
          alt="About Amvenix"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            About Amvenix
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Empowering global trade through innovation and trust.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            <strong>Amvenix</strong> is an innovative B2B e-commerce platform connecting farmers, suppliers, and businesses to buyers around the world.
          </p>
          <p className="text-gray-700 mb-4">
            We started with a vision to make trade easier, transparent, and more accessible, bridging the gap between local producers and global markets.
          </p>
        </div>
        <div className="relative h-80">
          <Image
            src="/images/banner/about1.jpg"
            alt="Our Company"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
            <p className="text-gray-700">
              To empower suppliers, farmers, and manufacturers with a trusted online marketplace ensuring fair trade, sustainable growth, and global access.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-4 text-green-900">Our Vision</h3>
            <p className="text-gray-700">
              To become the world’s most reliable and inclusive e-commerce ecosystem — promoting innovation, sustainability, and prosperity for all.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Why Choose Amvenix?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Global Marketplace", desc: "Reach buyers and suppliers across multiple continents with one trusted platform.", icon: "🌍" },
            { title: "Secure Transactions", desc: "Safe payments, verified suppliers, and full transaction protection.", icon: "🔒" },
            { title: "Logistics Support", desc: "Integrated transport and delivery solutions for smooth order fulfillment.", icon: "🚚" },
            { title: "Marketing & Growth", desc: "Promote your products with AI-powered marketing tools.", icon: "📈" },
            { title: "Sustainability Focus", desc: "Eco-friendly trade practices and responsible sourcing.", icon: "🌱" },
            { title: "Dedicated Support", desc: "24/7 customer care and business consulting for continuous growth.", icon: "🤝" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
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
              Amvenix is a trusted global marketplace connecting suppliers, manufacturers, and buyers for sustainable business growth.
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
              <li><a href="/">Home</a></li>
              <li><a href="/agriculture">Agriculture</a></li>
              <li><a href="/deals">Deals</a></li>
              <li><a href="/suppliers">Suppliers</a></li>
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
