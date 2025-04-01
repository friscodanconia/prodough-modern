"use client";

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading text-prodough-dark mb-3">Subscribe To Our Newsletter</h3>
            <p className="text-gray-600">
              Stay updated with the latest news and offers – subscribe to our newsletter today!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prodough-yellow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                {error && <p className="text-red-500 text-sm mt-1 absolute">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-prodough-yellow text-prodough-dark px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {isSuccess && (
              <p className="text-green-600 mt-2">
                Thank you for subscribing! We'll keep you updated with our latest offers.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
