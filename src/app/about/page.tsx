import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
  return (
    <MainLayout activePage="about us">
      <div className="relative bg-hero-pattern bg-cover bg-center py-24 text-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-heading text-white mb-4">About Us</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            ProFoodz is working towards helping Food Service organizations enhance client satisfaction
            in an efficient manner by supplying High Quality Ready to Cook Indian Breads. We are a one stop
            shop for all types of fresh &amp; frozen Ready to Cook Rotis / Parathas / specialized Regional Breads of India
          </p>
          <nav className="mt-6 flex justify-center">
            <ol className="flex items-center text-white/80">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white">About</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative">
              <Image
                src="https://ext.same-assets.com/4259777820/3501111921.jpeg"
                alt="Product photo"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <a
                href="https://www.youtube.com/watch?v=No5EOVYYkGs"
                target="_blank"
                rel="noopener noreferrer"
                className="pulsating-play-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                aria-label="Play video"
              >
                <FontAwesomeIcon icon={faPlay} className="text-prodough-dark ml-1" />
              </a>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-4">Who are we?</h2>
              <p className="text-gray-700 mb-6">
                We are ProFoodz RTC Pvt Ltd - a Gurgaon based food startup obsessed with solving problems for
                Food Service Organizations. The first problem we are solving is serving high quality Indian Breads
                (and Napolitana Pizzas), with minimum equipment and skill. Our Business to Business vertical is
                helping cloud kitchens, office caterers, hotels and cafes offer premium quality Indian Breads to
                their customers with minimum investment in equipment, expertise and manpower.
              </p>
              <Link href="/contact" className="btn-cta">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/4259777820/3240824118.jpeg"
                alt="Product preparation"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <a
                href="https://www.youtube.com/watch?v=A93vxZndgI4"
                target="_blank"
                rel="noopener noreferrer"
                className="pulsating-play-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                aria-label="Play video"
              >
                <FontAwesomeIcon icon={faPlay} className="text-prodough-dark ml-1" />
              </a>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-4">What we do?</h2>
              <p className="text-gray-700 mb-6">
                We make high quality Indian Breads - Frozen and Fresh that can be regenerated in minutes and
                offered to your customers. We use best quality ingredients, standardized processes and quality
                manpower to make over 30 different types of Indian breads - both Tandoor and Tawa based.
                Frozen Products shelf life is 3 months. We use clean recipes and no preservatives in our products.
              </p>
              <Link href="/contact" className="btn-cta">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
