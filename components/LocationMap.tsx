"use client";

import { MapPin, Car, Accessibility, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationMapProps {
  mapEmbedUrl?: string;
  address?: string;
  hours?: string;
  parking?: string;
  accessibility?: string;
  className?: string;
}

export default function LocationMap({
  mapEmbedUrl = "https://maps.google.com/maps?q=Monterey%20California&t=&z=13&ie=UTF8&iwloc=&output=embed",
  address = "184 Harvest Lane, Greenfield, CA 93927",
  hours = "Mon–Thu 4:30pm–9:30pm • Fri–Sun 4:00pm–10:30pm",
  parking = "Complimentary lot behind the restaurant + street parking after 6pm.",
  accessibility = "Step-free main entrance, accessible restrooms, and wide table spacing available.",
  className = "",
}: Partial<LocationMapProps>) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-2", className)}>
      <div className="overflow-hidden rounded-xl border border-[#e5d8b6]">
        <iframe
          src={mapEmbedUrl}
          className="h-[360px] w-full md:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Copper Kettle Map"
        />
      </div>
      <div className="rounded-xl border border-[#eadfc6] bg-[#fffdf4] p-6">
        <h3 className="font-serif text-3xl text-[#722F37]">Find The Copper Kettle</h3>
        <div className="mt-5 space-y-4 font-[Lato] text-sm text-[#5c4d44]">
          <p className="flex gap-2"><MapPin size={16} className="mt-0.5 text-[#DDA15E]" /> {address}</p>
          <p className="flex gap-2"><Clock3 size={16} className="mt-0.5 text-[#DDA15E]" /> {hours}</p>
          <p className="flex gap-2"><Car size={16} className="mt-0.5 text-[#DDA15E]" /> {parking}</p>
          <p className="flex gap-2"><Accessibility size={16} className="mt-0.5 text-[#DDA15E]" /> {accessibility}</p>
        </div>
      </div>
    </section>
  );
}
