'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import siteLogo from '@/publicImage/Sanabel-Logo-black.png';

export default function Footer({ lang = 'en' }) {
  const isAr = lang === 'ar';
  const pathname = usePathname(); // current path for building links

  const t = {
    ar: {
      title: 'متعدد العلامات التجارية',
      description: 'معرض السيارات متعدد العلامات التجارية ومزود الخدمة الموثوق الخاص بك.',
      quickLinks: 'روابط سريعة',
      offers: 'العروض',
      findUs: 'مواقعنا',
      aboutUs: 'من نحن',
      privacyPolicy: 'سياسة الخصوصية',
      contact: 'تواصل معنا',
      location: 'الرياض، المملكة العربية السعودية',
      email: 'info@sanabelauto.com',
      copyright: '  .جميع الحقوق محفوظة لشركة سنابل الحديثة للسيارات',
    },
    en: {
      title: 'MultiBrand Cars',
      description: 'Your trusted multi-brand car showroom & service provider .',
      quickLinks: 'Quick Links',
      offers: 'Offers',
      findUs: 'Find Us',
      aboutUs: 'About Us',
        privacyPolicy: 'Privacy Policy',
      contact: 'Contact',
      location: 'Riyadh, Saudi Arabia',
      email: 'info@sanabelauto.com',
      copyright: '  Sanabel Modern Motors. All Rights Reserved.',
    },
  };

  const L = t[lang];

  return (
    <footer className={`bg-gray-100 text-white mt-12 ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <Link href={`/${lang}`} className="mb-4 inline-block">
<Image
  src={siteLogo}
  alt="Sanabel Auto"
  width={200}
  height={50}
  className="object-contain"
    quality={65}

/>
          </Link>
          <p className="text-gray-600">{L.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">{L.quickLinks}</h4>
          <ul className="space-y-2 text-black">
            <li>
              <Link href={`/${lang}/offers`} className="hover:text-gray-400  transition-colors">
                {L.offers}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/find-us`} className="hover:text-gray-400 transition-colors">
                {L.findUs}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/about-us`} className="hover:text-gray-400 transition-colors">
                {L.aboutUs}
              </Link>
            </li>
             <li>
              <Link href={`/${lang}/privacy-policy`} className="hover:text-gray-400 transition-colors">
                {L.privacyPolicy}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">{L.contact}</h4>
          <p className="text-gray-950">{L.location}</p>
          <p className="text-gray-950">{L.email}</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()}  {L.copyright}
      </div>
    </footer>
  );
}
