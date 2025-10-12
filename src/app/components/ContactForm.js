'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get('name');
    const email = formData.get('email');
    const mobile = formData.get('mobile');

    if (!name || name.trim().length < 2) {
      errors.name = 'Name is required (minimum 2 characters)';
    }

    const cleanMobile = mobile ? mobile.replace(/[\s-()]/g, '') : '';
    const indianMobilePattern = /^(\+91|91)?[6-9]\d{9}$/;
    
    if (!mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!indianMobilePattern.test(cleanMobile)) {
      errors.mobile = 'Enter valid Indian mobile number (10 digits starting with 6-9)';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
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
          'Accept': 'application/json'
        }
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
    <div>
      {showSuccess && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">Name *</label>
          <input 
            type="text" 
            name="name" 
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`} 
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">Email (Optional)</label>
          <input 
            type="email" 
            name="email" 
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`} 
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">Mobile Number *</label>
          <input 
            type="tel" 
            name="mobile" 
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 ${
              errors.mobile ? 'border-red-500' : 'border-gray-300'
            }`} 
            placeholder="+91-XXXXXXXXXX" 
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2 font-inter">Message</label>
          <textarea rows="4" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"></textarea>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}