import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: 'Chef Rajiv Mehta',
    position: 'Executive Chef, Cloud Kitchen',
    quote: 'Prodough has completely transformed our bread service. The quality is indistinguishable from fresh-made, but with half the kitchen space and staff requirements.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Ananya Singh',
    position: 'Owner, Spice Route Café',
    quote: 'As a small café owner, I was struggling with consistency in our Indian breads. Since switching to Prodough, our customers constantly praise our naan and rotis!',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Vikram Patel',
    position: 'Operations Manager, Hotel Chain',
    quote: 'We\'ve implemented Prodough products across our 15 hotels. The time and labor savings are substantial, and the quality is excellent. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    position: 'Head Chef, Fine Dining Restaurant',
    quote: 'Even in our high-end restaurant, Prodough\'s specialty breads meet our exacting standards. The Sheermal is particularly exceptional - our guests love it!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Arjun Malhotra',
    position: 'Catering Business Owner',
    quote: 'For our catering business, Prodough has been a game-changer. We can now offer a wider variety of breads with perfect consistency at every event.',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Sonia Kapoor',
    position: 'QSR Chain Manager',
    quote: 'The fast regeneration time and consistent quality of Prodough products have helped us maintain quick service while improving customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=200&h=200&auto=format&fit=crop'
  }
];

export default function TestimonialsPage() {
  return (
    <MainLayout activePage="testimonials">
      <div className="relative bg-hero-pattern bg-cover bg-center py-24 text-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">Customer Testimonials</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about Prodough products.
          </p>
          <nav className="mt-6 flex justify-center">
            <ol className="flex items-center text-white/80">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white">Testimonials</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with a wide range of food service providers, from small cafés to large hotel chains.
              Here's what they have to say about their experience with Prodough products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((starNum) => (
                      <FontAwesomeIcon
                        key={`star-${testimonial.id}-${starNum}`}
                        icon={faStar}
                        className="text-prodough-yellow"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="rounded-full overflow-hidden w-12 h-12 flex-shrink-0 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-prodough-dark font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-prodough-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-6">Ready to Experience the Difference?</h2>
            <p className="text-lg text-prodough-dark/80 mb-8">
              Join the growing number of food service professionals who trust Prodough for their bread needs.
              Contact us today to discuss your requirements or request a sample.
            </p>
            <Link
              href="/contact"
              className="bg-prodough-dark text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
