"use client";

import { whyChooseUs } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-20 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-label">Keunggulan</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mt-4 mb-6">
              KENAPA MEMILIH CV ARTHA NABILA?
            </h2>
            <div className="w-16 h-1 bg-yellow mb-6" />
            <p className="text-concrete text-base lg:text-lg leading-relaxed">
              Komunikasi langsung melalui WhatsApp, informasi kebutuhan alat
              yang lebih mudah dan cepat, serta pendekatan layanan yang fleksibel
              sesuai kebutuhan proyek Anda.
            </p>
          </div>

          {/* Right - Items */}
          <div className="space-y-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.number}
                className="group flex gap-6 lg:gap-8 p-6 lg:p-8 bg-white border border-charcoal/5 hover:border-yellow/30 transition-all"
              >
                <span className="text-4xl lg:text-5xl font-bold text-yellow/30 group-hover:text-yellow/60 transition-colors shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-concrete text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
