"use client";

import { steps } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Proses Pemesanan</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mt-4 mb-6">
            CARA MEMESAN
          </h2>
          <div className="w-16 h-1 bg-yellow mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white p-8 lg:p-10 relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-px bg-charcoal/20 translate-x-px" />
              )}

              <span className="text-yellow text-5xl lg:text-6xl font-bold opacity-40">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-charcoal mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-concrete text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
