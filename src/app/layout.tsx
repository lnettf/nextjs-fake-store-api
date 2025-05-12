import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Store - Shop Quality Products Online",
  description:
    "Browse our collection of quality products at Fake Store. Find clothing, electronics, jewelry and more at competitive prices.",
  keywords:
    "online shopping, fake store, ecommerce, clothing, electronics, jewelry",
  authors: [{ name: "Luis' Demo", url: "https://github.com" }],
  openGraph: {
    title: "Fake Store - Shop Quality Products Online",
    description: "Browse our collection of quality products at Fake Store.",
    url: "https://fakestoreapi.com",
    siteName: "Fake Store",
    images: [
      {
        url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
