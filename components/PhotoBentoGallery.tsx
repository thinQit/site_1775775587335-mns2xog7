"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  caption: string;
}

interface PhotoBentoGalleryProps {
  images?: GalleryImage[];
  className?: string;
}

export default function PhotoBentoGallery({
  images = [
    { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577099/site-images/restaurant/10445929.jpg", caption: "Seasonal farm plates" },
    { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/1029601.jpg", caption: "Craft cocktails at dusk" },
    { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10875172.jpg", caption: "Rustic modern dining room" },
    { src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577047/site-images/restaurant/10456027.jpg", caption: "Fireplace lounge ambiance" },
  ],
  className = "",
}: Partial<PhotoBentoGalleryProps>) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <section className={cn("space-y-4", className)}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((img, idx) => (
          <button
            key={img.src + idx}
            onClick={() => setActive(img)}
            className={cn(
              "group relative overflow-hidden rounded-xl",
              idx === 0 ? "col-span-2 row-span-2 md:col-span-2" : "col-span-1"
            )}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={1200}
              height={800}
              unoptimized
              className="h-full min-h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-left font-[Lato] text-xs text-[#FEFAE0] md:text-sm">{img.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setActive(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-2 text-white"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <Image
              src={active.src}
              alt={active.caption}
              width={1600}
              height={1000}
              unoptimized
              className="max-h-[80vh] w-full rounded-lg object-cover"
            />
            <p className="mt-3 text-center font-[Lato] text-sm text-[#f6e8be]">{active.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
