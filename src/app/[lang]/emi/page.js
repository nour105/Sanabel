"use client";

import { useState } from "react";
import EmiForm from "./EmiForm";
import VehicleCard from "@/components/VehicleCard";

export default function EmiPage() {
  const [loading, setLoading] = useState(false);
  const [emiBudget, setEmiBudget] = useState(null);
  const [cars, setCars] = useState([]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Check Your EMI Eligibility
      </h1>

      <EmiForm
        setLoading={setLoading}
        setEmiBudget={setEmiBudget}
        setCars={setCars}
      />

      {loading && <p className="mt-6">Calculating EMI...</p>}

      {emiBudget !== null && (
        <p className="mt-6 text-lg">
          Your Estimated Monthly EMI:
          <strong className="ml-2">{emiBudget}</strong>
        </p>
      )}

      <VehicleCard cars={cars} />
    </div>
  );
}
