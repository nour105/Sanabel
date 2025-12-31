'use client';

import Image from 'next/image';

export default function Lightbox({ images, index, onClose, onChange }) {
  const prev = () =>
    onChange(index === 0 ? images.length - 1 : index - 1);

  const next = () =>
    onChange(index === images.length - 1 ? 0 : index + 1);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 cursor-pointer text-white text-3xl"
      >
        ✕
      </button>

      {/* Left */}
      <button
        onClick={prev}
        className="absolute left-6 cursor-pointer text-white text-4xl"
      >
        ‹
      </button>

      {/* Image */}
      <div className="relative w-full max-w-5xl h-[80vh]">
        <Image
          src={images[index]}
          alt="Gallery"
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Right */}
      <button
        onClick={next}
        className="absolute right-6 cursor-pointer text-white text-4xl"
      >
        ›
      </button>
    </div>
  );
}
