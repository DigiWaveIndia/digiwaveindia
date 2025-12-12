import Link from 'next/link';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import ProcessTimeline from '../components/shared/ProcessTimeline';

export const metadata = {
  title: 'Services - DigiWave India | 3-Tier Digital Growth Model',
  description:
    'Smart Websites, Customer Engagement Systems, and Mobile Apps for Indian small businesses. Affordable, fast, and AI-powered solutions.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Choose the right digital solution for your business growth
            </p>
          </div>

          {/* 3-Tier Overview */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ⭐ OUR APPROACH
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                  Our 3-Tier Digital Growth Model
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto font-inter">
                  We believe every business is unique. That's why we've created
                  a progressive 3-tier system that grows with your business
                  needs and budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">
                    Smart Website
                  </h3>
                  <p className="text-gray-300 font-inter text-sm">
                    Perfect starting point for businesses going digital. Modern,
                    fast, and mobile-friendly websites with PWA capabilities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">
                    Engagement Layer
                  </h3>
                  <p className="text-gray-300 font-inter text-sm">
                    Keep customers coming back with WhatsApp automation, loyalty
                    systems, and smart notifications without needing an app.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins">
                    Full Mobile Apps
                  </h3>
                  <p className="text-gray-300 font-inter text-sm">
                    Complete Android & iOS apps for businesses requiring maximum
                    customer engagement and advanced features.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg text-cyan-400 font-inter">
                  💡 <strong>Smart Approach:</strong> Start with Tier 1, then
                  upgrade as your business grows. No need to over-invest from
                  day one.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 1 */}
          <div id="tier1" className="mb-20 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-500">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 md:p-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-green-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                      Tier 1 — Smart Website (PWA Enabled)
                    </h2>
                    <p className="text-green-50 text-lg mt-1">
                      Your Digital Foundation
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                      What You Get
                    </h3>
                    <ul className="space-y-3 text-gray-700 font-inter">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>Modern, mobile-first website</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>
                          Progressive Web App (PWA) — "Add to Home Screen"
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>SEO-optimized pages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>WhatsApp integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>AI-generated content</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>Booking / Inquiry / Order forms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span>Business Admin Dashboard (Basic)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• View inquiries</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Manage bookings</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Website analytics</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Customer list export</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="mb-6">
                      <img
                        src="/images/smart_website.png"
                        alt="Smart Website"
                        className="w-full h-80 object-contain rounded-lg"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                      Who It's For
                    </h3>
                    <p className="text-gray-700 font-inter mb-6">
                      Shops, clinics, salons, coaching centers, real estate,
                      freelancers, and new businesses wanting to go digital.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-green-900 mb-2 font-poppins">
                        Why It Matters
                      </h4>
                      <p className="text-green-800 font-inter">
                        Your website is the first impression. A fast, modern
                        site builds trust and helps customers reach you easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div id="tier2" className="mb-20 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-500">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 md:p-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                      Tier 2 — Engagement Layer
                    </h2>
                    <p className="text-blue-50 text-lg mt-1">
                      Bring Customers Back
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                      What You Get
                    </h3>
                    <ul className="space-y-3 text-gray-700 font-inter">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>
                          WhatsApp automation (offers, reminders, updates)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Push notifications (via PWA)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Loyalty & rewards system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Digital coupons</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Mini CRM system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Subscription reminders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Feedback automation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl mt-1">✓</span>
                        <span>Business Admin Dashboard (Advanced)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Customer insights</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Repeat customer tracking</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">
                          • Service/product analytics
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Revenue trends</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="mb-6">
                      <img
                        src="/images/engagement_layer.png"
                        alt="Engagement Layer"
                        className="w-full h-80 object-contain rounded-lg"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                      Who It's For
                    </h3>
                    <p className="text-gray-700 font-inter mb-6">
                      Businesses needing repeat customers: gyms, salons,
                      coaching centers, restaurants, grocery, services.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-2 font-poppins">
                        Why It Matters
                      </h4>
                      <p className="text-blue-800 font-inter">
                        Most businesses don't need an app — they need
                        engagement. This layer keeps customers coming back again
                        and again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div id="tier3" className="mb-20 scroll-mt-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 md:p-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-purple-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                      Tier 3 — Full Mobile Apps (Android & iOS)
                    </h2>
                    <p className="text-purple-50 text-lg mt-1">
                      Maximum Engagement
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                      What You Get
                    </h3>
                    <ul className="space-y-3 text-gray-700 font-inter">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl mt-1">✓</span>
                        <span>Fully custom apps</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl mt-1">✓</span>
                        <span>Secure logins, payments, bookings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl mt-1">✓</span>
                        <span>Advanced automation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl mt-1">✓</span>
                        <span>Personalized notifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl mt-1">✓</span>
                        <span>AI-powered recommendations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-500 text-xl mt-1">✓</span>
                        <span>Full Business Management Dashboard</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Live bookings overview</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Daily/weekly forecast</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Staff performance</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">
                          • Customer behaviour patterns
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="ml-6">• Automated sales reports</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="mb-6">
                      <img
                        src="/images/mobile_apps.png"
                        alt="Mobile Apps"
                        className="w-full h-80 object-contain rounded-lg"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                      Who It's For
                    </h3>
                    <p className="text-gray-700 font-inter mb-4">
                      Businesses requiring frequent user activity:
                    </p>
                    <ul className="space-y-2 text-gray-700 font-inter ml-4 mb-6">
                      <li>• On-demand delivery</li>
                      <li>• Fitness & coaching apps</li>
                      <li>• Grocery & pharmacy</li>
                      <li>• Subscription businesses</li>
                      <li>• Transport & service apps</li>
                    </ul>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-purple-900 mb-2 font-poppins">
                        Why It Matters
                      </h4>
                      <p className="text-purple-800 font-inter">
                        Apps boost brand loyalty, retention, and professional
                        credibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-gray-900">
              Our Simple Process
            </h2>
            <ProcessTimeline />
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Not Sure Which Tier Is Right for You?
            </h2>
            <p className="text-xl mb-8 font-inter">
              Let's discuss your business needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
