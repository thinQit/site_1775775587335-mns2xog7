"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
  logoUrl?: string;
}

export default function FooterMultiColumn({
  brand = "Saffron Table",
  description = "Seasonal cuisine, handcrafted cocktails, and warm hospitality in the heart of the city.",
  columns = [
    {
      title: "Visit",
      links: [
        { label: "214 Olive Street, Downtown", href: "#" },
        { label: "Mon–Thu: 5:00 PM – 10:00 PM", href: "#" },
        { label: "Fri–Sun: 4:00 PM – 11:00 PM", href: "#" },
      ],
    },
    {
      title: "Reservations",
      links: [
        { label: "Book a Table", href: "#reservation" },
        { label: "Private Dining", href: "#private-dining" },
        { label: "Group Events", href: "#events" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "X / Twitter", href: "https://x.com" },
      ],
    },
  ],
  copyright,
  logoUrl,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            {logoUrl ? (
              <img src={logoUrl} alt={brand || ""} className="mb-2 h-8 w-auto" />
            ) : (
              <h3 className="text-lg font-bold">{brand}</h3>
            )}
            <p className="mt-3 text-sm text-background/70">{description}</p>
            <p className="mt-4 text-sm text-background/70">
              <span className="font-semibold text-background">Phone:</span> (555) 123-9876
            </p>
            <p className="text-sm text-background/70">
              <span className="font-semibold text-background">Email:</span> hello@saffrontable.com
            </p>
          </div>

          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-background/70 transition-all duration-200 hover:scale-105 hover:text-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
