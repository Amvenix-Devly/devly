"use client";

import Image from "next/image";
import Link from "next/link";
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
    
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/banner/about.jpg"
          alt="About OsMan"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            About OsMan
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
            <strong>OsMan</strong> is an innovative B2B e-commerce platform connecting farmers, suppliers, and businesses to buyers around the world.
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
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Why Choose OsMan?</h2>
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

          </div>
  );
}




