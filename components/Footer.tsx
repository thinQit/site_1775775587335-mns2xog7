"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FooterProps {
  variant?: "columns" | "minimal";
  className?: string;
  restaurantName?: string;
  address?: string;
  phone?: string;
  hours?: string;
}

export default function Footer({
  variant = "columns",
  className = "",
  restaurantName = "The Copper Kettle",
  address = "184 Harvest Lane, Greenfield, CA 93927",
  phone = "(831) 555-0146",
  hours = "Mon–Thu 4:30pm–9:30pm • Fri–Sun 4:00pm–10:30pm",
}: Partial<FooterProps>) {
  return (
    <footer className={cn("border-t bg-[#2e221f] text-[#FEFAE0]", className)}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {variant === "minimal" ? (
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="font-serif text-xl">{restaurantName}</p>
            <p className="font-[Lato] text-sm text-[#e7dcb4]">{address}</p>
            <Button asChild className="bg-[#DDA15E] text-[#2e221f] hover:bg-[#c78e4f]">
              <Link href="/reservations">Reserve</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl text-[#DDA15E]">{restaurantName}</h3>
              <p className="mt-3 font-[Lato] text-sm leading-relaxed text-[#e7dcb4]">
                Farm-to-table dining, seasonal menus, and craft cocktails in a cozy fireplace lounge.
              </p>
              <div className="mt-5">
                <Button asChild className="bg-[#722F37] text-[#FEFAE0] hover:bg-[#5e252d]">
                  <Link href="/reservations">Book a Table</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4 font-[Lato] text-sm">
              <h4 className="font-serif text-lg text-[#DDA15E]">Visit Us</h4>
              <p className="flex items-start gap-2 text-[#e7dcb4]">
                <MapPin size={16} className="mt-0.5" /> {address}
              </p>
              <p className="flex items-center gap-2 text-[#e7dcb4]">
                <Phone size={16} /> {phone}
              </p>
              <p className="flex items-center gap-2 text-[#e7dcb4]">
                <Clock size={16} /> {hours}
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-[#DDA15E]">Explore</h4>
              <ul className="mt-4 space-y-2 font-[Lato] text-sm text-[#e7dcb4]">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/menu" className="hover:text-white">Seasonal Menu</Link></li>
                <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
        )}

        <div className="mt-10 border-t border-[#4a3833] pt-6 text-center font-[Lato] text-xs text-[#c9ba8e]">
          © {new Date().getFullYear()} {restaurantName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
