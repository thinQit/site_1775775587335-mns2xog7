"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function Navbar({
  logoText = "The Copper Kettle",
  links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLabel = "Reserve a Table",
  ctaHref = "/reservations",
  className = "",
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 border-b bg-[#FEFAE0]/95 backdrop-blur", className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl font-bold text-[#722F37]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, idx) => (
            <Link
              key={link.href + idx}
              href={link.href}
              className="font-[Lato] text-sm font-medium text-[#3f352f] transition-colors hover:text-[#722F37]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-lg bg-[#722F37] px-6 text-[#FEFAE0] hover:bg-[#5e252d]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-md p-2 text-[#722F37] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-[#FEFAE0] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link, idx) => (
              <Link
                key={link.href + "-mobile-" + idx}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-[Lato] text-[#3f352f] hover:bg-[#f3ecc8]"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-lg bg-[#722F37] text-[#FEFAE0] hover:bg-[#5e252d]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
