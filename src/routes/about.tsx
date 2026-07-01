import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Award, Users, Globe2, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-drone.jpg";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => {
    const seo = buildMeta({
      title: "About SkyGear — Drone Manufacturer Since 2018",
      description:
        "SkyGear builds professional camera drones, FPV racing quadcopters and cinema UAVs for aerial photographers, filmmakers, surveyors and pilots in 60+ countries. Portland-based since 2018.",
      path: "/about",
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold md:text-5xl">Gear built by pilots, for pilots.</h1>
          <p className="mt-4 max-w-xl text-white/85">
            Since 2018, SkyGear has designed and shipped aerial platforms trusted by filmmakers, surveyors, first responders, and hobbyists in more than 60 countries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold md:text-3xl">Our story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                SkyGear started in a garage in Portland with three engineers and a modified racing quad. What began as a weekend project to fix a broken gimbal has grown into a full lineup of camera drones, FPV rigs, and cinema platforms.
              </p>
              <p>
                Every product we ship is flown, crashed, and rebuilt by our own team before it reaches your hands. That's how we know a battery is really rated for 46 minutes — we've timed it, in the cold, at altitude, with a full payload.
              </p>
              <p>
                We're proud to power aerial work from wedding films in Bali to search-and-rescue missions in the Alps. If it flies and has a camera on it, we probably obsess over how to make it better.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Award, t: "12+ Awards", d: "Design and innovation" },
              { i: Users, t: "60,000+ Pilots", d: "Active in our community" },
              { i: Globe2, t: "60 Countries", d: "Shipping worldwide" },
              { i: Wrench, t: "24/7 Support", d: "Real engineers on call" },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-lg border border-border bg-card p-6">
                <Icon className="size-6 text-primary" />
                <div className="mt-3 font-display text-lg font-bold">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="font-display text-2xl font-extrabold md:text-3xl">What we believe</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Reliability first", d: "Redundant systems, tested batteries, and firmware that doesn't panic when the wind picks up." },
              { t: "Repairable by design", d: "Modular components, documented service manuals, and spare parts available for at least 5 years." },
              { t: "Fair pricing", d: "Direct-to-pilot pricing without dealer markup, so your budget goes to more flight time, not middlemen." },
            ].map(v => (
              <div key={v.t}>
                <h3 className="font-display text-lg font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
