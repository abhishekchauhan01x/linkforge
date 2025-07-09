"use client"
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-gradient-to-br from-teal-100 via-blue-50 to-white min-h-screen flex justify-center items-start pt-20 animate-fadein">
      <div className="max-w-xl w-full bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col gap-8 border border-teal-100 backdrop-blur-lg">
        <h1 className="text-4xl font-extrabold text-teal-700 text-center mb-2">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-4">Have questions, feedback, or need support? Fill out the form below and we'll get back to you soon!</p>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-blue-700">Name</label>
            <input id="name" name="name" type="text" required className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-teal-600 shadow-sm text-lg" placeholder="Your Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-blue-700">Email</label>
            <input id="email" name="email" type="email" required className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-teal-600 shadow-sm text-lg" placeholder="you@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-blue-700">Message</label>
            <textarea id="message" name="message" required rows={4} className="px-4 py-3 rounded-xl border border-blue-200 bg-white focus:outline-teal-600 shadow-sm text-lg resize-none" placeholder="How can we help you?" />
          </div>
          <button type="submit" className="bg-gradient-to-r from-teal-500 to-blue-400 hover:from-teal-600 hover:to-blue-500 shadow-lg rounded-xl px-8 py-3 font-bold text-white text-lg transition-all duration-200 mt-2 cursor-pointer">Send Message</button>
        </form>
        {submitted && (
          <div className="text-center text-lg font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-xl py-3 px-4 shadow animate-fadein mt-2">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}
      </div>
    </main>
  );
} 