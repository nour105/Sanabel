'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OfferBannerSlider({ banners, title }) {
  const [current, setCurrent] = useState(0);

  if (!banners || banners.length === 0) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative w-full md:h-[500px] lg:h-[600px] overflow-hidden shadow-lg">
      {banners.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={`https://admin.sanabelauto.com/storage/${img}`}
            alt={title}
            fill
            className=" object-contain w-full h-full"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold z-20"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold z-20"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === current ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
