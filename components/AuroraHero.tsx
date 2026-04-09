"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { cn } from "@/lib/utils";

interface AuroraHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  className?: string;
}

export default function AuroraHero({
  title = "Farm-to-Table Comfort, Elevated with Copper & Firelight",
  subtitle = "Welcome to The Copper Kettle—seasonal ingredients, craft cocktails, and a warm fireplace lounge crafted for long conversations and unforgettable evenings.",
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10918163.jpg",
  className = "",
}: Partial<AuroraHeroProps>) {
  return (
    <section className={cn("relative min-h-[88vh] overflow-hidden", className)}>
      <Image
        src={imageSrc}
        alt="The Copper Kettle dining ambiance"
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1c1311]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(221,161,94,0.28),transparent_55%),radial-gradient(circle_at_30%_70%,rgba(114,47,55,0.35),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:3px_3px]" />

      <AuroraBackground className="absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-[Lato] text-sm uppercase tracking-[0.25em] text-[#DDA15E]">
            The Copper Kettle
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#FEFAE0] md:text-6xl">
            <TextGenerateEffect words={title} />
          </h1>
          <p className="mt-6 max-w-2xl font-[Lato] text-base leading-relaxed text-[#f5e8c4] md:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-[#722F37] px-7 text-[#FEFAE0] hover:bg-[#5e252d]">
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#DDA15E] bg-transparent text-[#FEFAE0] hover:bg-[#DDA15E]/20">
              <Link href="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
