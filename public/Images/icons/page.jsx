// src/app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const featuredCategories = [
  { title: "Rice", image: "/images/categories/rice.jpg" },
  { title: "Wheat", image: "/images/categories/wheat.jpg" },
  { title: "Vegetables", image: "/images/categories/vegetables.jpg" },
  { title: "Fruits", image: "/images/categories/fruits.jpg" },
];

const featuredProducts = [
  { name: "Product A", price: "৳500", image: "/images/products/a.jpg" },
  { name: "Product B", price: "৳750", image: "/images/products/b.jpg" },
  { name: "Product C", price: "৳300", image: "/images/products/c.jpg" },
  { name: "Product D", price: "৳1,200", image: "/images/products/d.jpg" },
];

const partners = [
  { name: "Partner1", logo: "/images/partners/p1.png" },
  { name: "Partner2", logo: "/images/partners/p2.png" },
  { name: "Partner3", logo: "/images/partners/p3.png" },
  { name: "Partner4", logo: "/images/partners/p4.png" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Amvenix — Buy & Sell Agriculture Products</title>
        <meta
          name="description"
          content="Amvenix: Global agricultural marketplace connecting farmers, buyers, and suppliers."
        />
      </Head>

      <div className="min-h-screen flex flex-col">

        {/* Navbar */}
        <header className="bg-white shadow z-30 sticky top-0">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Amvenix Logo" width={40} height={40} />
              <span className="text-xl font-bold text-green-700">Amvenix</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-green-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/signup"
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
              >
                Join as Seller
              </a>
            </nav>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white shadow">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-3 border-b text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/signup"
                className="block px-6 py-3 text-white bg-green-700 rounded-b-lg text-center hover:bg-green-800"
              >
                Join as Seller
              </a>
            </div>
          )}
        </header>

        {/* Hero / Banner */}
        <section className="relative w-full h-[450px] bg-gray-100">
          <Image
            src="/images/hero-banner.jpg"
            alt="Hero Banner"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-90"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Connect. Trade. Grow.
            </h1>
            <p className="text-lg text-white mb-6">
              A global agricultural marketplace for farmers, suppliers & buyers.
            </p>
            <a
              href="/products"
              className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
              Shop Now
            </a>
          </div>
        </section>

        <div className="flex-1">

          {/* Featured Categories */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-semibold mb-6">Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {featuredCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="relative overflow-hidden rounded-lg shadow-md h-40"
                  >
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white py-2 text-center">
                      {cat.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {featuredProducts.map((prod) => (
                  <div key={prod.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{prod.name}</h3>
                      <p className="mt-1 text-green-700 font-semibold">{prod.price}</p>
                      <a
                        href="#"
                        className="mt-4 block px-4 py-2 bg-green-700 text-white text-center rounded-lg hover:bg-green-800"
                      >
                        View
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {partners.map((p) => (
                  <div key={p.name} className="w-32 h-16 relative">
                    <Image src={p.logo} alt={p.name} fill style={{ objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About Amvenix</h4>
              <p>Amvenix is an agricultural platform connecting farmers, buyers, and suppliers globally.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {featuredCategories.map((cat) => (
                  <li key={cat.title}>
                    <a href="#" className="hover:underline">{cat.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#"><span className="hover:text-white">FB</span></a>
                <a href="#"><span className="hover:text-white">TW</span></a>
                <a href="#"><span className="hover:text-white">IG</span></a>
              </div>
            </div>
          </div>
          <div className="text-center py-4 border-t border-gray-700">
            &copy; {new Date().getFullYear()} Amvenix. All rights reserved.
          </div>
        </footer>

      </div>
    </>
  );
}
