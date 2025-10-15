// app/about/page.jsx  (Next.js App Router)
import Head from "next/head";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { label: "Registered Farmers", value: 4300 },
    { label: "Total Sellers", value: 1250 },
    { label: "Products Listed", value: 18400 },
    { label: "Countries Reached", value: 6 },
  ];

  const team = [
    {
      name: "Aminul Islam",
      role: "Founder & CEO",
      bio: "Founder of Amvenix and President of Global Community Organization (GCO). Leads strategy, partnerships, and vision.",
      image: "/images/team/aminul.jpg",
    },
    {
      name: "Md. Asif Iqbal",
      role: "Head of Digital Marketing",
      bio: "Digital marketer & content creator driving growth and storytelling.",
      image: "/images/team/asif.jpg",
    },
    {
      name: "Sadia Rahman",
      role: "Operations Lead",
      bio: "Manages logistics, partner relations and vendor onboarding.",
      image: "/images/team/sadia.jpg",
    },
  ];

  const timeline = [
    { year: "2008", event: "Global Community Organization (GCO) founded" },
    { year: "2023", event: "Concept of Amvenix born under GCO" },
    { year: "2024", event: "Amvenix officially launched" },
    { year: "2025", event: "First 1000+ verified farmers onboarded" },
  ];

  const partners = [
    { name: "Global Community Organization", logo: "/images/partners/gco.png" },
    { name: "AgriTech BD", logo: "/images/partners/agritech.svg" },
    { name: "Green Logistics", logo: "/images/partners/logistics.svg" },
  ];

  return (
    <>
      <Head>
        <title>About — Amvenix</title>
        <meta
          name="description"
          content="Learn about Amvenix — a global agri-commerce platform empowering farmers, traders, and agri-businesses to connect and grow together."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-green-700">Amvenix</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Amvenix is a next-generation agricultural marketplace connecting farmers, sellers,
              and buyers directly to national and global markets—ensuring fair trade,
              transparency, and sustainability.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="/signup"
                className="px-6 py-3 bg-green-700 text-white font-medium rounded-xl shadow hover:bg-green-800"
              >
                Join as Seller
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow">
            <Image
              src="/images/about-amvenix.png"
              alt="Amvenix marketplace"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-green-800">Our Mission</h2>
            <p className="mt-3 text-gray-700">
              Empower farmers and agri-entrepreneurs with a trusted platform ensuring better
              prices, faster sales, and global reach.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-green-800">Our Vision</h2>
            <p className="mt-3 text-gray-700">
              Become a global leader in sustainable agri-commerce, connecting millions of
              producers and buyers.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Core Values</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Transparency", "Open and honest transactions."],
              ["Sustainability", "Promoting environmentally friendly farming."],
              ["Innovation", "Leveraging technology to improve markets."],
              ["Empowerment", "Helping small farmers access global markets."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-green-700">{title}</h4>
                <p className="text-gray-600 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
              <div className="text-3xl font-bold text-green-800">{s.value.toLocaleString()}</div>
              <div className="mt-2 text-gray-700">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Journey</h3>
          <div className="mt-6 border-l-4 border-green-200 pl-6 space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-7 top-1 w-5 h-5 bg-green-600 rounded-full"></div>
                <h4 className="font-semibold text-green-700">{t.year}</h4>
                <p className="text-gray-700">{t.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Team</h3>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-5 shadow hover:shadow-md transition">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-3">
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover" }} />
                </div>
                <h4 className="font-semibold text-green-700 text-center">{member.name}</h4>
                <p className="text-sm text-gray-500 text-center">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900">Our Partners</h3>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                <div className="relative w-20 h-10">
                  <Image src={p.logo} alt={p.name} fill style={{ objectFit: "contain" }} />
                </div>
                <p className="text-sm text-gray-600">{p.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mt-20 bg-green-50 p-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-green-800">Collaborate with Amvenix</h3>
            <p className="mt-2 text-gray-700">We welcome partnerships with farmers, businesses, and funders worldwide.</p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <a href="mailto:info@amvenix.com" className="px-6 py-3 bg-green-700 text-white rounded-xl font-medium shadow">Email Us</a>
            <a href="/contact" className="px-6 py-3 border border-green-200 rounded-xl hover:bg-white">Contact Form</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-gray-500 text-sm text-center border-t pt-6">
          © {new Date().getFullYear()} Amvenix — All Rights Reserved.
        </footer>
      </main>
    </>
  );
}
