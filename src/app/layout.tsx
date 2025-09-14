import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Kode_Mono } from "next/font/google";
import { ToastProvider } from "@/components/toast";
import Script from "next/script";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

export const metadata: Metadata = {
  title: "Furkan İlhan | Frontend Developer Portfolio",
  description:
    "Istanbul-based Frontend Developer specializing in React, Next.js, TypeScript, and Web3. Explore my portfolio and projects.",
  authors: [{ name: "Furkan İlhan", url: "https://www.furkanilhan.com" }],
  creator: "Furkan İlhan",
  publisher: "Furkan İlhan",
  metadataBase: new URL("https://www.furkanilhan.com"),
  openGraph: {
    title: "Furkan İlhan | Frontend Developer Portfolio",
    description:
      "Istanbul-based Frontend Developer specializing in React, Next.js, TypeScript, and Web3. Explore my portfolio and projects.",
    url: "https://www.furkanilhan.com",
    siteName: "Furkan İlhan Portfolio",
    images: [
      {
        url: "https://www.furkanilhan.com/static/media/1684620138660.6056555e7ead410f9998.jpeg",
        width: 1200,
        height: 630,
        alt: "Furkan İlhan Portfolio",
      },
    ],
    locale: "en_US", // ✅ sadece tek değer kullanılmalı
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furkan İlhan | Frontend Developer Portfolio",
    description:
      "Istanbul-based Frontend Developer specializing in React, Next.js, TypeScript, and Web3. Explore my portfolio and projects.",
    images: [
      "https://www.furkanilhan.com/static/media/1684620138660.6056555e7ead410f9998.jpeg",
    ],
    creator: "@llhanfurkan",
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
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Furkan" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.furkanilhan.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kodeMono.variable} antialiased`}
      >
        <ToastProvider>{children}</ToastProvider>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DJQJ8GM9FC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJQJ8GM9FC');
          `}
        </Script>
      </body>
    </html>
  );
}
