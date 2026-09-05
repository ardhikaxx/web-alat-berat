import Image from "next/image";
import { business, whatsappUrl } from "@/lib/constants";

const quickInfo = [
  { label: "Jember & Jawa Timur", icon: "location" },
  { label: "Rental Alat Berat", icon: "equipment" },
  { label: "Jual & Beli Alat Berat", icon: "deal" },
  { label: "Konsultasi Proyek", icon: "consult" },
];

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-end lg:items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/10071297/pexels-photo-10071297.jpeg?auto=compress&w=1920&h=1080&fit=crop"
          alt="Alat berat excavator untuk proyek konstruksi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent lg:bg-gradient-to-t lg:from-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/30 px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-yellow" />
            <span className="text-yellow text-xs font-semibold tracking-widest uppercase">
              {business.name}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
            RENTAL & SEWA
            <br />
            <span className="text-yellow">ALAT BERAT</span>
            <br />
            JEMBER
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
            Solusi alat berat untuk mendukung kebutuhan proyek konstruksi,
            pekerjaan tanah, pembangunan, dan berbagai kebutuhan proyek di
            Jember dan Jawa Timur.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12 lg:mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-yellow text-charcoal px-8 py-4 text-base font-bold hover:bg-yellow-hover transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Sewa Alat Berat
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Quick info strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {quickInfo.map((item) => (
            <div
              key={item.label}
              className="bg-charcoal/50 backdrop-blur-sm px-4 sm:px-6 py-4 flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 bg-yellow shrink-0" />
              <span className="text-white/80 text-xs sm:text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
