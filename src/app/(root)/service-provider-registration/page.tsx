"use client";

import { useState } from "react";

export default function ServiceRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration submitted!"); // Replace with API call
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <section className="bg-white shadow-lg rounded-xl p-10 max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Service Zone with OsMan
        </h1>
        <p className="text-lg text-center mb-8">
          Service Anything, Anytime, Anywhere
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Service Type</option>
            <option value="IT Services">IT Services</option>
            <option value="Marketing & Consultancy">Marketing & Consultancy</option>
            <option value="Repair & Maintenance">Repair & Maintenance</option>
            <option value="Logistics & Transportation">Logistics & Transportation</option>
          </select>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Join as Service Provider
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500 text-sm">
          Already registered? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </section>
    </div>
  );
}
