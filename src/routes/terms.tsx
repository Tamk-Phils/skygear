import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, ContentSection } from "@/components/content-page";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => {
    const seo = buildMeta({
      title: "Terms of Service",
      description:
        "SkyGear terms of service for purchasing professional drones, FPV quadcopters, batteries, gimbals and accessories online.",
      path: "/terms",
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: Terms,
});

function Terms() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of service"
      subtitle="Last updated: July 1, 2026"
    >
      <ContentSection title="Agreement">
        <p>
          By accessing skygear.com or purchasing SkyGear products, you agree to these terms of service.
          If you do not agree, please do not use our website or services.
        </p>
      </ContentSection>

      <ContentSection title="Products and pricing">
        <p>
          All drone, battery, gimbal, and accessory prices are listed in U.S. dollars and subject
          to change without notice. We reserve the right to limit quantities, refuse orders, or
          discontinue products. Product images are representative; specifications are published on
          each product page.
        </p>
      </ContentSection>

      <ContentSection title="Orders and payment">
        <p>
          Placing an order constitutes an offer to purchase. SkyGear reserves the right to cancel
          orders due to pricing errors, stock unavailability, or suspected fraud. Payment is charged
          when your order ships unless otherwise stated.
        </p>
      </ContentSection>

      <ContentSection title="Safe and legal flying">
        <p>
          SkyGear drones are powerful aerial tools. You are solely responsible for operating your
          aircraft safely and in compliance with all applicable laws, including FAA Part 107, local
          airspace restrictions, and privacy regulations. SkyGear is not liable for misuse of our
          products.
        </p>
      </ContentSection>

      <ContentSection title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, SkyGear's liability is limited to the purchase
          price of the product in question. We are not liable for indirect, incidental, or
          consequential damages including lost footage, business interruption, or property damage
          from drone operation.
        </p>
      </ContentSection>

      <ContentSection title="Governing law">
        <p>
          These terms are governed by the laws of the State of Oregon, United States. Disputes shall
          be resolved in the courts of Multnomah County, Oregon.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
