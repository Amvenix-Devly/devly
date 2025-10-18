"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServiceZonePage() {
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

  /** Features of Service Zone */
  const serviceFeatures = [
    {
      icon: "🛠️",
      title: "Home Services",
      desc: "Plumbing, Electrical, Cleaning & more at your doorstep.",
    },
    {
      icon: "🚗",
      title: "Vehicle Services",
      desc: "Car repair, Bike maintenance, and professional checkups.",
    },
    {
      icon: "💻",
      title: "IT Services",
      desc: "Website, software, and tech support services anytime.",
    },
    {
      icon: "🏢",
      title: "Business Services",
      desc: "Consulting, Logistics, and professional solutions for businesses.",
    },
  ];

  /** Sample Service Items */
  const services = [
    { name: "Plumbing", price: "$25", image: "/images/services/plumbing.jpg" },
    { name: "Electrical", price: "$30", image: "/images/services/electrical.jpg" },
    { name: "Car Repair", price: "$50", image: "/images/services/car-repair.jpg" },
    { name: "Cleaning", price: "$20", image: "/images/services/cleaning.jpg" },
    { name: "IT Support", price: "$40", image: "/images/services/it-support.jpg" },
  ];

  /** Partners */
  const partners = [
    "/images/partners/agritech.jpg",
    "/images/partners/gco.png",
    "/images/partners/amvenix-logo.png",
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
                alt="osman"
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
              placeholder="Search services"
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
      <section className="relative w-full h-[450px] md:h-[550px] bg-green-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Service Zone with OsMan
          </h1>
          <p className="text-lg md:text-2xl">
            Service Anything, Anytime, Anywhere
          </p>
          <Link
            href="/serviceprovider"
            className="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Join as Service Provider
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-36 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Service Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {serviceFeatures.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Service Items */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((item) => (
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

      {/* Footer */}
      <footer className="bg-white border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About OsMan</h3>
            <p className="text-gray-500 text-sm">
              OsMan is a global online marketplace connecting service providers and customers worldwide.
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
