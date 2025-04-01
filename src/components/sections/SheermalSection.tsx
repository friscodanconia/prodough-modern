import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function SheermalSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://ext.same-assets.com/4259777820/3815913759.jpeg"
                alt="Sheermal bread"
                width={400}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <Image
                src="https://ext.same-assets.com/4259777820/3240824118.jpeg"
                alt="Sheermal with curry"
                width={400}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <a
              href="https://www.youtube.com/watch?v=9ftDZ0hCwaA"
              target="_blank"
              rel="noopener noreferrer"
              className="pulsating-play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              aria-label="Play video about making Sheermal"
            >
              <FontAwesomeIcon icon={faPlay} className="text-prodough-dark ml-1" />
            </a>
          </div>

          <div className="lg:order-1 px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-heading text-prodough-dark mb-4">Making of Shreemal!</h2>
            <p className="text-gray-700 mb-8">
              Watch the video to learn how to make this rich, saffron-infused flatbread step by step!
              See the process in action and recreate this delicious treat at home.
            </p>

            <Link href="/contact" className="btn-cta">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
