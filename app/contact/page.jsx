"use client";

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mt-4">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-blue-500">
              Connect
            </span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Silakan hubungi saya untuk kolaborasi, proyek, atau konsultasi
            digital & business strategy.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 shadow-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full px-5 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaEnvelope className="text-blue-400 text-2xl" />
                <span className="text-gray-300 font-medium">
                  wawa@example.com
                </span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <FaPhone className="text-blue-400 text-2xl" />
                <span className="text-gray-300 font-medium">
                  +62 812-3456-7890
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <span className="text-gray-300 font-medium">
                  Jakarta, Indonesia
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl text-center text-gray-400">
              <p>
                Feel free to reach out anytime — I&apos;m open for opportunities
                & collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
