import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllcars, getCar } from '@/lib/api';
import CarLeadForm from '@/components/Forms/CarLeadForm';
import Link from 'next/link';

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
      <div className="relative h-[520px] w-full">
        <Image
          src={car.image}
          alt={car.name}
          
          priority
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
              <p className="text-sm text-gray-500">Starting Price</p>
              <p className="text-3xl font-bold text-gray-900">
                {car.price} {car.currency}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                EMI from <span className="font-semibold">{car.emi_monthly} {car.currency}</span> / month
              </p>
            </div>

            
          </div>

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
                    {offer.banners?.[0] && (
                      <div className="relative h-40 w-full">
                        <Image
                          src={`https://sanabelauto.com/storage/${offer.banners[0]}`}
                          alt={offer.title}
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-bold text-lg">{offer.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {offer.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-3">
                        Valid: {offer.start_date} → {offer.end_date}
                      </p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Interior Images */}
          {car.interior_images?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Interior</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.interior_images.map((img, i) => (
                  <div key={i} className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={img}
                      alt="Interior"
                      className="object-cover hover:scale-105 transition"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exterior Images */}
          {car.exterior_images?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Exterior</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.exterior_images.map((img, i) => (
                  <div key={i} className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={img}
                      alt="Exterior"
                      className="object-cover hover:scale-105 transition"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
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
                <span>Monthly EMI</span>
                <span className="font-semibold">{car.emi_monthly}</span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-600 rounded-3xl p-6 text-white">
            <h4 className="font-bold text-lg mb-2">
              Need Help?
            </h4>
            <p className="text-sm text-indigo-100 mb-4">
              Our advisors will help you choose the best option.
            </p>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
