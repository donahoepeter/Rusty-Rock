import "./globals.css";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "localhost"} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
