"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShippingPage() {
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

  const shippingInfo = [
    {
      title: "Delivery Timeline",
      description:
        "Orders are processed within 1-2 business days. Standard shipping typically takes 5-7 business days. Expedited shipping takes 2-3 business days.",
    },
    {
      title: "Shipping Charges",
      description:
        "Shipping costs vary depending on the product weight, dimensions, and destination. You can see the estimated shipping cost at checkout.",
    },
    {
      title: "Tracking Your Order",
      description:
        "Once your order is shipped, you will receive a tracking number via email. You can track your order directly on our website or via the courier's website.",
    },
    {
      title: "International Shipping",
      description:
        "We offer international shipping to selected countries. Delivery times and charges vary depending on location and customs procedures.",
    },
    {
      title: "Lost or Damaged Packages",
      description:
        "If your package is lost or damaged during shipping, please contact our support team within 48 hours. We will assist you with a replacement or refund.",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      
      {/* Shipping Section */}
      <main className="flex-grow max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Shipping Information
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Learn about our shipping policies, charges, and how to track your orders.
        </p>

        <div className="space-y-6">
          {shippingInfo.map((info, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </main>

          </div>
  );
}
