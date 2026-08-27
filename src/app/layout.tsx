import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { CartProvider } from "@/lib/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Intermax Limited | GPS Vehicle Tracking Systems in Kenya",
    template: "%s | Intermax Limited",
  },
  description:
    "Intermax Limited provides reliable GPS vehicle tracking systems in Kenya for individuals, businesses and fleets, plus a range of trusted electronics.",
  keywords: [
    "GPS tracking Kenya",
    "vehicle tracking Kenya",
    "car tracker Kenya",
    "vehicle tracking systems Kenya",
    "fleet tracking Kenya",
    "GPS vehicle tracker Nairobi",
    "car tracking system Kenya",
    "motorbike tracking Kenya",
  ],
  openGraph: {
    title: "Intermax Limited | GPS Vehicle Tracking Systems in Kenya",
    description:
      "Reliable GPS vehicle tracking systems in Kenya for individuals, businesses and fleets.",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
        </CartProvider>
      </body>
    </html>
  );
}
