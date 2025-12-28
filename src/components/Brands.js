import Image from 'next/image';
import Link from 'next/link';

export default function Brands({ brands }) {
  if (!brands || brands.length === 0) {
    return (
      <section className="py-16">
        <p className="text-center text-gray-500">No brands available</p>
      </section>
    );
  }

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-6">        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative w-20 h-20">
                <Image
                  src={`http://127.0.0.1:8000/storage/${brand.logo}`}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
