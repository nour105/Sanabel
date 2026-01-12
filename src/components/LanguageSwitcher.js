'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher({ lang }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isAr = lang === 'ar';

  const switchLanguage = (newLang) => {
    if (newLang === lang) return;

    const currentPath = window.location.pathname.replace(/^\/(ar|en)/, '');
    router.push(`/${newLang}${currentPath}`);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="px-4 py-2 rounded-full border text-gray-700 border-gray-300 text-sm font-semibold bg-white hover:bg-gray-100 transition flex items-center gap-2"
      >
        {isAr ? 'العربية' : 'English'}
        <span className="text-xs text-gray-700">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg z-50
            ${isAr ? 'left-0 text-right' : 'right-0 text-left'}`}
        >
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full px-4 py-2 text-sm hover:bg-gray-100 transition
              ${lang === 'en' ? 'font-semibold text-indigo-600' : 'text-gray-700'}`}
          >
            English
          </button>

          <button
            onClick={() => switchLanguage('ar')}
            className={`w-full text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 transition
              ${lang === 'ar' ? 'font-semibold text-indigo-600' : 'text-gray-700'}`}
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
}
