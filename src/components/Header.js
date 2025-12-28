'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [brands, setBrands] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/brands')
      .then(res => res.json())
      .then(data => setBrands(data.data || []));
  }, []);

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900">
          MultiBrand
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 md:space-x-10 relative">
          
          {/* Brands Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center font-semibold text-gray-700 hover:text-gray-900 transition-colors">
              Brands
              <span className="ml-1 text-sm">&#x25BE;</span> {/* small down arrow */}
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg transition-all duration-200
                             ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="p-3 flex flex-col gap-1">
                {brands.length > 0 ? (
                  brands.map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/brands/${brand.slug}`}
                      className="flex items-center px-3 py-2 rounded hover:bg-gray-100 hover:shadow-sm transition-all"
                    >
                      {brand.logo && (
                        <img
                          src={`http://127.0.0.1:8000/storage/${brand.logo}`}
                          alt={brand.name}
                          className="w-8 h-8 mr-3 object-contain"
                        />
                      )}
                      <span className="text-gray-700 font-medium hover:text-gray-900">
                        {brand.name}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 px-3 py-2">No brands found</p>
                )}
              </div>
            </div>
          </div>

          {/* Other Links */}
          <Link href="/offers" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Offers
          </Link>
           <Link href="/cars" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Cars
          </Link>
          <Link href="/find-us" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Find Us
          </Link>
          <Link href="/about-us" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
