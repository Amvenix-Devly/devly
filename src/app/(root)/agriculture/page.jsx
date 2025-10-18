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
        { name: "Home-Kitchen", link: "/kitchen" },
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

          </div>
  );
}




