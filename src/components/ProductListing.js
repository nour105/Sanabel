'use client';

import { useState, useEffect } from 'react';
import Filters from './Filters';
import Link from 'next/link';
import Image from 'next/image';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';

const t = (val, lang) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') return val[lang] || val.en || '';
  return '';
};

export default function ProductListing({ brands = [], cars = [], lang }) {
  const [filteredCars, setFilteredCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    // فلترة السيارات المنشورة فقط
    const publishedCars = cars.filter(car => car.status === 'published');
    setFilteredCars(publishedCars);
    setVisibleCars(publishedCars.slice(0, perPage));
    setPage(1);
  }, [cars]);

  const handleFilterChange = (filtered) => {
    // فلترة السيارات المنشورة فقط بعد الفلتر
    const publishedFiltered = (filtered || []).filter(car => car.status === 'published');
    setFilteredCars(publishedFiltered);
    setVisibleCars(publishedFiltered.slice(0, perPage));
    setPage(1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setVisibleCars(filteredCars.slice(0, nextPage * perPage));
    setPage(nextPage);
  };

  if (!cars.length) {
    return <p className="text-center mt-10 text-gray-500">No cars available</p>;
  }

  return (
    <div className="flex flex-col gap-8 bg-white">
      <Filters
        brands={brands.map(b => ({ ...b, name: t(b.name, lang) }))}
        cars={cars}
        onFilterChange={handleFilterChange}
        lang={lang}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {visibleCars.map(car => (
          <Link key={car.id} href={`/${lang}/cars/${car.slug}`}>
            <div className="group relative overflow-hidden h-full rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                {car.card_image && (
                  <Image
                    src={`https://admin.sanabelauto.com/storage/${car.card_image}`}
                    alt={car.name[lang] || car.name.en}
                    fill
                    unoptimized
                    quality={65}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {car.has_offer && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {lang === 'ar' ? 'عرض رمضان' : 'Ramadan Offer'}
                  </span>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
                  {car.price}   
                  <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" />
                  {lang === 'ar' ? ' شامل الضريبة' : ' Including VAT'}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-5 justify-between">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {car.name[lang] || car.name.en}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                  {car.description[lang] || car.description.en}
                </p>
                {car.year_model && (
                  <p className="flex text-black justify-between">
                    <span>{lang === 'ar' ? 'سنة الصنع' : 'Year Model'}</span>
                    <span className="font-semibold">{car.year_model}</span>
                  </p>
                )}

                 {car.emi_monthly && (
  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
    {/* EMI INFO */}
    <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2">
      <span className="text-base font-bold text-gray-900">
        {car.emi_monthly}
      </span>

      <Image
        src={SAR_symbol}
        alt="SAR"
        width={18}
        height={18}
        quality={65}
        className="inline-block"
      />

      <span className="text-sm text-gray-600 whitespace-nowrap">
        {lang === 'ar'
          ? 'إمكانية التقسيط الشهري'
          : 'Monthly installments'}
      </span>
    </div>


  </div>
)}
    {/* CTA BUTTON */}
    <button
      className="group cursor-pointer relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
    >
      <span>
        {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
      </span>

      <svg
        className={`h-4 w-4 transition-transform duration-300 ${
          lang === 'ar'
            ? 'rotate-180 group-hover:-translate-x-1'
            : 'group-hover:translate-x-1'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
              </div>

            </div>
          </Link>
        ))}
      </div>

      {visibleCars.length < filteredCars.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="rounded-full cursor-pointer bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 transition"
          >
            {lang === 'ar' ? 'تحميل المزيد' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
