import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllcars, getCar } from '@/lib/api';
import CarLeadForm from '@/components/Forms/CarLeadForm';
import Link from 'next/link';
import Countdown from "@/components/CountDown";
import CallUs from '@/components/CallUs';
import Gallery from '@/components/Gallery';
import RequestForm from '@/components/RequestForm';
export const dynamic = 'force-dynamic';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';

/**
 * Pre-generate slugs
 */
export async function generateStaticParams() {
  const cars = await getAllcars();

  return cars.map(car => ({
    slug: car.slug,
  }));
}

export default async function CarPage({ params }) {
  const { slug, lang } = await params;

  let car;
  try {
    car = await getCar(slug);
  } catch {
    notFound();
  }

  if (!car) notFound();

  return (
    <section className="bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="relative">
        <Image
          src={car?.image_url}
          alt={car?.name[lang]}
          priority
          width={1860}
          height={720}
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {car?.name[lang]}
          </h1>
          <p className="text-lg text-gray-200 mt-2">
            {car?.brand[lang]}
          </p>
        </div>
      </div>
      <CarLeadForm car={car} lang={lang} />

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">

        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-2 space-y-12">

          {/* Price Box */}
          <div className="bg-white rounded-3xl shadow p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500">
                {lang === 'ar' ? 'السعر النقدي' : 'Cash Price'}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {car.price}
                <Image
                  src={SAR_symbol}
                  alt="SAR"
                  width={20}
                  height={20}
                  className="inline"
                />

              </p>
              <p className="text-sm text-gray-500 mt-1">
                {lang === 'ar' ? 'الأقساط الشهرية من' : 'Monthly Installments (EMI) from'}{' '}
                <span className="font-semibold">{car?.emi_monthly} 
                    <Image
                  src={SAR_symbol}
                  alt="SAR"
                  width={20}
                  height={20}
                  className="inline"
                /></span> / {lang === 'ar' ? 'شهر' : 'month'}
              </p>
            </div>
          </div>

          {/* Specifications */}
          {car.specifications?.length > 0 && (
            <div className="bg-white rounded-3xl shadow p-6">
              <h3 className="font-bold text-lg mb-4">
                {lang === 'ar' ? 'المواصفات' : 'Specifications'}
              </h3>
              <ul className="space-y-3">
                {car.specifications.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {spec.icon && (
                      <img
                        src={`https://sanabelauto.com/storage/${spec?.icon}`}
                        alt={lang === 'ar' ? spec?.key?.ar : spec?.key?.en}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    <span className="font-semibold">{lang === 'ar' ? spec?.key?.ar : spec?.key?.en}:</span>
                    <span>{lang === 'ar' ? spec?.value?.ar : spec?.value?.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Galleries */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Gallery
              title={lang === 'ar' ? 'الداخلية' : 'Interior'}
              images={car?.interior_images}
            />

            <Gallery
              title={lang === 'ar' ? 'الخارجية' : 'Exterior'}
              images={car?.exterior_images}
            />
          </div>
        </div>


        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="font-bold text-lg mb-4"> {lang === 'ar' ? 'تفاصيل المركبة' : 'Car Details'}</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'الماركة' : 'Brand'}</span>
                <span className="font-semibold">{lang === 'ar' ? car?.brand?.ar : car?.brand?.en}</span>
              </li>
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'الموديل' : 'Model'}</span>
                <span className="font-semibold">{lang === 'ar' ? car?.name?.ar : car?.name?.en}</span>
              </li>
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'السعر' : 'Price'}</span>
                <span className="font-semibold">{car?.price}  
                   <Image
    src={SAR_symbol}
    alt="SAR"
    width={20}
    height={20}
    className="inline"
  /></span>
              </li>
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'الأقساط الشهرية' : 'Monthly Installments (EMI)'}</span>
                <span className="font-semibold">{car.emi_monthly}              <Image
    src={SAR_symbol}
    alt="SAR"
    width={20}
    height={20}
    className="inline"
  /> </span>
              </li>
              
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'سنة الصنع' : 'Year Model'}</span>
                <span className="font-semibold">{lang === 'ar' ? car?.year_model?.ar : car?.year_model?.en}</span>
              </li>
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'الضمان' : 'Warranty'}</span>
                <span className="font-semibold">{lang === 'ar' ? car?.warranty?.ar : car?.warranty?.en}</span>
              </li>
              <li className="flex justify-between">
                <span>{lang === 'ar' ? 'عدد الأسطوانات' : 'Cylinders'}</span>
                <span className="font-semibold">{lang === 'ar' ? car?.cylinders?.ar : car?.cylinders?.en}</span>
              </li>
              <li className="space-y-2">
                <span className="block text-gray-500">{lang === 'ar' ? 'الصالونات المتوفرة' : 'Available Showrooms'}</span>
                <div className="flex flex-wrap gap-2">
                  {car.available_showrooms?.map((s, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {lang === 'ar' ? s?.showroom_name?.ar : s?.showroom_name?.en}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

          </div>

          <div className="bg-indigo-600 rounded-3xl p-6 text-white">
            <h4 className="font-bold text-lg mb-2">
              {lang === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}
            </h4>
            <p className="text-sm text-indigo-100 mb-4">
              {lang === 'ar'
                ? 'مستشارونا سيساعدونك على اختيار أفضل خيار.'
                : 'Our advisors will help you choose the best option.'}
            </p>
            <div className="space-x-4 flex items-center justify-center">
              <RequestForm car={car} lang={lang} />
              <CallUs car={car} lang={lang} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}