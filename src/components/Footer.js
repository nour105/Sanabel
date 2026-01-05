'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer({ lang = 'en' }) {
  const isAr = lang === 'ar';
  const pathname = usePathname(); // current path for building links

  const t = {
    ar: {
      title: 'متعدد العلامات التجارية',
      description: 'معرض السيارات المتعدد العلامات الذي تثق به.',
      quickLinks: 'روابط سريعة',
      offers: 'العروض',
      findUs: 'مواقعنا',
      aboutUs: 'من نحن',
      contact: 'تواصل معنا',
      location: 'الرياض، المملكة العربية السعودية',
      email: 'info@multibrand.com',
      copyright: 'جميع الحقوق محفوظة',
    },
    en: {
      title: 'MultiBrand Cars',
      description: 'Your trusted multi-brand car showroom.',
      quickLinks: 'Quick Links',
      offers: 'Offers',
      findUs: 'Find Us',
      aboutUs: 'About Us',
      contact: 'Contact',
      location: 'Riyadh, Saudi Arabia',
      email: 'info@multibrand.com',
      copyright: 'All rights reserved',
    },
  };

  const L = t[lang];

  return (
    <footer className={`bg-gray-900 text-white mt-12 ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2">{L.title}</h3>
          <p className="text-gray-400">{L.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">{L.quickLinks}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href={`/${lang}/offers`} className="hover:text-white transition-colors">
                {L.offers}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/find-us`} className="hover:text-white transition-colors">
                {L.findUs}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/about-us`} className="hover:text-white transition-colors">
                {L.aboutUs}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">{L.contact}</h4>
          <p className="text-gray-400">{L.location}</p>
          <p className="text-gray-400">{L.email}</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} DAS 360. {L.copyright}.
      </div>
    </footer>
  );
}
