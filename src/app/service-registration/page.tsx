"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServiceRegistrationPage() {
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
    { name: "StockTrader", link: "/stocktrader" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const partners = [
    "/images/partners/agritech.jpg",
    "/images/partners/gco.png",
    "/images/partners/amvenix-logo.png",
  ];

  return (
    <div className="bg-gray-50 font-sans">
      

      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-blue-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Service Registration
          </h1>
          <p className="text-blue-800 text-lg md:text-2xl">
            Join OsMan as a Service Provider
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-3xl mx-auto py-16 px-4 bg-white shadow rounded-lg my-10">
        <h2 className="text-3xl font-bold text-center mb-8">Register Your Service</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+8801XXXXXXXXX"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Service Type</label>
            <select
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a service</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="cleaning">Cleaning</option>
              <option value="delivery">Delivery</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your service..."
              rows={4}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
            >
              Register Now
            </button>
          </div>
        </form>
      </section>

      {/* Partners */}
      <section className="bg-gray-100 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">
          Our Partners
        </h2>
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
