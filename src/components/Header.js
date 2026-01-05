'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';


export default function Header({ lang }) {
  const [brands, setBrands] = useState([]);
  const [open, setOpen] = useState(false);

  const isAr = lang === 'ar';

  const t = {
    brands: isAr ? 'العلامات التجارية' : 'Brands',
    offers: isAr ? 'العروض' : 'Offers',
    cars: isAr ? 'السيارات' : 'Cars',
    findUs: isAr ? 'مواقعنا' : 'Find Us',
    about: isAr ? 'من نحن' : 'About Us',
    noBrands: isAr ? 'لا توجد علامات' : 'No brands found',
  };

  const getBrandName = (brand) =>
    typeof brand.name === 'object'
      ? brand.name[lang] || brand.name.en
      : brand.name;

  useEffect(() => {
    fetch('https://sanabelauto.com/api/v1/brands')
      .then(res => res.json())
      .then(data => setBrands(data.data || []));
  }, []);

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div
        className={`container mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between ${
          isAr ? 'flex-row-reverse' : ''
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="text-2xl font-bold text-gray-800 hover:text-gray-900"
        >
          MultiBrand
        </Link>

        {/* Navigation */}
        <nav
          className={`flex items-center ${
            isAr ? 'space-x-reverse space-x-6 md:space-x-10' : 'space-x-6 md:space-x-10'
          } relative`}
        >
          {/* Brands Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              {t.brands}
              <span className={`${isAr ? 'mr-1' : 'ml-1'} text-sm`}>
                &#x25BE;
              </span>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute ${
                isAr ? 'right-0' : 'left-0'
              } top-full mt-2 w-64 bg-white shadow-xl rounded-lg transition-all duration-200
              ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              <div className="p-3 flex flex-col gap-1">
                {brands.length > 0 ? (
                  brands.map(brand => (
                    <Link
                      key={brand.id}
                      href={`/${lang}/brands/${brand.slug}`}
                      className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition-all"
                    >
                      {brand.logo && (
                        <Image
                          src={`https://sanabelauto.com/storage/${brand.logo}`}
                          alt={getBrandName(brand)}
                          width={32}
                          height={32}
                          className={`${isAr ? 'ml-3' : 'mr-3'} object-contain`}
                        />
                      )}
                      <span className="text-gray-700 font-medium">
                        {getBrandName(brand)}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 px-3 py-2">
                    {t.noBrands}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Other Links */}
          <Link href={`/${lang}/offers`} className="font-medium text-gray-700 hover:text-gray-900">
            {t.offers}
          </Link>

          <Link href={`/${lang}/cars`} className="font-medium text-gray-700 hover:text-gray-900">
            {t.cars}
          </Link>

          <Link href={`/${lang}/find-us`} className="font-medium text-gray-700 hover:text-gray-900">
            {t.findUs}
          </Link>

          <Link href={`/${lang}/about-us`} className="font-medium text-gray-700 hover:text-gray-900">
            {t.about}
          </Link>
        </nav>
<LanguageSwitcher lang={lang} />

      </div>
    </header>
  );
}
