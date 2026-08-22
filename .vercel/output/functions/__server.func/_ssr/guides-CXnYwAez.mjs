import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Map, t as Zap, y as Plane, z as Camera } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides-CXnYwAez.js
var import_jsx_runtime = require_jsx_runtime();
var GUIDES = [
	{
		icon: Camera,
		title: "Choosing a camera drone for filmmaking",
		slug: "camera-drone-filmmaking",
		excerpt: "Compare SkyGear Pro X1 vs Cinema 8K for wedding films, documentaries, and commercial shoots. Sensor size, codec options, and gimbal stability explained.",
		keywords: "camera drone filmmaking, aerial cinematography drone, 4K drone, 8K cinema drone"
	},
	{
		icon: Map,
		title: "Drones for aerial surveying and mapping",
		slug: "surveying-mapping-drones",
		excerpt: "How surveyors and GIS professionals use SkyGear platforms for photogrammetry, orthomosaic mapping, and infrastructure inspection workflows.",
		keywords: "aerial surveying drone, mapping drone, photogrammetry UAV, GIS drone"
	},
	{
		icon: Zap,
		title: "Getting started with FPV racing drones",
		slug: "fpv-racing-guide",
		excerpt: "A pilot's guide to the SkyGear FPV Racer: analog vs digital HD, battery selection, prop tuning, and safe freestyle flying practices.",
		keywords: "FPV racing drone, freestyle quadcopter, FPV drone guide, racing drone setup"
	},
	{
		icon: Plane,
		title: "Travel drones under 250 grams",
		slug: "travel-drone-guide",
		excerpt: "Why the SkyGear Mini Fold is the best foldable travel drone for creators who fly internationally. FAA registration, airline rules, and packing tips.",
		keywords: "travel drone, foldable drone, sub 250g drone, portable camera drone"
	}
];
function Guides() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
						children: "Resources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-extrabold md:text-5xl",
						children: "Drone buying guides & pilot resources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Whether you're shooting a wedding film, mapping a construction site, or learning FPV freestyle, our pilot-written guides help you choose the right SkyGear drone and accessories."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: GUIDES.map(({ icon: Icon, title, slug, excerpt, keywords }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-lg border border-border bg-card p-6 transition hover:border-primary/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 shrink-0 place-items-center rounded-full bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-lg font-bold",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs text-muted-foreground/70",
										children: keywords
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										className: "mt-4 inline-block text-sm font-semibold text-primary hover:underline",
										children: "Shop related gear →"
									})
								] })]
							})
						}, slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-16 rounded-lg border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-extrabold",
								children: "Need help choosing a professional drone?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted-foreground",
								children: "Our support team includes certified drone pilots who fly SkyGear platforms daily. Tell us about your use case — filmmaking, surveying, FPV racing, or travel — and we'll recommend the right drone, battery, gimbal, and accessory bundle."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-primary/90",
									children: "Talk to a pilot"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/faq",
									className: "rounded-full border border-border px-8 py-3 text-sm font-bold uppercase hover:border-primary hover:text-primary",
									children: "Read the FAQ"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Guides as component };
