import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import TechStack from '../components/shared/TechStack';
import StatsCounter from '../components/shared/StatsCounter';

export const metadata = {
  title: 'About Us - DigiWave India | Our Mission & Vision',
  description: 'Learn about DigiWave India - empowering small businesses across India with affordable, AI-powered digital solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-gray-900">
              About DigiWave India
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Empowering India's small businesses through modern, affordable digital solutions
            </p>
          </div>

          {/* Who We Are */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 font-poppins text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                DigiWave India is a digital transformation partner for small businesses. We build websites, apps, 
                automation systems, and dashboards that help local businesses grow in the digital world.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-500">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4 font-poppins text-gray-900">Our Mission</h2>
              <p className="text-gray-700 font-inter leading-relaxed">
                To make digital technology simple, accessible, and affordable for every small business in India.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
              <div className="text-4xl mb-4">🌟</div>
              <h2 className="text-2xl font-bold mb-4 font-poppins text-gray-900">Our Vision</h2>
              <p className="text-gray-700 font-inter leading-relaxed">
                An India where every shop, clinic, coaching center, and service provider uses digital tools to grow their business.
              </p>
            </div>
          </div>

          {/* Why We Started */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 font-poppins">Why DigiWave India Was Started</h2>
              <p className="text-lg text-gray-300 font-inter leading-relaxed mb-6">
                We noticed that small businesses were being overcharged, misled, or given poor-quality websites.
              </p>
              <p className="text-xl font-semibold text-cyan-400 font-poppins mb-4">
                We wanted to create a service that delivers:
              </p>
              <ul className="text-lg text-gray-300 space-y-2">
                <li>• Speed</li>
                <li>• Affordability</li>
                <li>• Professional design</li>
                <li>• Real business value</li>
                <li>• Ongoing support</li>
              </ul>
              <p className="text-lg text-gray-300 mt-4 font-inter">
                No jargon. No complexity. No overpriced solutions.
              </p>
            </div>
          </div>

          {/* The Problem We're Solving */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-poppins text-gray-900 text-center">
              The Problem We're Solving
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '💰', title: 'Expensive Development', desc: 'Website/app development costs too much' },
                { icon: '🔄', title: 'Difficulty Retaining Customers', desc: 'No system to bring customers back' },
                { icon: '📊', title: 'No Business Visibility', desc: 'No insights into business performance' },
                { icon: '📅', title: 'Manual Management', desc: 'Manual appointment and booking management' },
                { icon: '⚙️', title: 'Lack of Automation', desc: 'Everything done manually' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 font-inter text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-cyan-600 font-poppins">Our dashboard + automation solves this.</p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-poppins text-gray-900 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Build only what your business truly needs',
                'Use AI & automation to reduce cost',
                'Deliver designs that feel modern',
                'Provide dashboards that give insights',
                'Offer simple, transparent pricing',
                'Support you even after launch'
              ].map((approach, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-600 text-xl font-bold">{idx + 1}.</span>
                    <p className="text-gray-800 font-inter font-medium">{approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-16 py-12 bg-white rounded-2xl shadow-lg border border-slate-200">
            <StatsCounter />
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-poppins text-gray-900 text-center">
              Technologies We Use
            </h2>
            <TechStack />
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 font-inter">
              Let's build something amazing together.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
