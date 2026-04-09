"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children?: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
  spacing?: "default" | "none" | "compact";
}

export default function SiteContainer({
  children = null,
  className = "",
  as = "div",
  spacing = "default",
}: Partial<SiteContainerProps>) {
  const Component = as;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        spacing === "default" && "py-24 md:py-28",
        spacing === "compact" && "py-12 md:py-16",
        spacing === "none" && "py-0",
        className
      )}
    >
      {children}
    </Component>
  );
}
