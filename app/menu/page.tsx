export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero"
import SiteContainer from "@/components/SiteContainer"
import SectionHeading from "@/components/SectionHeading"
import MenuCategoryGrid from "@/components/MenuCategoryGrid"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import ScrollReveal from "@/components/ScrollReveal"

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="This week at The Copper Kettle"
        subheadline="Seasonal plates, hearth-warmed comfort, and cocktails built from fresh herbs and house syrups."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "Dietary & Allergens", href: "/menu" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577054/site-images/restaurant/10207592.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <SectionHeading headline="Seasonal menu" subheadline="Crafted to share or savor." />
            <MenuCategoryGrid />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-24 md:py-28">
          <SiteContainer>
            <FeaturesCards3D
              badge="Bar Program"
              title="Craft cocktails + small-batch spirits"
              subtitle="Copper accents at the bar, fresh herbs behind it."
              features={[
                {
                  icon: "Wine",
                  title: "Copper Old Fashioned",
                  description: "Bourbon, maple, black walnut bitters, orange oil.",
                },
                {
                  icon: "GlassWater",
                  title: "Garden Gimlet",
                  description: "Gin, basil, cucumber, lime, olive oil mist.",
                },
                {
                  icon: "Sparkles",
                  title: "Fireside Spritz",
                  description: "Aperitif, sparkling wine, blood orange, rosemary.",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>
    </main>
  )
}
