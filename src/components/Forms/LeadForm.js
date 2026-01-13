'use client';

import { useState } from 'react';
import { submitLeadSearch } from '@/lib/api';
import CallButton from '../CallButton';
import Filters from '../Filters';
import Image from 'next/image';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';
import { useRouter } from 'next/navigation';

/* ================= HELPERS ================= */

const getText = (val, lang) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') return val[lang] || val.en || '';
  return '';
};
const getContent = (val, lang) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') return val[lang] || val.en || '';
  return '';
};

const getBrandName = (brand, lang) => {
  if (!brand) return '';
  if (typeof brand === 'string') return brand;
  return getText(brand.name, lang);
};

/* ================= COMPONENT ================= */
const cleanNumber = (val) => {
  if (!val) return 0;
  return Number(String(val).replace(/,/g, ''));
};

export default function EmiLeadForm({ lang }) {
  const [loading, setLoading] = useState(false);
  const [showLoanType, setShowLoanType] = useState(false);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [emiBudget, setEmiBudget] = useState(null);
  const [showEmiBudget, setShowEmiBudget] = useState(false);
  const [loadingCarId, setLoadingCarId] = useState(null);
  const [selectedCars, setSelectedCars] = useState({});

const router = useRouter();

  /* ================= FETCH ================= */

  async function handleShowCars(e) {
  e.preventDefault();
  const f = document.forms[0];
  if (!f.checkValidity()) { f.reportValidity(); return; }

  setLoading(true);

  const payload = {
    name: f.name.value,
    phone: f.phone.value,
    email: f.email.value || null,
    salary_range: f.salary_range?.value || null,
    has_loans: Number(f.hasLoans.value),
    loan_type: showLoanType ? f.loan_type?.value : null,
    visa_limit: f.visa_limit?.value || null,
    bank: f.bank?.value || null,
    purchase_timeline: f.purchase_timeline?.value || null,
    emi_budget: Number(emiBudget ?? 0),
    privacy_accepted: true,
    // fetch_cars_only: true, // ⚠️ prevent backend from saving lead yet
  };

  try {
    const res = await submitLeadSearch(payload);
const carsData = res.results || [];

      // استخراج الميزانية
      const budget = cleanNumber(res.emi_budget);

      // فلترة السيارات حسب EMI Budget
      let filtered = carsData.filter(car => {
        const emi = cleanNumber(car.emi_monthly);

        if (budget > 0) return emi <= budget;
        return true; // إذا ما في ميزانية → كل السيارات
      });

      // ترتيب السيارات: أولًا السيارات اللي عندها EMI > 0
      filtered.sort((a, b) => {
        const emiA = cleanNumber(a.emi_monthly);
        const emiB = cleanNumber(b.emi_monthly);

        if (emiA > 0 && emiB === 0) return -1;
        if (emiA === 0 && emiB > 0) return 1;
        return 0;
      });

      // استخراج الماركات الفريدة
      const uniqueBrands = Array.from(
        new Set(carsData.map(car => getBrandName(car.brand, lang)))
      );

      setCars(filtered);
      setFilteredCars(filtered);
      setEmiBudget(budget);
      setBrands(uniqueBrands);
setShowEmiBudget(Boolean(payload.salary_range || payload.has_loans));
  } catch (err) {
    alert('Something went wrong');
  } finally {
    setLoading(false);
  }
}


  /* ================= SELECT CAR ================= */

async function handleSelectCar(car) {
  if (!car?.id) return alert('Car ID missing');

  setLoadingCarId(car.id);
  const f = document.forms[0];

  const payload = {
    name: f.name.value,
    phone: f.phone.value,
    email: f.email.value || null,
    salary_range: f.salary_range?.value || null,
    has_loans: Number(f.hasLoans.value),
    loan_type: showLoanType ? f.loan_type?.value : null,
    visa_limit: f.visa_limit?.value || null,
    bank: f.bank?.value || null,
    purchase_timeline: f.purchase_timeline?.value || null,
    emi_budget: Number(emiBudget ?? 0),
    car_id: car.id, // ✅ include car
    privacy_accepted: true,
  };

  try {
    const res = await submitLeadSearch(payload);
    router.push(`/${lang}/cars/${car.slug}?thankyou=1`);
  } catch (err) {
    alert('Submission failed');
  } finally {
    setLoadingCarId(null);
  }
}




  /* ================= UI ================= */

  return (
    <div className="grid gap-8">

      {/* ================= FORM ================= */}
      <form
        className="flex flex-wrap gap-4"
        onSubmit={handleShowCars}
      >
        <input
          name="name"
          required
          placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
          className="flex-grow  text-gray-700 min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
        />

        <input
          name="phone"
          required
          placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
          className="flex-grow text-gray-700 min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
          pattern="^05\d{8}$"
          title={
            lang === 'ar'
              ? 'أدخل رقم هاتف سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام'
              : 'Enter a valid Saudi phone number starting with 05 and 10 digits'
          }
        />

        <input
          name="email"
          type="email"
          required
          placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
          className="flex-grow text-gray-700 min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
        />

        <select
          name="salary_range"
          className="flex-grow  text-gray-700 min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
        >
          <option value="">
            {lang === 'ar' ? 'الراتب (اختياري)' : 'Salary (Optional)'}
          </option>
          <option value="0-5000">0 – 5,000</option>
          <option value="5000-10000">5,000 – 10,000</option>
          <option value="10000-15000">10,000 – 15,000</option>
          <option value="15000+">15,000+</option>
        </select>

        <div className="flex items-center gap-4 flex-grow min-w-[150px] max-w-[220px]">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="hasLoans"
              value="0"
              defaultChecked
              onChange={() => setShowLoanType(false)}
              className='text-gray-700'
            />
            {lang === 'ar' ? 'لا يوجد قروض' : 'No Loans'}
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="hasLoans"
              value="1"
              onChange={() => setShowLoanType(true)}
              className='text-gray-700'
            />
            {lang === 'ar' ? 'يوجد قروض' : 'Has Loans'}
          </label>
        </div>

        {showLoanType && (
          <select
            name="loan_type"
            className="flex-grow text-gray-700 min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">
              {lang === 'ar' ? 'نوع القرض' : 'Loan Type'}
            </option>
            <option value="personal">
              {lang === 'ar' ? 'قرض شخصي' : 'Personal'}
            </option>
            <option value="realestate">
              {lang === 'ar' ? 'قرض عقاري' : 'Real Estate'}
            </option>
            <option value="both">
              {lang === 'ar' ? 'كلاهما' : 'Both'}
            </option>
          </select>
        )}

        <select
          name="visa_limit"
          className="flex-grow min-w-[150px] max-w-[220px] border text-gray-700 border-gray-300 rounded px-3 py-2"
        >
          <option value="">
            {lang === 'ar'
              ? 'حد البطاقة الائتمانية (اختياري)'
              : 'Visa Limit (Optional)'}
          </option>
          <option value="below_5000">
            {lang === 'ar' ? 'أقل من 5,000' : 'Below 5,000'}
          </option>
          <option value="5000-10000">5,000 – 10,000</option>
          <option value="10000-15000">10,000 – 15,000</option>
          <option value="15000+">15,000+</option>
        </select>

        <select
          name="bank"
          className="flex-grow text-gray-700 min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
        >
          <option value="">
            {lang === 'ar' ? 'اختر البنك (اختياري)' : 'Choose your bank (Optional)'}
          </option>
      <option value="Riyadh Bank">{locale === 'ar' ? 'بنك الرياض' : 'Riyadh Bank'}</option>
  <option value="SNB">{locale === 'ar' ? 'البنك السعودي الوطني' : 'SNB'}</option>
  <option value="Alrajhi">{locale === 'ar' ? 'بنك الراجحي' : 'Alrajhi'}</option>
  <option value="Bank Al Bilad">{locale === 'ar' ? 'بنك البلاد' : 'Bank Al Bilad'}</option> 
       </select>


        <select
          name="purchase_timeline"
          className="grow min-w-[150px] max-w-[220px] text-gray-700 border border-gray-300 rounded px-3 py-2"
        >
          <option value="">
            {lang === 'ar' ? 'موعد الشراء' : 'Purchase time frame'}
          </option>
          <option>{lang === 'ar' ? 'الآن' : 'Now'}</option>
          <option>{lang === 'ar' ? 'الشهر القادم' : 'Next month'}</option>
          <option>{lang === 'ar' ? 'بعد شهرين' : '2 months from now'}</option>
          <option>{lang === 'ar' ? 'بعد 3 أشهر' : '3 months from now'}</option>
          <option>{lang === 'ar' ? 'غير متأكد' : 'Not sure'}</option>
          <option>{lang === 'ar' ? 'أخرى' : 'Other'}</option>
        </select>
        <div className="flex items-center gap-3 mt-auto">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 px-6 rounded"
          >
            {loading
              ? lang === 'ar'
                ? 'جاري التحميل...'
                : 'Loading...'
              : lang === 'ar'
                ? 'عرض النتائج'
                : 'Search'}
          </button>

          <CallButton lang={lang} />
        </div>


      </form>

      {/* ================= EMI BUDGET ================= */}
      {emiBudget !== null && showEmiBudget && (
        <div className="flex items-center  justify-center gap-3 px-6 py-4 rounded-xl bg-blue-50 text-blue-900 border border-blue-200">
          <span className="text-sm">
            {lang === 'ar' ? 'قسطك الشهري المُقدّر:' : 'Your Estimated Monthly (EMI):'}
          </span>

          <span className="text-xl font-semibold">
            {emiBudget}
          </span>

          <Image src={SAR_symbol} alt="SAR" width={16} height={16} />
        </div>



      )}

      {/* ================= FILTERS ================= */}
      {cars.length > 0 && (
        <Filters
          lang={lang}
          brands={brands.map(b => ({ name: b }))}
          cars={cars}
          onFilterChange={setFilteredCars}
        />
      )}

      {/* ================= CARS GRID (NEW DESIGN) ================= */}
     {filteredCars.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-4 md:px-0">
          {filteredCars.map(car => {
            const isSelected = selectedCars[car.id] || false;
            return (
              <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
                <img
                  src={`https://admin.sanabelauto.com/storage/${car.card_image}`}
                  alt={getText(car.name, lang)}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />

                {car.has_offer && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {lang === 'ar' ? 'عرض خاص' : 'Special Offer'}
                  </span>
                )}

                <span className="absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-600">
                  {car.price}{' '}
                  <Image src={SAR_symbol} alt="SAR" width={18} height={18} className="inline" />
                </span>

                <div className={`p-5 flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <span className="text-sm text-gray-500">
                    {lang === 'ar' ? 'السعر يشمل الضريبة' : 'price Including VAT'}
                  </span>

                  <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                    {getText(car.name, lang)}
                  </h3>

                  <span className="inline-block w-fit text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {getBrandName(car.brand, lang)}
                  </span>

                  <p
                    className="text-sm text-gray-700 leading-relaxed line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: getContent(car.content, lang) }}
                  />

                  {car.emi_monthly && (
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                      <span>{lang === 'ar' ? 'القسط الشهري' : 'Monthly Installment'}</span>
                      <span className="font-semibold">{car.emi_monthly}</span>
                      <Image src={SAR_symbol} alt="SAR" width={14} height={14} className="inline" />
                    </div>
                  )}

                  {!isSelected ? (
                    <button
                      type="button"
                      onClick={() => handleSelectCar(car)}
                      disabled={loadingCarId === car.id}
                      className="mt-3 w-full bg-green-600 text-white py-2.5 rounded-xl font-medium hover:bg-green-700 transition disabled:opacity-60"
                    >
                      {loadingCarId === car.id
                        ? lang === 'ar' ? 'جاري الإرسال...' : 'Submitting...'
                        : lang === 'ar' ? 'أريد هذه السيارة' : 'I Want This Car'}
                    </button>
                  ) : (
                    <a
                      href={`/${lang}/cars/${car.slug}`}
                      className="mt-3 block text-center bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
                    >
                      {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
