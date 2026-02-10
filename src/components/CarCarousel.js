"use client";

import Link from "next/link";
import Image from "next/image";
import SAR_symbol from "@/publicImage/Saudi_Riyal_Symbol.svg.png";

// Helpers
function getCarName(car, locale = "en") {
  if (!car?.name) return "";
  return typeof car.name === "object" ? car.name[locale] || car.name.en : car.name;
}

function getCarDescription(car, locale = "en") {
  if (!car?.description) return "";
  return typeof car.description === "object" ? car.description[locale] || car.description.en : car.description;
}

function getYearModel(car, locale = "en") {
  if (!car?.year_model) return "";
  return typeof car.year_model === "object" ? car.year_model[locale] || car.year_model.en : car.year_model;
}

export default function CarCarousel({ cars = [], locale = "en" }) {
  if (!cars.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-6 py-10">
      {cars.map((car) => (
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
            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={`https://admin.sanabelauto.com/storage/${car.banner_image}`}
                alt={getCarName(car, locale)}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                unoptimized
                quality={65}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur flex items-center gap-1">
                {car.price}
                <Image src={SAR_symbol} alt="SAR" width={20} height={20} />
                <span>{locale === "ar" ? " شامل الضريبة" : " Including VAT"}</span>
              </div>
            </div>

            {/* Car Content */}
            <div className="py-6 px-4">
              <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                {getCarName(car, locale)}
              </h3>
              <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                {getCarDescription(car, locale)}
              </p>
              <li className="flex text-black justify-between mt-2">
                <span>{locale === "ar" ? "سنة الصنع" : "Year Model"}</span>
                <span className="font-semibold">{getYearModel(car, locale)}</span>
              </li>

              <div className="mt-4 gap-2 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {locale === "ar" ? "أقساط شهرية متاحة" : "Monthly Installments available"}
                </span>
                <span className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
