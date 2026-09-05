"use client";

import Image from "next/image";

export default function Trust() {
  return (
    <section id="tentang" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="section-label">About CV Artha Nabila</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mt-4 mb-6">
              ALAT BERAT UNTUK PEKERJAAN YANG MEMBUTUHKAN TENAGA BESAR.
            </h2>
            <div className="w-16 h-1 bg-yellow mb-6" />
            <p className="text-concrete text-base lg:text-lg leading-relaxed mb-4">
              CV Artha Nabila melayani kebutuhan rental, sewa, dan jual beli
              alat berat di Jember dan Jawa Timur. Kami menyediakan layanan
              yang mendukung berbagai jenis proyek konstruksi, pekerjaan tanah,
              serta kebutuhan infrastruktur lainnya.
            </p>
            <p className="text-concrete text-base lg:text-lg leading-relaxed">
              Setiap proyek membutuhkan alat yang tepat. Kami membantu memenuhi
              kebutuhan alat berat untuk berbagai skala pekerjaan, dari proyek
              kecil hingga proyek besar di Jember dan wilayah Jawa Timur.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-light overflow-hidden">
              <Image
                src="/images/about-main.jpg"
                alt="Alat berat wheel loader untuk proyek konstruksi di Jember"
                width={800}
                height={1000}
                className="object-cover w-full h-full"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Yellow accent block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow" />
            {/* Overlapping small image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-32 bg-charcoal overflow-hidden hidden lg:block">
              <Image
                src="/images/about-small.jpg"
                alt="Bulldozer alat berat"
                width={400}
                height={250}
                className="object-cover w-full h-full"
                loading="lazy"
                sizes="192px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
