'use client';
import { useState, useEffect, useMemo } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function Filters({ brands, cars, onFilterChange }) {
  const prices = cars.length ? cars.map(c => Number(c.price) || 0) : [0];
  let minCarPrice = Math.min(...prices);
  let maxCarPrice = Math.max(...prices);
  if (minCarPrice >= maxCarPrice) maxCarPrice = minCarPrice + 1;

  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    priceRange: [minCarPrice, maxCarPrice],
    model: '',
    colors: [],
    features: [],
    trims: [],
    specifications: []
  });

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

  useEffect(() => {
    const filtered = cars.filter(c => {
      const price = Number(c.price) || 0;
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
    <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-wrap gap-6 items-start">

   

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
        <p className="text-xs text-gray-500">{minPrice} – {maxPrice}</p>
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
                  colors: ['#6366F1', '#E5E7EB'],
                  min: minCarPrice,
                  max: maxCarPrice
                })
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

      {/* Tags */}
      <div className="w-full flex flex-col gap-4">
        {renderTagCheckboxes('Colors', 'colors', colorsOptions)}
        {renderTagCheckboxes('Features', 'features', featuresOptions)}
        {renderTagCheckboxes('Trims', 'trims', trimsOptions)}
        {renderTagCheckboxes('Specifications', 'specifications', specificationsOptions)}
      </div>
    </div>
  );
}
