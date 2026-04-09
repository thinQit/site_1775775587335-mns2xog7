import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "The Copper Kettle | Farm-to-Table Restaurant & Craft Cocktails in Asheville",
  description:
    "The Copper Kettle is a farm-to-table restaurant in Asheville serving seasonal menus, craft cocktails, and a cozy fireplace lounge. Reserve a table, explore this week’s menu, and plan private dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-background text-foreground antialiased`}>
        <Navbar
          logoText="The Copper Kettle"
          links={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve a Table"
          ctaHref="/reservations"
        />

        <main className="min-h-[calc(100vh-4rem)]">{children}</main>

        <FooterMultiColumn
          brand="The Copper Kettle"
          description="Seasonal farm-to-table dining, craft cocktails, and a fireside lounge."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "214 Hearthstone Ave, Asheville, NC", href: "/contact" },
                { label: "(828) 555-0147", href: "/contact" },
                { label: "hello@thecopperkettle.com", href: "/contact" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Hours",
              links: [
                { label: "Tue–Thu: 5–10pm", href: "/contact" },
                { label: "Fri–Sat: 5–11pm", href: "/contact" },
                { label: "Sun: 5–9pm", href: "/contact" },
              ],
            },
          ]}
          copyright="© 2026 The Copper Kettle. All rights reserved."
        />
      </body>
    </html>
  );
}
