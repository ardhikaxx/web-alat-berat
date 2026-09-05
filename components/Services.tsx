"use client";

import { services } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/constants";

export default function Services() {
  return (
    <section id="layanan" className="py-20 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">Layanan</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mt-4 mb-6">
            LAYANAN ALAT BERAT UNTUK BERBAGAI KEBUTUHAN PROYEK
          </h2>
          <div className="w-16 h-1 bg-yellow" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-light p-8 lg:p-10 group hover:bg-white transition-colors"
            >
              <span className="text-yellow text-5xl lg:text-6xl font-bold opacity-30 group-hover:opacity-60 transition-opacity">
                {service.number}
              </span>
              <h3 className="text-xl font-bold text-charcoal mt-4 mb-3">
                {service.title}
              </h3>
              <p className="text-concrete text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href={getWhatsAppUrl(
                  `Halo CV Artha Nabila, saya ingin menanyakan tentang ${service.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-yellow transition-colors"
              >
                Tanya via WhatsApp
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
