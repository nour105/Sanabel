import Image from 'next/image';
import Link from 'next/link';

export default function Brands({ brands, lang }) {
  if (!brands || brands.length === 0) {
    return (
      <section className="py-16">
        <p className="text-center text-gray-500">No brands available</p>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 lg:flex xl:flex gap-6  justify-center items-center">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/${lang}/brands/${brand.slug}`}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative w-20 h-20">
                <Image
                  src={`https://sanabelauto.com/storage/${brand.logo}`}
                  alt={typeof brand.name === 'object' ? brand.name[lang] || brand.name.en : brand.name}
                  width={120}
                  height={60}
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
