import { t as supabase } from "./client-DwZASlIa.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as resolveProductImages } from "./images-DLJFO1Wg.mjs";
import { a as productJsonLd, n as buildMeta, t as breadcrumbJsonLd } from "./seo-DqGxl4iG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CxnvERoq.js
var $$splitNotFoundComponentImporter = () => import("./product._slug-i_FUht6w.mjs");
var $$splitComponentImporter = () => import("./product._slug-CVse4r5N.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: async ({ params }) => {
		const { data, error } = await supabase.from("products").select("*, category:categories(name,slug)").eq("slug", params.slug).maybeSingle();
		if (error) throw error;
		if (!data) throw notFound();
		return data;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product — SkyGear Drones" }] };
		const images = resolveProductImages(loaderData.images, loaderData.slug);
		const desc = loaderData.short_description ?? loaderData.description?.slice(0, 160) ?? `Buy ${loaderData.name} at SkyGear Drones.`;
		const seo = buildMeta({
			title: `${loaderData.name} — Buy Professional Drone`,
			description: `${desc} Fast, insured delivery. 2-year warranty.`,
			path: `/product/${loaderData.slug}`,
			ogImage: images[0],
			ogType: "product"
		});
		return {
			meta: seo.meta,
			links: seo.links,
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(productJsonLd({
					...loaderData,
					images
				}))
			}, {
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbJsonLd([
					{
						name: "Home",
						path: "/"
					},
					{
						name: "Shop",
						path: "/shop"
					},
					{
						name: loaderData.name,
						path: `/product/${loaderData.slug}`
					}
				]))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
