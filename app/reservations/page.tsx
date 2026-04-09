"use client"


export const dynamic = 'force-dynamic';
import AuroraHero from "@/components/AuroraHero"
import SiteContainer from "@/components/SiteContainer"
import SectionHeading from "@/components/SectionHeading"
import ReservationForm from "@/components/ReservationForm"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import ScrollReveal from "@/components/ScrollReveal"

export default function ReservationsPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Reservations at The Copper Kettle"
        subheadline="Choose the dining room or request the fireplace lounge."
        primaryCta={{ label: "Start a Reservation Request", href: "/reservations" }}
        secondaryCta={{ label: "Call (828) 555-0147", href: "/contact" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/11123392.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <SectionHeading
              headline="Reservation request"
              subheadline="Requests are not confirmed until you receive a confirmation message."
            />
            <ReservationForm />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-24 md:py-28">
          <SiteContainer>
            <FeaturesCards3D
              badge="Events"
              title="Private dining & events"
              subtitle="A warm space for celebrations—seasonal menus served family-style."
              features={[
                {
                  icon: "Utensils",
                  title: "Hearth Table (8–12)",
                  description: "Family-style seasonal spread from $65 per person.",
                },
                {
                  icon: "Users",
                  title: "Lounge Buyout (up to 18)",
                  description: "Dedicated bartender + curated cocktail pairings.",
                },
                {
                  icon: "Leaf",
                  title: "Dietary accommodations",
                  description: "Advance notice helps us tailor the experience.",
                },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>
    </main>
  )
}
