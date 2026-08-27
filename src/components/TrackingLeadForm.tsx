"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/config";

const kenyanCounties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Uasin Gishu", "Kiambu",
  "Machakos", "Kajiado", "Meru", "Nyeri", "Other",
];

export default function TrackingLeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    vehicleCount: "1",
    location: kenyanCounties[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const summaryMessage = `Hello Intermax Limited, I would like a tracking system.\nName: ${form.name}\nPhone: ${form.phone}\nVehicle type: ${form.vehicleType}\nNumber of vehicles: ${form.vehicleCount}\nLocation: ${form.location}\nMessage: ${form.message}`;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-emerald-700">Request received</h3>
        <p className="mt-2 text-sm text-emerald-700">
          Thanks, {form.name || "there"}. Our team will reach out shortly. You can also send us
          the details directly on WhatsApp.
        </p>
        <a
          href={whatsappLink(summaryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
        >
          Send via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        required
        name="name"
        placeholder="Full name"
        value={form.name}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      />
      <input
        required
        name="phone"
        placeholder="Phone number (e.g. 07XX XXX XXX)"
        value={form.phone}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      />
      <input
        required
        name="vehicleType"
        placeholder="Vehicle type (car, motorbike, truck...)"
        value={form.vehicleType}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      />
      <input
        type="number"
        min={1}
        name="vehicleCount"
        placeholder="Number of vehicles"
        value={form.vehicleCount}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      />
      <select
        name="location"
        value={form.location}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      >
        {kenyanCounties.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Message (optional)"
        value={form.message}
        onChange={handleChange}
        rows={3}
        className="sm:col-span-2 rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
      />
      <button
        type="submit"
        className="sm:col-span-2 rounded-full bg-[#2f8fff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f8fff]/30 transition hover:bg-[#1c78e6]"
      >
        Request Tracking System
      </button>
    </form>
  );
}
