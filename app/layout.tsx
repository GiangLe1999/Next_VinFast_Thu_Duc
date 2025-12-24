import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/contexts/providers";
import { pageConstants } from "@/data/constants";
// import Script from "next/script";
import GoogleTagManager from "@/components/google-analytics";

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
        <GoogleTagManager />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9ZSPH3X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
