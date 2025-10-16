"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AgriculturePage() {
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
        { name: "Home & Kitchen", link: "/kitchen" },
        { name: "Machinery", link: "/machinery" },
      ],
      
    },
    { name: "Deals", link: "/deals" },
    { name: "Suppliers", link: "/suppliers" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const products = [
    {
      name: "Onion", img: "/images/agriculture/onion.png",
      price: "৳150/kg",
    },
    {
      name: "Wheat",
      img: "/images/agriculture/wheat.png",
      price: "৳120/kg",
    },
    {
      name: "Garlic",
      img: "/images/agriculture/garlic.png",
      price: "৳250/kg",
    },
    {
      name: "Rice",
      img: "/images/agriculture/rice.png",
      price: "৳100/kg",
    },
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

          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
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
                <Link
                  href={item.link}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.link}
                        className="block text-gray-600 py-1"
                      >
                        {sub.name}
                      </Link>
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
          src="/images/banner/agriculture.jpg"
          alt="Agriculture"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Agriculture Products
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Explore high-quality agricultural products from verified suppliers.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Agriculture Products
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <h3 className="font-bold text-xl mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <Link
                href={`/products/${product.name.toLowerCase()}`}
                className="bg-yellow-600 text-white px-6 py-2 rounded shadow hover:bg-yellow-700 transition"
              >
                Buy Now
              </Link>
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
              Amvenix connects suppliers and buyers worldwide with ease, security, and growth opportunities.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/categories/agriculture">Categories</Link></li>
              <li><Link href="/deals">Deals</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">Twitter</Link></li>
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
