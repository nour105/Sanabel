'use client';
import { useState, useEffect } from "react";

export default function Countdown({ endDate }) {
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

  if (!timeLeft) return <div className="text-red-600 font-bold mt-2">Offer Expired</div>;

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-4 flex gap-2">
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
