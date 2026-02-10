'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroBannerCarousel({ banners, title }) {
  if (!banners?.length) return null;

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full md:h-[500px] overflow-hidden shadow-lg"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full md:h-[500px]">
              <Image
                src={`https://admin.sanabelauto.com/storage/${banner}`}
                alt={`${title} ${index + 1}`}
                width={1920}
                height={600}
                quality={65}
                priority={index === 0}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                unoptimized
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
