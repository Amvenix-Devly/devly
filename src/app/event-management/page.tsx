"use client";

import Link from "next/link";
import Image from "next/image";

export default function EventPlanningPage() {
  const subServices = [
    "Wedding Planning & Coordination",
    "Corporate Event Management",
    "Birthday & Private Parties",
    "Theme & Décor Design",
    "Event Marketing & Promotion",
    "Vendor Management & Logistics",
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Event Planning & Management
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Turning Your Dream Event into Reality.
        </p>
        <Image
          src="/images/banner/event-banner.jpg" // placeholder image path
          alt="Event Planning & Management"
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
              <span className="text-2xl">🎉</span>
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
          Offer your event planning services on OsMan and connect with clients worldwide.
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
