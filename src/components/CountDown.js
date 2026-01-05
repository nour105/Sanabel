'use client';
import { useState, useEffect } from "react";

export default function Countdown({ endDate, lang = 'en' }) {
  const [timeLeft, setTimeLeft] = useState(null);

  const calculateTimeLeft = () => {
    const diff = new Date(endDate) - new Date();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // initialize after mount
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (!timeLeft) 
    return (
      <div className="text-red-600 font-bold mt-2">
        {lang === 'ar' ? 'انتهت فترة العرض' : 'Offer Expired'}
      </div>
    );

  const labels = {
    en: ["Days", "Hours", "Minutes", "Seconds"],
    ar: ["أيام", "ساعات", "دقائق", "ثواني"]
  };

  const items = [
    { label: labels[lang][0], value: timeLeft.days },
    { label: labels[lang][1], value: timeLeft.hours },
    { label: labels[lang][2], value: timeLeft.minutes },
    { label: labels[lang][3], value: timeLeft.seconds },
  ];

  return (
    <div className={`mt-4 flex gap-2 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
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
