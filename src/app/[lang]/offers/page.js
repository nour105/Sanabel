"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllOffers } from "@/lib/api";

// Countdown component
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
      {items.map((item) => (
        <div
          key={item.label}
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
  const perPage = 6;
  const [loading, setLoading] = useState(true);

  // Detect locale from URL (example: /en/ or /ar/)
  const pathname = usePathname();
  const locale = pathname.startsWith("/ar") ? "ar" : "en";

  useEffect(() => {
    async function fetchOffers() {
      setLoading(true);
      try {
        const allOffers = await getAllOffers();
        setOffers(allOffers);

        // Extract unique brands
        const uniqueBrands = [
          ...new Map(
            allOffers
              .flatMap((o) => o.brands)
              .map((b) => [b.id, b])
          ).values(),
        ];
        setBrands(uniqueBrands);

        // Min/max prices
        const prices = allOffers.flatMap(
          (o) =>
            o.cars?.map((c) =>
              parseFloat(c.price?.replace(/,/g, "")) || 0
            ) || []
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

  // Filter offers by brand
  const filteredOffers = offers.filter((offer) => {
    if (!filters.brand) return true;
    return offer.brands.some((b) => b.name[locale] === filters.brand);
  });

  // Pagination
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentOffers = filteredOffers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOffers.length / perPage);

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-black font-bold text-center mb-12">
          {locale === "ar" ? "جميع العروض" : "All Offers"}
        </h1>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-4 justify-center">
          <select
            className="border text-balck border-gray-500 rounded px-4 py-2"
            value={filters.brand}
            onChange={(e) =>
              setFilters({ ...filters, brand: e.target.value })
            }
          >
            <option value="" className="text-black">
              {locale === "ar" ? "جميع الماركات" : "All Brands"}
            </option>
            {brands.map((b) => (
              <option key={b.id} value={b.name[locale]}>
                {b.name[locale]}
              </option>
            ))}
          </select>
        </div>

        {/* Offers Grid */}
        {loading ? (
          <p className="text-center text-gray-500">
            {locale === "ar" ? "جاري تحميل العروض..." : "Loading offers..."}
          </p>
        ) : currentOffers.length === 0 ? (
          <p className="text-center text-gray-500">
            {locale === "ar" ? "لا توجد عروض" : "No offers found"}
          </p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {currentOffers.map((offer) => (
<Link
  key={offer.id}
  href={`/${locale}/offers/${offer.slug}`}
  className="group block bg-white rounded-3xl shadow-lg overflow-hidden transform transition hover:scale-[1.02]"
>
  {offer.banners?.[locale]?.length > 0 && (
    <div className="relative w-full aspect-[2/2] overflow-hidden bg-black">
      {/* Blurred Background */}
      <Image
        src={
          offer.card_image?.[locale]
            ? `https://admin.sanabelauto.com/storage/${offer.card_image[locale]}`
            : `https://admin.sanabelauto.com/storage/${offer.banners[locale][0]}`
        }
        alt=""
        fill
        className="object-cover blur-xl scale-110"
        unoptimized
      />

      {/* Main Image (FULL – no crop) */}
      <Image
        src={
          offer.card_image?.[locale]
            ? `https://admin.sanabelauto.com/storage/${offer.card_image[locale]}`
            : `https://admin.sanabelauto.com/storage/${offer.banners[locale][0]}`
        }
        alt={offer.title[locale]}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        unoptimized
      />
    </div>
  )}

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {offer.title[locale]}
                  </h2>
                  {offer.description && (
                    <p className="text-gray-700 text-sm md:text-base mb-2 line-clamp-3">
                      {offer.description[locale]}
                    </p>
                  )}

                  {/* Countdown */}
                  {offer.end_date && <Countdown endDate={offer.end_date} />}

                  {/* Brands */}
                  {offer.brands?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-2">
                      {offer.brands.map((b) => (
                        <div
                          key={b.id}
                          className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                        >
                          {b.name[locale]}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 text-right">
                    <span className="text-blue-600 font-semibold text-sm">
                      {locale === "ar" ? "عرض التفاصيل →" : "View Details →"}
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
