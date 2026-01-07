// components/ThankYouModal.jsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ThankYouModal({ lang }) {
  const searchParams = useSearchParams();
  const show = searchParams.get('thankyou') === '1';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (show) setOpen(true);
  }, [show]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl">
        <h3 className="text-xl font-bold mb-2">
          {lang === 'ar' ? 'شكراً لاهتمامك' : 'Thank You for Your Interest'}
        </h3>

        <p className="text-sm text-gray-600 mb-6">
          {lang === 'ar'
            ? 'سيقوم أحد مستشارينا بالتواصل معك قريباً.'
            : 'One of our advisors will contact you shortly.'}
        </p>

        <button
          onClick={() => setOpen(false)}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          {lang === 'ar' ? 'إغلاق' : 'Close'}
        </button>
      </div>
    </div>
  );
}
