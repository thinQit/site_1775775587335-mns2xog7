"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

interface MenuTabsProps {
  categories?: MenuCategory[];
  className?: string;
}

export default function MenuTabs({
  categories = [
    {
      id: "seasonal",
      label: "Seasonal Plates",
      items: [
        { name: "Roasted Beet Carpaccio", description: "Goat cheese mousse, pistachio, citrus vinaigrette", price: "$14" },
        { name: "Wood-Fired Chicken", description: "Root vegetable hash, rosemary jus", price: "$29" },
      ],
    },
    {
      id: "cocktails",
      label: "Craft Cocktails",
      items: [
        { name: "Smoked Orchard Old Fashioned", description: "Bourbon, applewood smoke, bitters", price: "$16" },
        { name: "Copper Garden Gimlet", description: "Gin, basil, cucumber, lime", price: "$15" },
      ],
    },
    {
      id: "desserts",
      label: "Desserts",
      items: [
        { name: "Burnt Honey Panna Cotta", description: "Poached pear, oat crumble", price: "$12" },
        { name: "Warm Chocolate Torte", description: "Sea salt caramel, crème fraîche", price: "$13" },
      ],
    },
  ],
  className = "",
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(categories[0]?.id || "");

  const activeCategory = categories.find((c) => c.id === active) || categories[0];

  return (
    <section className={cn("space-y-6", className)}>
      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-3 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                active === category.id
                  ? "border-[#722F37] bg-[#722F37] text-[#FEFAE0]"
                  : "border-[#d8c7a3] bg-[#fff8df] text-[#6b584d] hover:border-[#DDA15E]"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {activeCategory?.items.map((item, idx) => (
          <Card key={item.name + idx} className="rounded-xl border-[#eadfc6] bg-[#fffdf3]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between font-serif text-xl text-[#722F37]">
                <span>{item.name}</span>
                <span className="font-[Lato] text-base text-[#DDA15E]">{item.price}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-[Lato] text-sm text-[#5e4f46]">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
