'use client';
import { useState, useEffect } from 'react';
import { trackCTA } from '@/lib/ctaTrack';

export default function CallUs({ car, lang }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile only on client
    setIsMobile(/Android|iPhone/i.test(navigator.userAgent));
  }, []);

  const phoneNumber = "800 123 4567";

  if (isMobile) {
    return (
      <a
        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
        onClick={() => {
          trackCTA({ cta: 'callback', car });
        }}
        className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold cursor-pointer"
      >
        {lang === 'ar' ? 'اتصل بنا الآن!' : 'Call us now!'}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowPopup(true);
          trackCTA({ cta: 'callback', car });
        }}
        className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold cursor-pointer"
      >
        {lang === 'ar' ? 'اتصل بنا الآن!' : 'Call us now!'}
      </button>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-gray-600 text-xl transition"
            >
              ✕
            </button>
            <h2
  className="text-2xl font-bold mb-3 text-gray-900 text-center"
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
>
  {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
</h2>
<p
  className="text-gray-600 mb-6 text-center"
  dir={lang === 'ar' ? 'rtl' : 'ltr'}
>
  {lang === 'ar' ? 'يمكنك الوصول إلينا على:' : 'You can reach us at:'}
</p>
<a
  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
  className="block text-lg font-semibold text-blue-600 hover:underline text-center"
  dir={lang === 'ar' ? 'ltr' : 'ltr'}
>
  {phoneNumber}
</a>

          </div>
        </div>
      )}
    </>
  );
}
