import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTemperatureHigh, faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function HowToUsePage() {
  return (
    <MainLayout activePage="how to use">
      <div className="relative bg-hero-pattern bg-cover bg-center py-24 text-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">How To Use</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our products are designed for convenience and quick preparation.
            Follow these simple steps to enjoy the perfect bread every time.
          </p>
          <nav className="mt-6 flex justify-center">
            <ol className="flex items-center text-white/80">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white">How To Use</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-4">Simple Steps, Perfect Results</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our frozen bread products are designed to deliver restaurant-quality results with minimal effort.
              Follow these simple steps for the perfect bread every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-prodough-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-prodough-dark">1</span>
              </div>
              <h3 className="text-xl font-heading text-prodough-dark mb-3">Keep Frozen</h3>
              <p className="text-gray-600 mb-4">
                Store your Prodough breads in the freezer until ready to use. Our products have a 3-month shelf life when kept frozen.
              </p>
              <div className="text-prodough-yellow text-3xl">
                <FontAwesomeIcon icon={faTemperatureHigh} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-prodough-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-prodough-dark">2</span>
              </div>
              <h3 className="text-xl font-heading text-prodough-dark mb-3">No Thawing Needed</h3>
              <p className="text-gray-600 mb-4">
                Our products go directly from freezer to heat - no need to thaw first, saving you precious time in the kitchen.
              </p>
              <div className="text-prodough-yellow text-3xl">
                <FontAwesomeIcon icon={faClock} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-prodough-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-prodough-dark">3</span>
              </div>
              <h3 className="text-xl font-heading text-prodough-dark mb-3">Quick Heat</h3>
              <p className="text-gray-600 mb-4">
                Heat in your preferred oven type (deck, combi, convection, etc.) for 1-3 minutes as per specific product instructions.
              </p>
              <div className="text-prodough-yellow text-3xl">
                <FontAwesomeIcon icon={faUtensils} />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-prodough-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-prodough-dark">4</span>
              </div>
              <h3 className="text-xl font-heading text-prodough-dark mb-3">Serve & Enjoy</h3>
              <p className="text-gray-600 mb-4">
                Serve hot and fresh within minutes! Our breads maintain their authentic taste, texture, and aroma.
              </p>
              <div className="text-prodough-yellow text-3xl">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-12 text-center">Cooking Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Oven Method */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-prodough-yellow text-prodough-dark p-4">
                <h3 className="text-xl font-heading font-bold">Impinger/Pizza Oven Method</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Preheat oven to 250-260°C (480-500°F)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Place frozen bread directly on the conveyor belt</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Set conveyor speed for 1.5-2 minutes passage time</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Collect from other side, ready to serve</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Perfect for high-volume operations requiring quick service</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Combi Oven Method */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-prodough-yellow text-prodough-dark p-4">
                <h3 className="text-xl font-heading font-bold">Combi/Convection Oven Method</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Preheat oven to 200-220°C (390-430°F)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Place frozen bread on a baking tray or directly on rack</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Heat for 2-3 minutes until fully puffed and lightly browned</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>For Naan and Kulcha, lightly brush with butter before serving (optional)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-prodough-yellow mr-2 pt-1">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <p>Ideal for restaurants with conventional kitchen setups</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-6">Need More Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to assist you with custom instructions for your specific equipment and setup.
              Contact us for personalized guidance or to request a demonstration.
            </p>
            <Link href="/contact" className="btn-cta">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
