export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ô tô VinFast Thủ Đức",
  alternateName: "VinFast Showroom An Giang",
  url: "https://vinfastangiang.com.vn",
  logo: "https://vinfast.vn/wp-content/uploads/2023/01/vinfast-logo.svg",
  description:
    "Đại lý chính thức VinFast tại tỉnh An Giang, cung cấp dịch vụ bán xe điện, bảo hành và sửa chữa xe VinFast.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2699 Trần Hưng Đạo",
    addressLocality: "Thành phố Long Xuyên",
    addressRegion: "An Giang",
    postalCode: "90000",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.3717,
    longitude: 105.4345,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84-296-3811-888",
    contactType: "customer service",
    availableLanguage: ["Vietnamese", "English"],
  },
  openingHours: ["Mo-Su 08:00-18:00"],
  sameAs: [
    "https://www.facebook.com/VinFastAnGiang",
    "https://vinfast.vn/dai-ly/an-giang",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "VinFast",
    url: "https://vinfast.vn",
  },
  areaServed: {
    "@type": "State",
    name: "An Giang",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catalog sản phẩm VinFast",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "VF 8",
          description: "SUV điện hạng D",
          category: "Ô tô điện",
          offers: {
            "@type": "Offer",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: "https://vinfastangiang.com.vn/vf8",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "VF 9",
          description: "SUV điện hạng E",
          category: "Ô tô điện",
          offers: {
            "@type": "Offer",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: "https://vinfastangiang.com.vn/vf9",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "VF 5",
          description: "SUV điện hạng A",
          category: "Ô tô điện",
          offers: {
            "@type": "Offer",
            priceCurrency: "VND",
            availability: "https://schema.org/InStock",
            url: "https://vinfastangiang.com.vn/vf5",
          },
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5",
    worstRating: "1",
  },
};
