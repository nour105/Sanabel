"use client";

import { useState } from "react";

const salaryOptions = [
  { value: "below_5000", label: "Below 5000" },
  { value: "between_5000_and_10000", label: "Between 5000 and 10,000" },
  { value: "over_10000", label: "Over 10,000" },
];

export default function BrandLeadForm({ brandId, brand, cars, lang }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    salary: "",
    vehicle_id: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get("utm_source") || "";
    const utm_medium = urlParams.get("utm_medium") || "";
    const utm_campaign = urlParams.get("utm_campaign") || "";

    try {
      const res = await fetch(`https://admin.sanabelauto.com/api/v1/brand/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand_id: brandId,
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          mobile: form.mobile,
          salary: form.salary,
          source: "website",
          utm_source,
          utm_medium,
          utm_campaign,
          vehicle_id: form.vehicle_id,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      alert(lang === "ar" ? "تم الإرسال بنجاح" : "Submitted successfully");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        salary: "",
        vehicle_id: "",
      });
    } catch (err) {
      alert(lang === "ar" ? "حدث خطأ" : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          {lang === "ar" ? "طلب عرض سعر" : "Request A Quote"}
        </h2>

        <form onSubmit={submit} className="flex flex-wrap gap-4">
          <input
            required
            placeholder={lang === "ar" ? "الاسم الكامل" : "Full Name"}
            value={form.first_name}
            onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            className="flex-1 border rounded-lg p-3 min-w-[200px]"
          />

          <input
            placeholder={lang === "ar" ? "اللقب (اختياري)" : "Last Name (Optional)"}
            value={form.last_name}
            onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            className="flex-1 border rounded-lg p-3 min-w-[200px]"
          />

          <input
            required
            type="email"
            placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="flex-1 border rounded-lg p-3 min-w-[200px]"
          />

          <input
            required
            placeholder={lang === "ar" ? "رقم الهاتف" : "Phone Number"}
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="flex-1 border rounded-lg p-3 min-w-[200px]"
          />

          <select
            required
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
            className="flex-1 border rounded-lg p-3 min-w-[200px]"
          >
            <option value="">
              {lang === "ar" ? "الدخل الشهري" : "Monthly Salary"}
            </option>
            {salaryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <select
            value={form.vehicle_id}
            onChange={(e) => setForm({ ...form, vehicle_id: e.target.value })}
            className="flex-1 border rounded-lg p-3 min-w-[200px]"
          >
            <option value="">
              {lang === "ar" ? "اختر السيارة" : "Select Vehicle"}
            </option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name?.[lang] || car.name?.en}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition min-w-[200px]"
          >
            {loading
              ? lang === "ar"
                ? "جارٍ الإرسال..."
                : "Submitting..."
              : lang === "ar"
              ? "إرسال الطلب"
              : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
