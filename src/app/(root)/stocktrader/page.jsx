"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function StockTraderPage() {
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

  const features = [
    { icon: "📈", title: "Market Insights", desc: "Get real-time trading data & insights." },
    { icon: "💹", title: "Trade Globally", desc: "Buy and sell commodities worldwide." },
    { icon: "🔒", title: "Secure Transactions", desc: "Safe & verified trading platform." },
    { icon: "🤝", title: "Partner Network", desc: "Connect with trusted traders & suppliers." },
  ];

  const steps = [
    { num: "1", title: "Sign Up", desc: "Create your trader account easily." },
    { num: "2", title: "Add Stocks", desc: "List your available stocks or commodities." },
    { num: "3", title: "Trade", desc: "Start trading with buyers globally." },
    { num: "4", title: "Grow", desc: "Analyze performance and expand business." },
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
        <Image src="/images/banner/stocktrader.jpg" alt="Stock Trader" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Start Your Stock Trading Business</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mt-4">Connect with global buyers and expand your business with osman.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Trade with OsMan?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border hover:border-blue-500 transition">
              <div className="text-5xl text-blue-600 font-bold mb-4">{s.num}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Trading Today</h2>
        <p className="max-w-2xl mb-6 text-lg">Join OsMan to connect with global buyers, list your stocks, and grow your trading business.</p>
        <a href="/register" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition">Register Now</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About OsMan</h3>
            <p className="text-gray-500 text-sm">OsMan is a trusted global marketplace connecting suppliers, manufacturers, and buyers for sustainable business growth.</p>
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
              <li><a href="/agriculture">Agriculture</a></li>
              <li><a href="/deals">Deals</a></li>
              <li><a href="/stocktrader">StockTrader</a></li>
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
        <div className="text-center mt-8 text-gray-400 text-sm">&copy; {new Date().getFullYear()} OsMan. All rights reserved.</div>
      </footer>
    </div>
  );
}





