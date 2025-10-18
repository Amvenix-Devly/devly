"use client";

import Image from "next/image";
import Link from "next/link";

export default function InteriorDesignPage() {
  const subServices = [
    "Residential Interior Design",
    "Office & Commercial Space Design",
    "Home Decor & Styling",
    "Furniture & Fixtures Selection",
    "Lighting Design",
    "Space Planning & 3D Visualization",
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Interior Design & Home Decor
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Design Your Dreams, Live Your Style!
        </p>
        <Image
          src="/images/services/interior-design.jpg" // placeholder image path
          alt="Interior Design"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>

      {/* What We Offer Section */}
      <section className="max-w-4xl w-full mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Services Include
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subServices.map((service, idx) => (
            <li
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4"
            >
              <span className="text-2xl">🏠</span>
              <span className="font-medium text-gray-700">{service}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join as Service Provider
        </h2>
        <p className="text-gray-700 mb-6">
          Start offering your interior design services on OsMan and reach customers worldwide.
        </p>
        <Link
          href="/create-account"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
}
