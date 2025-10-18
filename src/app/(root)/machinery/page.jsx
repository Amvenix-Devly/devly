"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MachineryPage() {
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

  const machineryProducts = [
    { name: "Tractor", price: "$12,000", img: "/images/machinery/tractor.jpg" },
    { name: "Combine Harvester", price: "$45,000", img: "/images/machinery/harvester.jpg" },
    { name: "Plough", price: "$2,500", img: "/images/machinery/plough.jpg" },
    { name: "Seed Drill", price: "$3,200", img: "/images/machinery/seeddrill.jpg" },
    { name: "Irrigation Pump", price: "$1,500", img: "/images/machinery/irrigationpump.jpg" },
    { name: "Cultivator", price: "$2,000", img: "/images/machinery/cultivator.jpg" },
  ];

  return (
     <div className="bg-gray-50 font-sans">
  
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/banner/machinery.jpg"
          alt="Machinery"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Modern Agricultural Machinery
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Explore tractors, harvesters, and essential farming equipment from trusted suppliers.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Machinery Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {machineryProducts.map((product, idx) => (
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




