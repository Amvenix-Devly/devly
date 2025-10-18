"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Hero Banners */
  
  const heroBanners = [
    "/images/banner/banner1.jpg",
    "/images/banner/banner2.jpg",
    "/images/banner/banner3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

/** Navbar Menu */
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Categories",
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
    { name: "StockTrader", link: "/stocktrader" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  /** Categories */
  const categories = [
    { name: "Agriculture & Agro Products", icon: "🧺", image: "/images/categories/agriculture.jpg" },
    { name: "Industrial & Machinery", icon: "🏭", image: "/images/categories/machinery.jpg" },
    { name: "Tools & Equipment", icon: "🧰", image: "/images/categories/tools.jpg" },
    { name: "Home & Furniture", icon: "🏠", image: "/images/categories/home.jpg" },
    { name: "Electronics & IT", icon: "💻", image: "/images/categories/electronics.jpg" },
    { name: "Service Providers", icon: "🧾", image: "/images/categories/services.jpg" },
    { name: "Stock / Bulk Supply Zone", icon: "🧑‍🌾", image: "/images/categories/stock.jpg" },
  ];
/** Features */
  const features = [
    { icon: "📈", title: "Market Place", desc: "Buy & Sell Anything, Anytime, Anywhere" },
    { icon: "💹", title: "Stock Business", desc: "Stock Anything, Anytime, Anywhere" },
    { icon: "🔒", title: "Service Zone", desc: "Service Anything, Anytime, Anywhere" },
  ];


  /** Featured Suppliers */
  const suppliers = [
    { name: "Agro Supplier Rubel", rating: 4.9, image: "/images/suppliers/supplier1.jpg" },
    { name: "Tech Solutions Ltd.", rating: 4.8, image: "/images/suppliers/supplier2.jpg" },
    { name: "Furniture World", rating: 4.7, image: "/images/suppliers/supplier3.jpg" },
  ];

  /** Services */
  const services = [
    { name: "Web Design & IT", image: "/images/services/web.jpg" },
    { name: "Marketing & Consultancy", image: "/images/services/marketing.jpg" },
    { name: "Repair & Maintenance", image: "/images/services/repair.jpg" },
    { name: "Logistics & Transportation", image: "/images/services/logistics.jpg" },
  ];

  /** Stock / B2B Deals */
  const stockDeals = [
    { name: "Garlic", price: "$20", quantity: "100kg", MOQ: "50kg", image: "/images/products/garlic.png" },
    { name: "Wheat", price: "$15", quantity: "200kg", MOQ: "100kg", image: "/images/products/wheat.png" },
    { name: "Onion", price: "$10", quantity: "150kg", MOQ: "70kg", image: "/images/products/onion.png" },
  ];

  /** Testimonials */
  const testimonials = [
    {
      text: "OsMan এর মাধ্যমে আমি দেশের বাইরে প্রথম অর্ডার পেয়েছি — ধন্যবাদ টিম OsMan!",
      author: "মো. রুবেল, Agro Supplier",
    },
    {
      text: "Stock deals খুব সহজ হয়েছে OsMan দিয়ে, Bulk supply এখন অনেক smooth।",
      author: "Tech Solutions Ltd.",
    },
  ];

return (
  <div className="bg-gray-50 font-sans">
    {/* ================= Header ================= */}
    
      {/* ================= Hero Banner ================= */}
<section className="relative w-full h-[500px]">
  {/* ফিক্সড ব্যানার */}
  <Image
    src="/images/banner/banner3.jpg"
    alt="Hero Banner"
    fill
    className="object-cover"
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Grow Your Business with OsMan
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-2xl">
      Connect with verified buyers, suppliers, and service providers worldwide.
    </p>
    <div className="flex gap-4">
      <Link
        href="/create-stock"
        className="bg-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Start Selling & Stock
      </Link>
      <Link
        href="/deals"
        className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
      >
        Explore Categories
      </Link>
    </div>
    <div className="flex gap-6 mt-6 text-sm md:text-base">
      <span>✅ Verified Suppliers</span>
      <span>🔒 Secure Transactions</span>
      <span>🕒 24/7 Support</span>
    </div>
  </div>
</section>

{/* Features Section */}
      <section className="py-16 px-16 md:px-36 text-center">
        <h2 className="text-3xl font-bold mb-10">One Platform for All Business & Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Link
              href={
                f.title === "Market Place"
                  ? "/marketplace"
                  : f.title === "Stock Business"
                  ? "/stock-business"
                  : f.title === "Service Zone"
                  ? "/service-zone"
                  : "#"
              }
              key={i}
              className="block"
            >
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= Category Highlights ================= */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-lg shadow hover:shadow-lg transition text-center p-4 cursor-pointer">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h3 className="font-semibold">{cat.name}</h3>
              <Image src={cat.image} alt={cat.name} width={80} height={80} className="mx-auto mt-2 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= Featured Suppliers ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Top Verified Stock Trader</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suppliers.map((s) => (
              <div key={s.name} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
                <Image src={s.image} alt={s.name} width={120} height={120} className="mx-auto rounded-full" />
                <h3 className="font-semibold mt-4">{s.name}</h3>
                <p className="text-yellow-500">⭐ {s.rating}</p>
                <Link href="/sellers" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Visit Store</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Featured Suppliers ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Top Verified Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suppliers.map((s) => (
              <div key={s.name} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
                <Image src={s.image} alt={s.name} width={120} height={120} className="mx-auto rounded-full" />
                <h3 className="font-semibold mt-4">{s.name}</h3>
                <p className="text-yellow-500">⭐ {s.rating}</p>
                <Link href="/sellers" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Visit Store</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Services Marketplace ================= */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Services Marketplace</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
              <Image src={s.image} alt={s.name} width={120} height={80} className="mx-auto mb-2 rounded" />
              <h3 className="font-semibold">{s.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Stock / B2B Deals ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Bulk & B2B Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stockDeals.map((d) => (
              <div key={d.name} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                <Image src={d.image} alt={d.name} width={120} height={120} className="mx-auto mb-2 rounded" />
                <h3 className="font-semibold">{d.name}</h3>
                <p>Qty: {d.quantity}</p>
                <p>Price: {d.price}</p>
                <p>MOQ: {d.MOQ}</p>
                <Link href="/stocktrader" className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Order Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose OsMan ================= */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose OsMan?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            "✅ Verified Suppliers & Buyers",
            "🔒 Safe & Secured Payment",
            "📦 Smart Logistics Support",
            "🌍 Global Trade Support",
            "🤝 Partnership & Promotion Assistance",
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">{item}</div>
          ))}
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="italic">"{t.text}"</p>
              <p className="mt-4 font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Promotional CTA ================= */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join OsMan Today</h2>
        <p className="mb-6">Start selling, explore deals, or find reliable suppliers worldwide.</p>
        <div className="flex justify-center gap-4">
          <Link href="/create-account" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Join Free</Link>
          <Link href="/marketplace" className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">Explore Deals</Link>
        </div>
      </section>

      {/* ================= Blog / Insights ================= */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Insights & Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "How to Start Your Online Stock Business in Bangladesh", link: "#" },
            { title: "Top 5 Export-Ready Products from Local Farmers", link: "#" },
            { title: "Boost Your Service Business Online", link: "#" },
          ].map((b, idx) => (
            <Link key={idx} href={b.link} className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold">{b.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
