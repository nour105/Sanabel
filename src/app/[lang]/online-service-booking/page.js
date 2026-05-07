"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getOSB } from "@/lib/api";
import Banner from "@/components/Banner";

/* ================= TRANSLATIONS ================= */

const TEXT = {
  en: {
    title: "Book Your Service Now",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    brand: "Brand",
    model: "Model",
    city: "City",
    branch: "Branch",
    selectBrand: "Select Brand",
    selectModel: "Select Model",
    selectCity: "Select City",
    selectBranch: "Select Branch",
    submit: "Submit",
    submitting: "Submitting...",
    error: "Something went wrong",
    successTitle: "Thank You!",
    successDesc:
      "Your service booking request has been received. Our team will contact you shortly.",
  },
  ar: {
    title: "احجز خدمتك الآن",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    brand: "العلامة التجارية",
    model: "الموديل",
    city: "المدينة",
    branch: "الفرع",
    selectBrand: "اختر العلامة",
    selectModel: "اختر الموديل",
    selectCity: "اختر المدينة",
    selectBranch: "اختر الفرع",
    submit: "إرسال",
    submitting: "جاري الإرسال...",
    error: "حدث خطأ ما",
    successTitle: "شكرًا لك!",
    successDesc:
      "تم استلام طلب حجز الخدمة الخاص بك، وسيتواصل معك فريقنا قريبًا.",
  },
};

export default function OnlineServiceBooking() {
  const params = useParams();
  const lang = params?.lang === "ar" ? "ar" : "en";
  const t = TEXT[lang];

  const [page, setPage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    dealer_city: "",
    dealer_branch: "",
  });

  useEffect(() => {
    getOSB().then(setPage).catch(() => setPage(null));
  }, []);

  const models = {
    Hyundai: [
      "Grand i10","Accent","Elantra","Venue","Creta","Kona",
      "Sonata","Azera","Tucson","Santa Fe","Palisade","Grand Creta","Staria",
    ],
  };

  const BRANCHES = [
    { city: "Riyadh", locations: ["Khurais", "North Ring Road"] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "brand" ? { model: "" } : {}),
      ...(name === "dealer_city" ? { dealer_branch: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://admin.sanabelauto.com/api/v1/online-service-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.status) {
        setSubmitted(true);
      } else {
        setMessage(t.error);
      }
    } catch {
      setMessage(t.error);
    }

    setLoading(false);
  };

  return (
    <>
      {page?.banners?.length > 0 && <Banner banners={page.banners} />}

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
            {[
              ["first_name", t.firstName],
              ["last_name", t.lastName],
              ["email", t.email],
              ["phone", t.phone],
            ].map(([name, label]) => (
              <div key={name}>
                <label className="block mb-2 font-medium">{label}</label>
                <input
                  name={name}
                  type={name === "email" ? "email" : "text"}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
              </div>
            ))}

            {/* BRAND */}
            <div>
              <label className="block mb-2 font-medium">{t.brand}</label>
              <select
                name="brand"
                value={form.brand}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">{t.selectBrand}</option>
                {Object.keys(models).map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* MODEL */}
            <div>
              <label className="block mb-2 font-medium">{t.model}</label>
              <select
                name="model"
                value={form.model}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">{t.selectModel}</option>
                {models[form.brand]?.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* CITY */}
            <div>
              <label className="block mb-2 font-medium">{t.city}</label>
              <select
                name="dealer_city"
                value={form.dealer_city}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              >
                <option value="">{t.selectCity}</option>
                {BRANCHES.map((c) => (
                  <option key={c.city} value={c.city}>{c.city}</option>
                ))}
              </select>
            </div>

            {/* BRANCH */}
            <div>
              <label className="block mb-2 font-medium">{t.branch}</label>
              <select
                name="dealer_branch"
                value={form.dealer_branch}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
                disabled={!form.dealer_city}
              >
                <option value="">{t.selectBranch}</option>
                {BRANCHES.find((b) => b.city === form.dealer_city)
                  ?.locations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-lg"
              >
                {loading ? t.submitting : t.submit}
              </button>
            </div>

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