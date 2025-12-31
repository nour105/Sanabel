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
  <div className="relative w-full">
    {/* Container for banner with fixed aspect ratio */}
    <div className="relative w-full pt-[30%] md:pt-[23%] lg:pt-[25%] overflow-hidden  shadow-lg">
      <Image
        src={`https://sanabelauto.com/storage/${offer.banners}`}
        alt={offer.title}
        fill
        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        unoptimized
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      {/* Text content */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{offer.title}</h1>
        <p className="text-lg md:text-xl">
          Flexible EMI options · Multiple brands · Limited time offer
        </p>
      </div> */}
    </div>
  </div>
)}


<OfferLeadForm offer={offer} />

        <div className="container mx-auto px-6 py-16">
         

          {/* BRANDS */}
          {offer.brands?.length > 0 && (
            <section className="mb-24">
              <h2 className="text-3xl  font-bold text-center mb-10">
                Explore Our Brands
              </h2>
              <div className="flex gap-6 items-center justify-center py-4 px-2">
                {offer.brands.map((brand, i) => (
                  <div
                    key={i}
                    className="flex-none w-32 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center transition hover:shadow-xl"
                  >
                    {brand.logo ? (
                      <Image
                        src={`https://sanabelauto.com/storage/${brand.logo}`}
                        alt=""
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
          <section className="mb-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                Cars Included in This Offer
              </h2>
              <span className="text-green-600 font-medium">
                EMI Available
              </span>
            </div>

            <CarCarousel cars={offer.cars} />
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
