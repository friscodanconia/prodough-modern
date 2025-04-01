import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
  return (
    <MainLayout activePage="contact">
      <div className="relative bg-hero-pattern bg-cover bg-center py-24 text-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Have questions about our products or services? Reach out to us today!
          </p>
          <nav className="mt-6 flex justify-center">
            <ol className="flex items-center text-white/80">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading text-prodough-dark mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help and answer any questions you might have about our products.
                Please fill out the form, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-prodough-yellow mt-1 mr-4">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-prodough-dark">Our Location</h3>
                    <p className="text-gray-600">
                      C-02, 1st floor, India Accelerator, <br />
                      MGF Metropolis Mall, MG Road, <br />
                      Gurgaon, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-prodough-yellow mt-1 mr-4">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-prodough-dark">Phone Number</h3>
                    <p className="text-gray-600">+91 893 932 6262</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-prodough-yellow mt-1 mr-4">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-prodough-dark">Email Address</h3>
                    <p className="text-gray-600">service@prodough.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-prodough-dark mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prodough-yellow"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-prodough-dark mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prodough-yellow"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-prodough-dark mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prodough-yellow"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-prodough-dark mb-2 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prodough-yellow"
                    required
                    defaultValue=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-prodough-yellow text-prodough-dark py-3 px-6 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
