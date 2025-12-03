'use client';

import { useState, useEffect } from 'react';
import TabInterface from './TabInterface';
import MobileMenu from './MobileMenu';
import ContactForm from './ContactForm';

export default function ResponsiveLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    return <TabInterface />;
  }

  // Desktop/Web version (original implementation)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
          <div className="text-2xl font-bold text-blue-600 font-poppins">DigiWave India</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-poppins">
            We Build Apps That Help Your Business Grow
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-inter">
            At DigiWave India, we deliver fast, beautiful, and affordable mobile & web apps.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800">Mobile Apps</h3>
              <p className="text-gray-700 font-inter">Cross-platform apps built with Flutter for iOS and Android.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800">Websites</h3>
              <p className="text-gray-700 font-inter">Responsive websites built with modern frameworks.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800">Post-Launch Support</h3>
              <p className="text-gray-700 font-inter">Ongoing maintenance, updates, and technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DigiWave */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-gray-800">Why Choose DigiWave</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-800">Fast Delivery</h3>
              <p className="text-gray-700 font-inter">Quick turnaround times without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-800">Modern Design</h3>
              <p className="text-gray-700 font-inter">Contemporary designs that engage your users.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-800">Long-Term Support</h3>
              <p className="text-gray-700 font-inter">We&apos;re here for you even after launch.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-800">Transparent Pricing</h3>
              <p className="text-gray-700 font-inter">No hidden costs, clear pricing structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 font-poppins text-gray-800 text-center">About DigiWave India</h2>
          
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-700 font-inter">
              We are a technology-driven studio helping small businesses go digital through powerful, fast, and affordable apps and websites.
            </p>
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-800">Our Mission</h3>
            <p className="text-xl text-blue-600 font-semibold mb-2 font-poppins">Empowering Small Businesses to Thrive Digitally.</p>
            <p className="text-lg text-gray-700 font-inter">
              We simplify technology so every entrepreneur can thrive in the digital era.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 font-poppins text-gray-800 text-center">Founder&apos;s Note</h3>
            <blockquote className="text-lg text-gray-700 font-inter italic leading-relaxed mb-4">
              &quot;At DigiWave India, we believe every business — no matter how small — deserves a strong digital presence.
              Our mission is simple yet powerful: to empower small businesses to thrive digitally.
              We leverage AI-driven tools and smart automation to deliver fast, affordable, and modern digital solutions — helping small businesses launch apps and websites in record time.
              Because when India&apos;s small businesses grow, India grows.&quot;
            </blockquote>
            <div className="text-right text-gray-800 font-medium font-poppins">
              <p>— Siva</p>
              <p>Founder, Semiforge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-800">Mobile App Development</h3>
              <p className="text-gray-700 font-inter">Android + iOS apps using Flutter for faster delivery and unified codebase. Cross-platform solutions that work seamlessly on both platforms.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-800">Website Development</h3>
              <p className="text-gray-700 font-inter">Responsive sites built with modern frameworks. Fast, SEO-optimized websites that look great on all devices.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-800">End-to-End Product Delivery</h3>
              <p className="text-gray-700 font-inter">From design to deployment, we handle the complete development lifecycle to bring your vision to life.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-800">Maintenance & Support</h3>
              <p className="text-gray-700 font-inter">Regular updates, bug fixes, and performance checks to keep your applications running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-gray-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-poppins text-gray-800">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <a href="mailto:support@digiwaveindia.com" className="text-blue-600 hover:underline font-inter text-lg">support@digiwaveindia.com</a>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📞</span>
                  <span className="font-inter text-gray-800 text-lg">+91-9848120409</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🌐</span>
                  <span className="font-inter text-gray-800 text-lg">Based in India | Serving Clients Worldwide</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-poppins text-gray-800">Send Us a Message</h3>
              <p className="text-gray-600 font-inter mb-6">Share your project details and we&apos;ll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Let&apos;s bring your business online and make it discoverable to millions</h2>
          <p className="text-lg mb-6 font-inter">Start your digital journey with us today and grow faster than ever.</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-inter">© 2025 DigiWave India. Smart Digital Solutions for Every Business.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">X (Twitter)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}