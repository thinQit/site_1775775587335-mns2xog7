"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

export default function FeaturesCards3D({
  badge = "Why Guests Love Us",
  headline = "Signature Highlights",
  subheadline = "From wood-fired mains to sommelier-selected pairings, every detail is crafted for a memorable night.",
  features = [
    { icon: "🍷", title: "Curated Wine Program", description: "Old-world classics and boutique local labels selected to pair beautifully with each course." },
    { icon: "🔥", title: "Wood-Fired Kitchen", description: "Our open-fire technique enhances natural flavor and adds depth to every plate." },
    { icon: "🥗", title: "Seasonal Ingredients", description: "Menus change with the harvest, showcasing fresh produce from trusted nearby farms." },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative h-auto w-auto rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm card-hover">
                  <CardItem translateZ="50" className="mb-4 text-3xl">
                    {feature.icon}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
