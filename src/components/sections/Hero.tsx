"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const carouselItems = [
  {
    id: 1,
    imageUrl: 'https://ext.same-assets.com/4259777820/4095875711.png',
    title: 'Heat And Serve',
    subtitle: 'Convenient, Simplify Operations!',
  },
  {
    id: 2,
    imageUrl: 'https://ext.same-assets.com/4259777820/1193885267.png',
    title: 'Increased Variety for your customer',
    subtitle: 'Expand Menu, Explore new options!',
  },
  {
    id: 3,
    imageUrl: 'https://ext.same-assets.com/4259777820/3920136089.png',
    title: 'High Quality',
    subtitle: 'Approved by the best Chefs in the country!',
  },
  {
    id: 4,
    imageUrl: 'https://ext.same-assets.com/4259777820/1577974776.png',
    title: 'Minimize Back Space',
    subtitle: 'No need for bulky equipment like Tandoor, Dough Kneaders!',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative h-[65vh] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="carousel-container relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="header-text-color text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
              {item.title}
            </h2>
            <h4 className="header-text-color text-xl md:text-2xl font-medium">
              {item.subtitle}
            </h4>
          </div>
        </div>
      ))}

      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {carouselItems.map((item) => (
          <button
            key={`nav-${item.id}`}
            onClick={() => setActiveIndex(carouselItems.findIndex(i => i.id === item.id))}
            className={`w-3 h-3 rounded-full transition-colors ${
              carouselItems.findIndex(i => i.id === item.id) === activeIndex ? 'bg-prodough-yellow' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${item.id}`}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
        onClick={() =>
          setActiveIndex(
            (current) => (current - 1 + carouselItems.length) % carouselItems.length
          )
        }
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
        onClick={() =>
          setActiveIndex((current) => (current + 1) % carouselItems.length)
        }
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
}
