"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title = "Seasonal Highlights",
  subtitle = "Fresh ingredients from local farms, prepared with rustic modern flair.",
  align = "left",
  className = "",
}: Partial<SectionHeadingProps>) {
  return (
    <div className={cn("space-y-4", align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">{title}</h2>
      <div className={cn("h-[2px] w-20 bg-[#DDA15E]", align === "center" && "mx-auto")} />
      <p className="max-w-2xl font-[Lato] text-base text-[#5a4b43] md:text-lg">{subtitle}</p>
    </div>
  );
}
