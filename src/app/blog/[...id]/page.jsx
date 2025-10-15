// app/blog/page.jsx
import Image from "next/image";

export const metadata = {
  title: "Amvenix Blog",
  description: "Read the latest news, tips, and insights about agriculture, e-commerce, and marketplace trends from Amvenix.",
};

// Sample blog posts data
const blogs = [
  {
    id: 1,
    title: "Top 5 Tips for Small Farmers to Increase Profit",
    date: "2025-10-01",
    excerpt: "Learn how small farmers can maximize profit with simple strategies and efficient crop management.",
    image: "/images/blog/blog1.jpg",
    category: "Farming Tips",
  },
  {
    id: 2,
    title: "How Digital Marketplaces are Transforming Agriculture",
    date: "2025-09-20",
    excerpt: "Discover how online platforms like Amvenix connect farmers and buyers globally, improving trade and transparency.",
    image: "/images/blog/blog2.jpg",
    category: "Marketplace",
  },
  {
    id: 3,
    title: "Sustainable Farming Practices for 2025",
    date: "2025-09-10",
    excerpt: "Sustainable methods to increase crop yield, reduce waste, and protect the environment for future generations.",
    image: "/images/blog/blog3.jpg",
    category: "Sustainability",
  },
];

export default function BlogPage() {
  const categories = ["All", "Farming Tips", "Marketplace", "Sustainability"];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Amvenix Blog</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Stay updated with the latest news, tips, and insights on agriculture, marketplaces, and sustainability.
        </p>
      </section>

      {/* Categories */}
      <section className="mb-10 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-green-50 hover:border-green-500 text-gray-700"
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Blog Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-green-700 font-semibold">{blog.category}</span>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="mt-2 text-gray-600 text-sm">{blog.excerpt}</p>
              <p className="mt-4 text-gray-400 text-xs">{blog.date}</p>
              <a
                href={`/blog/${blog.id}`}
                className="mt-4 inline-block px-4 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-16 bg-green-50 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-semibold text-green-800">Stay Connected</h3>
        <p className="mt-2 text-gray-700">Subscribe to Amvenix Blog for the latest updates and tips on agriculture and marketplaces.</p>
        <form className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm text-center border-t pt-6">
        © {new Date().getFullYear()} Amvenix — All Rights Reserved.
      </footer>
    </main>
  );
}
