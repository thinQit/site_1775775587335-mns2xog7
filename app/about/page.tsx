export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero"
import SiteContainer from "@/components/SiteContainer"
import SectionHeading from "@/components/SectionHeading"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import PhotoBentoGallery from "@/components/PhotoBentoGallery"
import ScrollReveal from "@/components/ScrollReveal"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Rustic modern hospitality—rooted in the season."
        subheadline="Built around local farms, live-fire comfort, and a lounge that invites you to linger."
        primaryCta={{ label: "Meet the Team", href: "/about" }}
        secondaryCta={{ label: "Reserve", href: "/reservations" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577064/site-images/restaurant/11236818.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <FeaturesCards3D
              badge="Our Story"
              title="A kitchen that follows the farms."
              subtitle="Menus begin with weekly harvest availability."
              features={[
                {
                  icon: "Sprout",
                  title: "Seasonal sourcing",
                  description: "Partner farms within 60 miles guide each week’s menu.",
                },
                {
                  icon: "Flame",
                  title: "Live-fire technique",
                  description: "Cast iron and open flame bring warmth and depth.",
                },
                {
                  icon: "Wine",
                  title: "Cocktails with intent",
                  description: "Herb-forward drinks designed to pair with food.",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-24 md:py-28">
          <SiteContainer>
            <SectionHeading headline="Designed for warmth" subheadline="Copper accents, reclaimed wood, and hearth glow." />
            <PhotoBentoGallery
              images={[
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577061/site-images/restaurant/10375821.jpg",
                  alt: "Copper design details",
                  caption: "Copper details throughout the bar.",
                },
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577087/site-images/restaurant/1080383.jpg",
                  alt: "Lounge seating",
                  caption: "Fireplace lounge seating.",
                },
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577056/site-images/restaurant/110813.jpg",
                  alt: "Open kitchen pass",
                  caption: "Open kitchen during evening service.",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>
    </main>
  )
}
