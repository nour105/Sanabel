'use client';
import { useState, useEffect } from 'react';
import Filters from './Filters';
import Link from 'next/link';

export default function ProductListing({ brands = [], cars = [] }) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [visibleCars, setVisibleCars] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6; // Cars per page

  // Ensure cars array is valid
  const safeCars = Array.isArray(cars) ? cars : [];

  useEffect(() => {
    setFilteredCars(safeCars);
    setPage(1);
    setVisibleCars(safeCars.slice(0, perPage));
  }, [safeCars]);

  const handleFilterChange = (filtered) => {
    const newFiltered = filtered || [];
    setFilteredCars(newFiltered);
    setPage(1);
    setVisibleCars(newFiltered.slice(0, perPage));
  };

  const loadMore = () => {
    const nextPage = page + 1;
    const newVisible = filteredCars.slice(0, nextPage * perPage);
    setVisibleCars(newVisible);
    setPage(nextPage);
  };

  if (!safeCars.length) {
    return <p className="text-center mt-10 text-gray-500">No cars available</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <Filters brands={brands} cars={safeCars} onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
        {visibleCars.map(car => (
          <Link key={car.id} href={`/cars/${car.slug}`}>
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              {/* Image */}
              <div className="relative h-62 overflow-hidden">
                <img
                  src={`${car.card_image}`}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {car.has_offer && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Offer
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-gray-900 shadow backdrop-blur">
                  {car.price} {car.currency || 'SAR'}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                  {car.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{car.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-400">EMI available</span>
                  <button className="cursor-pointer relative overflow-hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
                    View Details
                  </button>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCars.length < filteredCars.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="rounded-full bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
