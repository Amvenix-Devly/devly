"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Navbar Menu */
  const menuItems = [
    {
      name: "All Categories",
      link: "/marketplace",
      submenu: [
        { name: "Agriculture", link: "/agriculture" },
        { name: "Electronics", link: "/electronics" },
        { name: "Clothing", link: "/clothing" },
        { name: "Home-Kitchen", link: "/kitchen" },
        { name: "Machinery", link: "/machinery" },
      ],
    },
    { name: "Deals", link: "/deals" },
    { name: "Create Stock", link: "/create-stock" },
    { name: "Supplier", link: "/create-stock" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        {/* ================= Header ================= */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <Link href="/">
              <Image src="/images/logo/osman-logo.png" alt="OsMan" width={140} height={40} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, i) => (
                <div key={i} className="relative group">
                  <Link href={item.link} className="text-gray-700 hover:text-blue-600 font-medium">
                    {item.name}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search..."
                className="border px-15 py-1 rounded-md focus:ring-2 focus:ring-blue-500"
              />

              {/* Sign In / Create Account */}
              <Link href="/" className="text-blue-600 font-semibold">Sign In</Link>
              <Link href="/create-account" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                Create Account
              </Link>

              {/* Cart */}
              <Link href="/marketplace" className="text-gray-700 hover:text-blue-600 text-2xl">🛒</Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Cart */}
              <Link href="/marketplace" className="text-gray-700 text-2xl">🛒</Link>

              {/* Hamburger Button */}
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileOpen && (
            <div className="md:hidden bg-white border-t px-4 py-2">
              {menuItems.map((item, i) => (
                <div key={i} className="py-2 border-b last:border-b-0">
                  <Link href={item.link} className="block text-gray-700">{item.name}</Link>
                  {item.submenu && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.submenu.map((sub, idx) => (
                        <Link key={idx} href={sub.link} className="block text-gray-600 hover:text-blue-600">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </header>

        {/* ================= Page Content ================= */}
        <main>{children}</main>

        {/* ================= Footer ================= */}
        <footer className="bg-white border-t mt-10">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-3">Get Support</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><Link href="/help-center">Help Center</Link></li>
                <li><Link href="/marketplace">Live chat</Link></li>
                <li><Link href="/about">Check order status</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/returns">Returns</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Get to know us</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><Link href="/about">About OsMan</Link></li>
                <li><Link href="/corporate-responsibility">Corporate responsibility</Link></li>
                <li><Link href="/news-center">News center</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Sell on OsMan</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><Link href="/start-stock">Start selling</Link></li>
                <li><Link href="/start-stock">Start Stock</Link></li>
                <li><Link href="/verified-supplier">Become a Verified Supplier</Link></li>
                <li><Link href="/partnerships">Partnerships</Link></li>
                 <li><Link href="/shipping">Shipping</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex space-x-4 text-gray-600 text-xl">
                <Link href=""><FaFacebook /></Link>
                <Link href="#"><FaTwitter /></Link>
                <Link href="#"><FaInstagram /></Link>
                <Link href="#"><FaLinkedin /></Link>
                <Link href="#"><FaWhatsapp /></Link>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm py-4 border-t">
            © {new Date().getFullYear()} OsMan. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
