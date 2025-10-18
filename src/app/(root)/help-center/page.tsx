"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HelpCenterPage() {
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

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button on the top right corner, fill in your details, and submit the form. You will receive a confirmation email.",
    },
    {
      question: "How can I list my products?",
      answer:
        "After logging in, go to your Dashboard, click 'Add Product', fill in the product details, and submit for approval.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Go to the Login page and click on 'Forgot Password'. Follow the instructions to reset your password via email.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact us via the Contact page or email us at support@osman.com. Our team will respond within 24 hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      
      {/* Help Center Section */}
      <main className="flex-grow max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Help Center
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Find answers to the most common questions and get help quickly.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-700 focus:outline-none"
              >
                {faq.question}
                <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

          </div>
  );
}
