"use client";

import { Leaf, Wheat, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuGridItem {
  name: string;
  description: string;
  price: string;
  tags: string[];
}

interface MenuGroup {
  category: string;
  items: MenuGridItem[];
}

interface MenuCategoryGridProps {
  groups?: MenuGroup[];
  className?: string;
}

const tagIcon = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("vegan") || t.includes("vegetarian")) return <Leaf size={14} />;
  if (t.includes("gluten")) return <Wheat size={14} />;
  return <Flame size={14} />;
};

export default function MenuCategoryGrid({
  groups = [
    {
      category: "Fireplace Lounge Bites",
      items: [
        { name: "Charred Brussels", description: "Maple chili glaze, toasted seeds", price: "$11", tags: ["Vegetarian"] },
        { name: "Cast-Iron Mussels", description: "White wine, garlic, grilled sourdough", price: "$17", tags: ["Chef Favorite"] },
      ],
    },
    {
      category: "Farm Entrées",
      items: [
        { name: "Braised Short Rib", description: "Parsnip purée, roasted shallot, red wine jus", price: "$34", tags: ["Gluten Free"] },
        { name: "Wild Mushroom Farro", description: "Crispy sage, aged pecorino", price: "$25", tags: ["Vegetarian"] },
      ],
    },
  ],
  className = "",
}: Partial<MenuCategoryGridProps>) {
  return (
    <section className={cn("space-y-10", className)}>
      {groups.map((group, gIdx) => (
        <div key={group.category + gIdx} className="space-y-4">
          <h3 className="font-serif text-2xl text-[#722F37]">{group.category}</h3>
          <div className="rounded-xl border border-[#e8ddc0] bg-[#fffdf6] p-4 md:p-6">
            <div className="space-y-5">
              {group.items.map((item, idx) => (
                <div key={item.name + idx} className="grid gap-3 border-b border-[#efe6d1] pb-4 last:border-none last:pb-0 md:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-serif text-xl text-[#3f2d29]">{item.name}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tag + tIdx}
                            className="inline-flex items-center gap-1 rounded-full border border-[#d9c394] bg-[#fff3da] px-2.5 py-1 text-xs font-[Lato] text-[#7b5a2c]"
                          >
                            {tagIcon(tag)}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-1 font-[Lato] text-sm text-[#66554a]">{item.description}</p>
                  </div>
                  <p className="font-[Lato] text-lg font-semibold text-[#DDA15E] md:text-right">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
