import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lowlight Digital | Web Development for Local Businesses",
  description: "Professional web development services for local businesses. Affordable, fast, and AI-powered solutions with a personal touch.",
  icons: {
    icon: [
      { url: "/lowlight-circle-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: { url: "/lowlight-circle-512.png", sizes: "512x512", type: "image/png" },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XMLN4MLE0S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XMLN4MLE0S');
          `}
        </Script>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
