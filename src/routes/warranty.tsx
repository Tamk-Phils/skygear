import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, ContentSection } from "@/components/content-page";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/warranty")({
  head: () => {
    const seo = buildMeta({
      title: "Warranty & Returns — 2-Year Drone Coverage",
      description:
        "SkyGear 2-year drone warranty, 30-day returns, and repairable-by-design policy. Coverage for professional camera drones, FPV quadcopters, batteries and gimbals.",
      path: "/warranty",
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: Warranty,
});

function Warranty() {
  return (
    <ContentPage
      eyebrow="Warranty & returns"
      title="Warranty and returns"
      subtitle="We stand behind every drone, battery, and gimbal we ship — because crashes happen and gear should be fixable."
    >
      <ContentSection title="2-year manufacturer warranty">
        <p>
          All SkyGear drones, gimbals, and controllers include a 2-year warranty against defects in
          materials and workmanship from the date of purchase. Intelligent flight batteries carry a
          1-year warranty. Accessories such as propellers, filters, and cases are covered for 90 days.
        </p>
      </ContentSection>

      <ContentSection title="What's covered">
        <p>
          Warranty covers manufacturing defects, premature motor failure, gimbal calibration issues,
          firmware bugs, and battery cell degradation beyond normal wear. It does not cover crash
          damage, water ingress from improper use, unauthorized modifications, or normal wear items
          like propellers and landing gear pads.
        </p>
      </ContentSection>

      <ContentSection title="30-day hassle-free returns">
        <p>
          Not the right drone for your workflow? Return any unused SkyGear product within 30 days of
          delivery for a full refund. Items must be in original packaging with all accessories
          included. Return shipping is free on defective items; customer-initiated returns pay return
          shipping.
        </p>
      </ContentSection>

      <ContentSection title="Repairable by design">
        <p>
          SkyGear drones use modular arms, swappable motors, and documented service manuals. We
          guarantee spare parts availability for at least 5 years after purchase. Many repairs can
          be performed at home with our pilot repair guides — or ship your drone to our Portland
          service center for factory refurbishment.
        </p>
      </ContentSection>

      <ContentSection title="How to file a claim">
        <p>
          Email hello@skygear.com with your order number, serial number, and a description of the
          issue. Include photos or flight logs if available. Our engineers respond within one business
          day with troubleshooting steps or a prepaid return label.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
