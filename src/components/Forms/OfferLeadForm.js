'use client';
import { useState } from 'react';
import { getUTMParams } from '@/lib/utm';

export default function OfferLeadForm({ offer, locale = 'en' }) {
  const [car, setCar] = useState(offer.cars[0]);
  const [loading, setLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!agreeTerms) {
      alert(locale === 'ar' ? 'يرجى الموافقة على الشروط.' : 'Please agree to the terms.');
      return;
    }

    setLoading(true);
    const f = new FormData(e.target);

    await fetch('https://sanabelauto.com/api/v1/marketing-leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: f.get('first_name') + ' ' + f.get('last_name'),
        phone: f.get('phone'),
        email: f.get('email'),
        salary: f.get('salary'),
        bank: f.get('bank'),
        source_type: 'offer',
        source_id: offer.id,
        offer_title: offer.title[locale],
       vehicle_slug: car.slug,
        car_name: car.name[locale],
        price: car.price,
        currency: car.currency,

        ...getUTMParams(),
      }),
    });

    setLoading(false);
window.location.href = `/${locale}/thank-you`;
  }

  return (
    <form onSubmit={submit} className="p-6 bg-white shadow-md rounded-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="hidden" name="vehicle_slug" value={car.slug} />
        <input
          name="first_name"
          placeholder={locale === 'ar' ? 'الإسم الأول' : 'First Name'}
          required
          className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          name="last_name"
          placeholder={locale === 'ar' ? 'إسم العائلة' : 'Last Name'}
          required
          className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          name="phone"
          placeholder="050 000 0000"
          required
          pattern="^05\d{8}$"
          title={locale === 'ar' ? 'رقم سعودي صالح يبدأ بـ05 و10 أرقام' : 'Enter a valid Saudi phone number starting with 05 and 10 digits'}
          className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder={locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
          className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          onChange={e => setCar(offer.cars[e.target.value])}
          className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          defaultValue={0}
        >
          {offer.cars.map((c, i) => (
            <option key={c.id} value={i}>{c.name[locale]}</option> 
          ))}
        </select>

        <select name="salary" className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option value="" disabled>{locale === 'ar' ? 'راتبك الشهري' : 'Your Salary'}</option>
          <option value="below_5000">{locale === 'ar' ? 'أقل من 5000' : 'Below 5000'}</option>
          <option value="between_5000_and_10,000">{locale === 'ar' ? 'بين 5000 و 10,000' : 'Between 5000 and 10,000'}</option>
          <option value="over_10,000">{locale === 'ar' ? 'أكثر من 10,000' : 'Over 10,000'}</option>
        </select>

        <select name="bank" className="px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" defaultValue="">
          <option value="" disabled>{locale === 'ar' ? 'البنك' : 'Bank'}</option>
          <option value="SNB">SNB</option>
          <option value="NCB">NCB</option>
          <option value="NBD">NBD</option>
          <option value="Bank4">{locale === 'ar' ? 'بنك 4' : 'Bank 4'}</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...') : (locale === 'ar' ? 'تقديم العرض' : 'Apply Offer')}
        </button>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <label className="flex items-start space-x-2 rtl:space-x-reverse">
          <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} className="mt-1" />
          <span>{locale === 'ar' ? 'بالتسجيل أنت توافق على الشروط والأحكام' : 'By registering you agree to terms and conditions'} <a href="#" className="text-blue-600 underline">{locale === 'ar' ? 'الشروط' : 'Terms'}</a></span>
        </label>
      </div>
    </form>
  );
}
