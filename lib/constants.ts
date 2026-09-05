import type {
  BusinessInfo,
  NavLink,
  Service,
  Equipment,
  UseCase,
  WhyChooseItem,
  Step,
  SEOData,
} from "./types";

export const business: BusinessInfo = {
  name: "CV ARTHA NABILA",
  tagline: "Rental Sewa Alat Berat Jember",
  phone: "6281358107399",
  phoneFormatted: "081-358-107-399",
  whatsappMessage:
    "Halo CV Artha Nabila, saya ingin konsultasi mengenai kebutuhan rental/sewa alat berat.",
  instagram: "https://www.instagram.com/cvarthanabila/",
  tiktok: "https://www.tiktok.com/@rentalalatberatjember",
  location: "Jember, Jawa Timur",
  locationDetail: "Jember, Jawa Timur, Indonesia",
  copyright: "© 2026 CV ARTHA NABILA. All rights reserved.",
};

export const whatsappUrl = `https://wa.me/${business.phone}?text=${encodeURIComponent(business.whatsappMessage)}`;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Alat Berat", href: "#alat-berat" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export const services: Service[] = [
  {
    id: "rental",
    number: "01",
    title: "Rental / Sewa Alat Berat",
    description:
      "Penyewaan alat berat untuk kebutuhan proyek dengan durasi yang dapat disesuaikan berdasarkan kebutuhan pekerjaan.",
  },
  {
    id: "jual-beli",
    number: "02",
    title: "Jual Beli Alat Berat",
    description:
      "Layanan jual beli alat berat untuk kebutuhan perusahaan, kontraktor, maupun pemilik proyek.",
  },
  {
    id: "konstruksi",
    number: "03",
    title: "Alat Berat untuk Proyek Konstruksi",
    description:
      "Mendukung pekerjaan pembangunan, pekerjaan tanah, pembangunan jalan, dan kebutuhan konstruksi lainnya.",
  },
  {
    id: "perkebunan",
    number: "04",
    title: "Alat Berat untuk Perkebunan & Lahan",
    description:
      "Mendukung pekerjaan pembukaan, perataan, dan pengolahan area/lahan sesuai kebutuhan proyek.",
  },
  {
    id: "proyek",
    number: "05",
    title: "Kebutuhan Proyek Pemerintah & Swasta",
    description:
      "Layanan dapat diarahkan untuk berbagai jenis proyek sesuai kebutuhan dan ketersediaan unit.",
  },
  {
    id: "konsultasi",
    number: "06",
    title: "Konsultasi Kebutuhan Alat",
    description:
      "Calon pelanggan dapat berkonsultasi terlebih dahulu mengenai jenis alat dan kebutuhan pekerjaan melalui WhatsApp.",
  },
];

export const equipment: Equipment[] = [
  {
    id: "excavator",
    name: "Excavator",
    category: "Penggalian & Pemindahan",
    description:
      "Cocok untuk penggalian, pemindahan material, dan pekerjaan tanah lainnya.",
    image: "https://images.pexels.com/photos/10071297/pexels-photo-10071297.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Excavator untuk pekerjaan konstruksi",
  },
  {
    id: "wheel-loader",
    name: "Wheel Loader",
    category: "Pemuatan & Pengangkutan",
    description:
      "Untuk kebutuhan pemuatan material, pasir, batu, dan material proyek lainnya.",
    image: "https://images.pexels.com/photos/5125782/pexels-photo-5125782.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Wheel Loader untuk proyek konstruksi",
  },
  {
    id: "bulldozer",
    name: "Bulldozer",
    category: "Perataan & Pendorongan",
    description:
      "Mesin pendorong untuk perataan lahan, pembersihan area, dan pemindahan material.",
    image: "https://images.pexels.com/photos/12247592/pexels-photo-12247592.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Bulldozer untuk perataan lahan",
  },
  {
    id: "dump-truck",
    name: "Dump Truck",
    category: "Pengangkutan Material",
    description:
      "Kendaraan pengangkut material proyek seperti tanah, pasir, batu, dan lainnya.",
    image: "https://images.pexels.com/photos/10410019/pexels-photo-10410019.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Dump Truck untuk pengangkutan material",
  },
  {
    id: "vibro-roller",
    name: "Vibro Roller",
    category: "Pemadatan Tanah",
    description:
      "Untuk pemadatan tanah dan material pada proyek jalan dan konstruksi.",
    image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Vibro Roller untuk pemadatan tanah",
  },
  {
    id: "crane",
    name: "Crane",
    category: "Pengangkatan & Pemindahan",
    description:
      "Untuk kebutuhan pengangkatan material berat dan perancah konstruksi.",
    image: "https://images.pexels.com/photos/8961216/pexels-photo-8961216.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Crane untuk pengangkatan material berat",
  },
];

