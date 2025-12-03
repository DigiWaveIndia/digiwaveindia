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
  title: "DigiWave India | Smart Digital Solutions",
  description: "We build modern apps and websites for startups and small businesses across India.",
  icons: {
    icon: '/icon',
  },
  openGraph: {
    title: "DigiWave India | Smart Digital Solutions",
    description: "We build modern apps and websites for startups and small businesses across India.",
    url: "https://digiwaveindia.com",
    siteName: "DigiWave India",
    type: "website",
    images: ['/opengraph-image'],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiWave India | Smart Digital Solutions",
    description: "We build modern apps and websites for startups and small businesses across India.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
