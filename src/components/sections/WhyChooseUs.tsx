import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faHeart, faStore } from '@fortawesome/free-solid-svg-icons';

export default function WhyChooseUs() {
  return (
    <section className="bg-prodough-yellow py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://ext.same-assets.com/4259777820/3501111921.jpeg"
              alt="Farmer with fresh produce"
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2 px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-4">Why Choose Us?</h2>
            <h3 className="text-xl md:text-2xl font-medium text-prodough-dark mb-6">
              We understand you! We understand your unique needs and customize our products to reflect your values!
            </h3>

            <p className="text-prodough-dark/80 mb-8">
              Our customized recipes and quick regeneration processes ensure that your kitchen runs smoothly,
              reducing wait times and maintaining consistent quality in every dish.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-3xl text-prodough-dark">
                  <FontAwesomeIcon icon={faCloud} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-prodough-dark">Fast Regeneration from Frozen State</h4>
                  <p className="text-prodough-dark/80">Products regenerate from frozen in 1-3 minutes, ensuring quick service</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-3xl text-prodough-dark">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-prodough-dark">Tailored Solutions for Various Oven Types</h4>
                  <p className="text-prodough-dark/80">
                    Recipes are tailored for different oven types (Impingers, Speed Ovens, Combi Ovens, Deck Ovens)
                    and use cases (dine in vs. delivery).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-3xl text-prodough-dark">
                  <FontAwesomeIcon icon={faStore} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-prodough-dark">Product Development and Innovation</h4>
                  <p className="text-prodough-dark/80">
                    Focus on continuous product development and innovation for better results. We are forever on the
                    lookout for new ways of helping you delight your customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
