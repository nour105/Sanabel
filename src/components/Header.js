'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import siteLogo from '@/publicImage/Layer_1_85ac102c6d.svg';
import siteLogoAr from '@/publicImage/image00002_1c9e39c647.png';

export default function Header({ lang }) {
  const [brands, setBrands] = useState([]);
  const [openBrands, setOpenBrands] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    fetch('https://admin.sanabelauto.com/api/v1/brands')
      .then(res => res.json())
      .then(data => setBrands(data.data || []));
  }, []);

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div
        className={`container mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between ${isAr ? 'flex-row-reverse' : ''}`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="text-2xl font-bold text-gray-800 hover:text-gray-900"
        >
<Image
  src={isAr ? siteLogoAr : siteLogo}
  alt="Sanabel Auto"
  width={200}
  height={50}
  className="object-contain"
/>
     </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-10 relative">
          {/* Brands Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenBrands(true)}
            onMouseLeave={() => setOpenBrands(false)}
          >
            <button className="flex items-center font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              {t.brands}
              <span className={`${isAr ? 'mr-1' : 'ml-1'} text-sm`}>
                &#x25BE;
              </span>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute ${isAr ? 'right-0' : 'left-0'} top-full mt-2 w-64 bg-white shadow-xl rounded-lg transition-all duration-200
                ${openBrands ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
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
                          src={`https://admin.sanabelauto.com/storage/${brand.logo}`}
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
                  <p className="text-gray-400 px-3 py-2">{t.noBrands}</p>
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

        {/* Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher lang={lang} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-300 hover:text-gray-900 hover:border-gray-400"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
            {mobileOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden bg-gray-50 shadow-lg transition-all duration-300`}>
          <div className="px-6 pt-4 pb-6 space-y-3 flex flex-col">
            {/* Brands */}
            <div>
              <button
                className="flex items-center justify-between w-full font-semibold text-gray-700 hover:text-gray-900"
                onClick={() => setOpenBrands(!openBrands)}
              >
                {t.brands} <span>{openBrands ? '-' : '+'}</span>
              </button>
              {openBrands && (
                <div className="mt-2 flex flex-col gap-1">
                  {brands.length > 0 ? (
                    brands.map(brand => (
                      <Link
                        key={brand.id}
                        href={`/${lang}/brands/${brand.slug}`}
                        className="flex items-center px-3 py-2 rounded hover:bg-gray-100 transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        {brand.logo && (
                          <Image
                            src={`https://admin.sanabelauto.com/storage/${brand.logo}`}
                            alt={getBrandName(brand)}
                            width={32}
                            height={32}
                            className="mr-3 object-contain"
                          />
                        )}
                        <span className="text-gray-700 font-medium">
                          {getBrandName(brand)}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-400 px-3 py-2">{t.noBrands}</p>
                  )}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href={`/${lang}/offers`} className="font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t.offers}
            </Link>
            <Link href={`/${lang}/cars`} className="font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t.cars}
            </Link>
            <Link href={`/${lang}/find-us`} className="font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t.findUs}
            </Link>
            <Link href={`/${lang}/about-us`} className="font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t.about}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      )}
    </header>
  );
}
