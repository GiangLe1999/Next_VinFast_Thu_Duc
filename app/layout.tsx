import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/contexts/providers";
import { pageConstants } from "@/data/constants";
// import Script from "next/script";
import JsonLd from "@/components/jsonld";
import { orgSchema } from "@/lib/orgSchema";

export const metadata: Metadata = {
  title: {
    template: `%s | ${pageConstants.siteTitle}`,
    default: pageConstants.siteTitle,
  },
  description: pageConstants.siteDescription,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://vinfastautohcm.vn"
  ),
  keywords: [
    "VinFast",
    "VinFast Hồ Chí Minh",
    "VinFast Thủ Đức",
    "Giá xe VinFast",
    "Ô tô điện VinFast",
    "Xe máy điện VinFast",
    "VF3",
    "VF5",
    "VF6",
    "VF7",
    "VF8",
    "VF9",
  ],
  openGraph: {
    title: pageConstants.siteTitle,
    description: pageConstants.siteDescription,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "VinFast Hồ Chí Minh",
    images: [
      {
        url: "/images/share-link-wide.webp", // Ensure this image exists or use a generic one
        width: 1200,
        height: 630,
        alt: "VinFast Hồ Chí Minh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageConstants.siteTitle,
    description: pageConstants.siteDescription,
    images: ["/images/share-link-wide.webp"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body className="font-sans antialiased">
        {/* <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCLN98R8');`,
          }}
        /> */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCLN98R8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
