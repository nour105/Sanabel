'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getUber } from '@/lib/api';
import Banner from '@/components/Banner';
import Branch from '@/components/Branch';

/* ================= TRANSLATIONS ================= */

const TEXT = {
  en: {
    title: 'Find Us',
    subtitle: 'Fill out the form below and our team will get back to you shortly.',
    name: 'Name',
    namePlaceholder: 'Your Name',
    phone: 'Phone (Saudi)',
    phonePlaceholder: '05XXXXXXXX',
    reason: 'Reason for Contact',
    selectReason: 'Select Reason',
    reasons: {
      price: 'Price Inquiry',
      test_drive: 'Book Test Drive',
      finance: 'Finance Options',
      availability: 'Car Availability',
      suggestion: 'Suggestion',
      complaint: 'Make a Complaint',
    },
    message: 'Message',
    messagePlaceholder: 'Your Message (optional)',
    submit: 'Submit',
    sending: 'Sending...',
    phoneError: 'Please enter a valid Saudi phone number (05XXXXXXXX)',
    success: 'Your request has been sent! We will contact you soon.',
    error: 'Something went wrong. Please try again.',

    // ✅ ADD THIS
    workingHours: {
      title: 'Ramadan Timing',
      days: 'Saturday to Thursday',
      morning: '(10:00 AM – 4:00 PM)',
      evening: '(9:30 PM – 1:30 AM)',
    },
  },

  ar: {
    title: 'اعثر علينا',
    subtitle: 'يرجى تعبئة النموذج أدناه وسيتواصل معك فريقنا قريباً.',
    name: 'الاسم',
    namePlaceholder: 'اسمك',
    phone: 'رقم الهاتف (السعودية)',
    phonePlaceholder: '05XXXXXXXX',
    reason: 'سبب التواصل',
    selectReason: 'اختر السبب',
    reasons: {
      price: 'استفسار عن السعر',
      test_drive: 'حجز تجربة قيادة',
      finance: 'خيارات التمويل',
      availability: 'توفر السيارة',
      suggestion: 'اقتراح',
      complaint: 'تقديم شكوى',
    },
    message: 'الرسالة',
    messagePlaceholder: 'رسالتك (اختياري)',
    submit: 'إرسال',
    sending: 'جاري الإرسال...',
    phoneError: 'يرجى إدخال رقم هاتف سعودي صحيح',
    success: 'تم إرسال طلبك بنجاح، سنتواصل معك قريباً.',
    error: 'حدث خطأ ما، يرجى المحاولة لاحقاً.',

    // ✅ ADD THIS
    workingHours: {
      title: 'مواعيد العمل خلال رمضان',
      days: 'من السبت إلى الخميس',
      morning: '(10:00 صباحاً – 4:00 عصراً)',
      evening: '(9:30 مساءً – 1:30 صباحاً)',
    },
  },
};


export default function FindUsPage() {
  const params = useParams();
  const lang = params?.lang === 'ar' ? 'ar' : 'en';
  const t = TEXT[lang];

  const [page, setPage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    getUber()
      .then(setPage)
      .catch(() => setPage(null));
  }, []);

  const isSaudiPhone = (phone) => /^(05\d{8}|\+9665\d{8})$/.test(phone);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isSaudiPhone(form.phone)) {
      setError(t.phoneError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'https://admin.sanabelauto.com/api/v1/callback-requests',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error();

      setSuccess(t.success);
      setForm({ name: '', phone: '', reason: '', message: '' });
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {page?.banners?.length > 0 && <Banner banners={page.banners} />}
       <section className=" mt-10 z-10">
        <div className="container mx-auto px-4">
          <div
            className={`mx-auto max-w-2xl rounded-2xl bg-white shadow-lg border border-gray-100 px-6 py-5 text-center ${
              lang === 'ar' ? 'rtl' : 'ltr'
            }`}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t.workingHours.title}
            </h3>

            <p className="text-sm font-medium text-gray-700">
              {t.workingHours.days}
            </p>

            <div className="mt-2 flex flex-col sm:flex-row sm:justify-center sm:gap-6 text-sm text-gray-600">
              <span>{t.workingHours.morning}</span>
              <span>{t.workingHours.evening}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto  px-4 md:px-0">

        {/* ===== BRANCHES ===== */}
        <div className="mt-16">
          <Branch />
        </div>
      </section>
    </div>
  );
}
