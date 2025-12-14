import Link from 'next/link';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

export const metadata = {
  title: 'About Us - DigiWave India | Our Mission & Vision',
  description:
    'Learn about DigiWave India - empowering small businesses across India with affordable, AI-powered digital solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <main>
        {/* 1. About Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="mb-8">
              <span className="inline-block bg-cyan-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-cyan-500/30">
                About DigiWave India
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-poppins leading-tight">
              Empowering India's
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Digital Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 font-inter leading-relaxed">
              We help small businesses across India build meaningful digital solutions — websites, apps, automation, and dashboards — that are fast, affordable, and designed to create real business impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Journey
              </Link>
              <Link href="/services" className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20">
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* 2. The DigiWave Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-900">
                The DigiWave Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                From frustration to real digital solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <h3 className="text-2xl font-bold mb-6 font-poppins text-red-600">The Problem We Saw</h3>
                  <p className="text-gray-700 font-inter mb-6">Too many small businesses were struggling with digital tools that didn't actually help them grow.</p>
                  <ul className="space-y-3 text-gray-700 font-inter">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Paying high prices for basic, template-based websites</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Long project timelines with little accountability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>No SEO, no engagement, no real business results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>No support once the site was live</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 font-inter mt-6 italic">Digital presence had become a checkbox — not a growth tool.</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                  <h3 className="text-2xl font-bold mb-6 font-poppins text-green-600">Our Solution</h3>
                  <p className="text-gray-700 font-inter mb-6">We decided to do things differently.</p>
                  <ul className="space-y-3 text-gray-700 font-inter">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Affordable pricing designed for Indian small businesses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Fast delivery — days, not months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Ongoing support after launch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Business-focused features that drive growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Custom-built solutions — not templates</span>
                    </li>
                  </ul>
                  <p className="text-green-700 font-inter mt-6 font-semibold">At DigiWave India, technology exists to serve the business, not complicate it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Founder's Note */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                💭 FOUNDER'S NOTE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-900">
                A Personal Message
              </h2>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins mb-1 text-slate-900">Siva</h3>
                  <p className="text-cyan-600 font-inter font-semibold">Founder, DigiWave India</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 font-inter leading-relaxed">
                <p>
                  I started DigiWave India after seeing how many small businesses were held back simply because they didn't have the right digital tools. Some had no online presence at all. Others had static, template-based websites that looked fine on the surface but delivered no real value — no visibility, no engagement, no leads, no insights.
                </p>
                
                <p>
                  It didn't feel right that hardworking entrepreneurs were being sold "digital solutions" that didn't actually help them grow.
                </p>
                
                <p>
                  <strong>A digital presence should empower a business — not limit it.</strong>
                </p>
                
                <p>
                  That's why at DigiWave India, everything we build is custom-designed for each business — websites that rank, apps that engage, automation that saves time, and dashboards that bring clarity.
                </p>
                
                <p>
                  <strong>No templates. No shortcuts.</strong> Just solutions built for the way your business works.
                </p>
                
                <p className="italic text-slate-600">
                  Thank you for trusting DigiWave India to be part of your journey.
                </p>
                
                <p className="italic text-slate-600">
                  Together, we're building digital experiences that truly make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-cyan-100">
                <div className="text-5xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold mb-6 font-poppins text-slate-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  To make powerful technology accessible to every entrepreneur — whether you're just getting started or ready to scale — so you can grow with confidence in a digital-first world.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
                <div className="text-5xl mb-6">🌟</div>
                <h2 className="text-3xl font-bold mb-6 font-poppins text-slate-900">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  To transform India's small businesses by giving them the same digital strength, clarity, and confidence as large enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                💎 OUR VALUES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-900">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Purpose-Driven',
                  desc: 'Every feature we build serves a real business need.',
                  color: 'from-red-500 to-pink-500'
                },
                {
                  icon: '💡',
                  title: 'Innovation First',
                  desc: 'We use AI and automation to deliver better results, faster.',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: '🤝',
                  title: 'Partnership Mindset',
                  desc: 'We work as long-term digital partners, not just vendors.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: '⚡',
                  title: 'Speed with Quality',
                  desc: 'Fast delivery without compromising craftsmanship.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: '💰',
                  title: 'Honest Pricing',
                  desc: 'Transparent, fair pricing built for Indian SMBs.',
                  color: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: '🌱',
                  title: 'Growth Focused',
                  desc: 'Every solution is designed to help your business scale.',
                  color: 'from-teal-500 to-green-500'
                }
              ].map((value, idx) => (
                <div key={idx} className="card-premium p-8 group hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:rotate-6 transition-all`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-poppins text-slate-900">{value.title}</h3>
                  <p className="text-gray-600 font-inter leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
              Ready to Join the Digital Revolution?
            </h2>
            <p className="text-xl mb-10 font-inter opacity-90">
              Let's build a digital presence that actually works for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
                Get Started Today
              </Link>
              <a href="https://wa.me/919281040446?text=Hi%20DigiWave%20India!%20I%20read%20your%20about%20page%20and%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project?" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg">
                <span>💬</span> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
