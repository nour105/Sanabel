import ProductListing from '@/components/ProductListing';
import { getBrands, getCars } from '@/lib/api';

export const dynamic = 'force-dynamic';

async function safeFetch(fn) {
  try {
    const data = await fn();
    return data || [];
  } catch (err) {
    console.error('Fetch error:', err);
    return [];
  }
}

export default async function CarsPage({ params }) {
  const { lang } = await params;

  const brands = await safeFetch(getBrands);
  const cars = await safeFetch(getCars);

  return (
    <main>
      <ProductListing brands={brands} cars={cars} lang={lang}  />
    </main>
  );
}
