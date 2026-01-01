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
  const { slug } = await params;

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
          src={car.image}
          alt={car.name}
          priority
          width={1860}
          height={720}
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {car.name}
          </h1>
          <p className="text-lg text-gray-200 mt-2">
            {car.brand}
          </p>
        </div>
      </div>
<CarLeadForm car={car} />

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-2 space-y-12">

          {/* Price Box */}
          <div className="bg-white rounded-3xl shadow p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-500">Cash Price</p>
              <p className="text-3xl font-bold text-gray-900">
                {car.price} {car.currency}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Monthly Installments (EMI) from <span className="font-semibold">{car.emi_monthly} {car.currency}</span> / month
              </p>

              
            </div>

            
          </div>
{car.specifications?.length > 0 && (
  <div className="bg-white rounded-3xl shadow p-6">
    <h3 className="font-bold text-lg mb-4">Specifications</h3>
    <ul className="space-y-3">
      {car.specifications.map((spec, i) => (
        <li key={i} className="flex items-center gap-3">
          {spec.icon && (
            <img
              src={`https://sanabelauto.com/storage/${spec.icon}`} 
              alt={spec.key}
              className="w-6 h-6 object-contain"
            />
          )}
          <span className="font-semibold">{spec.key}:</span>
          <span>{spec.value}</span>
        </li>
      ))}
    </ul>
  </div>
)}

          {/* Offers */}
          {car.has_offer && car.offers?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Available Offers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {car.offers.map(offer => (
                  <Link key={offer.id} href={`/offers/${offer.slug}`}>
                  <div
                    key={offer.id}
                    className="bg-white rounded-2xl shadow overflow-hidden"
                  >
                    {offer.banners?.length > 0 && (
                                     <div className="relative h-56 w-full">
                                       <Image
                                         src={
                                           offer.card_image
                                             ? `https://sanabelauto.com/storage/${offer.card_image}`
                                             : `https://sanabelauto.com/storage/${offer.banners[0]}`
                                         }
                                         alt={offer.title}
                                         fill
                                         className="object-cover group-hover:scale-105 transition-transform"
                                         unoptimized
                                       />
                                     </div>
                                   )}
                    <div className="p-5">
                      <h3 className="font-bold text-lg">{offer.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {offer.description}
                      </p>
                                       {offer.end_date && <Countdown endDate={offer.end_date} />}
   {offer.brands?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-2">
                      {offer.brands.map((b, i) => (
                        <div
                          key={i}
                          className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                        >
                          {b.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 text-right">
                    <span className="text-blue-600 font-semibold text-sm">
                      View Details &rarr;
                    </span>
                  </div>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

       <div className="grid lg:grid-cols-2 gap-12">
  <Gallery
    title="Interior"
    images={car.interior_images}
  />

  <Gallery
    title="Exterior"
    images={car.exterior_images}
  />
</div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="font-bold text-lg mb-4">Car Details</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Brand</span>
                <span className="font-semibold">{car.brand}</span>
              </li>
              <li className="flex justify-between">
                <span>Model</span>
                <span className="font-semibold">{car.name}</span>
              </li>
              <li className="flex justify-between">
                <span>Price</span>
                <span className="font-semibold">{car.price} {car.currency}</span>
              </li>
              <li className="flex justify-between">
                <span>Monthly Installments (EMI)</span>
                <span className="font-semibold">{car.emi_monthly}</span>
              </li>
  <li className="space-y-2">
  <span className="block text-gray-500">Available Showrooms</span>

  <div className="flex flex-wrap gap-2">
    {car.available_showrooms?.map((s, i) => (
      <span
        key={i}
        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
      >
        {s.showroom_name}
      </span>
    ))}
  </div>
</li>
<li className="flex justify-between">
  <span>Year Model</span>
  <span className="font-semibold">{car.year_model}</span>
</li>

<li className="flex justify-between">
  <span>Warranty</span>
  <span className="font-semibold">{car.warranty}</span>
</li>

<li className="flex justify-between">
  <span>Cylinders</span>
  <span className="font-semibold">{car.cylinders}</span>
</li>

{car.vehicle_types?.length > 0 && (
  <div className="mt-4">
    <p className="text-sm font-semibold mb-2">Vehicle Types</p>
    <div className="flex gap-2 flex-wrap">
      {car.vehicle_types.map((v, i) => (
        <span
          key={i}
          className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
        >
          {v.type_name}
        </span>
      ))}
    </div>
  </div>
)}


            </ul>
          </div>

          <div className="bg-indigo-600 rounded-3xl p-6 text-white">
            <h4 className="font-bold text-lg mb-2">
              Need Help?
            </h4>
            <p className="text-sm text-indigo-100 mb-4">
              Our advisors will help you choose the best option.
            </p>
            <div className="space-x-4 flex items-center justify-center" >
<RequestForm car={car} />
<CallUs car={car} />
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
