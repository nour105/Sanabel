'use client';

import { useState, useEffect, useMemo } from 'react';
import { Range, getTrackBackground } from 'react-range';
import Image from 'next/image';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';

export default function Filters({ brands, cars, onFilterChange, lang }) {
  /* ================= PRICE ================= */
  const prices = useMemo(
    () => cars.map(c => Number(c.price?.replace(/,/g, '')) || 0),
    [cars]
  );

  let minCarPrice = prices.length ? Math.min(...prices) : 0;
  let maxCarPrice = prices.length ? Math.max(...prices) : 1;
  if (minCarPrice >= maxCarPrice) maxCarPrice = minCarPrice + 1;

  /* ================= STATE ================= */
  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    model: '',
    priceRange: [minCarPrice, maxCarPrice],
    colors: [],
    features: [],
    trims: [],
    vehicleTypes: [],
    showrooms: [],
    specifications: [],
  });

  /* ================= RESET PRICE ================= */
  useEffect(() => {
    setSelectedFilters(prev => ({
      ...prev,
      priceRange: [minCarPrice, maxCarPrice],
    }));
  }, [minCarPrice, maxCarPrice]);

  /* ================= OPTIONS ================= */
  const getTranslated = (obj, key) =>
    typeof obj === 'object' ? obj?.[lang] || obj?.en : obj;

  const colorsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.colors?.map(x => getTranslated(x.color_name)) || []))],
    [cars, lang]
  );

  const featuresOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.features?.map(x => getTranslated(x.feature_name)) || []))],
    [cars, lang]
  );

  const trimsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.available_trims?.map(x => getTranslated(x.trim_name)) || []))],
    [cars, lang]
  );

  const showroomsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.available_showrooms?.map(x => getTranslated(x.showroom_name)) || []))],
    [cars, lang]
  );

  const vehicleTypesOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.vehicle_types?.map(x => getTranslated(x.type_name)) || []))],
    [cars, lang]
  );

  const specificationsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.specifications?.map(x => getTranslated(x.key)) || []))],
    [cars, lang]
  );

  /* ================= FILTERING ================= */
  useEffect(() => {
    const filtered = cars.filter(c => {
      const price = Number(c.price?.replace(/,/g, '')) || 0;
      const brand = getTranslated(c.brand?.name);
      const name = getTranslated(c.name);

      return (
        price >= selectedFilters.priceRange[0] &&
        price <= selectedFilters.priceRange[1] &&
        (!selectedFilters.brand || brand === selectedFilters.brand) &&
        (!selectedFilters.model || name?.toLowerCase().includes(selectedFilters.model.toLowerCase())) &&
        (!selectedFilters.colors.length ||
          c.colors?.some(x => selectedFilters.colors.includes(getTranslated(x.color_name)))) &&
        (!selectedFilters.features.length ||
          c.features?.some(x => selectedFilters.features.includes(getTranslated(x.feature_name)))) &&
        (!selectedFilters.trims.length ||
          c.available_trims?.some(x => selectedFilters.trims.includes(getTranslated(x.trim_name)))) &&
        (!selectedFilters.showrooms.length ||
          c.available_showrooms?.some(x => selectedFilters.showrooms.includes(getTranslated(x.showroom_name)))) &&
        (!selectedFilters.vehicleTypes.length ||
          c.vehicle_types?.some(x => selectedFilters.vehicleTypes.includes(getTranslated(x.type_name)))) &&
        (!selectedFilters.specifications.length ||
          c.specifications?.some(x => selectedFilters.specifications.includes(getTranslated(x.key))))
      );
    });

    onFilterChange(filtered);
  }, [selectedFilters, cars, lang, onFilterChange]);

  /* ================= HANDLERS ================= */
  const handleInputChange = e =>
    setSelectedFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleCheckboxChange = (type, value) =>
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value],
    }));

  const handlePriceChange = values =>
    setSelectedFilters(prev => ({ ...prev, priceRange: values }));

  const [minPrice, maxPrice] = selectedFilters.priceRange;

  /* ================= UI ================= */
  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`bg-white p-6 rounded-3xl shadow-lg ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <div className="flex flex-wrap items-end gap-4">

        {/* BRAND */}
        <div className="w-full md:w-[220px]">
          <label className="block mb-1 font-semibold text-gray-700">
            {lang === 'ar' ? 'العلامة التجارية' : 'Brand'}
          </label>
          <select
            name="brand"
            value={selectedFilters.brand}
            onChange={handleInputChange}
            className="w-full border rounded-xl px-3 py-2 text-sm"
          >
            <option value="">
              {lang === 'ar' ? 'جميع العلامات التجارية' : 'All Brands'}
            </option>
            {brands.map(b => {
              const name = getTranslated(b.name);
              return (
                <option key={b.id || name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>

        {/* MODEL */}
        <div className="w-full md:w-[220px]">
          <label className="block mb-1 font-semibold text-gray-700">
            {lang === 'ar' ? 'موديل السيارة' : 'Cars Model'}
          </label>
          <input
            type="text"
            name="model"
            value={selectedFilters.model}
            onChange={handleInputChange}
            className="w-full border rounded-xl px-3 py-2 text-sm"
          />
        </div>

        {/* PRICE */}
        <div className="w-full md:w-[320px]">
          <label className="block mb-2 font-semibold text-gray-700">
            {lang === 'ar' ? 'نطاق السعر' : 'Price Range'}
          </label>

          <div className="flex justify-center items-center gap-2 text-xs text-gray-500 mb-2">
            <span>
              {minPrice.toLocaleString()} – {maxPrice.toLocaleString()}
            </span>
            <Image src={SAR_symbol} alt="SAR" width={16} height={16} />
          </div>

          <div dir="ltr">
            <Range
              values={selectedFilters.priceRange}
              step={100}
              min={minCarPrice}
              max={maxCarPrice}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1.5 rounded-full"
                  style={{
                    background: getTrackBackground({
                      values: selectedFilters.priceRange,
                      colors: ['#6366F1', '#E5E7EB', '#6366F1'],
                      min: minCarPrice,
                      max: maxCarPrice,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, index }) => {
                const { key, ...rest } = props;
                return (
                  <div
                    key={key ?? index}
                    {...rest}
                    className="h-4 w-4 bg-indigo-600 rounded-full shadow"
                  />
                );
              }}
            />
          </div>
        </div>

        {/* TAG FILTERS */}
        {[
          { title: lang === 'ar' ? 'الألوان' : 'Colors', type: 'colors', options: colorsOptions },
          { title: lang === 'ar' ? 'المزايا' : 'Features', type: 'features', options: featuresOptions },
          { title: lang === 'ar' ? 'الفئات' : 'Trims', type: 'trims', options: trimsOptions },
          { title: lang === 'ar' ? 'المعارض' : 'Showrooms', type: 'showrooms', options: showroomsOptions },
          { title: lang === 'ar' ? 'نوع المركبة' : 'Vehicle Types', type: 'vehicleTypes', options: vehicleTypesOptions },
          { title: lang === 'ar' ? 'المواصفات' : 'Specifications', type: 'specifications', options: specificationsOptions },
        ].map(({ title, type, options }) => (
          <div key={type} className="relative w-full md:w-[220px] flex-shrink-0">
            <button
              type="button"
              dir="ltr"
              onClick={() =>
                setSelectedFilters(prev => ({
                  ...prev,
                  [`${type}Open`]: !prev[`${type}Open`],
                }))
              }
              className="w-full border rounded-xl px-3 py-2 text-sm
                         flex justify-between items-center bg-white text-gray-700"
            >
              <span>{title}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  selectedFilters[`${type}Open`] ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {selectedFilters[`${type}Open`] && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {options.map(opt => (
                  <label key={opt} className="flex items-center gap-2 px-3 py-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters[type].includes(opt)}
                      onChange={() => handleCheckboxChange(type, opt)}
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
