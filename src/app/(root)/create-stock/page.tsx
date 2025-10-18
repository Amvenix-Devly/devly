"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JoinSupplierPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Your application has been submitted successfully!");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
     
      {/* ✅ Main Section */}
      <section className="flex-1 bg-yellow-50 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">
              Start Your Stock Business with <span className="text-yellow-700">OsMan</span>
            </h2>
            <p className="text-yellow-800 mb-6 text-justify">
              Join thousands of suppliers and wholesalers expanding their business globally through OsMan. 
              We provide a trusted online platform with marketing support, secured transactions, 
              and logistics assistance to help your business grow faster than ever before.
            </p>
            <Image
              src="/images/supplier/supplier-banner.jpg"
              alt="Supplier Banner"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-yellow-900 mb-6 text-center">Join as a Supplier</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
                required
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              >
                <option value="">Select Product Category</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Electronics">Electronics</option>
                <option value="Machinery">Machinery</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Clothing">Clothing</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us briefly about your business..."
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-yellow-300 rounded-full opacity-20"></div>
      </section>

    </div>
  );
}
