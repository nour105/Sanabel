'use client';
import { getUTMParams } from '@/lib/utm';
import { useState } from 'react';

export default function CarLeadForm({ car, lang = 'en' }) {
  const [loading, setLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const t = {
    ar: {
      firstName: "الإسم الأول",
      lastName: "إسم العائلة",
      phone: "050 000 0000",
      email: "البريد الإلكتروني",
      carName: car.name?.ar || "",
      salary: "راتبك الشهري",
      bank: "البنك",
      submit: "اطلب عرض سعر",
      submitting: "جاري الإرسال...",
      terms: "بالتسجيل أنت توافق على",
      termsLink: "الشروط والأحكام",
      salaryOptions: [
        { value: "below_5000", label: "أقل من 5000" },
        { value: "between_5000_and_10,000", label: "بين 5000 و 10,000" },
        { value: "over_10,000", label: "أكثر من 10,000" },
      ],
      banks: ["SNB", "NCB", "NBD", "Bank 4"],
    },
    en: {
      firstName: "First Name",
      lastName: "Last Name",
      phone: "050 000 0000",
      email: "Email",
      carName: car.name?.en || "",
      salary: "Monthly Salary",
      bank: "Bank",
      submit: "Request Quote",
      submitting: "Submitting...",
      terms: "By submitting, you agree to",
      termsLink: "Terms & Conditions",
      salaryOptions: [
        { value: "below_5000", label: "Below 5000" },
        { value: "between_5000_and_10,000", label: "Between 5000 and 10,000" },
        { value: "over_10,000", label: "Over 10,000" },
      ],
      banks: ["SNB", "NCB", "NBD", "Bank 4"],
    }
  };

  const L = t[lang];

  async function submit(e) {
    e.preventDefault();
    if (!agreeTerms) {
      alert(lang === "ar" ? "يرجى الموافقة على الشروط." : "Please agree to the terms.");
      return;
    }

    setLoading(true);
    const f = new FormData(e.target);

    try {
  const res = await fetch('/api/marketing-leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: f.get('first_name') + ' ' + f.get('last_name'),
      phone: f.get('phone'),
      email: f.get('email'),
      salary: f.get('salary'),
      bank: f.get('bank'),
      source_type: 'car',
      source_id: car.id,
      car_name: car.name[lang] || car.name.en,
      price: car.price,
      currency: car.currency,
      ...getUTMParams(),
    }),
  });

  if (!res.ok) throw new Error('Failed to submit');
  alert(lang === 'ar' ? 'تم الإرسال' : 'Submitted');
} catch (err) {
  console.error(err);
  alert(lang === 'ar' ? 'حدث خطأ أثناء الإرسال' : 'Submission failed');
} finally {
  setLoading(false);
}


    setLoading(false);
    alert(lang === "ar" ? "تم الإرسال" : "Submitted");
  }

  return (
    <form onSubmit={submit} className="p-6 bg-white shadow-md rounded-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input name="first_name" placeholder={L.firstName} required className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
        <input name="last_name" placeholder={L.lastName} required className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
        <input
          name="phone"
          placeholder={L.phone}
          required
          pattern="^05\d{8}$"
          title={lang === "ar" ? "أدخل رقم جوال سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام" : "Enter a valid Saudi phone number starting with 05 and 10 digits"}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input name="email" type="email" placeholder={L.email} className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select name="car_name" defaultValue={L.carName} className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option>{L.carName}</option>
        </select>

        <select name="salary" className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option value="" disabled>{L.salary}</option>
          {L.salaryOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <select name="bank" className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option value="">{L.bank}</option>
          {L.banks.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <button type="submit" disabled={loading} className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? L.submitting : L.submit}
        </button>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <label className="flex items-start space-x-2 rtl:space-x-reverse">
          <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} className="mt-1" />
          <span>{L.terms} <a href="#" className="text-blue-600 underline">{L.termsLink}</a></span>
        </label>
      </div>
    </form>
  );
}
