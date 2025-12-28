"use client";
import { useState, useEffect } from "react";

export default function CallButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile only on client
    setIsMobile(/Android|iPhone/i.test(navigator.userAgent));
  }, []);

  const phoneNumber = "800 123 4567";

  if (isMobile) {
    return (
      <a
        href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
      >
        Call Now
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowPopup(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
      >
        Call Now
      </button>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl transition"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 text-center">Call Us</h2>
            <p className="text-gray-600 mb-6 text-center">You can reach us at:</p>
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="block text-lg font-semibold text-blue-600 hover:underline text-center"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
