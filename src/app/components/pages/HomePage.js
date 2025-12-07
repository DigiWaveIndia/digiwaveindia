import Link from 'next/link';
import Navigation from '../shared/Navigation';
import Footer from '../shared/Footer';
import DashboardMockup from '../shared/DashboardMockup';
import TrustBadges from '../shared/TrustBadges';
import FeatureShowcase from '../shared/FeatureShowcase';
import ResponsiveDevicesMockup from '../shared/ResponsiveDevicesMockup';
import EngagementMockup from '../shared/EngagementMockup';
import MobileAppsMockup from '../shared/MobileAppsMockup';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
                Empowering India's Small Businesses to Go Digital — 
                <span className="block mt-2 text-cyan-400">Fast, Affordable & Smart</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-4 text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
                Websites, mini-apps, automation, and business dashboards that help small businesses grow with ease.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-orange-400 mb-10">
                Your business — visible, measurable, predictable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Book a Free Demo
                </Link>
                <a href="https://wa.me/919281040446" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all flex items-center gap-2">
                  <span>💬</span> Talk to Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
            </svg>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.08),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  🎯 OUR MISSION
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gray-900">
                  Making Technology Accessible for Every Entrepreneur
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                  We transform how local enterprises embrace the digital world through intelligent solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-7 shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-3 font-poppins text-gray-900">Speed to Market</h3>
                  <p className="text-gray-600 font-inter leading-relaxed">Launch your online presence in days with AI-powered tools and rapid deployment</p>
                </div>
                
                <div className="bg-white rounded-xl p-7 shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3 font-poppins text-gray-900">Data-Driven Insights</h3>
                  <p className="text-gray-600 font-inter leading-relaxed">Understand customer patterns, forecast revenue, and optimize operations effortlessly</p>
                </div>
                
                <div className="bg-white rounded-xl p-7 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-3 font-poppins text-gray-900">Smart Automation</h3>
                  <p className="text-gray-600 font-inter leading-relaxed">Reduce manual work with WhatsApp bots, reminders, and intelligent workflows</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-10 md:p-12 shadow-2xl">
                <div className="text-center mb-6">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4 font-poppins leading-relaxed">
                    Affordable. Professional. Built for India.
                  </p>
                  <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto">
                    No jargon. No complexity. Just powerful solutions designed specifically for Indian SMBs.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg">
                    <span>🇮🇳</span>
                    <span>When local businesses thrive, India thrives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Tier Model Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ OUR APPROACH
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins text-gray-900">
                Our 3-Tier Digital Growth Model
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">1</span>
                    <h3 className="text-2xl font-bold font-poppins">Smart Website</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <ResponsiveDevicesMockup />
                  </div>
                  <p className="text-gray-700 font-inter mb-4">
                    Responsive design that looks great on all devices. Perfect for businesses starting their digital journey.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>✓ Works on Mobile, Tablet & Desktop</li>
                    <li>✓ PWA "Add to Home Screen"</li>
                    <li>✓ Business Admin Dashboard</li>
                  </ul>
                  <Link href="/services#tier1" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">2</span>
                    <h3 className="text-2xl font-bold font-poppins">Engagement Layer</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <EngagementMockup />
                  </div>
                  <p className="text-gray-700 font-inter mb-4">
                    Keep customers coming back without needing a native app.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>✓ WhatsApp automation</li>
                    <li>✓ Advanced Dashboard with insights</li>
                    <li>✓ Loyalty & CRM system</li>
                  </ul>
                  <Link href="/services#tier2" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">3</span>
                    <h3 className="text-2xl font-bold font-poppins">Full Mobile Apps</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <MobileAppsMockup />
                  </div>
                  <p className="text-gray-700 font-inter mb-4">
                    For businesses requiring high-frequency interactions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>✓ Full Android & iOS apps</li>
                    <li>✓ Business Intelligence Dashboard</li>
                    <li>✓ AI-powered recommendations</li>
                  </ul>
                  <Link href="/services#tier3" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Business Dashboard Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                📊 Business Intelligence Dashboard
              </h2>
              <p className="text-xl text-gray-300 font-inter">
                Your business — simplified.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-white mb-6 font-inter">
                  Our smart dashboard helps you understand:
                </p>
                <div className="space-y-4">
                  {[
                    'Upcoming appointments & bookings',
                    'Daily & weekly business forecast',
                    'Peak time analysis',
                    'Customer history',
                    'Sales & revenue trends',
                    'Staff performance (optional)'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">✓</span>
                      <span className="text-white font-inter">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg mt-6 text-orange-400 font-semibold font-poppins">
                  Designed to help small-business owners make smarter, faster decisions.
                </p>
              </div>
              <div>
                <DashboardMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <FeatureShowcase />
          </div>
        </section>

        {/* Why Choose DigiWave */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-gray-900">
              🌟 Why Choose DigiWave India?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🤖', title: 'AI-Powered Tools', desc: 'Automation using cutting-edge AI' },
                { icon: '⚡', title: 'Fast Delivery', desc: 'Websites in days, apps in weeks' },
                { icon: '💰', title: 'Affordable Pricing', desc: 'Designed for Indian SMBs' },
                { icon: '🎨', title: 'Modern UI/UX', desc: 'Clean & beautiful designs' },
                { icon: '📱', title: 'PWA + WhatsApp + App', desc: 'Complete ecosystem expertise' },
                { icon: '🔒', title: 'Transparent Pricing', desc: 'Clear communication & costs' },
                { icon: '🤝', title: 'Lifetime Support', desc: 'Support options available' },
                { icon: '✓', title: 'Only What You Need', desc: 'No unnecessary apps' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 font-inter text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <TrustBadges />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              🔥 Ready to Transform Your Business Digitally?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 font-inter max-w-3xl mx-auto">
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg">
                Book a Free Demo
              </Link>
              <a href="https://wa.me/919281040446" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all flex items-center gap-2">
                <span>💬</span> WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
