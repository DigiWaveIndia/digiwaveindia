'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service === 'consultation') {
      setSelectedService('Not Sure');
    }
  }, []);

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get('name');
    const phone = formData.get('phone');
    const businessName = formData.get('businessName');

    if (!name || name.trim().length < 2) {
      errors.name = 'Name is required (minimum 2 characters)';
    }

    const cleanPhone = phone ? phone.replace(/[\s-()]/g, '') : '';
    const indianMobilePattern = /^(\+91|91)?[6-9]\d{9}$/;

    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!indianMobilePattern.test(cleanPhone)) {
      errors.phone =
        'Enter valid Indian mobile number (10 digits starting with 6-9)';
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
        setSelectedService('');
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-gray-900">
              Let's Build Your Digital Future
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Get in touch with us to discuss your project. We typically respond
              within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-poppins text-gray-900">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="https://wa.me/919281040446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <span className="text-4xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-poppins">
                      WhatsApp
                    </h3>
                    <span className="text-blue-600 hover:text-blue-700 font-inter text-lg">
                      +91-9281040446
                    </span>
                    <p className="text-gray-600 text-sm mt-1">
                      Quick responses via WhatsApp
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:support@digiwaveindia.com"
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <span className="text-4xl">📧</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-poppins">
                      Email
                    </h3>
                    <span className="text-blue-600 hover:text-blue-700 font-inter text-lg">
                      support@digiwaveindia.com
                    </span>
                    <p className="text-gray-600 text-sm mt-1">
                      For detailed inquiries
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                  <span className="text-4xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 font-poppins">
                      Location
                    </h3>
                    <p className="text-gray-700 font-inter">
                      Hyderabad, Telangana, India
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Serving clients across India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 font-poppins">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Fast response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Free consultation & quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 font-poppins text-gray-900">
                  Quick Contact Form
                </h2>

                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Message sent successfully! We'll get back to you within
                    24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91-XXXXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
                        errors.businessName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="Your business name"
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      What service do you need? *
                    </label>
                    <select
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    >
                      <option value="">Select a service</option>
                      <option value="Smart Website">Smart Website</option>
                      <option value="Website + Engagement">
                        Website + Engagement
                      </option>
                      <option value="Full Mobile App">Full Mobile App</option>
                      <option value="Custom Solution">Custom Solution</option>
                      <option value="Not Sure">
                        Not Sure - Need Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
