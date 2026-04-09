export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero"
import SiteContainer from "@/components/SiteContainer"
import SectionHeading from "@/components/SectionHeading"
import MenuTabs from "@/components/MenuTabs"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import PhotoBentoGallery from "@/components/PhotoBentoGallery"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import LocationMap from "@/components/LocationMap"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Farm-to-table comfort, elevated—served by the fire."
        subheadline="The Copper Kettle pairs peak-season ingredients from local farms with copper-kissed craft cocktails in a rustic-modern dining room and cozy fireplace lounge."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Today’s Menu", href: "/menu" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10918163.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <SectionHeading
              headline="Seasonal favorites—built around what’s coming in today."
              subheadline="A snapshot of this week’s menu."
            />
            <MenuTabs />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-24 md:py-28">
          <SiteContainer>
            <FeaturesCards3D
              badge="Reserve"
              title="Reserve your seat by the hearth."
              subtitle="Book the dining room or request the fireplace lounge."
              features={[
                {
                  icon: "CalendarDays",
                  title: "Up to 21 days ahead",
                  description: "Dining room reservations are available three weeks in advance.",
                },
                {
                  icon: "Flame",
                  title: "Fireplace lounge requests",
                  description: "We do our best to seat lounge requests based on availability.",
                },
                {
                  icon: "Users",
                  title: "Private dining for 6+",
                  description: "Set seasonal menus available for gatherings and celebrations.",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <SectionHeading
              headline="Rustic modern—copper, wood, and firelight."
              subheadline="A peek at the dining room, lounge, and a few seasonal plates."
            />
            <PhotoBentoGallery
              images={[
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577099/site-images/restaurant/10445929.jpg",
                  alt: "Fireplace lounge interior",
                  caption: "The fireplace lounge",
                },
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/1029601.jpg",
                  alt: "Restaurant dining room",
                  caption: "Warm reclaimed-wood dining room",
                },
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577071/site-images/restaurant/10875172.jpg",
                  alt: "Craft cocktail close-up",
                  caption: "Copper Old Fashioned",
                },
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577047/site-images/restaurant/10456027.jpg",
                  alt: "Seasonal plated dish",
                  caption: "Peak-season plating",
                },
                {
                  url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577070/site-images/restaurant/10636732.jpg",
                  alt: "Chef finishing a dish",
                  caption: "From pass to table",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-24 md:py-28">
          <SiteContainer>
            <SectionHeading
              headline="Guests come for the seasonality—then stay for the hearth."
              subheadline="A few notes from recent diners."
            />
            <TestimonialsCarousel
              testimonials={[
                {
                  quote:
                    "Every dish tasted like it was picked that morning. The fireplace lounge made the whole night feel special.",
                  name: "Alyssa M.",
                  title: "Anniversary dinner",
                },
                {
                  quote:
                    "The Copper Old Fashioned is a must. Balanced, not too sweet, and it paired perfectly with the pork chop.",
                  name: "Derek H.",
                  title: "Cocktail lover",
                },
                {
                  quote:
                    "The mushroom barley risotto was incredible. Finally a vegetarian main that feels intentional.",
                  name: "Priya S.",
                  title: "Vegetarian diner",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <LocationMap
              headline="Find us in Asheville—steps from the River Arts District."
              subheadline="Easy parking, warm lighting, and a lounge built for lingering."
              address="214 Hearthstone Ave, Asheville, NC 28801"
              phone="(828) 555-0147"
              email="hello@thecopperkettle.com"
            />
          </SiteContainer>
        </section>
      </ScrollReveal>
    </main>
  )
}
