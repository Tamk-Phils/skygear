import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildMeta } from "@/lib/seo";
import { Camera, Map, Zap, Plane } from "lucide-react";

const GUIDES = [
  {
    icon: Camera,
    title: "Choosing a camera drone for filmmaking",
    slug: "camera-drone-filmmaking",
    excerpt:
      "Compare SkyGear Pro X1 vs Cinema 8K for wedding films, documentaries, and commercial shoots. Sensor size, codec options, and gimbal stability explained.",
    keywords: "camera drone filmmaking, aerial cinematography drone, 4K drone, 8K cinema drone",
  },
  {
    icon: Map,
    title: "Drones for aerial surveying and mapping",
    slug: "surveying-mapping-drones",
    excerpt:
      "How surveyors and GIS professionals use SkyGear platforms for photogrammetry, orthomosaic mapping, and infrastructure inspection workflows.",
    keywords: "aerial surveying drone, mapping drone, photogrammetry UAV, GIS drone",
  },
  {
    icon: Zap,
    title: "Getting started with FPV racing drones",
    slug: "fpv-racing-guide",
    excerpt:
      "A pilot's guide to the SkyGear FPV Racer: analog vs digital HD, battery selection, prop tuning, and safe freestyle flying practices.",
    keywords: "FPV racing drone, freestyle quadcopter, FPV drone guide, racing drone setup",
  },
  {
    icon: Plane,
    title: "Travel drones under 250 grams",
    slug: "travel-drone-guide",
    excerpt:
      "Why the SkyGear Mini Fold is the best foldable travel drone for creators who fly internationally. FAA registration, airline rules, and packing tips.",
    keywords: "travel drone, foldable drone, sub 250g drone, portable camera drone",
  },
];

export const Route = createFileRoute("/guides")({
  head: () => {
    const seo = buildMeta({
      title: "Drone Buying Guides & Pilot Resources",
      description:
        "Expert guides for choosing professional camera drones, FPV racing quadcopters, surveying UAVs, and travel drones. Tips from SkyGear pilots.",
      path: "/guides",
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: Guides,
});

function Guides() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Resources</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
          Drone buying guides & pilot resources
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Whether you're shooting a wedding film, mapping a construction site, or learning FPV
          freestyle, our pilot-written guides help you choose the right SkyGear drone and accessories.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {GUIDES.map(({ icon: Icon, title, slug, excerpt, keywords }) => (
            <article
              key={slug}
              className="rounded-lg border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold">{title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
                  <p className="mt-3 text-xs text-muted-foreground/70">{keywords}</p>
                  <Link
                    to="/shop"
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Shop related gear →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-lg border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-extrabold">
            Need help choosing a professional drone?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our support team includes certified drone pilots who fly SkyGear platforms daily. Tell us
            about your use case — filmmaking, surveying, FPV racing, or travel — and we'll recommend
            the right drone, battery, gimbal, and accessory bundle.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-primary/90"
            >
              Talk to a pilot
            </Link>
            <Link
              to="/faq"
              className="rounded-full border border-border px-8 py-3 text-sm font-bold uppercase hover:border-primary hover:text-primary"
            >
              Read the FAQ
            </Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
