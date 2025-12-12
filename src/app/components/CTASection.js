export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            📞 Ready to Take Your Business Digital?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 font-inter max-w-3xl mx-auto">
            Whether you're just starting or ready to scale, DigiWave India has a
            solution built for you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#contact-form"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book a Free Consultation
          </a>
          <a
            href="mailto:support@digiwaveindia.com"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            Explore Pricing
          </a>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6 font-poppins">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📧</span>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a
                        href="mailto:support@digiwaveindia.com"
                        className="text-white hover:text-blue-300 font-inter text-lg"
                      >
                        support@digiwaveindia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📞</span>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <a
                        href="tel:+919281040446"
                        className="text-white font-inter text-lg"
                      >
                        +91-9281040446
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🌐</span>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white font-inter">
                        Based in India | Serving Clients Worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-700">
                  <p className="text-gray-400 font-inter">
                    We typically respond within 24 hours. Let's discuss how we
                    can help your business grow digitally.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6 font-poppins text-gray-900">
                  Send Us a Message
                </h3>
                <ContactFormComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import the existing ContactForm component
import ContactFormComponent from './ContactForm';
