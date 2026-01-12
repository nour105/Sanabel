'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BrandBannerSlider({ banners, brandName }) {
  if (!banners || banners.length === 0) return null;

  return (
    <div className="relative h-[60vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={`https://admin.sanabelauto.com/storage/${img}`}
                alt={`${brandName} banner ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Overlay title={brandName} />
    </div>
  );
}

function Overlay({ title }) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
      <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
        {title}
      </h1>
    </div>
  );
}
