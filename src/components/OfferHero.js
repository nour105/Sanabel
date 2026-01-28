'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function OfferHero({ title, subtitle, banners, lang }) {
  const getTitle = (title) => {
    return typeof title === 'object' ? title[lang] || title.en : title;
  };

  const getSubtitle = (subtitle) => {
    return typeof subtitle === 'object' ? subtitle[lang] || subtitle.en : subtitle;
  };
  return (
    <div className="relative h-[420px] w-full">

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[420px] w-full">
              <Image
                src={`https://admin.sanabelauto.com/storage/${banner}`}
                alt={`Banner ${i + 1}`}             
                className="object-cover"
                unoptimized
                  quality={65}

              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TITLE OVERLAY */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full bg-gradient-to-t from-black/60 to-transparent px-6 py-10">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {getTitle(title)}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg text-white/90">
                {getSubtitle(subtitle)}
              </p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
