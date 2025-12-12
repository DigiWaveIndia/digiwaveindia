import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="default" />
              <span className="text-xl font-bold font-poppins text-cyan-400">
                DigiWave India
              </span>
            </div>
            <p className="text-gray-400 font-inter">
              Empowering India's small businesses to go digital — fast,
              affordable, and smart.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">
              Quick Links
            </h3>
            <ul className="space-y-2 font-inter">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">
              Services
            </h3>
            <ul className="space-y-2 font-inter">
              <li>
                <Link
                  href="/services#tier1"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Smart Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services#tier2"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Customer Engagement
                </Link>
              </li>
              <li>
                <Link
                  href="/services#tier3"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services#tier2"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact</h3>
            <ul className="space-y-2 font-inter text-gray-400">
              <li>📧 support@digiwaveindia.com</li>
              <li>📞 +91-9281040446</li>
              <li>🌐 Based in India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2025 DigiWave India. Smart Digital Solutions for Every Business.
          </p>
        </div>
      </div>
    </footer>
  );
}
