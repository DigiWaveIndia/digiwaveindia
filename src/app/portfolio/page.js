import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

export const metadata = {
  title: 'Portfolio - DigiWave India | Our Work',
  description:
    'See our portfolio of websites, PWAs, and mobile apps built for Indian small businesses.',
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Salon Booking Website + PWA + Dashboard',
      category: 'Smart Website',
      features: [
        'Online booking',
        'WhatsApp confirmations',
        'PWA mini-app',
        'Business dashboard for peak-hour forecast',
      ],
      color: 'green',
    },
    {
      title: 'Coaching Center Website + Automation',
      category: 'Engagement Layer',
      features: [
        'Class schedule',
        'Student portal',
        'WhatsApp reminders',
        'Dashboard showing daily inquiry trends',
      ],
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-gray-900">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Real solutions built for real businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${
                  project.color === 'green'
                    ? 'border-green-500'
                    : 'border-blue-500'
                }`}
              >
                <div
                  className={`${
                    project.color === 'green'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                  } text-white p-6`}
                >
                  <div className="text-sm font-semibold mb-2 opacity-90">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold font-poppins">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 font-inter"
                      >
                        <span
                          className={`${
                            project.color === 'green'
                              ? 'text-green-500'
                              : 'text-blue-500'
                          } mt-1`}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 text-center border border-gray-200">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold mb-4 font-poppins text-gray-900">
              More Projects Coming Soon
            </h2>
            <p className="text-lg text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
              We're building amazing digital solutions for businesses across
              India. Check back soon to see more of our work!
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
