"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebDesignPage() {
  const subServices = [
    "Website Design & Development",
    "E-commerce Solutions",
    "Responsive & Mobile-Friendly Design",
    "UI/UX Design",
    "Website Maintenance & Support",
    "SEO & Digital Marketing Integration",
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web Design & IT Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Build Your Online Presence, Seamlessly.
        </p>
        <Image
          src="/images/banner/it-banner.jpg" // placeholder image path
          alt="Web Design & IT Solutions"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>

      {/* Sub-services Section */}
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
              <span className="text-2xl">💻</span>
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
          Offer your web design and IT services on OsMan and grow your online business.
        </p>
        <Link
          href="/service-provider-registration"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
}
