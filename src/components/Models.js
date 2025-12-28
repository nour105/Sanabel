import Image from 'next/image';
import Link from 'next/link';

export default function Models({ cars }) {
  if (!cars || cars.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">No models available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Link key={car.id} href={`/cars/${car.slug}`}className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                {car.banner_image && (
                  <div className="relative h-48">
                    <Image
                      src={`https://sanabelauto.com/storage/${car.banner_image}`}
                      alt={car.name}
                      fill
                      className="object-cover"
                        unoptimized={true} // <-- bypass optimization

                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{car.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      {car.price} {car.currency}
                    </span>
                    <span className="text-sm text-gray-500">
                      {car.brand.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
