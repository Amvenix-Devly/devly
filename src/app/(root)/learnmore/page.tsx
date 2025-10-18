"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LearnMorePage() {
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
    { name: "StockTrader", link: "/stocktrader" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your OsMan account by providing basic details like name, email, and business type.",
      icon: "/images/steps/signup.png",
    },
    {
      title: "Submit Business Info",
      description:
        "Provide your stock business details including products, location, and contact information.",
      icon: "/images/steps/business.png",
    },
    {
      title: "Verification",
      description:
        "Our team will verify your business details to ensure secure and authentic registration.",
      icon: "/images/steps/verification.png",
    },
    {
      title: "Start Selling",
      description:
        "Once approved, you can list your products and start expanding your business globally.",
      icon: "/images/steps/start-selling.png",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      
      {/* Stock Business Hero Section */}
      <section className="bg-yellow-50 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">
              Start Your Stock Business with OsMan
            </h2>
            <p className="text-yellow-800 mb-6">
              Join thousands of suppliers and wholesalers expanding their business globally.
              We offer easy onboarding, global reach, secure transactions, marketing support,
              and amazing growth opportunities!
            </p>
            <div className="flex gap-4">
              <Link
                href="/stockman"
                className="bg-yellow-600 text-white px-6 py-3 rounded shadow hover:bg-yellow-700 transition"
              >
                Join as Stock Business
              </Link>
              <Link
                href="/stockman"
                className="bg-white text-yellow-600 border border-yellow-600 px-6 py-3 rounded shadow hover:bg-yellow-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80">
            <Image
              src="/images/supplier/supplier-banner.jpg"
              alt="Stock Business"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-yellow-300 rounded-full opacity-20"></div>
      </section>

      {/* Step-by-Step Joining Guide */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          How to Join OsMan Stock Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image src={step.icon} alt={step.title} fill style={{ objectFit: "contain" }} />
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements / Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Requirements / Eligibility</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Valid business registration or trade license</li>
              <li>Products or stock ready to sell</li>
              <li>Bank account for transactions</li>
              <li>Basic contact information and address</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Benefits of Joining</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Global reach to customers and wholesalers</li>
              <li>Secure transactions and easy onboarding</li>
              <li>Marketing and promotional support</li>
              <li>Grow your stock business efficiently</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