export const useCases: UseCase[] = [
  {
    id: "konstruksi",
    title: "Konstruksi",
    description: "Pembangunan dan pekerjaan konstruksi.",
    image: "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Pekerjaan konstruksi",
  },
  {
    id: "pekerjaan-tanah",
    title: "Pekerjaan Tanah",
    description: "Penggalian, pemindahan material, dan perataan lahan.",
    image: "https://images.pexels.com/photos/5025666/pexels-photo-5025666.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Pekerjaan tanah",
  },
  {
    id: "pembangunan-jalan",
    title: "Pembangunan Jalan",
    description: "Mendukung pekerjaan jalan dan infrastruktur.",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Pembangunan jalan",
  },
  {
    id: "perkebunan",
    title: "Perkebunan & Lahan",
    description: "Pekerjaan pembukaan dan pengelolaan area.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&w=600&h=400&fit=crop",
    alt: "Pekerjaan perkebunan dan lahan",
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    number: "01",
    title: "Konsultasi Kebutuhan",
    description:
      "Konsultasi kebutuhan alat berdasarkan jenis pekerjaan dan proyek Anda.",
  },
  {
    number: "02",
    title: "Pilih Alat",
    description:
      "Pilihan layanan rental dan jual beli alat berat sesuai kebutuhan.",
  },
  {
    number: "03",
    title: "Tentukan Kebutuhan Rental",
    description:
      "Melayani kebutuhan proyek di Jember dan wilayah Jawa Timur.",
  },
  {
    number: "04",
    title: "Alat Siap Mendukung Proyek",
    description:
      "Pendekatan layanan yang fleksibel sesuai kebutuhan proyek Anda.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Hubungi Kami",
    description:
      "Hubungi CV Artha Nabila melalui WhatsApp.",
  },
  {
    number: "02",
    title: "Jelaskan Kebutuhan",
    description:
      "Sampaikan jenis pekerjaan, lokasi proyek, jenis alat yang dibutuhkan, dan estimasi durasi penggunaan.",
  },
  {
    number: "03",
    title: "Konsultasi & Cek Ketersediaan",
    description:
      "Tim melakukan konsultasi mengenai kebutuhan dan ketersediaan alat.",
  },
  {
    number: "04",
    title: "Lanjutkan Pemesanan",
    description:
      "Setelah kebutuhan disepakati, proses pemesanan dapat dilanjutkan.",
  },
];

export const seo: SEOData = {
  title: "Rental Alat Berat Jember | CV Artha Nabila",
  description:
    "CV Artha Nabila melayani rental, sewa, jual beli alat berat di Jember dan Jawa Timur untuk kebutuhan konstruksi, pekerjaan tanah, proyek, dan berbagai kebutuhan lainnya. Hubungi kami untuk konsultasi.",
  keywords: [
    "rental alat berat Jember",
    "sewa alat berat Jember",
    "rental excavator Jember",
    "sewa excavator Jember",
    "jual beli alat berat Jember",
    "alat berat Jember",
    "rental alat berat Jawa Timur",
    "sewa alat berat Jawa Timur",
    "CV Artha Nabila",
    "rental alat berat terdekat Jember",
  ],
  ogImage: "https://images.pexels.com/photos/10071297/pexels-photo-10071297.jpeg?auto=compress&w=1200&h=630&fit=crop",
  url: "https://cvarthanabila.com",
};
