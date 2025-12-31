import Image from 'next/image';
import Link from 'next/link';

export default function Offers({ offers }) {
  if (!offers || offers.length === 0) {
    return <p className="text-center text-gray-500 py-16">No offers available</p>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Link key={offer.id} href={`/offers/${offer.slug || offer.id}`} className="group relative block overflow-hidden rounded-xl shadow-lg">
             {offer.card_image && (
  <div className="relative h-64 w-full">
    <Image
      src={`https://sanabelauto.com/storage/${offer.card_image}`}
      alt={offer.title}
      fill
      className="object-cover group-hover:scale-105 transition-transform"
      unoptimized
    />
  </div>
)}

              <div className="absolute inset-0 bg-[#0000004f] bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{offer.title}</h3>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
