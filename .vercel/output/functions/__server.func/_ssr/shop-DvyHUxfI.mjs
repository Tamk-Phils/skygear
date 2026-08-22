import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./shop-C4uLMLjZ.mjs";
import { t as ProductCard } from "./product-card-CGzQcGy6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DvyHUxfI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Shop() {
	const { q, category } = Route.useSearch();
	const { data: cats } = useQuery({
		queryKey: ["categories-all"],
		queryFn: async () => (await supabase.from("categories").select("*").order("sort_order")).data ?? []
	});
	const sortedCats = (0, import_react.useMemo)(() => {
		if (!cats) return [];
		const dronesCat = cats.find((c) => c.slug === "drones");
		const otherCats = cats.filter((c) => c.slug !== "drones");
		return dronesCat ? [dronesCat, ...otherCats] : cats;
	}, [cats]);
	const { data: products, isLoading } = useQuery({
		queryKey: [
			"shop",
			q,
			category
		],
		queryFn: async () => {
			let query = supabase.from("products").select("id,name,slug,price,compare_at_price,images, category:categories(slug)").eq("is_published", true);
			if (q) query = query.ilike("name", `%${q}%`);
			const { data, error } = await query.order("created_at", { ascending: false });
			if (error) throw error;
			let rows = data;
			if (category) rows = rows.filter((r) => r.category?.slug === category);
			rows.sort((a, b) => {
				const aDJI = a.name?.toLowerCase().includes("dji");
				const bDJI = b.name?.toLowerCase().includes("dji");
				if (aDJI && !bDJI) return -1;
				if (!aDJI && bDJI) return 1;
				return 0;
			});
			return rows;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-8 sm:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
								children: "Catalog"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-1 break-words font-display text-2xl font-extrabold sm:text-3xl",
								children: [
									"Shop",
									category ? ` — ${category}` : "",
									q ? ` — "${q}"` : ""
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 text-sm text-muted-foreground",
							children: [products?.length ?? 0, " products"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex gap-2 overflow-x-auto pb-1 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/shop",
							className: `shrink-0 rounded-full border px-4 py-1.5 text-sm ${!category ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border hover:border-primary hover:text-primary"}`,
							children: "All"
						}), (sortedCats ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/shop?category=${c.slug}`,
							className: `shrink-0 rounded-full border px-4 py-1.5 text-sm ${category === c.slug ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border hover:border-primary hover:text-primary"}`,
							children: c.name
						}, c.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-[220px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "hidden md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/shop",
									className: !category ? "font-semibold text-primary" : "hover:text-primary",
									children: "All products"
								}) }), (sortedCats ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `/shop?category=${c.slug}`,
									className: category === c.slug ? "font-semibold text-primary" : "hover:text-primary",
									children: c.name
								}) }, c.id))]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0",
							children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-20 text-center text-sm text-muted-foreground",
								children: "Loading…"
							}) : products && products.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4 md:grid-cols-3",
								children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-dashed border-border p-16 text-center text-sm text-muted-foreground",
								children: "No products found."
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Shop as component };
