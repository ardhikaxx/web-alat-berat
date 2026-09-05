"use client";

import Image from "next/image";
import { useCases } from "@/lib/constants";

export default function Projects() {
  return (
    <section className="py-20 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">Use Case</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-4 mb-6">
            DIBUAT UNTUK BERBAGAI JENIS PEKERJAAN
          </h2>
          <div className="w-16 h-1 bg-yellow" />
        </div>

        {/* Use cases grid - asymmetric */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {useCases.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={index === 0 ? 800 : 400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-px bg-yellow" />
                  <span className="text-yellow text-xs font-semibold tracking-widest uppercase">
                    Pekerjaan
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
