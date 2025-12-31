"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export default function CarCarousel({ cars = [] }) {
  const pages = chunkArray(cars, 12);
  if (!cars.length) return null;

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={40}
      className="py-10 !overflow-visible"
    >
      {pages.map((pageCars, pageIndex) => (
        <SwiperSlide key={pageIndex} className="!h-auto">
          <div className="px-2 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {pageCars.map((car) => (
                <div
                  key={car.id}
                  className="group relative rounded-2xl bg-white shadow-md transition-all duration-500 hover:translate-y-[-6px] hover:shadow-2xl"
                >
                  {/* Offer Badge */}
                  <span className="absolute top-3 left-3 z-50 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Offer
                  </span>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <img
                      src={`https://sanabelauto.com/storage/${car.banner_image}`}
                      alt={car.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                    <div className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
                      {car.price} {car.currency || "AED"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {car.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Premium condition • Low mileage
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        EMI available
                      </span>
                     <Link
  href={`/cars/${car.slug}`}
  className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
>
  View Details
</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
