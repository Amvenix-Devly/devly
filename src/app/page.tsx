// src/app/page.tsx
"use client"; // Required for useState

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

// Dummy Data
const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const stats = [
  { label: "Registered Farmers", value: 4300 },
  { label: "Total Sellers", value: 1250 },
  { label: "Products Listed", value: 18400 },
  { label: "Countries Reached", value: 6 },
];

const features = [
  { title: "Fair Trade", description: "Direct connection between farmers and buyers ensuring fair prices.", icon: "/images/icons/fair-trade.jpg" },
  { title: "Global Reach", description: "Access to national and international markets for all sellers.", icon: "/images/icons/global-reach.jpg" },
  { title: "Sustainable Practices", description: "Promoting environmentally friendly agriculture.", icon: "/images/icons/sustainable-practices.jpg" },
];

const categories = [
  { name: "Tea", image: "/images/Popular Categories/tea.png" },
  { name: "Wheat", image: "/images/Popular Categories/wheat.png" },
  { name: "Garlic", image: "/images/Popular Categories/garlic.png" },
  { name: "Onion", image: "/images/Popular Categories/onion.png" },
];

const partners = [
  { name: "Global Community Organization", logo: "/images/partners/gco.png" },
  { name: "AgriTech BD", logo: "/images/partners/agritech-bd.jpg" },
  { name: "Green Logistics", logo: "/images/partners/Green Logistics.jpg" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Page Metadata */}
      <Head>
        <title>Amvenix — Global Agricultural Marketplace</title>
        <meta
          name="description"
          content="Amvenix connects farmers, sellers, and buyers globally, ensuring fair trade, transparency, and sustainability."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-6">

        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 border-b">
          <div className="flex items-center gap-2">
            <Image src="/Green Logistics-1.jpg" alt="Amvenix" width={40} height={40} />
            <span className="text-xl font-bold text-green-700">Amvenix</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-green-700">{item.label}</a>
            ))}
            <a href="/signup" className="px-4 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800">Join as Seller</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <span className="text-2xl">&#x2715;</span> : <span className="text-2xl">&#9776;</span>}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 md:hidden text-center">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-green-700">{item.label}</a>
            ))}
            <a href="/signup" className="px-4 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800">Join as Seller</a>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid gap-10 lg:grid-cols-2 items-center my-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to <span className="text-green-700">Amvenix</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Amvenix is a next-generation agricultural marketplace connecting farmers, sellers,
              and buyers directly to national and global markets—ensuring fair trade, transparency, and sustainability.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a href="/signup" className="px-6 py-3 bg-green-700 text-white font-medium rounded-xl shadow hover:bg-green-800">
                Join as Seller
              </a>
              <a href="/about" className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow">
            <Image src="/images/Agricultural Abundance_ Fields and Livestock.png" alt="Amvenix marketplace" fill style={{ objectFit: "cover" }} />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">Why Choose Amvenix</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image src={f.icon} alt={f.title} fill style={{ objectFit: "contain" }} />
                </div>
                <h3 className="text-xl font-semibold text-green-700">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">Popular Categories</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="relative w-full h-48 rounded-2xl overflow-hidden shadow hover:shadow-md transition">
                <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white text-center font-semibold rounded-b-2xl">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
              <div className="text-3xl font-bold text-green-800">{s.value.toLocaleString()}</div>
              <div className="mt-2 text-gray-700">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Partners</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="relative w-24 h-12">
                  <Image src={p.logo} alt={p.name} fill style={{ objectFit: "contain" }} />
                </div>
                <p className="text-sm text-gray-600">{p.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-green-50 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold text-green-800">Start Selling on Amvenix</h3>
          <p className="mt-2 text-gray-700">Join thousands of farmers and sellers reaching buyers worldwide.</p>
          <a
            href="/signup"
            className="mt-4 inline-block px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800"
          >
            Get Started
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-gray-500 text-sm text-center border-t pt-6">
          © {new Date().getFullYear()} Amvenix — All Rights Reserved.
        </footer>

      </main>
    </>
  );
}
