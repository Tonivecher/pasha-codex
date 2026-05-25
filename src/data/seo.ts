import { faqItems, previewImage, siteUrl, studioContacts, studioName } from "./siteContent";

export const seo = {
  title:
    "Инженерия формы — премиальная мебель на заказ и интерьерные изделия в Москве",
  description:
    "Производим премиальную мебель на заказ, встроенные системы, HoReCa- и retail-мебель, панели, стойки и интерьерные изделия по проектам архитекторов и дизайнеров.",
  url: siteUrl,
  image: previewImage,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: studioName,
  url: siteUrl,
  email: studioContacts.email,
  telephone: studioContacts.phone,
  image: previewImage,
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: studioName,
  url: siteUrl,
  email: studioContacts.email,
  telephone: studioContacts.phone,
  image: previewImage,
  areaServed: ["Москва", "Россия"],
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Премиальная мебель на заказ и интерьерные изделия",
  provider: {
    "@type": "Organization",
    name: studioName,
    url: siteUrl,
  },
  areaServed: ["Москва", "Россия"],
  serviceType: [
    "Встроенная мебель на заказ",
    "Мебель для HoReCa",
    "Retail-мебель",
    "Стеновые панели",
    "Ресепшн и витрины на заказ",
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const jsonLdItems = [
  organizationJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
  faqJsonLd,
];
