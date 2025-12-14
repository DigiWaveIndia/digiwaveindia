'use client';

import { useState } from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

export default function PricingPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get('name');
    const phone = formData.get('phone');
    const businessName = formData.get('businessName');

    if (!name || name.trim().length < 2) {
      errors.name = 'Name is required';
    }

    const cleanPhone = phone ? phone.replace(/[\s-()]/g, '') : '';
    const indianMobilePattern = /^(\+91|91)?[6-9]\d{9}$/;

    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!indianMobilePattern.test(cleanPhone)) {
      errors.phone = 'Enter valid Indian mobile number';
    }

    if (!businessName || businessName.trim().length < 2) {
      errors.businessName = 'Business name is required';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    formData.append('subject', 'Pricing Enquiry - DigiWave India');

    try {
      const response = await fetch('https://formspree.io/f/mnngojnp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setShowSuccess(true);
        e.target.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-gray-900">
              Flexible, Transparent & Built for Small Businesses
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto mb-4">
              Every business is unique — and so are its digital needs.
            </p>
            <p className="text-lg text-gray-700 font-inter max-w-3xl mx-auto">
              Instead of fixed prices, we offer customized solutions that match
              your goals, features, and budget.
            </p>
          </div>

          {/* Service Tiers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-gray-900">
              ⭐ Our Three Service Tiers
            </h2>

            <div className="space-y-8">
              {/* Tier 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-500">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🌐</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                        Tier 1 — Smart Website (PWA Enabled)
                      </h3>
                      <p className="text-green-50 mt-1">
                        Perfect for businesses starting their digital journey
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                        Includes:
                      </h4>
                      <ul className="space-y-2 text-gray-700 font-inter">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span> Modern
                          mobile-first website
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span> PWA "Add to
                          Home Screen"
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>{' '}
                          Booking/Inquiry/Order forms
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span> WhatsApp
                          integration
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span> Basic SEO
                          setup
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span> Admin
                          Dashboard (Basic)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span> Hosting &
                          maintenance options
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                        Ideal For:
                      </h4>
                      <p className="text-gray-700 font-inter mb-4">
                        Businesses starting their digital journey or needing a
                        professional online presence with basic customer
                        interaction.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2 font-poppins">
                          Investment:
                        </h4>
                        <p className="text-green-800 font-inter font-semibold text-lg mb-1">
                          Starts from ₹15,000
                        </p>
                        <p className="text-green-700 font-inter text-sm">
                          Customized based on business size, pages & features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-500">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🔁</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                        Tier 2 — Engagement Layer
                      </h3>
                      <p className="text-blue-50 mt-1">
                        For businesses that want repeat customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                        Includes:
                      </h4>
                      <ul className="space-y-2 text-gray-700 font-inter">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> WhatsApp
                          automation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Push
                          notifications
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Loyalty &
                          rewards
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Subscription
                          reminders
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Digital
                          coupons
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Customer CRM
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Admin
                          Dashboard (Advanced Insights)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">✓</span> Smart
                          analytics
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                        Ideal For:
                      </h4>
                      <p className="text-gray-700 font-inter mb-4">
                        Businesses wanting to build customer loyalty, automate
                        communications, and increase repeat visits.
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2 font-poppins">
                          Investment:
                        </h4>
                        <p className="text-blue-800 font-inter font-semibold text-lg mb-1">
                          Starts from ₹35,000
                        </p>
                        <p className="text-blue-700 font-inter text-sm">
                          Based on automation depth & CRM requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📱</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                        Tier 3 — Full Mobile Apps
                      </h3>
                      <p className="text-purple-50 mt-1">
                        For businesses with frequent customer interactions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                        Includes:
                      </h4>
                      <ul className="space-y-2 text-gray-700 font-inter">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span>{' '}
                          Custom-built Android/iOS apps
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span> Real-time
                          bookings & payments
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span>{' '}
                          Personalized notifications
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span> Staff &
                          customer management
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span> AI-powered
                          features
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span> Business
                          Intelligence Dashboard
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500">✓</span> Play Store
                          & App Store publishing
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                        Ideal For:
                      </h4>
                      <p className="text-gray-700 font-inter mb-4">
                        Businesses requiring frequent customer interactions,
                        complex workflows, or wanting maximum brand presence.
                      </p>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-900 mb-2 font-poppins">
                          Investment:
                        </h4>
                        <p className="text-purple-800 font-inter font-semibold text-lg mb-1">
                          Starts from ₹75,000
                        </p>
                        <p className="text-purple-700 font-inter text-sm">
                          Based on app complexity, features & integrations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="mb-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-gray-900 text-center">
              🔄 Annual Maintenance, Hosting & Support
            </h2>
            <p className="text-center text-lg text-gray-700 font-inter mb-8">
              We offer affordable yearly plans for:
            </p>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'Hosting',
                'Security & backups',
                'Dashboard access',
                'Automation tools',
                'Performance optimization',
                'Ongoing support',
                'Regular updates',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 text-center shadow-md"
                >
                  <p className="text-gray-800 font-inter font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-cyan-600 font-semibold mt-8 font-poppins">
              Pay only for what you need — no hidden fees.
            </p>
          </div>

          {/* Quote Form */}
          <div className="max-w-4xl mx-auto">
            <div
              id="quote-form"
              className="bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-2xl p-8 md:p-12 mb-8 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-center">
                📞 Get a Custom Quote
              </h2>
              <p className="text-xl text-center text-gray-300 font-inter">
                Tell us about your business, and we'll share a personalized
                proposal within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 font-poppins text-gray-900">
                Request a Quote
              </h3>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Quote request sent successfully! We'll get back to you
                  within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Your store, brand, or service name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
                        errors.businessName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91-XXXXXXXXXX"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                    What Do You Need? *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Smart Website (PWA)',
                      'Customer Engagement / Automation',
                      'Full Mobile App (Android/iOS)',
                      'Dashboard & CRM',
                      'Branding / Logo',
                      'Something custom',
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={option}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-700 font-inter text-sm">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="A few lines about what you're trying to build"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-poppins text-gray-900">
              🔥 We don't believe in one-size-fits-all pricing.
            </h2>
            <p className="text-xl text-gray-700 font-inter mb-2">
              We believe in the right solution for your business — at the right
              price.
            </p>
            <p className="text-2xl font-semibold text-cyan-600 font-poppins">
              Let's build something great together.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
