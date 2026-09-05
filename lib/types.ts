export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsappMessage: string;
  instagram: string;
  tiktok: string;
  location: string;
  locationDetail: string;
  copyright: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  url: string;
}
