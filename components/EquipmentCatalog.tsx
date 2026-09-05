"use client";

import Image from "next/image";
import { equipment, getWhatsAppUrl } from "@/lib/constants";

export default function EquipmentCatalog() {
  return (
    <section id="alat-berat" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">Katalog Alat Berat</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mt-4 mb-6">
            PILIH ALAT BERAT SESUAI KEBUTUHAN PEKERJAAN
          </h2>
          <div className="w-16 h-1 bg-yellow" />
        </div>

        {/* Equipment grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="group bg-off-white border border-charcoal/5 hover:border-charcoal/15 transition-all"
            >
              {/* Image */}
              <div className="equipment-image relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {item.name}
                </h3>
                <p className="text-concrete text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Halo CV Artha Nabila, saya ingin menanyakan ketersediaan ${item.name} untuk kebutuhan proyek.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 text-sm font-semibold hover:bg-yellow hover:text-charcoal transition-colors"
                >
                  Tanya Ketersediaan
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
