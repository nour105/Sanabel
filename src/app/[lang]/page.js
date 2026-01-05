import Banner from '@/components/Banner';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Offers from '@/components/Offers';
import ProductListing from '@/components/ProductListing';
import LeadForm from '@/components/Forms/LeadForm';

import { getBrands, getOffers, getCars, getHomePage } from '@/lib/api';

export default async function Home({ params }) {
  const { lang } = await params;

  const [page, brands, offers, cars] = await Promise.all([
    getHomePage(lang),
    getBrands(lang),
    getOffers(lang),
    getCars(lang)
  ]);

  return (
    <div className="min-h-screen bg-gray-50">

      <section>
        <Banner banners={page?.banners} lang={lang} />
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <About lang={lang} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container text-black mx-auto px-4">
          <Offers offers={offers} lang={lang} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-black text-2xl font-bold text-center">
              {lang === 'ar'
                ? 'قدّم الآن واحصل على سيارتك'
                : 'Apply now and get your car'}
            </h2>
            <LeadForm lang={lang} brands={brands}  cars={cars} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          {lang === 'ar' ? 'علاماتنا التجارية' : 'Our Brands'}
        </h2>
        <div className="container mx-auto px-4">
          <Brands brands={brands} lang={lang} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProductListing brands={brands} cars={cars} lang={lang} />
        </div>
      </section>

    </div>
  );
}
