import Image from "next/image";
import { getOfferBySlug } from "../../../lib/api";
import LeadForm from "@/components/Forms/LeadForm";
import OfferLeadForm from "@/components/Forms/OfferLeadForm";
import CarCarousel from "@/components/CarCarousel";

export default async function OfferDetailsPage({ params }) {
  try {
    const { slug } = await params;

    if (!slug || slug === "undefined") {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700">Offer slug is missing or invalid</p>
          </div>
        </div>
      );
    }

    let offer;
    try {
      offer = await getOfferBySlug(slug);
    } catch {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Offer Not Found
            </h1>
            <p className="text-gray-700">The offer "{slug}" does not exist</p>
          </div>
        </div>
      );
    }

    if (!offer) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">No Data</h1>
            <p className="text-gray-700">Could not load offer details</p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50">
        {/* HERO BANNER */}
        {offer.banners?.length > 0 && (
          <div className="relative w-full h-[450px]">
            <Image
              src={`https://sanabelauto.com/storage/${offer.banners[0]}`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {offer.title}
              </h1>
              <p className="text-lg md:text-xl">
                Flexible EMI options · Multiple brands · Limited time offer
              </p>
            </div>
          </div>
        )}

<OfferLeadForm offer={offer} />

        <div className="container mx-auto px-6 py-16">
         

          {/* BRANDS */}
          {offer.brands?.length > 0 && (
            <section className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-10">
                Explore Our Brands
              </h2>
              <div className="flex gap-6 overflow-x-auto py-4 px-2">
                {offer.brands.map((brand, i) => (
                  <div
                    key={i}
                    className="flex-none w-32 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center transition hover:shadow-xl"
                  >
                    {brand.logo ? (
                      <Image
                        src={`https://sanabelauto.com/storage/${brand.logo}`}
                        width={120}
                        height={60}
                        className="object-contain p-2"
                        unoptimized
                      />
                    ) : (
                      <span className="font-semibold text-gray-700">
                        {brand.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* OFFER DESCRIPTION */}
          {offer.description && (
            <section className="mb-24">
              <div className="mx-auto max-w-4xl rounded-3xl bg-gray-50 p-12 shadow-inner">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Offer Details
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {offer.description}
                </p>
              </div>
            </section>
          )}

          {/* CARS */}
          {offer.cars?.length > 0 && (
            <section className="mb-32">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">
                  Cars Included in This Offer
                </h2>
                <span className="text-sm font-medium text-green-600">
                  EMI Available
                </span>
              </div>
              <div className="rounded-3xl  p-8">
                <CarCarousel cars={offer.cars} />
              </div>
            </section>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in OfferDetailsPage:", error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">حدث خطأ ما</h1>
          <p className="text-gray-700">{error.message}</p>
        </div>
      </div>
    );
  }
}
