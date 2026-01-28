'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from './Lightbox';

export default function Gallery({ title, images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!images?.length) return null;

  return (
    <div>
      <h2 className="text-2xl text-gray-900 font-bold mb-4">{title}</h2>

      {/* Main image */}
      <div
        className="relative h-72 rounded-3xl overflow-hidden cursor-pointer"
        onClick={() => setActiveIndex(0)}
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover"
          unoptimized
            quality={65}

        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.slice(1).map((img, i) => (
          <div
            key={i}
            className="relative h-20 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setActiveIndex(i + 1)}
          >
            <Image
              src={img}
              alt={title}
              fill
                quality={65}

              className="object-cover hover:scale-105 transition"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </div>
  );
}
