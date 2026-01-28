'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const BASE_IMAGE_URL = 'https://admin.sanabelauto.com/storage/';

export default function Banner({ banners, lang }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !banners?.length) return null;

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {banners.map((item, index) => {
          const imagePath = item?.image?.[lang] || item?.image?.en;
          if (!imagePath) return null;

          return (
            <SwiperSlide key={index}>
              <div className="
                relative w-full
                h-[55vh]
                md:h-[70vh]
                lg:h-[85vh]
                xl:h-[90vh]
              ">
                <Image
                  src={`${BASE_IMAGE_URL}${imagePath}`}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  unoptimized
                    quality={65}

                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
