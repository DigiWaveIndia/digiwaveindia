'use client';

import Link from 'next/link';
import Navigation from '../shared/Navigation';
import Footer from '../shared/Footer';
import TrustBadges from '../shared/TrustBadges';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Mobile Hero */}
          <div className="md:hidden relative min-h-screen hero-mobile">
            <div className="absolute inset-0 bg-slate-900/70"></div>

            <div className="relative text-center px-6 py-20">
              <div className="pt-16 mb-8">
                <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30">
                  🚀 Digital Transformation
                </span>
              </div>

              <h1 className="text-4xl font-bold font-poppins text-white mb-4">
                Empowering Small Businesses
                <span className="block text-cyan-400">to Go Digital</span>
              </h1>

              <p className="text-lg text-gray-200 mb-8">
                Fast. Affordable. Smart.
              </p>
            </div>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-xs px-6">
              <div className="space-y-3">
                <Link
                  href="/contact?service=consultation#contact-form"
                  className="btn-primary w-full block text-center"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/919281040446?text=Hi%20DigiWave%20India!%20I'm%20interested%20in%20your%20digital%20transformation%20services.%20Can%20you%20help%20me%20get%20started?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <span>💬</span> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Tablet Hero */}
          <div className="hidden md:block lg:hidden relative min-h-screen w-full flex items-start justify-center pt-40 mt-16 hero-tablet">
            <div className="absolute inset-0 bg-slate-900/75"></div>

            <div className="relative text-center px-12 py-24 max-w-4xl mx-auto mt-20">
              <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-6 py-3 rounded-full text-base font-semibold mb-8 border border-cyan-500/30 backdrop-blur-sm">
                🚀 Digital Transformation Made Simple
              </span>

              <h1 className="text-6xl font-bold font-poppins text-white mb-6 leading-tight">
                Empowering Small Businesses
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-3">
                  to Go Digital
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Fast. Affordable. Smart solutions built with enterprise-grade
                technology for Indian businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <Link
                  href="/contact?service=consultation#contact-form"
                  className="btn-primary text-center px-8 py-4 text-lg shadow-lg shadow-cyan-500/25"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/919281040446?text=Hi%20DigiWave%20India!%20I'm%20interested%20in%20your%20digital%20transformation%20services.%20Can%20you%20help%20me%20get%20started?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center flex items-center justify-center gap-2 px-8 py-4 text-lg shadow-lg"
                >
                  <span>💬</span> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Side by Side Layout */}
          <div className="hidden lg:block bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-16">
            <div className="absolute inset-0 opacity-40">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                }}
              ></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <span className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      🚀 Digital Transformation Made Simple
                    </span>
                  </div>

                  <h1 className="text-7xl font-bold font-poppins leading-tight text-slate-900">
                    Empowering Small Businesses
                    <span className="block mt-3 gradient-text">
                      to Go Digital
                    </span>
                  </h1>

                  <p className="text-2xl text-slate-600 font-inter leading-relaxed">
                    Fast. Affordable. Smart.
                    <br />
                    Built with enterprise-grade technology for Indian
                    businesses.
                  </p>

                  <div className="flex gap-4 pt-4">
                    <Link
                      href="/contact?service=consultation#contact-form"
                      className="btn-primary text-center"
                    >
                      Book Free Consultation
                    </Link>
                    <a
                      href="https://wa.me/919281040446?text=Hi%20DigiWave%20India!%20I'm%20interested%20in%20your%20digital%20transformation%20services.%20Can%20you%20help%20me%20get%20started?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-center flex items-center justify-center gap-2"
                    >
                      <span>💬</span> WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10">
                    <img
                      src="/images/digiwave_desktop.png"
                      alt="Digital transformation"
                      className="rounded-3xl shadow-2xl w-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 -mt-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                🎯 OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins text-slate-900">
                <span className="md:hidden">
                  Making Technology Accessible for Every Entrepreneur
                </span>
                <span className="hidden md:block">
                  Empowering India's Small Businesses Through Simple, Smart
                  Digital Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-inter max-w-3xl mx-auto">
                We help entrepreneurs move from offline limitations to digital
                possibilities — quickly, affordably, and confidently.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="card-premium p-6 lg:p-8 group hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-6 transition-all">
                  🌱
                </div>
                <h3 className="text-xl font-bold mb-3 font-poppins text-slate-900">
                  Transform Your Presence
                </h3>
                <p className="text-slate-600 font-inter text-sm leading-relaxed">
                  Turn your business into a modern digital brand customers can
                  discover, trust, and engage with.
                </p>
              </div>

              <div className="card-premium p-6 lg:p-8 group hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-6 transition-all">
                  🔥
                </div>
                <h3 className="text-xl font-bold mb-3 font-poppins text-slate-900">
                  Accelerate Your Growth
                </h3>
                <p className="text-slate-600 font-inter text-sm leading-relaxed">
                  Use websites, apps, automation, and dashboards to scale faster
                  without increasing workload.
                </p>
              </div>

              <div className="card-premium p-6 lg:p-8 group hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-6 transition-all">
                  ✨
                </div>
                <h3 className="text-xl font-bold mb-3 font-poppins text-slate-900">
                  Build Real Impact
                </h3>
                <p className="text-slate-600 font-inter text-sm leading-relaxed">
                  Strengthen customer relationships, improve efficiency, and
                  grow your business sustainably.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Tier Model Preview */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ OUR APPROACH
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-900">
                Our 3-Tier Digital Growth Model
              </h2>
              <p className="text-xl text-slate-600 font-inter max-w-4xl mx-auto mb-4">
                We believe every business is unique. That's why we've created a
                progressive 3-tier system that grows with your business needs
                and budget.
              </p>
              <p className="text-lg text-slate-500 font-inter max-w-3xl mx-auto">
                Choose the perfect solution for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-premium overflow-hidden group">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-white text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                      1
                    </span>
                    <h3 className="text-2xl font-bold font-poppins text-white">
                      Smart Website
                    </h3>
                  </div>
                  <p className="text-emerald-50 text-sm">
                    Perfect for getting started
                  </p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <img
                      src="/images/smart_website.png"
                      alt="Smart website"
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 font-inter mb-4">
                    Responsive design that looks great on all devices. Perfect
                    for businesses starting their digital journey.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>✓ Works on Mobile, Tablet & Desktop</li>
                    <li>✓ PWA "Add to Home Screen"</li>
                    <li>✓ Business Admin Dashboard</li>
                  </ul>
                  <Link
                    href="/services#tier1"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More{' '}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="card-premium overflow-hidden group">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-white text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                      2
                    </span>
                    <h3 className="text-2xl font-bold font-poppins text-white">
                      Engagement Layer
                    </h3>
                  </div>
                  <p className="text-blue-50 text-sm">Most popular choice</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <img
                      src="/images/engagement_layer.png"
                      alt="Engagement layer"
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 font-inter mb-4">
                    Keep customers coming back without needing a native app.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>✓ WhatsApp automation</li>
                    <li>✓ Advanced Dashboard with insights</li>
                    <li>✓ Loyalty & CRM system</li>
                  </ul>
                  <Link
                    href="/services#tier2"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More{' '}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="card-premium overflow-hidden group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-white text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                      3
                    </span>
                    <h3 className="text-2xl font-bold font-poppins text-white">
                      Full Mobile Apps
                    </h3>
                  </div>
                  <p className="text-purple-50 text-sm">Enterprise solution</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <img
                      src="/images/mobile_apps.png"
                      alt="Mobile apps"
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 font-inter mb-4">
                    For businesses requiring high-frequency interactions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    <li>✓ Full Android & iOS apps</li>
                    <li>✓ Business Intelligence Dashboard</li>
                    <li>✓ AI-powered recommendations</li>
                  </ul>
                  <Link
                    href="/services#tier3"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More{' '}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="btn-primary inline-block">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose DigiWave */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-gray-900">
              🌟 Why Choose DigiWave India?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🤖',
                  title: 'AI-Powered Tools',
                  desc: 'Automation using cutting-edge AI',
                },
                {
                  icon: '⚡',
                  title: 'Fast Delivery',
                  desc: 'Websites in days, apps in weeks',
                },
                {
                  icon: '💰',
                  title: 'Affordable Pricing',
                  desc: 'Designed for Indian SMBs',
                },
                {
                  icon: '🎨',
                  title: 'Modern UI/UX',
                  desc: 'Clean & beautiful designs',
                },
                {
                  icon: '📱',
                  title: 'Complete Ecosystem',
                  desc: 'PWA, WhatsApp & Mobile Apps',
                },
                {
                  icon: '🔒',
                  title: 'Secure & Reliable',
                  desc: 'Enterprise-grade security',
                },
                {
                  icon: '🤝',
                  title: 'Ongoing Support',
                  desc: 'We’re here when you need us',
                },
                {
                  icon: '📈',
                  title: 'Scalable Solutions',
                  desc: 'Grows with your business',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-inter text-sm">
                    {item.desc}
                  </p>
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
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book a Free Demo
              </Link>
              <a
                href="https://wa.me/919281040446"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all flex items-center gap-2 shadow-lg"
              >
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
