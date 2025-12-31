"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllOffers } from "@/lib/api";

function Countdown({ endDate }) {
  const calculateTimeLeft = () => {
    const diff = new Date(endDate) - new Date();
    if (diff <= 0) return {};
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (Object.keys(timeLeft).length === 0)
    return <div className="text-red-600 font-bold mt-2">Offer Expired</div>;

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-4 flex gap-2">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-blue-600 text-white px-3 py-2 rounded-lg shadow-md min-w-[55px]"
        >
          <span className="font-bold text-lg flip">{item.value}</span>
          <span className="text-xs uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function OffersPage() {
  const [offers, setOffers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      setLoading(true);
      try {
        const allOffers = await getAllOffers();
        setOffers(allOffers);

        const uniqueBrands = [
          ...new Set(allOffers.flatMap((o) => o.brands.map((b) => b.name))),
        ];
        setBrands(uniqueBrands);

        const prices = allOffers.flatMap(
          (o) => o.cars?.map((c) => parseFloat(c.price)) || []
        );
        if (prices.length > 0) {
          setFilters((f) => ({
            ...f,
            minPrice: Math.min(...prices),
            maxPrice: Math.max(...prices),
          }));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchOffers();
  }, []);

  const filteredOffers = offers.filter((offer) => {
    let matches = true;
    if (filters.brand) {
      matches = matches && offer.brands.some((b) => b.name === filters.brand);
    }
    return matches;
  });

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentOffers = filteredOffers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOffers.length / perPage);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          All Offers
        </h1>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-4 justify-center">
          <select
            className="border border-gray-300 rounded px-4 py-2"
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Offers Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading offers...</p>
        ) : currentOffers.length === 0 ? (
          <p className="text-center text-gray-500">No offers found</p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {currentOffers.map((offer) => (
              <Link
                key={offer.id}
                href={`/offers/${offer.slug}`}
                className="group block bg-white rounded-3xl shadow-lg overflow-hidden transform transition hover:scale-[1.02]"
              >
                {offer.banners?.length > 0 && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={
                        offer.card_image
                          ? `https://sanabelauto.com/storage/${offer.card_image}`
                          : `https://sanabelauto.com/storage/${offer.banners[0]}`
                      }
                      alt={offer.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {offer.title}
                  </h2>
                  {offer.description && (
                    <p className="text-gray-700 text-sm md:text-base mb-2 line-clamp-3">
                      {offer.description}
                    </p>
                  )}

                  {/* Countdown */}
                  {offer.end_date && <Countdown endDate={offer.end_date} />}

                  {offer.brands?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-2">
                      {offer.brands.map((b, i) => (
                        <div
                          key={i}
                          className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                        >
                          {b.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 text-right">
                    <span className="text-blue-600 font-semibold text-sm">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
