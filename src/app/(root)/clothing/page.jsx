"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ClothingPage() {
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

  const clothingProducts = [
    { name: "Men's T-Shirt", price: "$25", img: "/images/clothing/mens-tshirt.jpg" },
    { name: "Women's Dress", price: "$45", img: "/images/clothing/womens-dress.jpg" },
    { name: "Jeans", price: "$35", img: "/images/clothing/jeans.jpg" },
    { name: "Jacket", price: "$60", img: "/images/clothing/jacket.jpg" },
    { name: "Sweater", price: "$40", img: "/images/clothing/sweater.jpg" },
    { name: "Sneakers", price: "$50", img: "/images/clothing/sneakers.jpg" },
  ];

  return (
    <div className="bg-gray-50 font-sans">
   
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/banner/clothing.jpg"
          alt="Clothing"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Discover Trendy Clothing
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Shop latest fashion, accessories, and apparel from trusted suppliers.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Clothing Collection</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {clothingProducts.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}




