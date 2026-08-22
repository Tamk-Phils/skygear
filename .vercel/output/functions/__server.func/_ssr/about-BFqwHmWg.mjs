import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { G as Earth, V as Award, a as Users, i as Wrench } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BFqwHmWg.js
var import_jsx_runtime = require_jsx_runtime();
var hero_drone_default = "/assets/hero-drone-DQuHBXaY.jpg";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_drone_default,
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-7xl px-4 py-20 text-white md:py-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
								children: "About us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-2xl font-display text-4xl font-extrabold md:text-5xl",
								children: "Gear built by pilots, for pilots."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-white/85",
								children: "Since 2018, SkyGear has designed and shipped aerial platforms trusted by filmmakers, surveyors, first responders, and hobbyists in more than 60 countries."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-extrabold md:text-3xl",
						children: "Our story"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-4 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SkyGear started in a garage in Portland with three engineers and a modified racing quad. What began as a weekend project to fix a broken gimbal has grown into a full lineup of camera drones, FPV rigs, and cinema platforms." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every product we ship is flown, crashed, and rebuilt by our own team before it reaches your hands. That's how we know a battery is really rated for 46 minutes — we've timed it, in the cold, at altitude, with a full payload." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We're proud to power aerial work from wedding films in Bali to search-and-rescue missions in the Alps. If it flies and has a camera on it, we probably obsess over how to make it better." })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							{
								i: Award,
								t: "12+ Awards",
								d: "Design and innovation"
							},
							{
								i: Users,
								t: "60,000+ Pilots",
								d: "Active in our community"
							},
							{
								i: Earth,
								t: "60 Countries",
								d: "Shipping worldwide"
							},
							{
								i: Wrench,
								t: "24/7 Support",
								d: "Real engineers on call"
							}
						].map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-display text-lg font-bold",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: d
								})
							]
						}, t))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-extrabold md:text-3xl",
						children: "What we believe"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: [
							{
								t: "Reliability first",
								d: "Redundant systems, tested batteries, and firmware that doesn't panic when the wind picks up."
							},
							{
								t: "Repairable by design",
								d: "Modular components, documented service manuals, and spare parts available for at least 5 years."
							},
							{
								t: "Fair pricing",
								d: "Direct-to-pilot pricing without dealer markup, so your budget goes to more flight time, not middlemen."
							}
						].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: v.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: v.d
						})] }, v.t))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { About as component };
