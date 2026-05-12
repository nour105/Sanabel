"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getRSB } from "@/lib/api";
import Banner from "@/components/Banner";

/* ================= TRANSLATIONS ================= */

const TEXT = {
  en: {
    title: "Book Your Service Now",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone (Saudi)",
    model: "Model",
    branch: "Branch",
    selectModel: "Select Model",
    selectBranch: "Select Branch",
    submit: "Submit",
    submitting: "Submitting...",
    error: "Something went wrong",
    invalidPhone: "Enter a valid Saudi number starting with 05",
    successTitle: "Thank You!",
    successDesc:
      "Your service booking request has been received. Our team will contact you shortly.",
  },

  ar: {
    title: "احجز خدمتك الآن",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف السعودي",
    model: "الموديل",
    branch: "الفرع",
    selectModel: "اختر الموديل",
    selectBranch: "اختر الفرع",
    submit: "إرسال",
    submitting: "جاري الإرسال...",
    error: "حدث خطأ ما",
    invalidPhone: "أدخل رقم سعودي صحيح يبدأ بـ 05",
    successTitle: "شكرًا لك!",
    successDesc:
      "تم استلام طلب حجز الخدمة الخاص بك، وسيتواصل معك فريقنا قريبًا.",
  },
};
const getUTMParams = () => {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
};
export default function OnlineServiceBookingRiyadh() {
  const params = useParams();
  const lang = params?.lang === "ar" ? "ar" : "en";
  const t = TEXT[lang];

  const [page, setPage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* ================= FIXED VALUES ================= */

  const FIXED_BRAND = "Hyundai";
  const FIXED_CITY = "Riyadh";

  /* ================= FORM ================= */

 const [form, setForm] = useState({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",

  brand: FIXED_BRAND,
  model: "",

  dealer_city: FIXED_CITY,
  dealer_branch: "",

  source: "Riyadh Campaign",

  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
});
  /* ================= API ================= */

  useEffect(() => {
    getRSB().then(setPage).catch(() => setPage(null));
  }, []);
useEffect(() => {
  const utm = getUTMParams();

  setForm((prev) => ({
    ...prev,
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
  }));
}, []);
  /* ================= MODELS ================= */

  const models = {
    Hyundai: [
      "Grand i10",
      "Accent",
      "Elantra",
      "Venue",
      "Creta",
      "Kona",
      "Sonata",
      "Azera",
      "Tucson",
      "Santa Fe",
      "Palisade",
      "Grand Creta",
      "Staria",
    ],
  };

  /* ================= BRANCHES ================= */

  const BRANCHES = [
    {
      city: "Riyadh",
      locations: ["Khurais", "North Ring Road"],
    },
  ];

  /* ================= PHONE ================= */

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const isValidSaudi = (phone) => /^05\d{8}$/.test(phone);

  const formatTo966 = (phone) => {
    return "+966" + phone.substring(1);
  };

  /* ================= INPUTS ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    if (!isValidSaudi(form.phone)) {
      setMessage(t.invalidPhone);
      setLoading(false);
      return;
    }

    const payload = {
      ...form,
      phone: formatTo966(form.phone),
    };

    try {
      const res = await fetch(
        "https://admin.sanabelauto.com/api/v1/online-service-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.status) {
        setSubmitted(true);
      } else {
        setMessage(t.error);
      }
    } catch (error) {
      setMessage(t.error);
    }

    setLoading(false);
  };

  return (
    <>
      {page?.banners?.length > 0 && (
        <Banner banners={page.banners} />
      )}

      <div
        className="max-w-5xl mx-auto py-12 px-4"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <h1 className="text-3xl font-bold mb-10 text-center">
          {t.title}
        </h1>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* FIRST NAME */}
            <div>
              <label className="block mb-2 font-medium">
                {t.firstName}
              </label>

              <input
                name="first_name"
                type="text"
                value={form.first_name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="block mb-2 font-medium">
                {t.lastName}
              </label>

              <input
                name="last_name"
                type="text"
                value={form.last_name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium">
                {t.email}
              </label>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 font-medium">
                {t.phone}
              </label>

              <input
                name="phone"
                inputMode="numeric"
                placeholder="05XXXXXXXX"
                value={form.phone}
                onChange={handlePhoneChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>

            {/* MODEL */}
            <div>
              <label className="block mb-2 font-medium">
                {t.model}
              </label>

              <select
                name="model"
                value={form.model}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">
                  {t.selectModel}
                </option>

                {models["Hyundai"]?.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* BRANCH */}
            <div>
              <label className="block mb-2 font-medium">
                {t.branch}
              </label>

              <select
                name="dealer_branch"
                value={form.dealer_branch}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">
                  {t.selectBranch}
                </option>

                {BRANCHES.find(
                  (branch) => branch.city === FIXED_CITY
                )?.locations.map((location) => (
                  <option
                    key={location}
                    value={location}
                  >
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* SUBMIT */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-lg disabled:opacity-50"
              >
                {loading ? t.submitting : t.submit}
              </button>
            </div>

            {/* ERROR MESSAGE */}
            {message && (
              <div className="md:col-span-2 text-center text-red-600">
                {message}
              </div>
            )}
          </form>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold mb-6">
              {t.successTitle}
            </h2>

            <p className="text-lg text-gray-600">
              {t.successDesc}
            </p>
          </div>
        )}
      </div>
    </>
  );
}