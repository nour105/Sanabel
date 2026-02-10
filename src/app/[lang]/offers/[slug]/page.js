import Image from "next/image";
import { getOfferBySlug } from "@/lib/api";
import OfferLeadForm from "@/components/Forms/OfferLeadForm";
import CarCarousel from "@/components/CarCarousel";
import OfferBannerSlider from "@/components/OfferBannerSlider";
import Link from "next/link";

export default async function OfferDetailsPage({ params }) {
  try {
    const { lang, slug } = await params;
    const locale = lang === "ar" ? "ar" : "en"; // default to 'en'

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
{offer.banners?.[locale]?.length > 0 && (
  <OfferBannerSlider
    banners={offer.banners[locale]}
    title={offer.title[locale]}
  />
)}




        {/* OFFER LEAD FORM */}
        <OfferLeadForm offer={offer} locale={locale} />

        <div className="container mx-auto px-6 py-16">
          {/* BRANDS */}
          {offer.brands?.length > 0 && (
            <section className="mb-24">
              <h2 className="text-3xl font-bold text-gray-700 text-center mb-10">
                {locale === "ar" ? "استكشف علاماتنا التجارية" : "Explore Our Brands"}
              </h2>
              <div className="flex gap-6 items-center justify-center py-4 px-2 flex-wrap">
  {offer.brands.map((brand, i) => (
    <Link
      key={i}
      href={`/${locale}/brands/${brand.slug}`} // كل براند يفتح صفحته
      className="flex-none w-32 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center transition hover:shadow-xl"
    >
      {brand.logo ? (
        <Image
          src={`https://admin.sanabelauto.com/storage/${brand.logo}`}
          alt={brand.name[locale]}
          width={120}
          height={60}
          className="object-contain p-2"
          unoptimized
            quality={10}

        />
      ) : (
        <span className="font-semibold text-gray-700">
          {brand.name[locale]}
        </span>
      )}
    </Link>
  ))}
</div>

            </section>
          )}

          {/* OFFER DESCRIPTION */}
          {offer.description?.[locale] && (
            <section className="mb-24">
              <div className="mx-auto max-w-4xl rounded-3xl bg-gray-50 p-12 shadow-inner">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {locale === "ar" ? "تفاصيل العرض" : "Offer Details"}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {offer.description[locale]}
                </p>
              </div>
            </section>
          )}
 {offer.terms?.[locale] && (
  <section id="terms" className="mb-24">
    <div className="mx-auto max-w-4xl rounded-3xl bg-gray-50 p-12 shadow-inner">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {locale === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
      </h2>

      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: offer.terms[locale] }}
      />
    </div>
  </section>
)}

     
          {offer.cars?.length > 0 && (
            <section className="mb-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl text-gray-700 font-bold">
                  {locale === "ar" ? "السيارات المشمولة بالعرض" : "Cars Included in This Offer"}
                </h2>
                <span className="text-green-600 font-medium">
                  {locale === "ar" ? "أقساط شهرية متاحة" : "Monthly Installments Available"}
                </span>
              </div>
              <CarCarousel cars={offer.cars} locale={locale} />
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
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            {params.lang === "ar" ? "حدث خطأ ما" : "Something went wrong"}
          </h1>
          <p className="text-gray-700">{error.message}</p>
        </div>
      </div>
    );
  }
}
