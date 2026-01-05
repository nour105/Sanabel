"use client";

import { useState } from "react";
import { submitLeadSearch } from "@/lib/api";
import CallButton from "../CallButton";
import Filters from "../Filters";
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';
import Image from "next/image";
export default function EmiLeadForm({lang}) {
  const [loading, setLoading] = useState(false);
  const [showLoanType, setShowLoanType] = useState(false);
  const [cars, setCars] = useState([]);
const [selectedCars, setSelectedCars] = useState({});
  const [brands, setBrands] = useState([]);
  const [emiBudget, setEmiBudget] = useState(null);
  const [showEmiBudget, setShowEmiBudget] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loadingCarId, setLoadingCarId] = useState(null);
  


  // Fetch cars and calculate EMI
  async function handleShowCars(e) {
    e.preventDefault();
    const f = document.forms[0];

    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }

    setLoading(true);

    const payload = {
      name: f.name.value,
      phone: f.phone.value,
      email: f.email.value || null,
      salary_range: f.salary_range.value || null,
      has_loans: f.hasLoans ? parseInt(f.hasLoans.value) : 0,
      loan_type: showLoanType ? f.loan_type?.value : null,
      visa_limit: f.visa_limit?.value || null,
      bank: f.bank?.value || null,
      purchase_timeline: f.purchase_timeline?.value || null,
      privacy_accepted: true,
    };

    try {
      const res = await submitLeadSearch(payload);
      const carsData = res.results || [];
      setCars(carsData);
      setFilteredCars(carsData);
      setEmiBudget(res.emi_budget);

      const uniqueBrands = [...new Set(carsData.map((car) => car.brand))];
      setBrands(uniqueBrands);

      // Show EMI Budget only if financial data exists
      if (
        payload.salary_range ||
        payload.has_loans === 1 ||
        payload.loan_type ||
        payload.visa_limit ||
        payload.bank
      ) {
        setShowEmiBudget(true);
      } else {
        setShowEmiBudget(false);
      }
    } catch {
      alert("Something went wrong fetching cars");
    } finally {
      setLoading(false);
    }
  }

  // Submit lead after selecting a car
async function handleLeadSubmit(car) {
  setLoadingCarId(car.id); // only this car is loading
  const f = document.forms[0];

  const payload = {
    name: f.name.value,
    phone: f.phone.value,
    email: f.email.value || null,
    salary_range: f.salary_range.value || null,
    has_loans: f.hasLoans ? parseInt(f.hasLoans.value) : 0,
    loan_type: showLoanType ? f.loan_type?.value : null,
    visa_limit: f.visa_limit?.value || null,
    bank: f.bank?.value || null,
    purchase_timeline: f.purchase_timeline?.value || null,
    car_id: car.id,
    privacy_accepted: true,
  };

  try {
    await submitLeadSearch(payload);
    alert(`Lead submitted successfully for ${car.name}`);
  } catch {
    alert("Something went wrong submitting the lead");
  } finally {
    setLoadingCarId(null); // reset after submission
  }
}

  return (
    <div className="grid gap-6">
      {/* Lead Form */}
  <form
  className="flex flex-wrap gap-4"
  onSubmit={handleShowCars}
>
  <input
    name="name"
    required
    placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  />

  <input
    name="phone"
    required
    placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
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
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  />

  <select
    name="salary_range"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
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
      />
      {lang === 'ar' ? 'لا يوجد قروض' : 'No Loans'}
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="hasLoans"
        value="1"
        onChange={() => setShowLoanType(true)}
      />
      {lang === 'ar' ? 'يوجد قروض' : 'Has Loans'}
    </label>
  </div>

  {showLoanType && (
    <select
      name="loan_type"
      className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
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
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
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
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  >
    <option value="">
      {lang === 'ar' ? 'اختر البنك (اختياري)' : 'Choose your bank (Optional)'}
    </option>
    <option>SNB</option>
    <option>NCB</option>
    <option>NBD</option>
    <option>Bank 4</option>
  </select>

  <select
    name="purchase_timeline"
    className="grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
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


      {/* EMI Budget */}
      {emiBudget !== null && showEmiBudget && (
        <div className="mt-6 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg font-semibold text-xl text-center">
          EMI Budget: <span className="font-extrabold">{emiBudget}</span>
        </div>
      )}

      {/* Filters */}
      {cars.length > 0 && (
        <Filters lang={lang} brands={brands.map((b) => ({ name: b }))} cars={cars} onFilterChange={setFilteredCars} />
      )}

      {/* Display Cars */}
      {filteredCars.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-4 md:px-0">
{filteredCars.map((car) => {
  const isSelected = selectedCars[car.id] || false;

  const handleSelectCar = async () => {
    setLoadingCarId(car.id);

    const f = document.forms[0]; // get form values

    const payload = {
      name: f.name.value,
      phone: f.phone.value,
      email: f.email.value || null,
      salary_range: f.salary_range?.value || null,
      has_loans: f.hasLoans ? parseInt(f.hasLoans.value) : 0,
      loan_type: showLoanType ? f.loan_type?.value : null,
      visa_limit: f.visa_limit?.value || null,
      bank: f.bank?.value || null,
      purchase_timeline: f.purchase_timeline?.value || null,
      car_id: car.id,
      privacy_accepted: true,
    };

    try {
      await submitLeadSearch(payload); // send lead
      setSelectedCars({ ...selectedCars, [car.id]: true }); // mark as selected
    } catch {
      alert("Something went wrong submitting the lead");
    } finally {
      setLoadingCarId(null);
    }
  };

  return (
    <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
      <img src={car.image} alt={car.name} className="w-full h-52 object-cover" loading="lazy" />
      {car.has_offer && (
        <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          Offer
        </span>
      )}
      <span className="absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold shadow-lg text-gray-500">
        {car.brand}
      </span>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
        <p className="mt-2 text-lg font-bold text-gray-900">{car.price}                         <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" />
        </p>
        {car.emi_monthly && (
          <p className="mt-1 text-sm text-blue-600">EMI: {car.emi_monthly}                         <Image src={SAR_symbol} alt="SAR" width={20} height={20} className="inline" />
          </p>
        )}

        {!isSelected ? (
          <button
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            onClick={handleSelectCar}
            disabled={loadingCarId === car.id}
          >
            {loadingCarId === car.id
              ? lang === 'ar' ? 'جاري الإرسال...' : 'Submitting...'
              : lang === 'ar' ? 'أريد هذه السيارة' : 'I Want This Car'}
          </button>
        ) : (
          <a
            href={`/${lang}/cars/${car.slug}`} // car details page
            className="mt-4 block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
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