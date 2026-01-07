'use client';

import { useState, useEffect } from 'react';
import { getFindUs } from '@/lib/api';
import Banner from '@/components/Banner';

export default function FindUsPage() {
  const [page, setPage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    getFindUs()
      .then((data) => setPage(data))
      .catch(() => setPage(null));
  }, []);

  const isSaudiPhone = (phone) => /^(05\d{8}|\+9665\d{8})$/.test(phone);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isSaudiPhone(form.phone)) {
      setError('Please enter a valid Saudi phone number (05XXXXXXXX)');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'https://sanabelauto.com/api/v1/callback-requests',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error('Failed to send request');

      setSuccess('Your request has been sent! We will contact you soon.');
      setForm({ name: '', phone: '', reason: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ===== DYNAMIC BANNER ===== */}
      {page?.banners && page.banners.length > 0 && (
        <section>
          <Banner banners={page.banners} />
        </section>
      )}

      {/* ===== PAGE TITLE & DESCRIPTION ===== */}
      <section className="container mx-auto py-16 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl text-black  font-bold text-center mb-6">Find Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below and our team will get back to you shortly.
        </p>

        {/* ===== CONTACT FORM ===== */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone (Saudi)
              </label>
              <input
                type="text"
                required
                placeholder="05XXXXXXXX"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Contact
              </label>
              <select
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
              >
                <option value="">Select Reason</option>
                <option value="price">Price Inquiry</option>
                <option value="test_drive">Book Test Drive</option>
                <option value="finance">Finance Options</option>
                <option value="availability">Car Availability</option>
                <option value="suggestion">Suggestion</option>
                <option value="make_a_complaint">Make a Complaint</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message (optional)"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 text-green-600 text-sm px-4 py-2 rounded-lg">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* ===== MAP ===== */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">Our Location</h2>
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456!2d46.711111!3d24.713555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02fbb8ab1111%3A0x123456789abcdef!2sSanabel%20Auto!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </section>
    </div>
  );
}
