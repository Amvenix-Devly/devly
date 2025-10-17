"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JoinSupplierPage() {
  return (
    <div className="bg-gray-50 font-sans">
  {/* Navbar */}
  <nav className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <div className="flex items-center">
        <Link href="/">
          
            <Image
              src="/images/logo/osman-logo.png"
              alt="osman"
              width={140}
              height={40}
            />
          
        </Link>
      </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-yellow-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            Start Your Stock Business with OsMan
          </h1>
          <p className="text-yellow-800 text-lg md:text-xl mb-8">
            Join thousands of suppliers and wholesalers expanding their business globally.
            We offer easy onboarding, global reach, secure transactions, marketing support,
            and amazing growth opportunities!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="#"
              className="bg-yellow-600 text-white px-6 py-3 rounded shadow hover:bg-yellow-700 transition"
            >
              Join as Supplier
            </Link>
            <Link
              href="#"
              className="bg-white text-yellow-600 border border-yellow-600 px-6 py-3 rounded shadow hover:bg-yellow-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative h-80 md:h-[400px] max-w-6xl mx-auto">
          <Image
            src="/images/supplier/supplier-banner.jpg"
            alt="Stock Business"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      {/* Steps / Benefits Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
          <h3 className="font-bold text-xl mb-2">Easy Onboarding</h3>
          <p className="text-gray-600">
            Register and list your products in minutes, reach customers globally.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
          <h3 className="font-bold text-xl mb-2">Secure Transactions</h3>
          <p className="text-gray-600">
            Enjoy safe and reliable payments for every order you receive.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
          <h3 className="font-bold text-xl mb-2">Marketing Support</h3>
          <p className="text-gray-600">
            Promote your products with OsMan's marketing and global reach.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About OsMan</h3>
            <p className="text-gray-500 text-sm">
              OsMan is a global online marketplace connecting farmers and businesses with customers worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="/">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} OsMan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
