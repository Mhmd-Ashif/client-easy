import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Clams Tech Solution - Best E-commerce Account Management Company India",
    template: "%s | Clams Tech Solution",
  },
  description:
    "India's leading e-commerce account management company. Complete A-Z solutions for Amazon, Flipkart, Myntra & Ajio. Boost your online sales with expert product listing, inventory management & ad campaigns.",
  keywords: [
    "e-commerce account management India",
    "Amazon seller services",
    "Flipkart account management",
    "online marketplace management",
    "e-commerce advertising services",
    "product listing optimization",
    "inventory management solutions",
    "Amazon PPC management",
    "Myntra seller services",
    "Ajio account management",
  ],
  authors: [{ name: "Clams Tech Solution" }],
  creator: "Clams Tech Solution",
  publisher: "Clams Tech Solution",
  robots: "index, follow",
  metadataBase: new URL("https://client-easy.vercel.app"), // Will change to your custom domain later
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://client-easy.vercel.app",
    siteName: "Clams Tech Solution",
    title:
      "Clams Tech Solution - Best E-commerce Account Management Company India",
    description:
      "Transform your business into e-commerce success story. Expert management for Amazon, Flipkart, Myntra & Ajio. 180% average sales growth guaranteed.",
  },
  other: {
    instagram: "https://www.instagram.com/clams_tech/",
  },
  verification: {
    google: "add-your-google-verification-code-here",  //need to get after attaching domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable}  font-manrope antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
