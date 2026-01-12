import Banner from '@/components/Banner';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Offers from '@/components/Offers';
import ProductListing from '@/components/ProductListing';
import LeadForm from '@/components/Forms/LeadForm';
import { getBrands, getOffers, getCars, getHomePage } from '@/lib/api';

export const dynamic = 'force-dynamic';

async function safeFetch(fn, lang) {
  try {
    const data = await fn(lang);
    return data || [];
  } catch (err) {
    console.error('Fetch error:', err);
    return [];
  }
}

export default async function Home({ params }) {
  const { lang } = await  params;

  const page = await safeFetch(getHomePage, lang);
  const brands = await safeFetch(getBrands, lang);
  const offers = await safeFetch(getOffers, lang);
  const cars = await safeFetch(getCars, lang);

  return (
    <div className="min-h-screen bg-gray-50">

      <section>
        <Banner banners={page?.banners || []} lang={lang} />
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <About lang={lang} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Offers offers={offers} lang={lang} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {lang === 'ar'
              ? 'قدّم الآن واحصل على سيارتك'
              : 'Find the car that fits you!'}
          </h2>
          <p className="text-red-600 text-md font-semibold mb-6">
            {lang === 'ar'
              ? 'تخطى الطابور واحصل على سيارتك بسرعة عن طريق ملء المعلومات أدناه'
              : 'Cut the line & get your car faster by filling in the information below'}
          </p>
          <LeadForm lang={lang} />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          {lang === 'ar' ? 'علاماتنا التجارية' : 'Our Brands'}
        </h2>
        <Brands brands={brands} lang={lang} />
      </section>

      <section className="py-16 bg-white">
        <ProductListing brands={brands} cars={cars} lang={lang} />
      </section>

    </div>
  );
}
