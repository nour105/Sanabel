"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';

// Split array into chunks for Swiper pages
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// Helpers to safely get localized fields
function getCarName(car, locale = "en") {
  if (!car?.name) return "";
  return typeof car.name === 'object' ? car.name[locale] || car.name.en : car.name;
}

function getCarDescription(car, locale = "en") {
  if (!car?.description) return "";
  return typeof car.description === 'object' ? car.description[locale] || car.description.en : car.description;
}

export default function CarCarousel({ cars = [], locale = "en" }) {
  if (!cars.length) return null;

  const pages = chunkArray(cars, 12);

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
                   <Link href={`/${locale}/cars/${car.slug}`}>
                  {/* Offer Badge */}
                  <span className="absolute top-3 left-3 z-50 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {locale === "ar" ? "عرض خاص" : "Offer"}
                  </span>

                  {/* Car Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <Image
                      src={`https://sanabelauto.com/storage/${car.banner_image}`}
                      alt={getCarName(car, locale)}
                      fill
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    <div className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
                      {car.price}   <Image
    src={SAR_symbol}
    alt="SAR"
    width={20}
    height={20}
    className="inline"
  />
                    </div>
                  </div>

                  {/* Car Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {getCarName(car, locale)}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {getCarDescription(car, locale)}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {locale === "ar"
                          ? "أقساط شهرية متاحة"
                          : "Monthly Installments available"}
                      </span>
                      <span
                       
                        className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                      >
                        {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                      </span>
                    </div>
                  </div>
                  </Link>
                
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
