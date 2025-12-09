import { Poppins, Inter } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://digiwaveindia.com'),
  title: "DigiWave India | Empowering India's Small Businesses to Go Digital",
  description: "Fast, affordable, AI-powered digital solutions for Indian small businesses. Smart websites, customer engagement systems, and mobile apps. 3-tier digital growth framework.",
  keywords: "small business digital solutions India, PWA websites, customer engagement, mobile app development, AI automation, affordable websites, WhatsApp automation",
  authors: [{ name: "Siva", url: "https://digiwaveindia.com" }],
  creator: "DigiWave India",
  publisher: "DigiWave India",
  robots: "index, follow",
  icons: {
    icon: '/icon',
    shortcut: '/icon',
    apple: '/icon',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "DigiWave India | Empowering India's Small Businesses to Go Digital",
    description: "Fast, affordable, AI-powered digital solutions for Indian small businesses. Smart websites, customer engagement, and mobile apps.",
    url: "https://digiwaveindia.com",
    siteName: "DigiWave India",
    type: "website",
    locale: "en_US",
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'DigiWave India - Smart Digital Solutions'
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiWave India | Empowering India's Small Businesses to Go Digital",
    description: "Fast, affordable, AI-powered digital solutions for Indian small businesses. Smart websites, customer engagement, and mobile apps.",
    creator: "@digiwaveindia",
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: "https://digiwaveindia.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://digiwaveindia.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
