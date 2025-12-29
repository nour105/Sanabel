'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const BASE_IMAGE_URL = 'https://sanabelauto.com/storage/';

export default function Banner({ banners }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !banners || banners.length === 0) return null;

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[70vh] md:h-[80vh] lg:h-[90vh]"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={`${BASE_IMAGE_URL}${item.banner}`}
                alt={`Banner ${index + 1}`}
                width={1920}
                height={600}
                priority={index === 0}
                className="object-cover"
                unoptimized={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
