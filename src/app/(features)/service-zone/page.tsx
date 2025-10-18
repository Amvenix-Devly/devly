"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServiceZonePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

 
  /** Features of Service Zone */
  const serviceFeatures = [
    {
      icon: "🛠️",
      title: "Home Services",
      desc: "Plumbing, Electrical, Cleaning & more at your doorstep.",
    },
    {
      icon: "🚗",
      title: "Vehicle Services",
      desc: "Car repair, Bike maintenance, and professional checkups.",
    },
    {
      icon: "💻",
      title: "IT Services",
      desc: "Website, software, and tech support services anytime.",
    },
    {
      icon: "🏢",
      title: "Business Services",
      desc: "Consulting, Logistics, and professional solutions for businesses.",
    },
  ];

  /** Sample Service Items */
  const services = [
    { name: "Plumbing", price: "$25", image: "/images/services/plumbing.jpg" },
    { name: "Electrical", price: "$30", image: "/images/services/electrical.jpg" },
    { name: "Car Repair", price: "$50", image: "/images/services/car-repair.jpg" },
    { name: "Cleaning", price: "$20", image: "/images/services/cleaning.jpg" },
    { name: "IT Support", price: "$40", image: "/images/services/it-support.jpg" },
  ];

  /** Partners */
  const partners = [
    "/images/partners/agritech.jpg",
    "/images/partners/gco.png",
    "/images/partners/amvenix-logo.png",
  ];

  return (
    <div className="bg-gray-50 font-sans">
 
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[550px] bg-green-600 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Service Zone with OsMan
          </h1>
          <p className="text-lg md:text-2xl">
            Service Anything, Anytime, Anywhere
          </p>
          <Link
            href="/serviceprovider"
            className="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Join as Service Provider
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-36 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Service Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {serviceFeatures.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Service Items */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((item) => (
            <div
              key={item.name}
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-red-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-100 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">Our Partners</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-8">
          {partners.map((p, i) => (
            <div key={i} className="h-16 w-32 relative flex-shrink-0">
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
