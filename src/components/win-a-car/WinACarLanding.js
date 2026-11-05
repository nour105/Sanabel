'use client';

import { useEffect, useState } from 'react';
import CAR_IMAGE from '../../publicImage/car_imagemg3.jpeg';
import Image from 'next/image';

const END_DATE = new Date('2026-11-30T23:59:59+03:00').getTime();


const CONTENT = {
  en: {
    eyebrow: 'SANABEL AUTO PRESENTS',
    title: 'WIN A BRAND-NEW MG3',
    subtitle: 'Your next drive could be on us.',
    description:
      'Discover your chance to win an MG3 2026. Visit one of our showrooms and take part in our exclusive contest.',
    prize: 'THE PRIZE',
    model: 'MG3 · MODEL YEAR 2026',
    countdown: 'TIME LEFT TO ENTER',
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MINUTES',
    seconds: 'SECONDS',
    ended: 'THE CONTEST HAS ENDED',
    how: 'HOW TO PARTICIPATE',
    howDesc:
      'Visit one of our showrooms and follow the official participation steps announced by Sanabel Auto.',
    locations: 'VISIT OUR SHOWROOMS',
    locationsDesc:
      'Meet our team at one of our showrooms in Saudi Arabia.',
    cities: ['Jeddah', 'Riyadh', 'Dammam'],
   terms: 'Terms & Conditions',
termsIntro: 'Please read the following competition terms and conditions carefully.',
termsItems: [
  'The competition starts on the date it is announced through the company’s official social media channels and runs for one month.',
  'No purchase is necessary to participate.',
  'To participate, visit any Sanabel Modern Motors showroom and find the bow inside the showroom or on one of the participating vehicles.',
  'After finding the bow, participants must submit their details through the electronic registration link available at the showroom.',
  'Participating Locations: All Sanabel Modern Motors showrooms.',
  'Prizes: The competition offers 3 MG3 model year 2026 vehicles. A total of 3 winners will be selected, and each winner will receive one vehicle.',
  'Winners will be selected through the company’s approved draw process and announced via the company’s official social media channels.',
  'The company reserves the right to disqualify any entry that does not meet the terms and conditions or contains inaccurate information.',
  'Participation in the competition constitutes acceptance of all terms and conditions.',
  'The competition is subject to the applicable laws and regulations of the Kingdom of Saudi Arabia.',
],
termsNote: '',
    entryTitle: 'ENTER THE CONTEST',
    entryDesc: 'Share your details below to register your entry.',
    name: 'Full name',
    city: 'City',
    branch: 'Showroom branch',
    mobile: 'Mobile number',
    chooseCity: 'Select your city',
    chooseBranch: 'Select a branch',
    mobilePlaceholder: '05XXXXXXXX',
    agree: 'I have read and agree to the contest terms and conditions.',
    submit: 'SUBMIT MY ENTRY',
    required: 'Please complete all required fields and accept the terms.',
    apiNotice:
      'The registration form is ready for API integration. Entries are not being saved yet.',
    privacy:
      'Your information will be handled in accordance with the applicable privacy policy.',
    formBadge: 'YOUR CHANCE STARTS HERE',
    showroom: 'SANABEL AUTO SHOWROOM',
    termsNote:
      'These terms are draft placeholders. Replace them with the legally approved contest terms before launch.',
    carCaption: 'YOUR NEXT DRIVE COULD BE YOURS',
    carAlt: 'MG3 2026 campaign car',
  },

  ar: {
    eyebrow: 'سنابل أوتو تقدّم',
    title: 'اربح سيارة MG3 جديدة',
    subtitle: 'قد تكون سيارتك القادمة على حسابنا.',
    description:
      'اغتنم فرصتك للفوز بسيارة MG3 موديل 2026. زر أحد معارضنا وشارك في المسابقة.',
    prize: 'الجائزة',
    model: 'MG3 · موديل 2026',
    countdown: 'الوقت المتبقي للمشاركة',
    days: 'يوم',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',
    ended: 'انتهت المسابقة',
    how: 'كيف تشارك؟',
    howDesc:
      'زر أحد معارضنا واتبع خطوات المشاركة الرسمية التي تعلن عنها سنابل أوتو.',
    locations: 'زوروا معارضنا',
    locationsDesc:
      'يسعد فريقنا باستقبالكم في أحد معارضنا في المملكة العربية السعودية.',
    cities: ['جدة', 'الرياض', 'الدمام'],
    terms: 'شروط وأحكام المسابقة',
termsIntro: 'يرجى قراءة شروط وأحكام المسابقة التالية بعناية.',
termsItems: [
  'تبدأ المسابقة من تاريخ الإعلان عنها عبر حسابات الشركة الرسمية على مواقع التواصل الاجتماعي، وتستمر لمدة شهر واحد.',
  'لا يُشترط شراء أي منتج أو سيارة للمشاركة في المسابقة.',
  'للمشاركة، يجب زيارة أيٍّ من معارض سنابل للسيارات والبحث عن الفيونكة داخل المعرض أو على إحدى السيارات المشاركة.',
  'بعد العثور على الفيونكة، يجب تسجيل بيانات المشاركة عبر رابط التسجيل الإلكتروني المتاح داخل المعرض.',
  'الفروع المشاركة: جميع معارض سنابل للسيارات.',
  'الجوائز: تقدم المسابقة 3 سيارات MG3 موديل 2026، وسيتم اختيار 3 فائزين، يحصل كل فائز على سيارة واحدة.',
  'سيتم اختيار الفائزين من خلال آلية السحب المعتمدة من الشركة، وسيتم الإعلان عن أسمائهم عبر حسابات الشركة الرسمية على مواقع التواصل الاجتماعي.',
  'تحتفظ الشركة بحق استبعاد أي مشاركة لا تستوفي الشروط والأحكام أو تتضمن بيانات غير صحيحة.',
  'تُعد المشاركة في المسابقة موافقةً على جميع الشروط والأحكام.',
  'تخضع المسابقة للأنظمة واللوائح المعمول بها في المملكة العربية السعودية.',
],
termsNote: '',
    entryTitle: 'سجّل مشاركتك',
    entryDesc: 'أدخل بياناتك أدناه لتسجيل مشاركتك في المسابقة.',
    name: 'الاسم الكامل',
    city: 'المدينة',
    branch: 'فرع المعرض',
    mobile: 'رقم الجوال',
    chooseCity: 'اختر المدينة',
    chooseBranch: 'اختر الفرع',
    mobilePlaceholder: '05XXXXXXXX',
    agree: 'قرأت الشروط والأحكام الخاصة بالمسابقة وأوافق عليها.',
    submit: 'تسجيل المشاركة',
    required: 'يرجى تعبئة جميع الحقول المطلوبة والموافقة على الشروط.',
    apiNotice:
      'النموذج جاهز للربط بالـ API، لكن التسجيلات لا تُحفظ حالياً.',
    privacy: 'ستتم معالجة بياناتك وفقاً لسياسة الخصوصية المعمول بها.',
    formBadge: 'فرصتك تبدأ من هنا',
    showroom: 'معارض سنابل أوتو',
    termsNote:
      'هذه الشروط صياغة أولية للتصميم، ويجب استبدالها بالشروط المعتمدة قانونياً قبل إطلاق المسابقة.',
    carCaption: 'قد تكون هذه سيارتك القادمة',
    carAlt: 'سيارة MG3 موديل 2026',
  },
};

