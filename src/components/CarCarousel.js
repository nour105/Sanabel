"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CarCarousel({ cars }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="py-8"
    >
      {cars.map((car) => (
        <SwiperSlide key={car.id}>
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={`https://sanabelauto.com/storage/${car.banner_image}`}
                alt={car.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
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

              {/* CTA */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  EMI available
                </span>

                <button className="relative overflow-hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
