'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getFindUs } from '@/lib/api';
import Banner from '@/components/Banner';

/* ================= TRANSLATIONS ================= */

const TEXT = {
  en: {
    title: 'Find Us',
    subtitle: 'Select a city and branch to view the location.',
    openMap: 'Open in Google Maps',
  },
  ar: {
    title: 'اعثر علينا',
    subtitle: 'اختر المدينة والفرع لعرض الموقع.',
    openMap: 'افتح الموقع على خرائط Google',
  },
};

/* ================= BRANCH DATA ================= */

const BRANCHES = [
  {
    city: { en: 'Jeddah', ar: 'جدة' },
    locations: [
      {
        name: { en: 'Automall', ar: 'أوتومول' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Automall&output=embed',
        link: 'https://maps.app.goo.gl/fAGRDGCDMYx1nLot7',
      },
      {
        name: { en: 'Al Sulimaniya', ar: 'السليمانية' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Sulimaniya&output=embed',
        link: 'https://maps.app.goo.gl/MoPpz356Dyeo1xYE6',
      },
      {
        name: { en: 'Car Gate', ar: 'كار جيت' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Jeddah+Car+Gate&output=embed',
        link: 'https://maps.app.goo.gl/x63RBHiURhkrxDUd6',
      },
    ],
  },
  {
    city: { en: 'Riyadh', ar: 'الرياض' },
    locations: [
      {
        name: { en: 'Khurais', ar: 'خريص' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Riyadh+Khurais&output=embed',
        link: 'https://maps.app.goo.gl/YbK6qJhE4asoq5Zc7',
      },
      {
        name: { en: 'North Ring Road', ar: 'الدائري الشمالي' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Riyadh+North+Ring+Road&output=embed',
        link: 'https://maps.app.goo.gl/2rCaT814idCoutE67',
      },
    ],
  },
  {
    city: { en: 'Dammam', ar: 'الدمام' },
    locations: [
      {
        name: { en: 'Main Branch', ar: 'الفرع الرئيسي' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Dammam&output=embed',
        link: 'https://maps.app.goo.gl/qAr6RaNZHa45NXS66',
      },
    ],
  },
  {
    city: { en: 'Makkah', ar: 'مكة' },
    locations: [
      {
        name: { en: 'Main Branch', ar: 'الفرع الرئيسي' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Makkah&output=embed',
        link: 'https://maps.app.goo.gl/fMbXCchNSzDuoxnf6',
      },
    ],
  },
  {
    city: { en: 'Medina', ar: 'المدينة' },
    locations: [
      {
        name: { en: 'Main Branch', ar: 'الفرع الرئيسي' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Medina&output=embed',
        link: 'https://maps.app.goo.gl/Rf1NY4mr2E7TL1Df7',
      },
    ],
  },
  {
    city: { en: 'Jizan', ar: 'جازان' },
    locations: [
      {
        name: { en: 'Main Branch', ar: 'الفرع الرئيسي' },
        embed: 'https://www.google.com/maps?q=Sanabel+Auto+Jizan&output=embed',
        link: 'https://maps.app.goo.gl/DqDwDwhmqkEjWgGWA',
      },
    ],
  },
];

/* ================= PAGE ================= */

export default function Branch() {
  const params = useParams();
  const lang = params?.lang === 'ar' ? 'ar' : 'en';
  const t = TEXT[lang];

  const [page, setPage] = useState(null);
  const [activeCity, setActiveCity] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState(
    BRANCHES[0].locations[0]
  );

  useEffect(() => {
    getFindUs().then(setPage).catch(() => setPage(null));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      {page?.banners?.length > 0 && <Banner banners={page.banners} />}

      <section className="container mx-auto px-4 py-5">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-3">
            {t.title}
          </h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {BRANCHES.map((city, index) => (
            <button
              key={city.city.en}
              onClick={() => {
                setActiveCity(index);
                setSelectedBranch(city.locations[0]);
              }}
              className={`px-6 py-3 rounded-full border font-medium
                ${
                  activeCity === index
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:border-indigo-500'
                }`}
            >
              {city.city[lang]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="space-y-4">
            {BRANCHES[activeCity].locations.map((branch) => (
              <button
                key={branch.name.en}
                onClick={() => setSelectedBranch(branch)}
                className={`w-full text-left p-5 rounded-xl border
                  ${
                    selectedBranch === branch
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'bg-white hover:border-indigo-400'
                  }`}
              >
                <div className="font-semibold text-black">
                  {branch.name[lang]}
                </div>
              </button>
            ))}
          </div>

          <div>
            <div className="h-[420px] rounded-2xl overflow-hidden bg-white shadow">
              <iframe
                className="w-full h-full"
                src={selectedBranch.embed}
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="text-center mt-4">
              <a
                href={selectedBranch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                {t.openMap}
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
