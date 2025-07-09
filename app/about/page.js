import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <main className="bg-gradient-to-br from-teal-100 via-blue-50 to-white min-h-screen flex justify-center items-start pt-20 animate-fadein">
      <div className="max-w-2xl w-full bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col gap-8 border border-teal-100 backdrop-blur-lg">
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-2 bg-white">
            <Image
              src="/trans_bg.png"
              alt="LinkForge Logo"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-extrabold text-teal-700 text-center">About LinkForge</h1>
        </div>
        <p className="text-lg text-gray-700">
          <b>LinkForge</b> is your trusted, privacy-first URL shortener. Our mission is to provide the most straightforward and user-friendly way to shorten your links—without tracking you or requiring any login or personal details.
        </p>
        <section className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-600">Why LinkForge?</h2>
          <ul className="list-disc list-inside text-base pl-2 text-gray-700">
            <li>No login or registration required—just paste your link and go!</li>
            <li>We never track your activity or collect unnecessary data.</li>
            <li>Custom short URLs: choose your own shortlink text.</li>
            <li>Fast, reliable, and easy to use for everyone.</li>
          </ul>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-600">Our Commitment to Privacy</h2>
          <p className="text-gray-700">
            Unlike most URL shorteners, LinkForge does not track your clicks, store analytics, or ask for your personal information. We believe in a simple, private, and secure web experience for all users.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-blue-600">Get Started</h2>
          <p className="text-gray-700">
            Try LinkForge now by heading to the <a href="/shorten" className="text-blue-700 underline font-medium">Shorten</a> page.
          </p>
          <div className="flex justify-center items-center mt-2">
            <a
              href="https://github.com/abhishekchauhan01x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline font-medium inline-flex items-center gap-1"
            >
              <Image src="/github.svg" alt="GitHub" width={18} height={18} className="inline-block" />
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
} 