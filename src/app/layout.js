import { Poppins, Inter } from "next/font/google";
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
  title: "DigiWave India | Fast, Affordable Mobile Apps & Websites",
  description: "Empowering small businesses to thrive digitally. We build modern Flutter apps and Next.js websites with AI-driven tools. Fast delivery, transparent pricing.",
  keywords: "mobile app development, website development, Flutter apps, Next.js websites, small business digital solutions, India",
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
    title: "DigiWave India | Fast, Affordable Mobile Apps & Websites",
    description: "Empowering small businesses to thrive digitally. We build modern Flutter apps and Next.js websites with AI-driven tools.",
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
    title: "DigiWave India | Fast, Affordable Mobile Apps & Websites",
    description: "Empowering small businesses to thrive digitally. We build modern Flutter apps and Next.js websites with AI-driven tools.",
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
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
