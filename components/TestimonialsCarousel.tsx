"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[];
  intervalMs?: number;
  className?: string;
}

export default function TestimonialsCarousel({
  testimonials = [
    { quote: "The fireplace lounge and smoked cocktails were incredible. Cozy, elegant, and genuinely memorable.", name: "Elena R.", detail: "Weekend Guest" },
    { quote: "Seasonal menu was outstanding—every plate tasted farm-fresh and beautifully balanced.", name: "Marcus T.", detail: "Local Diner" },
    { quote: "Best date-night spot in town. Warm service, copper accents, and amazing short rib.", name: "Dana & Chris", detail: "Anniversary Dinner" },
  ],
  intervalMs = 4500,
  className = "",
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const id = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), intervalMs);
    return () => clearInterval(id);
  }, [paused, testimonials.length, intervalMs]);

  return (
    <section
      className={cn("space-y-5", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Card className="rounded-xl border-[#e7d9b7] bg-[#fff9e8]">
        <CardContent className="p-8">
          <p className="font-serif text-2xl italic leading-relaxed text-[#4a3631]">
            “{testimonials[index]?.quote}”
          </p>
          <p className="mt-6 font-[Lato] text-sm font-semibold uppercase tracking-wide text-[#722F37]">
            {testimonials[index]?.name}
          </p>
          <p className="font-[Lato] text-sm text-[#7c6b5e]">{testimonials[index]?.detail}</p>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        {testimonials.map((_, dot) => (
          <button
            key={"dot-" + dot}
            onClick={() => setIndex(dot)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              dot === index ? "w-6 bg-[#722F37]" : "bg-[#cbb99a]"
            )}
            aria-label={"Go to testimonial " + (dot + 1)}
          />
        ))}
      </div>
    </section>
  );
}
