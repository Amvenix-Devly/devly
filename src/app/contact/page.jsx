
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const menuItems = [
		{ name: "Home", link: "/home" },
		{
			name: "Categories",
			link: "#",
			submenu: [
          { name: "Agriculture", link: "/agriculture" },
        { name: "Electronics", link: "/electronics" },
        { name: "Clothing", link: "/clothing" },
        { name: "Home & Kitchen", link: "/kitchen" },
        { name: "Machinery", link: "/machinery" },
      ],
	
		},
    { name: "Deals", link: "/deals" },
    { name: "Suppliers", link: "/Suppliers" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
	];
	return (
		<div className="bg-gray-50 font-sans">
			{/* Navbar */}
			<nav className="bg-white shadow sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
					<div className="flex items-center">
						<Image
							src="/images/logo/amvenix-logo.png"
							alt="Amvenix"
							width={140}
							height={40}
						/>
					</div>

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
					</div>

					<div className="md:hidden">
						<button onClick={() => setMobileOpen(!mobileOpen)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				{mobileOpen && (
					<div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1">
						{menuItems.map((item, i) => (
							<div key={i}>
								<a
									href={item.link}
									className="block text-gray-700 hover:text-blue-600 font-medium"
								>
									{item.name}
								</a>
								{item.submenu && (
									<div className="pl-4">
										{item.submenu.map((sub, idx) => (
											<a
												key={idx}
												href={sub.link}
												className="block text-gray-600 py-1"
											>
												{sub.name}
											</a>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section className="relative w-full h-[350px] md:h-[400px]">
				<Image
					src="/images/banner/contact-banner.jpg"
					alt="Contact Amvenix"
					fill
					style={{ objectFit: "cover" }}
				/>
				<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
					<h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
						Contact Us
					</h1>
					<p className="text-white text-lg md:text-xl max-w-2xl">
						We’re here to help! Reach out for business, support, or partnership inquiries.
					</p>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="max-w-4xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-start">
				{/* Contact Form */}
				<div className="bg-white p-8 rounded-xl shadow-md">
					<h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
					<form className="space-y-4">
						<div>
							<label className="block text-gray-700 mb-1">Name</label>
							<input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
						</div>
						<div>
							<label className="block text-gray-700 mb-1">Email</label>
							<input type="email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@email.com" required />
						</div>
						<div>
							<label className="block text-gray-700 mb-1">Message</label>
							<textarea className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5} placeholder="How can we help you?" required></textarea>
						</div>
						<button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">Send Message</button>
					</form>
				</div>
				{/* Contact Info */}
				<div className="flex flex-col gap-8">
					<div className="bg-blue-50 p-6 rounded-xl shadow flex items-center gap-4">
						<span className="text-3xl text-blue-600">📞</span>
						<div>
							<div className="font-bold text-gray-900">Phone</div>
							<div className="text-gray-700">+880 1234-567890</div>
						</div>
					</div>
					<div className="bg-green-50 p-6 rounded-xl shadow flex items-center gap-4">
						<span className="text-3xl text-green-600">✉️</span>
						<div>
							<div className="font-bold text-gray-900">Email</div>
							<div className="text-gray-700">support@amvenix.com</div>
						</div>
					</div>
					<div className="bg-yellow-50 p-6 rounded-xl shadow flex items-center gap-4">
						<span className="text-3xl text-yellow-600">📍</span>
						<div>
							<div className="font-bold text-gray-900">Address</div>
							<div className="text-gray-700">123 Amvenix Avenue, Dhaka, Bangladesh</div>
						</div>
					</div>
				</div>
			</section>

			{/* Partners */}
			<section className="bg-white py-12">
				<h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">
					Our Trusted Partners
				</h2>
				<div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
				<div className="max-w-7xl mx-auto px-4 flex overflow-x-auto space-x-8">
					{[
						"/images/partners/gco.png",
						"/images/partners/amvenix-logo.png",
						"/images/partners/agritech.jpg",
					].map((p, i) => (
						<div
							key={i}
							className="h-16 w-32 relative flex-shrink-0 grayscale hover:grayscale-0 transition"
						>
							<Image
								src={p}
								alt={`Partner ${i + 1}`}
								fill
								style={{ objectFit: "contain" }}
							/>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-50 border-t py-10">
				<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="font-bold mb-4">About Amvenix</h3>
						<p className="text-gray-500 text-sm">
							Amvenix is a trusted global marketplace connecting suppliers,
							manufacturers, and buyers for sustainable business growth.
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
							<li><a href="#">Home</a></li>
							<li><a href="#">Categories</a></li>
							<li><a href="#">Deals</a></li>
							<li><a href="#">Suppliers</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4">Follow Us</h3>
						<ul className="text-gray-500 text-sm space-y-1">
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">LinkedIn</a></li>
							<li><a href="#">Twitter</a></li>
						</ul>
					</div>
				</div>
				<div className="text-center mt-8 text-gray-400 text-sm">
					&copy; {new Date().getFullYear()} Amvenix. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
