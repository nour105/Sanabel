'use client';

import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '@/publicImage/Sanabel-Logo-black.png';

export default function Footer({ lang = 'en' }) {
  const isAr = lang === 'ar';

  const t = {
    ar: {
      description:
        'معرض السيارات متعدد العلامات التجارية ومزود الخدمة الموثوق الخاص بك.',
      quickLinks: 'روابط سريعة',
      offers: 'العروض',
      findUs: 'مواقعنا',
      aboutUs: 'من نحن',
      contact: 'تواصل معنا',

      privacyPolicy: 'سياسة الخصوصية',
      termsConditions: 'الشروط والأحكام',
      termsOfUse: 'شروط الاستخدام',
      cookiesPolicy: 'سياسة ملفات تعريف الارتباط',

      location: 'الرياض، المملكة العربية السعودية',
      email: 'info@sanabelauto.com',

      copyright:
        'شركة سنابل الحديثة للسيارات. جميع الحقوق محفوظة.',
    },

    en: {
      description:
        'Your trusted multi-brand car showroom & service provider.',
      quickLinks: 'Quick Links',
      offers: 'Offers',
      findUs: 'Find Us',
      aboutUs: 'About Us',
      contact: 'Contact',

      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      termsOfUse: 'Terms of Use',
      cookiesPolicy: 'Cookies Policy',

      location: 'Riyadh, Saudi Arabia',
      email: 'info@sanabelauto.com',

      copyright:
        'Sanabel Modern Motors. All Rights Reserved.',
    },
  };

  const L = t[lang];

  return (
    <footer
      className={`bg-gray-100 mt-12 ${isAr ? 'rtl text-right' : 'ltr text-left'}`}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <Link href={`/${lang}`} className="inline-block mb-4">
            <Image
              src={siteLogo}
              alt="Sanabel Auto"
              width={200}
              height={50}
              quality={65}
              className="object-contain"
            />
          </Link>

          <p className="text-gray-600 leading-7">
            {L.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            {L.quickLinks}
          </h4>

          <ul className="space-y-3 text-gray-700">
            <li>
              <Link
                href={`/${lang}/offers`}
                className="hover:text-black transition-colors"
              >
                {L.offers}
              </Link>
            </li>

            <li>
              <Link
                href={`/${lang}/find-us`}
                className="hover:text-black transition-colors"
              >
                {L.findUs}
              </Link>
            </li>

            <li>
              <Link
                href={`/${lang}/about-us`}
                className="hover:text-black transition-colors"
              >
                {L.aboutUs}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            {L.contact}
          </h4>

          <p className="text-gray-700">{L.location}</p>

          <p className="text-gray-700 mt-2">
            <a
              href="mailto:info@sanabelauto.com"
              className="hover:text-black transition-colors"
            >
              {L.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} {L.copyright}
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href={`/${lang}/privacy-policy`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {L.privacyPolicy}
            </Link>

            <Link
              href={`/${lang}/terms&conditions`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {L.termsConditions}
            </Link>

            <Link
              href={`/${lang}/terms-of-use`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {L.termsOfUse}
            </Link>

            <Link
              href={`/${lang}/cookies-policy`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {L.cookiesPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}