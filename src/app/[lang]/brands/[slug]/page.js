import Link from 'next/link';
import Image from 'next/image';
import BrandBannerSlider from '@/components/BrandBannerSlider';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';
import BrandLeadForm from "@/components/Forms/BrandLeadForm";

import {
  getBrandBySlug,
  getCarsByBrandId,
  getCars
} from '@/lib/api';

export default async function BrandPage({ params }) {
  const { slug, lang } = await params;

  const brand = await getBrandBySlug(slug);
  const cars = await getCarsByBrandId(brand.id);
  const publishedCars = Array.isArray(cars)
  ? cars.filter(car => car?.status === 'published')
  : [];


  if (!brand) {
    return (
      <div className="p-10 text-center text-black font-bold text-xl">
        {lang === 'ar' ? 'العلامة التجارية غير موجودة' : 'Brand not found'}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Brand Banner */}
      {brand.banners && (
        <BrandBannerSlider
          banners={
            brand.banners[lang]?.length > 0
              ? brand.banners[lang]
              : brand.banners.en?.length > 0
                ? brand.banners.en
                : brand.banners["0"]
                  ? [brand.banners["0"]] // صورة فردية
                  : []
          }
          brandName={brand.name[lang] || brand.name.en}
        />
      )}
      <BrandLeadForm brandId={brand.id}
        brand={brand} cars={cars} lang={lang} />

      {/* Biography */}
      <section className="py-4 bg-white">
        <div
          className="container mx-auto text-black px-6 prose max-w-4xl"
          dangerouslySetInnerHTML={{
            __html:
              typeof brand.biography?.[lang] === 'string'
                ? brand.biography[lang]
                : brand.biography?.en || ''
          }}
        />
      </section>


      {/* Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-black font-bold mb-12 text-center">
            {lang === 'ar' ? 'الموديلات' : 'Models'}
          </h2>

       {publishedCars.length === 0 ? (

            <p className="text-center text-gray-500">
              {lang === 'ar' ? 'لا توجد سيارات لهذه العلامة التجارية.' : 'No cars found for this brand.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{publishedCars.map(car => (
                <Link key={car.id} href={`/${lang}/cars/${car.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      {car.card_image_url ? (
                        <Image
                          src={car.card_image_url}
                          alt={car.name[lang] || car.name.en}
                          fill
                          quality={65}
                          unoptimized
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500 text-sm">
                          {lang === 'ar' ? 'لا توجد صورة' : 'No Image'}
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>

                      <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
                        {car.price}
                        <Image
                          src={SAR_symbol}
                          alt="SAR"
                          width={20}
                          height={20}
                          quality={65}
                          className="inline mx-1"
                        />
                        {lang === 'ar' ? ' شامل الضريبة' : ' Including VAT'}
                      </div>
                    </div>


                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                        {car.name[lang] || car.name.en}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {car.description[lang] || car.description.en}
                      </p>
                      <p className="flex text-black justify-between"><span>{lang === 'ar' ? 'سنة الصنع' : 'Year Model'}</span>
                        <span className="font-semibold">
                          {car.year_model}
                        </span></p>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        {/* EMI INFO */}
                        {car.emi_monthly && (
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
                        )}

                        {/* CTA BUTTON */}
                        <button
                          className="
      group relative inline-flex items-center gap-2
      rounded-full bg-indigo-600 px-6 py-2.5
      text-sm font-semibold text-white
      shadow-md transition-all duration-300
      hover:bg-indigo-700 hover:shadow-lg
      active:scale-95
    "
                        >
                          <span className="relative z-10">
                            {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                          </span>

                          {/* Arrow */}
                          <svg
                            className={`h-4 w-4 transition-transform duration-300 
        ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                    </div>

                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
