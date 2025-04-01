"use client";

import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Regeneration',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/4053888577.png'
  },
  {
    id: 2,
    name: 'Efficiency',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/3731920623.png'
  },
  {
    id: 3,
    name: 'Customization',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/874278698.png'
  },
  {
    id: 4,
    name: 'Innovation',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/2904697521.png'
  },
  {
    id: 5,
    name: 'Quality',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/1339497856.jpeg'
  },
  {
    id: 6,
    name: 'Precision',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/3794029512.jpeg'
  },
  {
    id: 7,
    name: 'Consistency',
    category: 'We do',
    image: 'https://ext.same-assets.com/4259777820/4198903333.jpeg'
  }
];

export default function ProductsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % (products.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + (products.length - itemsToShow + 1)) % (products.length - itemsToShow + 1)
    );
  };

  const visibleProducts = products.slice(activeIndex, activeIndex + itemsToShow);

  // Create an array of navigation dots with stable IDs
  const navigationDots = [];
  for (let i = 0; i < products.length - itemsToShow + 1; i++) {
    navigationDots.push({ id: i });
  }

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Wide Range of Products</h2>
          <p className="text-lg opacity-80">Perfectly frozen, bursting with flavor—ready to enjoy anytime!</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-prodough-yellow p-2 rounded-full shadow-lg text-prodough-dark hover:bg-yellow-300 transition-colors"
            aria-label="Previous products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="overflow-hidden mx-10">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out" style={{ transform: "translateX(0)" }}>
              {visibleProducts.map((product) => (
                <div key={product.id} className="w-full min-w-0 flex-1">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 90vw"
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-prodough-yellow uppercase">{product.category}</span>
                      <h3 className="text-xl font-heading mt-1">{product.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-prodough-yellow p-2 rounded-full shadow-lg text-prodough-dark hover:bg-yellow-300 transition-colors"
            aria-label="Next products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-1">
          {navigationDots.map(dot => (
            <button
              key={`nav-dot-${dot.id}`}
              onClick={() => setActiveIndex(dot.id)}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeIndex === dot.id ? 'bg-prodough-yellow' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${dot.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
