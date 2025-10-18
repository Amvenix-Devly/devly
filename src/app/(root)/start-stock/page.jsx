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
        <Link
    href="/start-stock"
    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition"
  >
    Register Now
  </Link>
  
      </section>

        </div>
  );
}





