"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export default function AddToCartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Garlic", price: 20, qty: 2, image: "/images/products/garlic.png" },
    { id: 2, name: "Wheat", price: 15, qty: 1, image: "/images/products/wheat.png" },
    { id: 3, name: "Onion", price: 10, qty: 3, image: "/images/products/onion.png" },
  ]);

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

  const handleQtyChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const value = parseInt(e.target.value);
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, qty: isNaN(value) ? 1 : value } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/osman-logo.png"
                alt="OsMan"
                width={140}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.submenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <input
              type="text"
              placeholder="Search products"
              className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link href="/addtocart" className="relative text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13L17 13M7 13h10m-6 0v6m-4-6v6" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, i) => (
              <div key={i}>
                <a href={item.link} className="block text-gray-700 hover:text-blue-600 font-medium">{item.name}</a>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((sub, idx) => (
                      <a key={idx} href={sub.link} className="block text-gray-600 py-1">{sub.name}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Cart Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded shadow overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Subtotal</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                      <td className="flex items-center gap-4 px-4 py-3">
                        <div className="w-20 h-20 relative flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill style={{ objectFit: "contain" }} />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </td>
                      <td className="text-center">${item.price}</td>
                      <td className="text-center">
                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) => handleQtyChange(e, item.id)}
                          className="w-16 border rounded px-2 py-1 text-center"
                        />
                      </td>
                      <td className="text-center font-semibold">${item.price * item.qty}</td>
                      <td className="text-center">
                        <button onClick={() => removeItem(item.id)} className="text-red-600 hover:underline">
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Order summary */}
            <div className="bg-white p-6 rounded shadow h-fit">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Items ({cartItems.length})</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer (home page style) */}
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
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">Categories</Link></li>
              <li><Link href="#">Deals</Link></li>
              <li><Link href="#">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-500 text-sm space-y-1">
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
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
