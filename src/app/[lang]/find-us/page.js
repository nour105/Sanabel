'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getFindUs } from '@/lib/api';
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
    getFindUs()
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
        'https://sanabelauto.com/api/v1/callback-requests',
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

      <section className="container mx-auto py-16 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black">
          {t.title}
        </h1>

        <p className="text-center  text-gray-600 mb-12">
          {t.subtitle}
        </p>

        {/* ===== FORM ===== */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                {t.name}
              </label>
              <input
                type="text"
                required
                placeholder={t.namePlaceholder}
                className="w-full border text-gray-700 rounded-xl px-4 py-3"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                {t.phone}
              </label>
              <input
                type="text"
                required
                placeholder={t.phonePlaceholder}
                className="w-full border text-gray-700 rounded-xl px-4 py-3"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                {t.reason}
              </label>
              <select
                required
                className="w-full border text-gray-700 rounded-xl px-4 py-3"
                value={form.reason}
                onChange={(e) =>
                  setForm({ ...form, reason: e.target.value })
                }
              >
                <option value="">{t.selectReason}</option>
                <option value="price">{t.reasons.price}</option>
                <option value="test_drive">{t.reasons.test_drive}</option>
                <option value="finance">{t.reasons.finance}</option>
                <option value="availability">{t.reasons.availability}</option>
                <option value="suggestion">{t.reasons.suggestion}</option>
                <option value="make_a_complaint">{t.reasons.complaint}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                {t.message}
              </label>
              <textarea
                placeholder={t.messagePlaceholder}
                className="w-full border rounded-xl px-4 py-3"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
            >
              {loading ? t.sending : t.submit}
            </button>
          </form>
        </div>

        {/* ===== BRANCHES ===== */}
        <div className="mt-16">
          <Branch />
        </div>
      </section>
    </div>
  );
}
