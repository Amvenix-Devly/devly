"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ReturnsPage() {
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

  const returnSteps = [
    {
      step: "Step 1: Request Return",
      description:
        "Login to your account and go to 'Orders'. Select the product you want to return and click 'Request Return'.",
    },
    {
      step: "Step 2: Confirm Return",
      description:
        "Fill in the return form with reason and photos if necessary. Submit the form to initiate the return process.",
    },
    {
      step: "Step 3: Ship the Product",
      description:
        "Pack the product securely and ship it to the address provided. Keep the tracking number for reference.",
    },
    {
      step: "Step 4: Receive Refund",
      description:
        "Once we receive and inspect the product, your refund will be processed within 5-7 business days.",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      
      {/* Returns Section */}
      <main className="flex-grow max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Returns Policy
        </h1>
        <p className="text-gray-600 text-center mb-12">
          We make returning products easy. Follow the steps below to request a return.
        </p>

        <div className="space-y-6">
          {returnSteps.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
