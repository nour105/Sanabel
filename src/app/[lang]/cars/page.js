import ProductListing from '@/components/ProductListing';
import { getBrands, getCars } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function CarsPage({params}) {
  const { lang } = await params;
  
  const [brands, cars] = await Promise.all([
    getBrands(),
    getCars(),
  ]);

  return (
    <main>
      <ProductListing brands={brands} cars={cars} lang={lang}  />
    </main>
  );
}
