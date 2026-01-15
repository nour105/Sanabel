import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllcars, getCar } from '@/lib/api';
import CarLeadForm from '@/components/Forms/CarLeadForm';
import CallUs from '@/components/CallUs';
import Gallery from '@/components/Gallery';
import RequestForm from '@/components/RequestForm';
export const dynamic = 'force-dynamic';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';
import ThankYouModal from '@/components/ThankYouModal';
import Link from 'next/link';


export async function generateStaticParams() {
  const cars = await getAllcars();

  const car = await getAllcars();
  return cars.map(car => ({ slug: car.slug }));
}

function formatYouTubeUrl(url) {
  if (!url) return '';
  if (url.includes('watch?v=')) return url.replace('watch?v=', 'embed/');
  if (url.includes('embed/')) return url;
  if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'www.youtube.com/embed/');
  return '';
}

export default async function CarPage({ params }) {
  const { slug, lang } = await params;

  let car;
  try {
    car = await getCar(slug);
  } catch {
    notFound();
  }
  let similarCars = [];
  try {
    const allCars = await getAllcars(); 
    const currentPrice = parseFloat(car.price.replace(/,/g, ''));

    similarCars = allCars?.filter(c => {
      const price = parseFloat(c?.price?.replace(/,/g, ''));
      return c.slug !== car.slug && Math.abs(price - currentPrice) <= 15000; // ±15k
    });
  } catch (err) {
    console.error('Error fetching similar cars', err);
  }


  if (!car) notFound();

  return (
    <section className="bg-gray-50">
      <ThankYouModal lang={lang} />

      {/* ================= HERO ================= */}
      <div className="relative">
        <Image
          src={`https://admin.sanabelauto.com/storage/${car?.image}`}
          alt={car?.name[lang]}
          priority
          width={1860}
          height={720}
          className="object-cover w-full"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{car?.name[lang]}</h1>
          <p className="text-lg text-gray-200 mt-2">{car?.brand[lang]}</p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="px-4 py-16 space-y-10">

        {/* Lead Form */}
        <CarLeadForm car={car} lang={lang} />

        {/* Grid layout */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-10 flex flex-col gap-10">

          {/* ===== LEFT COLUMN (Desktop main content) ===== */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Price Box */}
            <div className="bg-white text-black rounded-3xl shadow p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 order-1 lg:order-1">
              <div>
                <p className="text-sm text-gray-500">{lang === 'ar' ? 'السعر النقدي' : 'Cash Price'} {lang === 'ar'
                  ? ' شامل الضريبة'
                  : ' Including VAT'} </p>
                <p className="text-3xl font-bold text-gray-900">
                  {car.price}
                  <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" />

                </p>
               {car?.emi_monthly && (
  <p className="text-sm text-gray-500 mt-1">
    {lang === 'ar' ? 'الأقساط الشهرية من' : 'Monthly Installments (EMI) from'}{' '}
    <span className="font-semibold">
      {car.emi_monthly}
      <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" />
    </span>{' '}
    / {lang === 'ar' ? 'شهر' : 'month'}
  </p>
)}

                {car.available_showrooms?.map((s, i) => {
                  // إذا ما في أي bank_details، ما نعرض شيء
                  if (!s.bank_details || s.bank_details.length === 0) return null;

                  return (
                    <div key={i} className="space-y-2">
                      {s.bank_details.map((bank, bIndex) => (
                        <div
                          key={bIndex}
                          className="items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                        >
                          <img
                            src={`https://admin.sanabelauto.com/storage/${bank.bank_logo}`}
                            alt={bank.bank_name?.[lang]}
                            className="h-8 object-contain"
                          />
                          <div className="text-sm">
                            <p className="font-semibold">{bank.bank_name?.[lang]}</p>

                            {bank.down_payment && (
                              <p>
                                {lang === 'ar' ? 'دفعة أولى' : 'Down'}: {bank.down_payment}
                              </p>
                            )}

                            {bank.margin && (
                              <p>
                                {lang === 'ar' ? 'هامش' : 'Margin'}: {bank.margin}
                              </p>
                            )}

                            {bank.final_payment && (
                              <p>
                                {lang === 'ar' ? 'الدفعة النهائية' : 'Final'}:{" "}
                                {bank.final_payment}{" "}
                                <Image
                                  src={SAR_symbol}
                                  alt="SAR"
                                  width={20}
                                  height={20}
                                  className="inline"
                                />
                              </p>
                            )}

                            {bank.valid_till && (
                              <p>
                                {lang === 'ar' ? 'صالح حتى' : 'Valid Till'}: {bank.valid_till}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Specifications */}
            {car.specifications?.length > 0 && (
              <div className="bg-white rounded-3xl shadow p-6 order-2 lg:order-2">
                <h3 className="font-bold text-black text-lg mb-4">{lang === 'ar' ? 'المواصفات' : 'Specifications'}</h3>
                <ul className="space-y-3">
                  {car.specifications.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {spec.icon && (
                        <img
                          src={`https://admin.sanabelauto.com/storage/${spec?.icon}`}
                          alt={lang === 'ar' ? spec?.key?.ar : spec?.key?.en}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span className=" text-black font-semibold">{lang === 'ar' ? spec?.key?.ar : spec?.key?.en}:</span>
                      <span className='text-black'>{lang === 'ar' ? spec?.value?.ar : spec?.value?.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
{/* Description */}
{car?.description?.[lang] && (
  <div className="bg-white rounded-3xl order-3 shadow p-6">
    <h3 className="font-bold text-black text-lg mb-4">
      {lang === 'ar' ? 'الوصف' : 'Description'}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      {car.description[lang]}
    </p>
  </div>
)}

{/* Content (HTML from API) */}
{car?.content?.[lang] && (
  <div className="bg-white rounded-3xl order-4 shadow p-6">
    <h3 className="font-bold text-black text-lg mb-4">
      {lang === 'ar' ? 'تفاصيل إضافية' : 'More Details'}
    </h3>

    <div
      className="prose prose-gray max-w-none"
      dangerouslySetInnerHTML={{
        __html: car.content[lang],
      }}
    />
  </div>
)}

          </div>

          {/* ===== RIGHT COLUMN (Desktop sidebar) ===== */}
          <div className="flex flex-col gap-10">

            {/* Car Details */}
          {/* Car Details Sidebar */}
<div className="bg-white rounded-3xl shadow p-6 order-3 lg:order-1">
  <h3 className="font-bold text-black text-lg mb-4">{lang === 'ar' ? 'تفاصيل المركبة' : 'Car Details'}</h3>
  <ul className="space-y-3 text-sm text-gray-700">

    {/* Brand */}
    {car?.brand?.name?.[lang] && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'الماركة' : 'Brand'}</span>
        <span className="font-semibold">{car.brand.name[lang]}</span>
      </li>
    )}

    {/* Model */}
    {(car?.name?.ar || car?.name?.en) && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'الموديل' : 'Model'}</span>
        <span dir="ltr" className="font-semibold">
          {lang === 'ar' ? car?.name?.ar : car?.name?.en}
        </span>
      </li>
    )}

    {/* Price */}
    {car?.price && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'السعر' : 'Price'}</span>
        <span dir="ltr" className="font-semibold">
          {car.price} 
          <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" /> 
          {lang === 'ar' ? ' شامل الضريبة' : ' Including VAT'}
        </span>
      </li>
    )}

    {/* EMI */}
    {car?.emi_monthly && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'الأقساط الشهرية' : 'Monthly Installments (EMI)'}</span>
        <span dir="ltr" className="font-semibold">
          {car.emi_monthly} 
          <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" />
        </span>
      </li>
    )}

    {/* Year Model */}
    {car?.year_model && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'سنة الصنع' : 'Year Model'}</span>
        <span dir="ltr" className="font-semibold">{car.year_model}</span>
      </li>
    )}

    {/* Warranty */}
    {(car?.warranty?.ar || car?.warranty?.en) && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'الضمان' : 'Warranty'}</span>
        <span dir="ltr" className="font-semibold">
          {lang === 'ar' ? car.warranty.ar : car.warranty.en}
        </span>
      </li>
    )}

    {/* Cylinders */}
    {(car?.cylinders?.ar || car?.cylinders?.en) && (
      <li className="flex text-black justify-between">
        <span>{lang === 'ar' ? 'عدد الأسطوانات' : 'Cylinders'}</span>
        <span dir="ltr" className="font-semibold">
          {lang === 'ar' ? car.cylinders.ar : car.cylinders.en}
        </span>
      </li>
    )}

    {/* Available Showrooms */}
    {car?.available_showrooms?.length > 0 && (
      <li className="space-y-2">
        <span className="block text-gray-500">{lang === 'ar' ? 'الصالونات المتوفرة' : 'Available Showrooms'}</span>
        <div className="flex flex-wrap gap-2">
          {car.available_showrooms.map((s, i) => {
            const name = lang === 'ar' ? s?.showroom_name?.ar : s?.showroom_name?.en;
            if (!name) return null;
            return (
              <div key={i} className="space-y-2">
                {s?.showroom_link ? (
                  <Link href={s.showroom_link} target="_blank" rel="noopener noreferrer">
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium inline-block">
                      {name}
                    </span>
                  </Link>
                ) : (
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium inline-block">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </li>
    )}

  </ul>
</div>
{car?.colors?.length > 0 && (
  <div className="bg-white rounded-3xl shadow p-6 order-2">
    <h3 className="font-bold text-black text-lg mb-4">
      {lang === 'ar' ? 'الألوان المتوفرة' : 'Available Colors'}
    </h3>

    <ul className="flex flex-wrap gap-3">
      {car.colors
        .filter(c => c?.color_name?.[lang])
        .map((color, i) => (
          <li
            key={i}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium order-3 text-gray-800"
          >
            {color.color_name[lang]}
          </li>
        ))}
    </ul>
  </div>
)}

{car?.safety?.length > 0 && (
  <div className="bg-white rounded-3xl order-3 shadow p-6">
    <h3 className="font-bold text-black text-lg mb-4">
      {lang === 'ar' ?'أنظمة السلامة' : 'Safety '}
    </h3>

    <ul className="space-y-2 text-gray-700">
      {car.safety
        .filter(s => s?.trim_name?.[lang])
        .map((safety, i) => (
          <li
            key={i}
            className="bg-gray-100 px-4 py-2 rounded-lg font-medium"
          >
            {safety.trim_name[lang]}
          </li>
        ))}
    </ul>
  </div>
)}


            {/* Video */}
            {car?.video_url && (
              <div className="bg-white rounded-3xl shadow p-6 order-5 lg:order-3">
                <h3 className="font-bold text-gray-900 text-lg mb-4">{lang === 'ar' ? 'فيديو السيارة' : 'Car Video'}</h3>
                <iframe
                  src={formatYouTubeUrl(car.video_url)}
                  className="w-full aspect-video rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Need Help */}
            <div className="bg-indigo-600 rounded-3xl p-6 text-white order-5 lg:order-4">
              <h4 className="font-bold text-lg mb-2">{lang === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}</h4>
              <p className="text-sm text-indigo-100 mb-4">{lang === 'ar' ? 'مستشارونا سيساعدونك على اختيار أفضل خيار.' : 'Our advisors will help you choose the best option.'}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <RequestForm car={car} lang={lang} />
                <CallUs car={car} lang={lang} />
              </div>
            </div>

          </div>
        </div>

        {/* ===== Galleries ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <Gallery className="text-gray-900" title={lang === 'ar' ? 'الداخلية' : 'Interior'} images={car?.interior_images} />
          <Gallery className="text-gray-900" title={lang === 'ar' ? 'الخارجية' : 'Exterior'} images={car?.exterior_images} />
        </div>
        {/* ===== Similar Cars Section ===== */}
        {similarCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl text-gray-900 font-bold mb-6">{lang === 'ar' ? 'سيارات مشابهة' : 'Similar Cars'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCars.map((c, i) => (
                <Link
                  key={i}
                  href={`/${lang}/cars/${c.slug}`}
                  className="relative block bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
                >
                  {/* Offer badge */}
                  {c.has_offer && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {lang === 'ar' ? 'عرض خاص' : 'Offer'}
                    </span>
                  )}
                  <p className="absolute top-3 right-3 bg-gray-100  px-3 py-1 rounded-full text-sm shadow-lg  mt-2 font-bold text-gray-900">
                    {c.price} <Image src={SAR_symbol} alt="SAR" width={16} height={16} className="inline" />
                    {lang === 'ar'
                      ? ' شامل الضريبة'
                      : ' Including VAT'} 
                  </p>

                  <Image
                    src={`https://admin.sanabelauto.com/storage/${c.image}`}
                    alt={c.name[lang]}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-700 text-lg">{c.name[lang]}</h3>
                    <p className="text-gray-600">{c.brand.name[lang]}</p>
                    <p className="text-gray-600 line-clamp-1">{c.description[lang]}</p>
                   {c.year_model && (
  <p>
    <span className='text-gray-900'>{lang === 'ar' ? 'سنة الصنع' : 'Year Model'}: </span> 
    <span className="text-gray-700 font-semibold">{c.year_model}</span>
  </p>
)}
 
                    <div className="mt-4 flex items-center justify-between">
                      {c.emi_monthly && (
  <span className="text-sm text-gray-400">
    {lang === 'ar' ? 'إمكانية التقسيط الشهري' : 'Monthly Installments available'}
  </span>
)}

                      <button className="cursor-pointer relative overflow-hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
                        {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
