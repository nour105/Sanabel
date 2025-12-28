"use client";

import { useState } from "react";
import { submitLeadSearch } from "@/lib/api";
import CallButton from "./CallButton";

export default function LeadForm({ onResult, setLoading }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    salary_range: "",
    bank: "",
    loan_type: "",
    visa_limit: "",
    purchase_timeline: "",
    marketing_consent: false,
    privacy_accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.privacy_accepted) {
      alert("Name, phone, and privacy agreement are required");
      return;
    }

    try {
      setLoading(true);
      const data = await submitLeadSearch(form);
      onResult(data);
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="name" placeholder="Name *" onChange={handleChange} />
      <input name="phone" placeholder="Phone *" onChange={handleChange} />

      <select name="salary_range" onChange={handleChange}>
        <option value="">Total Salary</option>
        <option value="0-5000">0 – 5,000</option>
        <option value="5000-10000">5,000 – 10,000</option>
        <option value="10000-15000">10,000 – 15,000</option>
        <option value="15000+">15,000+</option>
      </select>

      <select name="bank" onChange={handleChange}>
        <option value="">Bank</option>
        <option value="SNB">SNB</option>
        <option value="NCB">NCB</option>
        <option value="NBD">NBD</option>
        <option value="Bank4">Bank 4</option>
      </select>

      <select name="loan_type" onChange={handleChange}>
        <option value="">Loan Type</option>
        <option value="personal">Personal loan</option>
        <option value="realestate">Real estate loan</option>
        <option value="personal_realestate">Personal & real estate</option>
      </select>

      <select name="visa_limit" onChange={handleChange}>
        <option value="">Visa Limit</option>
        <option value="below_5000">Below 5k</option>
        <option value="5000-10000">5k – 10k</option>
        <option value="10000-15000">10k – 15k</option>
        <option value="15000+">15k+</option>
      </select>

      <select name="purchase_timeline" onChange={handleChange}>
        <option value="">When do you want to purchase?</option>
        <option value="now">Now</option>
        <option value="next_month">Next month</option>
        <option value="2_months">2 months</option>
        <option value="3_months">3 months</option>
        <option value="not_sure">Not sure</option>
      </select>

      <label className="col-span-2">
        <input
          type="checkbox"
          name="marketing_consent"
          onChange={handleChange}
        />{" "}
        I agree to be contacted for sales & marketing purposes
      </label>

      <label className="col-span-2">
        <input
          type="checkbox"
          name="privacy_accepted"
          onChange={handleChange}
        />{" "}
        I agree to the privacy terms *
      </label>

      <div className="col-span-2 flex gap-4 items-center">
        <button type="submit" className="btn-primary">
          Get Results
        </button>

        <CallButton />
      </div>
    </form>
  );
}
