"use client"


export const dynamic = 'force-dynamic';
import AuroraHero from "@/components/AuroraHero"
import SiteContainer from "@/components/SiteContainer"
import SectionHeading from "@/components/SectionHeading"
import LocationMap from "@/components/LocationMap"
import ContactForm from "@/components/ContactForm"
import ScrollReveal from "@/components/ScrollReveal"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <AuroraHero
        headline="Contact The Copper Kettle"
        subheadline="Questions about reservations, events, or dietary needs? We’re here to help."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577086/site-images/restaurant/10148453.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up py-24 md:py-28">
          <SiteContainer>
            <LocationMap
              headline="Visit us"
              subheadline="A warm room, a glowing hearth, and a bar built for craft."
              address="214 Hearthstone Ave, Asheville, NC 28801"
              phone="(828) 555-0147"
              email="hello@thecopperkettle.com"
            />
          </SiteContainer>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-24 md:py-28">
          <SiteContainer>
            <SectionHeading headline="Send a message" subheadline="For events, media, or general questions." />
            <ContactForm
              headline="We’d love to hear from you"
              subheadline="For same-day reservations, please call."
              contactInfo={[
                { icon: "Phone", label: "Phone", value: "(828) 555-0147" },
                { icon: "Mail", label: "Email", value: "hello@thecopperkettle.com" },
                { icon: "MapPin", label: "Address", value: "214 Hearthstone Ave, Asheville, NC 28801" },
              ]}
            />
          </SiteContainer>
        </section>
      </ScrollReveal>
    </main>
  )
}
