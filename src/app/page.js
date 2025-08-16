'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-white text-[#4A4A4A]">
      {/* Hero Section */}
      <section className="bg-[#F9FAFB] py-32 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-[#E63946] tracking-tight mb-4">
          Smarter Decisions, Powered by Real-Time Reporting
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Built for multi-location businesses in Hong Kong. Stay agile, informed, and ahead — every single day.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/login" className="bg-[#E63946] text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            Request Access
          </Link>
          <Link href="/contact" className="border border-[#E63946] text-[#E63946] px-6 py-3 rounded hover:bg-orange-50 transition">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#E63946] mb-2">What You Gain with Real-Time Reporting</h2>
        <p className="text-center mb-12">
          Our platform delivers clarity, speed, and control — so you can lead with confidence.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">📊 Real-Time Reporting</h3>
            <p>Instant visibility into daily sales, performance metrics, and campaign results across all locations.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📁 Centralized Dashboard</h3>
            <p>One unified view for all branches — no spreadsheets, no email chains, just clarity.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🎯 Dynamic Goal Adjustment</h3>
            <p>Modify sales targets and promotional strategies on the fly based on live data.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🔍 Actionable Insights</h3>
            <p>Highlight trends, anomalies, and opportunities with automated summaries and visualizations.</p>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="bg-[#F9FAFB] py-32 px-6">
        <h2 className="text-4xl font-extrabold text-[#E63946] tracking-tight text-center mb-2">
          Why Timing Matters More Than Ever
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Hong Kong businesses face rising costs, shifting consumer habits, and fierce competition. Here{"'"}s why real-time reporting is no longer optional.
        </p>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div>
            <p className="font-semibold">
              📉 Retail sales in Hong Kong fell 6.5% YoY in Q1 2025<sup><a href="#source1" className="text-[#007BFF]">1</a></sup>.
            </p>
            <p className="mt-2">
              With shifting consumer behavior and cross-border competition, businesses need faster insights to adapt and stay competitive.
            </p>
          </div>
          <div>
            <p className="font-semibold">
              💸 Operating costs now challenge nearly 60% of SMEs<sup><a href="#source2" className="text-[#007BFF]">2</a></sup>, with profitability under pressure.
            </p>
            <p className="mt-2">
              Our platform helps reduce waste and optimize campaigns by surfacing actionable data every day.
            </p>
          </div>
          <div>
            <p className="font-semibold">
              🚶‍♂️ HK$55.7B in local spending is flowing into Mainland China<sup><a href="#source3" className="text-[#007BFF]">3</a></sup>.
            </p>
            <p className="mt-2">
              We help businesses respond in real time to retain customers and adjust strategies before it{"'"}s too late.
            </p>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-6 text-xs text-gray-400 text-center mb-20">
          Sources:
          <a
            href="https://www.savills.com.hk/insight-and-opinion/savills-news/222954/hong-kong-s-retail-sector-faces-pressure-in-q1-2025-while-seeking-new-opportunities-in-structural-transformation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E63946] mx-1"
          >
            Savills
          </a>
          ·
          <a
            href="https://www.qbe.com/hk/en/newsroom/press-releases/qbe-hong-kong-sme-survey-results-business-outlook-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E63946] mx-1"
          >
            QBE
          </a>
          ·
          <a
            href="https://thediplomat.com/2025/05/behind-the-boom-in-hong-kongers-heading-north/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#E63946] mx-1"
          >
            The Diplomat
          </a>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#E63946] mb-2">Built for Real-World Impact</h2>
        <p className="text-center mb-12">
          Whether you{"'"}re managing restaurants, retail stores, or service centers — our platform adapts to your needs.
        </p>
        <div className="space-y-8 mb-20">
          {[
            { icon: '🍽️', title: 'Restaurant Chains', desc: 'Track hourly sales, compare branch performance, and adjust staffing or promotions in real time to reduce waste and optimize labor.' },
            { icon: '🛍️', title: 'Retail Chains', desc: 'Receive live updates on daily targets. HQ can push new goals or flash campaigns based on performance trends.' },
            { icon: '🏢', title: 'Mini-Storage Rental Chains', desc: 'Report daily rental activity. HQ sees occupancy trends and adjusts pricing or marketing campaigns instantly.' },
            { icon: '🧴', title: 'Beauty & Wellness Chains', desc: 'Monitor service bookings and product sales. Identify top-performing treatments and replicate success across locations.' },
            { icon: '📚', title: 'Education & Tutoring Centers', desc: 'Track student enrollment, attendance, and revenue per location. Adjust curriculum offerings or promotions based on demand.' },
            { icon: '🚚', title: 'Logistics & Delivery Services', desc: 'Monitor delivery volumes and route efficiency across districts. Adjust fleet deployment or pricing dynamically.' },
          ].map(({ icon, title, desc }) => (
            <div key={title}>
              <h3 className="text-xl font-semibold mb-2">{icon} {title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="about-contact" className="py-32 px-6 bg-gray-100 mb-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Tango</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Tango helps multi-location businesses in Hong Kong make smarter decisions with real-time reporting. Built for agility, clarity, and growth.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4 max-w-md mx-auto">
            <input type="text" placeholder="Your name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Your email" className="w-full border p-2 rounded" />
            <textarea placeholder="Your message" className="w-full border p-2 rounded h-32" />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">Send</button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#E63946] py-32 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Let’s Build Smarter, Together</h2>
        <p className="text-lg mb-8 mb-20">We{"'"}re onboarding select partners personally. Reach out and we{"'"}ll get you set up.</p>
        <Link href="/login" className="bg-white text-[#E63946] px-6 py-3 rounded hover:bg-orange-100 transition">
          Request Access
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] py-12 px-6 text-center text-sm text-[#4A4A4A] mt-20">
        <p>&copy; 2025 Tango Technologies. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy" className="underline text-[#007BFF] hover:text-[#E63946] transition">
            Privacy
          </Link>
          <Link href="/terms" className="underline text-[#007BFF] hover:text-[#E63946] transition">
            Terms
          </Link>
          <Link href="/contact" className="underline text-[#007BFF] hover:text-[#E63946] transition">
            Contact
          </Link>
        </div>
      </footer>

      
    </main>
  );
}