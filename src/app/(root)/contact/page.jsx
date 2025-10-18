"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
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
      <section className="relative w-full h-[350px] md:h-[400px]">
        <Image
          src="/images/banner/contacts.jpg"
          alt="Contact osman"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            We’re here to help! Reach out for business, support, or partnership inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-4xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5} placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow flex items-center gap-4">
            <span className="text-3xl text-blue-600">📞</span>
            <div>
              <div className="font-bold text-gray-900">Phone</div>
              <div className="text-gray-700">+880 1234-567890</div>
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow flex items-center gap-4">
            <span className="text-3xl text-green-600">✉️</span>
            <div>
              <div className="font-bold text-gray-900">Email</div>
              <div className="text-gray-700">support@osman.com</div>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow flex items-center gap-4">
            <span className="text-3xl text-yellow-600">📍</span>
            <div>
              <div className="font-bold text-gray-900">Address</div>
              <div className="text-gray-700">123 OsMan Avenue, Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">
          Our Trusted Partners
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto space-x-8">
          {[
            "/images/partners/gco.png",
            "/images/partners/osman-logo.png",
            "/images/partners/agritech.jpg",
          ].map((p, i) => (
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

         </div>
  );
}




