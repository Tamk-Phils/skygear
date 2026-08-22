import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buildMeta } from "./seo-DqGxl4iG.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-C4uLMLjZ.js
var $$splitComponentImporter = () => import("./shop-DvyHUxfI.mjs");
var search = objectType({
	q: stringType().optional(),
	category: stringType().optional()
});
var CATEGORY_SEO = {
	drones: {
		title: "Buy Professional Camera Drones & FPV Quadcopters",
		description: "Shop SkyGear professional camera drones, foldable travel drones, FPV racing quadcopters and cinema UAVs. 4K, 8K sensors. Fast, insured delivery."
	},
	batteries: {
		title: "Intelligent Flight Batteries for Drones",
		description: "SkyGear intelligent flight batteries with onboard cell balancing, low-temp performance and up to 46-minute flight time. Compatible with Pro X1 and more."
	},
	gimbals: {
		title: "Drone Gimbals & Aerial Camera Stabilizers",
		description: "3-axis handheld gimbals and aerial camera stabilizers for professional drone filmmaking. Brushless motors, 12-hour battery life."
	},
	accessories: {
		title: "Drone Accessories — Controllers, Cases & Filters",
		description: "Smart controllers, hardshell travel cases, ND filter sets, low-noise propellers and drone accessories for professional pilots."
	}
};
var Route = createFileRoute("/shop")({
	validateSearch: search,
	head: ({ match }) => {
		const s = match.search || {};
		const cat = s.category ? CATEGORY_SEO[s.category] : void 0;
		const seo = buildMeta({
			title: cat?.title ?? (s.q ? `Search: ${s.q}` : "Shop Drones, Batteries & Accessories"),
			description: cat?.description ?? "Browse the SkyGear catalog: professional camera drones, FPV quadcopters, intelligent flight batteries, gimbals and drone accessories.",
			path: s.category ? `/shop?category=${s.category}` : s.q ? `/shop?q=${encodeURIComponent(s.q)}` : "/shop"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
