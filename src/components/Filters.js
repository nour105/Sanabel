'use client';
import { useState, useEffect, useMemo } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function Filters({ brands, cars, onFilterChange }) {
  // ===== Price bounds =====
  const prices = useMemo(
    () => cars.map(c => Number(c.price?.replace(/,/g, '')) || 0),
    [cars]
  );

  let minCarPrice = prices.length ? Math.min(...prices) : 0;
  let maxCarPrice = prices.length ? Math.max(...prices) : 1;

  if (minCarPrice >= maxCarPrice) {
    maxCarPrice = minCarPrice + 1;
  }

  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    priceRange: [minCarPrice, maxCarPrice],
    model: '',
    colors: [],
    features: [],
    trims: [],
    specifications: []
  });

  // ===== Reset price range if cars change =====
  useEffect(() => {
    setSelectedFilters(prev => ({
      ...prev,
      priceRange: [minCarPrice, maxCarPrice]
    }));
  }, [minCarPrice, maxCarPrice]);

  // ===== Options for tags =====
  const colorsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.colors?.map(x => x.color_name) || []))],
    [cars]
  );

  const featuresOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.features?.map(x => x.feature_name) || []))],
    [cars]
  );

  const trimsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.available_trims?.map(x => x.trim_name) || []))],
    [cars]
  );

  const specificationsOptions = useMemo(
    () => [...new Set(cars.flatMap(c => c.specifications?.map(x => x.key) || []))],
    [cars]
  );

  // ===== Filtering =====
  useEffect(() => {
    const filtered = cars.filter(c => {
      const price = Number(c.price?.replace(/,/g, '')) || 0;
      return (
        price >= selectedFilters.priceRange[0] &&
        price <= selectedFilters.priceRange[1] &&
        (selectedFilters.brand ? c.brand === selectedFilters.brand : true) &&
        (selectedFilters.model
          ? c.name.toLowerCase().includes(selectedFilters.model.toLowerCase())
          : true) &&
        (selectedFilters.colors.length
          ? c.colors?.some(x => selectedFilters.colors.includes(x.color_name))
          : true) &&
        (selectedFilters.features.length
          ? c.features?.some(x => selectedFilters.features.includes(x.feature_name))
          : true) &&
        (selectedFilters.trims.length
          ? c.available_trims?.some(x => selectedFilters.trims.includes(x.trim_name))
          : true) &&
        (selectedFilters.specifications.length
          ? c.specifications?.some(x => selectedFilters.specifications.includes(x.key))
          : true)
      );
    });

    onFilterChange(filtered);
  }, [selectedFilters, cars, onFilterChange]);

  // ===== Handlers =====
  const handleCheckboxChange = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSelectedFilters(prev => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = values => {
    setSelectedFilters(prev => ({ ...prev, priceRange: values }));
  };

  const renderTagCheckboxes = (title, type, options) =>
    options.length > 0 && (
      <div className="space-y-2">
        <p className="font-semibold text-gray-700">{title}</p>
        <div className="flex flex-wrap gap-2">
          {options.map(opt => (
            <label
              key={opt}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer border transition
                ${selectedFilters[type].includes(opt)
                  ? 'bg-indigo-100 border-indigo-400 text-indigo-700'
                  : 'bg-gray-100 border-transparent text-gray-600 hover:bg-gray-200'}`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selectedFilters[type].includes(opt)}
                onChange={() => handleCheckboxChange(type, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );

  const [minPrice, maxPrice] = selectedFilters.priceRange;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg flex gap-6 items-start">
      {/* Brand */}
      <div className="w-full md:w-[200px] space-y-1">
        <label className="font-semibold text-gray-700">Brand</label>
        <select
          name="brand"
          value={selectedFilters.brand}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
        >
          <option value="">All Brands</option>
          {brands.map(b => (
            <option key={b.id || b.name} value={b.name}>{b.name}</option>
          ))}
        </select>
      </div>

      {/* Model */}
      <div className="w-full md:w-[220px]">
        <h3 className="font-semibold text-gray-700">Cars Model</h3>
        <input
          type="text"
          name="model"
          placeholder="Search model..."
          value={selectedFilters.model}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm"
        />
      </div>

      {/* Price */}
      <div className="w-full md:w-[280px] space-y-2">
        <h3 className="font-semibold text-gray-700">Price Range</h3>
        <p className="text-xs text-gray-500">{minPrice.toLocaleString()} – {maxPrice.toLocaleString()}</p>
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
          max: maxCarPrice
        })
      }}
    >
      {children}
    </div>
  )}
  renderThumb={({ props, index }) => {
    // Extract key from props and apply it directly
    const { key, ...restProps } = props;
    return (
      <div
        key={key ?? index}  // key applied directly
        {...restProps}      // rest of the props spread normally
        className="h-4 w-4 bg-indigo-600 rounded-full shadow"
      />
    );
  }}
/>

      </div>
      {/* Tags as dropdown multi-selects */}
<div className="w-full flex gap-4 flex-wrap">
  {[
    { title: 'Colors', type: 'colors', options: colorsOptions },
    { title: 'Features', type: 'features', options: featuresOptions },
    { title: 'Trims', type: 'trims', options: trimsOptions },
    { title: 'Specifications', type: 'specifications', options: specificationsOptions },
  ].map(({ title, type, options }) => (
    <div key={type} className="relative w-full md:w-[250px]">
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => {
          setSelectedFilters(prev => {
            const newState = {
              ...prev,
              colorsOpen: false,
              featuresOpen: false,
              trimsOpen: false,
              specificationsOpen: false,
            };
            newState[`${type}Open`] = !prev[`${type}Open`];
            return newState;
          });
        }}
        className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm flex justify-between items-center bg-white"
      >
        <span>{title}</span>
        <div className="flex items-center gap-2">
          {selectedFilters[type].length > 0 && (
            <span>({selectedFilters[type].length})</span>
          )}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              selectedFilters[`${type}Open`] ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown */}
      {selectedFilters[`${type}Open`] && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
          {/* Clear Button */}
          {selectedFilters[type].length > 0 && (
            <div className="px-3 py-2 border-b border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setSelectedFilters(prev => ({
                    ...prev,
                    [type]: [], // clear this filter
                  }))
                }
                className="text-xs text-red-500 hover:underline"
              >
                Clear
              </button>
              
            </div>
          )}
          <button
          type="button"
          onClick={() =>
            setSelectedFilters(prev => ({
              ...prev,
              [`${type}Open`]: false, // just close dropdown
            }))
          }
          className="text-xs text-gray-500 hover:underline"
        >
          Close
        </button>

          {/* Options */}
          {options.map(opt => (
            <label
              key={opt}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="form-checkbox"
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
