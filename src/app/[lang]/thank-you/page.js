'use client';

import { useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function ThankYouPage() {
  const pathname = usePathname(); 
  const lang = pathname.startsWith('/ar') ? 'ar' : 'en';

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17842401456/luqJCJ6hgqwcELDh9btC',
        'value': 1.0,
        'currency': 'AED'
      });
    }
  }, []);

  const t = {
    ar: {
      title: "شكراً لتواصلك معنا!",
      message: "سنقوم بالرد عليك في أقرب وقت ممكن.",
      home: "العودة إلى الصفحة الرئيسية"
    },
    en: {
      title: "Thank you for contacting us!",
      message: "We will get back to you as soon as possible.",
      home: "Back to Home"
    }
  };

  const L = t[lang];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">{L.title}</h1>
      <p className="text-lg mb-6">{L.message}</p>
      <a
        href={lang === 'ar' ? '/ar' : '/en'}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        {L.home}
      </a>
    </div>
  );
}