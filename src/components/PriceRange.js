'use client';
import { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';

export default function PriceRange({ min = 500, max = 10200, onChange }) {
  const [values, setValues] = useState([min, max]);

  useEffect(() => {
    if (onChange) onChange(values);
  }, [values, onChange]);

  const average = Math.round((values[0] + values[1]) / 2);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md mx-auto flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold text-indigo-600">Price Range</h3>
        <p className="text-gray-500 mt-1">${values[0]} - ${values[1]}</p>
        <p className="text-gray-400 text-sm">Average price: ${average}</p>
      </div>

      <Range
        values={values}
        step={100}
        min={min}
        max={max}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full rounded-full"
            style={{
              ...props.style,
              background: getTrackBackground({
                values,
                colors: ['#6366F1', '#E5E7EB'],
                min,
                max
              })
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 rounded-full bg-indigo-600 shadow-lg cursor-pointer"
          />
        )}
      />
    </div>
  );
}
