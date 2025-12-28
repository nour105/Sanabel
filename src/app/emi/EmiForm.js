"use client";
import { useState } from "react";
import { submitLeadSearch } from "@/lib/api";

export default function EmiForm({ setCars, selectedCarId }) {
  const [loading, setLoading] = useState(false);
  const [showLoanType, setShowLoanType] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const f = e.target;

    const payload = {
      name: f.name.value,
      phone: f.phone.value,
      email: f.email.value,

      salary_range: f.salary_range.value || null,
      has_loans: parseInt(f.hasLoans.value),
      loan_type: showLoanType ? f.loan_type.value : null,
      visa_limit: f.visa_limit.value || null,
      bank: f.bank.value || null,

      car_id: selectedCarId || null,

      marketing_consent: f.marketing_consent.checked,
      privacy_accepted: true,
    };

    const res = await submitLeadSearch(payload);
    setCars(res.results || []);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input name="name" required placeholder="Full Name" />
      <input name="phone" required placeholder="Phone" />
      <input name="email" required placeholder="Email" />

      <select name="salary_range">
        <option value="">Salary (Optional)</option>
        <option value="0-5000">0 – 5,000</option>
        <option value="5000-10000">5,000 – 10,000</option>
        <option value="10000-15000">10,000 – 15,000</option>
        <option value="15000+">15,000+</option>
      </select>

      <div>
        <label>
          <input type="radio" name="hasLoans" value="0" defaultChecked onChange={() => setShowLoanType(false)} />
          No Loans
        </label>
        <label>
          <input type="radio" name="hasLoans" value="1" onChange={() => setShowLoanType(true)} />
          Has Loans
        </label>
      </div>

      {showLoanType && (
        <select name="loan_type">
          <option value="personal">Personal</option>
          <option value="realestate">Real Estate</option>
          <option value="both">Both</option>
        </select>
      )}

      <select name="visa_limit">
        <option value="">Visa Limit</option>
        <option value="below_5000">Below 5,000</option>
        <option value="5000-10000">5,000 – 10,000</option>
        <option value="10000-15000">10,000 – 15,000</option>
        <option value="15000+">15,000+</option>
      </select>

      <input name="bank" placeholder="Bank (Optional)" />

      <label>
        <input type="checkbox" name="marketing_consent" /> Marketing consent
      </label>

      <button type="submit">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
