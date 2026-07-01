import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, ContentSection } from "@/components/content-page";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const seo = buildMeta({
      title: "Privacy Policy",
      description:
        "SkyGear privacy policy. How we collect, use, and protect your personal information when you shop for drones and accessories at skygear.com.",
      path: "/privacy",
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: Privacy,
});

function Privacy() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy policy"
      subtitle="Last updated: July 1, 2026"
    >
      <ContentSection title="Information we collect">
        <p>
          When you create an account, place an order, or contact SkyGear support, we collect your
          name, email address, shipping address, phone number, and payment information. We also collect
          usage data such as pages visited, products viewed, and device information to improve our
          drone shop experience.
        </p>
      </ContentSection>

      <ContentSection title="How we use your information">
        <p>
          We use your data to process orders, provide customer support, send order confirmations and
          shipping updates, improve our website and product catalog, and — with your consent — send
          marketing emails about new drones, accessories, and pilot resources.
        </p>
      </ContentSection>

      <ContentSection title="Data sharing">
        <p>
          SkyGear does not sell your personal information. We share data only with service providers
          who help us operate our business: payment processors, shipping carriers, email platforms,
          and analytics tools. All partners are bound by confidentiality agreements.
        </p>
      </ContentSection>

      <ContentSection title="Cookies">
        <p>
          Our website uses cookies to remember your cart, keep you signed in, and understand how
          visitors use the site. You can disable cookies in your browser settings, though some
          features like cart persistence may not work correctly.
        </p>
      </ContentSection>

      <ContentSection title="Your rights">
        <p>
          You may request access to, correction of, or deletion of your personal data at any time by
          emailing privacy@skygear.com. California residents have additional rights under CCPA.
          European users have rights under GDPR including data portability and the right to object to
          processing.
        </p>
      </ContentSection>

      <ContentSection title="Contact">
        <p>
          Questions about this privacy policy? Contact our data protection team at
          privacy@skygear.com or write to SkyGear, 220 SE Alder St, Portland, OR 97214.
        </p>
      </ContentSection>
    </ContentPage>
  );
}
