import Banner from '../components/Banner';
import About from '../components/About';
import Brands from '../components/Brands';
import Offers from '../components/Offers';
import ProductListing from '../components/ProductListing';
import LeadForm from '../components/Forms/LeadForm';

import { getBrands, getOffers, getCars, getHomePage } from '../lib/api';

export default async function Home() {
  const [page, brands, offers, cars] = await Promise.all([
    getHomePage(),
    getBrands(),
    getOffers(),
    getCars()
  ]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1️⃣ BANNER / HERO */}
      <section>
        <Banner banners={page?.banners} />
      </section>
     {/* 4️⃣ ABOUT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>
      {/* 2️⃣ OFFERS / FEATURED CARS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Offers offers={offers} />
        </div>
      </section>

      {/* 3️⃣ ✅ LEAD FORM (BEST PLACE) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold text-center">
              Apply now and get your car
            </h2>
            <LeadForm />
          </div>
        </div>
      </section>

 

      {/* 5️⃣ BRANDS */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Brands</h2>
        <div className="container mx-auto px-4">
          <Brands brands={brands} />
        </div>
      </section>

      {/* 6️⃣ ALL MODELS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProductListing brands={brands} cars={cars} />
        </div>
      </section>

    </div>
  );
}
