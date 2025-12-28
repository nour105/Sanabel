"use client";

import { useState } from "react";
import { submitLeadSearch } from "@/lib/api";
import CallButton from "../CallButton";

export default function EmiLeadForm() {
  const [loading, setLoading] = useState(false);
  const [showLoanType, setShowLoanType] = useState(false);
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const [brands, setBrands] = useState([]);
  const [emiBudget, setEmiBudget] = useState(null);
  const [showEmiBudget, setShowEmiBudget] = useState(false);

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
      fetch_cars_only: true,
    };

    try {
      const res = await submitLeadSearch(payload);
      const carsData = res.results || [];
      setCars(carsData);
      setEmiBudget(res.emi_budget);

      const uniqueBrands = [...new Set(carsData.map((car) => car.brand))];
      setBrands(uniqueBrands);

      const prices = carsData.map((car) => parseFloat(car.price));
      setFilters({
        ...filters,
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices),
      });

      setSelectedCar(null);

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
  async function handleLeadSubmit() {
    if (!selectedCar) return alert("Please select a car first");
    setLoading(true);
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
      car_id: selectedCar.id,
      privacy_accepted: true,
    };

    try {
      await submitLeadSearch(payload);
      alert("Lead submitted successfully");
    } catch {
      alert("Something went wrong submitting the lead");
    } finally {
      setLoading(false);
    }
  }

  // Filter cars
  const filteredCars = cars.filter((car) => {
    let matches = true;
    if (filters.brand) matches = matches && car.brand === filters.brand;
    if (filters.minPrice)
      matches =
        matches && parseFloat(car.price) >= parseFloat(filters.minPrice);
    if (filters.maxPrice)
      matches =
        matches && parseFloat(car.price) <= parseFloat(filters.maxPrice);
    return matches;
  });

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
    placeholder="Full Name"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  />
  <input
    name="phone"
    required
    placeholder="Phone Number"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  />
  <input
    name="email"
    type="email"
    required
    placeholder="Email Address"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  />
  <select
    name="salary_range"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  >
    <option value="">Salary (Optional)</option>
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
      No Loans
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="hasLoans"
        value="1"
        onChange={() => setShowLoanType(true)}
      />
      Has Loans
    </label>
  </div>

  {showLoanType && (
    <select
      name="loan_type"
      className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
      required
    >
      <option value="">Loan Type</option>
      <option value="personal">Personal</option>
      <option value="realestate">Real Estate</option>
      <option value="both">Both</option>
    </select>
  )}

  <select
    name="visa_limit"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  >
    <option value="">Visa Limit (Optional)</option>
    <option value="below_5000">Below 5,000</option>
    <option value="5000-10000">5,000 – 10,000</option>
    <option value="10000-15000">10,000 – 15,000</option>
    <option value="15000+">15,000+</option>
  </select>

  <select
    name="bank"
    className="flex-grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  >
    <option value="">choose your bank (Optional)</option>
    <option>SNB</option>
    <option>NCB</option>
    <option>NBD</option>
    <option>Bank 4</option>
  </select>

  <select
    name="purchase_timeline"
    className="grow min-w-[150px] max-w-[220px] border border-gray-300 rounded px-3 py-2"
  >
    <option value="">Purchase time frame</option>
    <option>Now</option>
    <option>Next month</option>
    <option>2 months from now</option>
    <option>3 months from now</option>
    <option>Not sure</option>
    <option>Other</option>
  </select>

  <button
    type="submit"
    disabled={loading}
    className="bg-black text-white py-3 px-6 rounded mt-auto"
  >
    {loading ? "Loading..." : "Get Results"}
  </button>
  <CallButton/>
</form>

      {/* EMI Budget */}
      {emiBudget !== null && showEmiBudget && (
        <div className="mt-6 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg font-semibold text-xl text-center">
          EMI Budget: <span className="font-extrabold">{emiBudget}</span>
        </div>
      )}

      {/* Filters */}
      {cars.length > 0 && (
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6 px-4 md:px-0">
          <select
            className="flex-grow md:flex-none w-full md:w-60 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent transition"
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <div className="flex flex-col gap-2 flex-grow md:flex-none w-full md:w-[320px]">
            <div className="flex justify-between text-gray-600 font-medium text-sm">
              <span>Min: {filters.minPrice}</span>
              <span>Max: {filters.maxPrice}</span>
            </div>
            <input
              type="range"
              min={Math.min(...cars.map((c) => parseFloat(c.price)))}
              max={Math.max(...cars.map((c) => parseFloat(c.price)))}
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className="w-full h-2 rounded-lg appearance-none bg-blue-200 cursor-pointer accent-blue-600"
            />
            <input
              type="range"
              min={Math.min(...cars.map((c) => parseFloat(c.price)))}
              max={Math.max(...cars.map((c) => parseFloat(c.price)))}
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="w-full h-2 rounded-lg appearance-none bg-blue-200 cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      )}

      {/* Display Cars */}
      {filteredCars.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-4 md:px-0">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className={`bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden transform transition duration-300 hover:scale-[1.03] relative ${
                selectedCar?.id === car.id ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedCar(car)}
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              {car.has_offer && (
                <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Offer
                </span>
              )}
                <span className="absolute top-3 right-10 bg-gray-200 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                <p className="text-sm text-gray-500">{car.brand}</p>

              </span>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
               
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {car.price} {car.currency}
                </p>
                {car.emi_monthly && (
                  <p className="mt-1 text-sm text-blue-600">
                    EMI: {car.emi_monthly} {car.currency}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submit Lead */}
      {selectedCar && (
        <button
          className="block mx-auto mt-10 bg-green-600 text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-green-700 transition"
          onClick={handleLeadSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "I Want This Car"}
        </button>
      )}
    </div>
  );
}
