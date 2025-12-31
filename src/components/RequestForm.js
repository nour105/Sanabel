'use client';

import { useState } from 'react';
import { trackCTA } from '@/lib/ctaTrack';


export default function RequestForm({ car }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    reason: '',
  });

  const isSaudiPhone = (phone) => {
    return /^(05\d{8}|\+9665\d{8})$/.test(phone);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isSaudiPhone(form.phone)) {
      setError('Please enter a valid Saudi phone number (05XXXXXXXX)');
      return;
    }

    setLoading(true);

    try {
      await fetch('https://sanabelauto.com/api/v1/callback-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setForm({ name: '', phone: '', reason: '' });
      setOpen(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== Trigger Button ===== */}
<button
  onClick={() => {
    setOpen(true);
    trackCTA({ cta: 'request_form', car });
  }}
  className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold cursor-pointer"
>
        Request a Callback
      </button>

      {/* ===== Overlay ===== */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          {/* ===== Modal ===== */}
          <div className="bg-white rounded-3xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">
              Request a Callback
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Leave your details and our team will call you shortly
            </p>

            {/* Form */}
            <form onSubmit={submit} className="space-y-4">
              <input
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                required
                placeholder="Saudi Phone (05XXXXXXXX)"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <select
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.reason}
                onChange={(e) =>
                  setForm({ ...form, reason: e.target.value })
                }
              >
                <option value="">Reason for Call</option>
                <option value="price">Price Inquiry</option>
                <option value="test_drive">Book Test Drive</option>
                <option value="finance">Finance Options</option>
                <option value="availability">Car Availability</option>
                <option value="suggestion">Suggestion </option>
                <option value="make_a_complaint">Make a Complaint</option>

              </select>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <button
                disabled={loading}
                type="submit"
                onClick={() =>
        trackCTA({ cta: 'request_form', car })
      }
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
