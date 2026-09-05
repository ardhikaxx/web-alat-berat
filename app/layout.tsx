import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { seo, business } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s | CV Artha Nabila`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: "CV Artha Nabila" }],
  creator: "CV Artha Nabila",
  metadataBase: new URL(seo.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: seo.url,
    siteName: "CV Artha Nabila",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "CV Artha Nabila - Rental Sewa Alat Berat Jember",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CV ARTHA NABILA",
              description: seo.description,
              url: seo.url,
              telephone: "+6281358107399",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jember",
                addressRegion: "Jawa Timur",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -8.1845,
                longitude: 113.6955,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Jember",
                },
                {
                  "@type": "State",
                  name: "Jawa Timur",
                },
              ],
              serviceType: [
                "Rental Alat Berat",
                "Sewa Alat Berat",
                "Jual Beli Alat Berat",
              ],
              sameAs: [business.instagram, business.tiktok],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