const BRANCHES = {
  en: {
    Jeddah: ['Jeddah Showroom'],
    Riyadh: ['Riyadh Showroom'],
    Dammam: ['Dammam Showroom'],
  },
  ar: {
    جدة: ['معرض جدة'],
    الرياض: ['معرض الرياض'],
    الدمام: ['معرض الدمام'],
  },
};

function Countdown({ t }) {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, END_DATE - Date.now());

      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        ended: diff === 0,
      });
    };

    update();

    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!remaining) {
    return (
      <div className="h-24 animate-pulse rounded-2xl bg-stone-100" />
    );
  }

  if (remaining.ended) {
    return (
      <p className="rounded-2xl border border-[#bd9a68]/30 bg-[#bd9a68]/10 px-5 py-4 text-sm font-semibold text-stone-800">
        {t.ended}
      </p>
    );
  }

  const values = [
    [remaining.days, t.days],
    [remaining.hours, t.hours],
    [remaining.minutes, t.minutes],
    [remaining.seconds, t.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {values.map(([value, label]) => (
        <div
          key={label}
          className="rounded-2xl border border-stone-200/80 bg-white px-1 py-4 text-center shadow-[0_4px_18px_rgba(0,0,0,0.035)] sm:py-5"
        >
          <div className="text-2xl font-semibold tabular-nums tracking-tight text-stone-900 sm:text-4xl">
            {String(value).padStart(2, '0')}
          </div>

          <div className="mt-2 text-[9px] font-medium tracking-[0.12em] text-stone-500 sm:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function CarVisual({ t, isAr }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative min-w-0">
      <div className="absolute -inset-3 rounded-[2.5rem] bg-[#bd9a68]/[0.07] blur-2xl sm:-inset-5" />

      <div className="relative isolate min-h-[300px] overflow-hidden rounded-[2rem] border border-stone-200/80 bg-gradient-to-br from-white via-[#fbfaf8] to-[#f1ece4] sm:min-h-[460px] lg:min-h-[530px]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#bd9a68]/20 sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#bd9a68]/10 blur-3xl" />

        <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between gap-3 sm:left-8 sm:right-8 sm:top-8">
          <span className="rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-stone-600 shadow-sm">
            MG3 · 2026
          </span>

          <span className="rounded-full border border-[#bd9a68]/30 bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-wide text-[#9a784b] shadow-sm">
            {t.prize}
          </span>
        </div>

        {/* Main car image */}
       {/* Main car image */}
{!imageError ? (
  <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
    <Image
      src={CAR_IMAGE}
      alt={t.carAlt}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      onError={() => setImageError(true)}
      className="object-contain object-center px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20"
    />
  </div>
) : (
  <div className="absolute inset-0 z-10 flex min-h-[300px] flex-col items-center justify-center px-6 pb-10 pt-16 text-center sm:min-h-[460px] lg:min-h-[530px]">
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#bd9a68]/50 bg-white text-xl font-bold text-[#9a784b] shadow-sm">
      MG
    </div>

    <h2 className="mt-5 text-5xl font-semibold tracking-tight text-stone-900 sm:text-7xl">
      MG3
    </h2>

    <p className="mt-3 text-xs font-medium tracking-[0.18em] text-stone-500">
      {t.model}
    </p>
  </div>
)}

        {/* Bottom image caption */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-white via-white/90 to-transparent px-5 pb-5 pt-12 sm:px-8 sm:pb-7">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#9a784b] sm:text-[10px]">
                {t.carCaption}
              </p>

              <p className="mt-1 text-lg font-semibold tracking-tight text-stone-900 sm:text-2xl">
                MG3 2026
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-lg text-[#9a784b]">
              ↗
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EntryForm({ lang, t }) {
  const [city, setCity] = useState('');
  const [branch, setBranch] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState('');

  const isAr = lang === 'ar';

  const cityKeys = isAr
    ? ['جدة', 'الرياض', 'الدمام']
    : ['Jeddah', 'Riyadh', 'Dammam'];

  const branches = BRANCHES[lang][city] || [];

  const fieldClass =
    'w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#bd9a68] focus:bg-white focus:ring-4 focus:ring-[#bd9a68]/10 disabled:cursor-not-allowed disabled:opacity-50';

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    const form = event.currentTarget;

    if (!form.reportValidity() || !agreed) {
      setMessage(t.required);
      return;
    }

    setMessage(t.apiNotice);
  }

  return (
    <section
      id="entry-form"
      className="scroll-mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.045)]"
    >
      <div className="border-b border-stone-100 bg-[#fbfaf8] px-6 py-7 sm:px-9 sm:py-9">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-[#9a784b]">
          {t.formBadge}
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
          {t.entryTitle}
        </h2>

        <p className="mt-2 text-sm leading-7 text-stone-600">
          {t.entryDesc}
        </p>
      </div>

      <form className="space-y-5 p-6 sm:p-9" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="full_name"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            {t.name} *
          </label>

          <input
            id="full_name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className={fieldClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              {t.city} *
            </label>

            <select
              id="city"
              name="city"
              required
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
                setBranch('');
              }}
              className={fieldClass}
            >
              <option value="">{t.chooseCity}</option>

              {cityKeys.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="branch"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              {t.branch} *
            </label>

            <select
              id="branch"
              name="branch"
              required
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
              disabled={!city}
              className={fieldClass}
            >
              <option value="">{t.chooseBranch}</option>

              {branches.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="mobile"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            {t.mobile} *
          </label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t.mobilePlaceholder}
            required
            maxLength={20}
            pattern="[+0-9 ()-]{8,20}"
            className={fieldClass}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-stone-600">
          <input
            type="checkbox"
            name="terms_accepted"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#bd9a68]"
          />

          <span>{t.agree}</span>
        </label>

        <p className="text-xs leading-6 text-stone-500">{t.privacy}</p>

        {message && (
          <p
            role="status"
            className="rounded-xl border border-[#bd9a68]/30 bg-[#bd9a68]/10 p-4 text-sm leading-6 text-stone-700"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#bd9a68] px-5 py-4 text-sm font-bold text-stone-950 transition hover:bg-[#c9a878] focus:outline-none focus:ring-4 focus:ring-[#bd9a68]/25"
        >
          {t.submit}
          <span className={isAr ? 'mr-3' : 'ml-3'} aria-hidden="true">
            {isAr ? '←' : '→'}
          </span>
        </button>
      </form>
    </section>
  );
}

export default function WinACarLanding({
  lang = 'en',
  showForm = false,
}) {
  const locale = lang === 'ar' ? 'ar' : 'en';
  const t = CONTENT[locale];
  const isAr = locale === 'ar';

  return (
    <main
      dir={isAr ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen bg-white text-stone-900"
    >
      {/* HERO */}
      <section className="overflow-hidden bg-[#fbfaf8]">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className={isAr ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#bd9a68]/30 bg-white px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#bd9a68]" />

                <p className="text-[10px] font-semibold tracking-[0.18em] text-stone-600 sm:text-xs">
                  {t.eyebrow}
                </p>
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-stone-950 sm:mt-8 sm:text-5xl lg:text-6xl">
                {t.title}
              </h1>

              <p className="mt-5 text-xl font-medium leading-relaxed text-stone-700 sm:text-2xl">
                {t.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                {t.description}
              </p>

              <div className="mt-8 max-w-xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#bd9a68]" />

                  <p className="text-[10px] font-semibold tracking-[0.16em] text-stone-500 sm:text-xs">
                    {t.countdown}
                  </p>
                </div>

                <Countdown t={t} />
              </div>

              {showForm && (
                <a
                  href="#entry-form"
                  className="mt-7 inline-flex items-center justify-center rounded-xl bg-stone-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-4 focus:ring-stone-300"
                >
                  {t.submit}

                  <span
                    className={isAr ? 'mr-3 text-[#d4b17d]' : 'ml-3 text-[#d4b17d]'}
                    aria-hidden="true"
                  >
                    {isAr ? '←' : '→'}
                  </span>
                </a>
              )}
            </div>

            <CarVisual t={t} isAr={isAr} />
          </div>
        </div>
      </section>

      {/* HOW TO PARTICIPATE + SHOWROOMS */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-[1.75rem] border border-stone-100 bg-[#fbfaf8] p-6 sm:p-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#9a784b]">
              01
            </span>

            <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#bd9a68]/30 bg-white text-lg text-[#9a784b]">
              ↗
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.how}
            </h2>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              {t.howDesc}
            </p>
          </div>

          <div className="py-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#9a784b]">
              02
            </span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.locations}
            </h2>

            <p className="mt-3 text-sm leading-7 text-stone-600">
              {t.locationsDesc}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.cities.map((cityName, index) => (
                <div
                  key={cityName}
                  className="rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-[#bd9a68]/60 hover:shadow-sm"
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#9a784b]">
                    0{index + 1}
                  </span>

                  <p className="mt-3 font-semibold text-stone-900">
                    {cityName}
                  </p>

                  <p className="mt-1 text-[10px] tracking-[0.06em] text-stone-500">
                    {t.showroom}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENTRY FORM */}
      {showForm && (
        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <EntryForm lang={locale} t={t} />
        </section>
      )}

      {/* TERMS & CONDITIONS */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f7f0e6] text-lg text-[#9a784b]">
              §
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] text-[#9a784b]">
                03
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.terms}
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {t.termsIntro}
              </p>
            </div>
          </div>

          <ol className="mt-7 grid gap-x-10 gap-y-4 border-t border-stone-100 pt-6 text-sm leading-7 text-stone-600 md:grid-cols-2">
            {t.termsItems.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-xs font-semibold text-[#9a784b]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ol>

          <p className="mt-7 border-t border-stone-100 pt-5 text-xs leading-6 text-stone-500">
            {t.termsNote}
          </p>
        </div>
      </section>
    </main>
  );
}