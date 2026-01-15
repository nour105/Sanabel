'use client';

import { useState, useEffect, useMemo } from 'react';
import { Range, getTrackBackground } from 'react-range';
import Image from 'next/image';
import SAR_symbol from '@/publicImage/Saudi_Riyal_Symbol.svg.png';

/* ================= SMART HELPERS ================= */

const normalizeText = (val, lang = 'en') => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') return val[lang] || val.en || '';
  return '';
};

const getPriceNumber = (price) => {
  if (!price) return 0;
  return Number(price.toString().replace(/,/g, '')) || 0;
};

const getBrandName = (car, lang) => {
  if (car.brand && typeof car.brand === 'object') {
    return normalizeText(car.brand.name, lang);
  }
  if (typeof car.brand === 'string') {
    return car.brand;
  }
  if (car.brand_name) {
    return normalizeText(car.brand_name, lang);
  }
  return '';
};

const getCarName = (car, lang) => {
  return normalizeText(car.name, lang);
};

const getArrayText = (arr, key, lang) => {
  if (!Array.isArray(arr)) return [];
  return arr
    .map(item => normalizeText(item[key], lang))
    .filter(Boolean);
};

/* ================= COMPONENT ================= */

export default function Filters({ brands = [], cars = [], onFilterChange, lang }) {
  /* ================= PRICE ================= */

  const prices = useMemo(
    () => cars.map(c => getPriceNumber(c.price)),
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
    safety: [],
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

  const colorsOptions = useMemo(
    () => [...new Set(
      cars.flatMap(c => getArrayText(c.colors, 'color_name', lang))
    )],
    [cars, lang]
  );

  const featuresOptions = useMemo(
    () => [...new Set(
      cars.flatMap(c => getArrayText(c.features, 'feature_name', lang))
    )],
    [cars, lang]
  );

  const trimsOptions = useMemo(
    () => [...new Set(
      cars.flatMap(c => getArrayText(c.safety, 'safety', lang))
    )],
    [cars, lang]
  );

  const showroomsOptions = useMemo(
    () => [...new Set(
      cars.flatMap(c => getArrayText(c.available_showrooms, 'showroom_name', lang))
    )],
    [cars, lang]
  );

  const vehicleTypesOptions = useMemo(
    () => [...new Set(
      cars.flatMap(c => getArrayText(c.vehicle_types, 'type_name', lang))
    )],
    [cars, lang]
  );

  const specificationsOptions = useMemo(
    () => [...new Set(
      cars.flatMap(c => getArrayText(c.specifications, 'key', lang))
    )],
    [cars, lang]
  );

  /* ================= FILTERING ================= */

  useEffect(() => {
    const filtered = cars.filter(c => {
      const price = getPriceNumber(c.price);
      const brand = getBrandName(c, lang);
      const name = getCarName(c, lang);

      return (
        price >= selectedFilters.priceRange[0] &&
        price <= selectedFilters.priceRange[1] &&
        (!selectedFilters.brand || brand === selectedFilters.brand) &&
        (!selectedFilters.model ||
          name.toLowerCase().includes(selectedFilters.model.toLowerCase())) &&
        (!selectedFilters.colors.length ||
          c.colors?.some(x =>
            selectedFilters.colors.includes(normalizeText(x.color_name, lang))
          )) &&
        (!selectedFilters.features.length ||
          c.features?.some(x =>
            selectedFilters.features.includes(normalizeText(x.feature_name, lang))
          )) &&
        // (!selectedFilters.safety.length ||
        //   c.safety?.some(x =>
        //     selectedFilters.safety.includes(normalizeText(x.trim_name, lang))
        //   )) &&
        (!selectedFilters.showrooms.length ||
          c.available_showrooms?.some(x =>
            selectedFilters.showrooms.includes(normalizeText(x.showroom_name, lang))
          )) &&
        (!selectedFilters.vehicleTypes.length ||
          c.vehicle_types?.some(x =>
            selectedFilters.vehicleTypes.includes(normalizeText(x.type_name, lang))
          )) &&
        (!selectedFilters.specifications.length ||
          c.specifications?.some(x =>
            selectedFilters.specifications.includes(normalizeText(x.key, lang))
          ))
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
            className="w-full border text-black rounded-xl px-3 py-2 text-sm"
          >
            <option value="">
              {lang === 'ar' ? 'جميع العلامات التجارية' : 'All Brands'}
            </option>
            {brands.map(b => {
              const name = normalizeText(b.name || b, lang);
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
            {lang === 'ar' ? 'موديل السيارة' : 'Car Model'}
          </label>
          <input
            type="text"
            name="model"
            placeholder={lang === 'ar' ? ' ابحث عن موديل السيارة (اختياري)' : ' Search Car Model (Optional)'}
            value={selectedFilters.model}
            onChange={handleInputChange}
            className="w-full border rounded-xl text-black px-3 py-2 text-sm"
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
          // { title: lang === 'ar' ? 'الفئات' : 'Safety', type: 'Safety', options: trimsOptions },
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
                className={`w-4 h-4 text-gray-700 transition-transform ${
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
              <div className="absolute top-full left-0 right-0 mt-1 text-gray-700 bg-white border rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {options.map(opt => (
                  <label key={opt} className="flex items-center  text-gray-700 gap-2 px-3 py-2">
                    <input
                      type="checkbox"
                      value={opt}
                      className='text-gray-700'
                      checked={selectedFilters[type].includes(opt)}
                      onChange={() => handleCheckboxChange(type, opt)}
                    />
                    <span className="text-sm text-gray-700">{opt}</span>
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
