import Link from 'next/link';
import Image from 'next/image';
import BrandBannerSlider from '@/components/BrandBannerSlider';

import {
  getBrandBySlug,
  getCarsByBrandId,
  getCars
} from '../../../lib/api';

export default async function BrandPage({ params }) {
  const { slug } =await params;

  // جلب البيانات من API
  const brand = await getBrandBySlug(slug);
  const allCars = await getCars();

  // فلترة السيارات حسب الـ brand slug
const cars = await getCarsByBrandId(brand.id);

  if (!brand) {
    return <div className="p-10 text-center font-bold text-xl">Brand not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Slider للبانرات */}
      {brand.banners_url && brand.banners_url.length > 0 && (
        <BrandBannerSlider
          banners={brand.banners_url}
          brandName={brand.name}
        />
      )}

      {/* Biography */}
      <section className="py-16 bg-white">
        <div
          className="container mx-auto px-6 prose max-w-4xl"
          dangerouslySetInnerHTML={{ __html: brand.biography }}
        />
      </section>

      {/* Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Models</h2>

          {cars.length === 0 ? (
            <p className="text-center text-gray-500">No cars found for this brand.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cars.map(car => (
                  <Link key={car.id} href={`/cars/${car.slug}`}>
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={`${car.image}`}
                  alt={car.name}
                  unoptimized
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                {/* Price Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
                  {car.price} {car.currency || 'SAR'}
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
                  <span className="text-sm text-gray-400">EMI available</span>
                  <button className=" cursor-pointer relative overflow-hidden  rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
                    View Details
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
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
