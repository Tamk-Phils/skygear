import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./cart-context-xpnf8gtQ.mjs";
import { A as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Minus, v as Plus } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as resolveProductImages, n as isVideoUrl } from "./images-DLJFO1Wg.mjs";
import { t as ProductImage } from "./product-image-Do9az2Qp.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./product._slug-CxnvERoq.mjs";
import { t as ProductRating } from "./product-rating-BjGcC2So.mjs";
import { a as CarouselPrevious, i as CarouselNext, n as CarouselContent, r as CarouselItem, t as Carousel } from "./carousel-OupB6phk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-CVse4r5N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const { addItem } = useCart();
	const [qty, setQty] = (0, import_react.useState)(1);
	const [api, setApi] = (0, import_react.useState)();
	const [active, setActive] = (0, import_react.useState)(0);
	const { data: product, isLoading } = useQuery({
		queryKey: ["product", slug],
		queryFn: async () => {
			const { data, error } = await supabase.from("products").select("*, category:categories(name,slug)").eq("slug", slug).maybeSingle();
			if (error) throw error;
			if (!data) throw notFound();
			return data;
		}
	});
	const images = product ? resolveProductImages(product.images, product.slug) : [];
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const onSelect = () => setActive(api.selectedScrollSnap());
		api.on("select", onSelect);
		onSelect();
		return () => api.off("select", onSelect);
	}, [api]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 py-10",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-20 text-center text-sm text-muted-foreground",
					children: "Loading…"
				}) : product && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Breadcrumb",
					className: "mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-primary",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-primary",
							children: "Shop"
						}),
						product.category && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { category: product.category.slug },
							className: "hover:text-primary",
							children: product.category.name
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: product.name
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
							setApi,
							opts: { loop: false },
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-lg border border-border bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
									className: "ml-0",
									children: images.map((im, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
										className: "pl-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "aspect-square",
											children: isVideoUrl(im) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
												src: im,
												controls: true,
												className: "size-full object-contain",
												"aria-label": `${product.name} — product video`
											}, im) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
												src: im,
												slug: product.slug,
												alt: `${product.name} — SkyGear professional drone`,
												className: "size-full object-contain"
											})
										})
									}, im + i))
								})
							}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "left-3 top-1/2 border-border bg-background/80 hover:bg-background" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "right-3 top-1/2 border-border bg-background/80 hover:bg-background" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex justify-center gap-2",
									children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Go to media ${i + 1}`,
										onClick: () => api?.scrollTo(i),
										className: cn("h-2 rounded-full transition-all", i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50")
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex gap-2 overflow-x-auto pb-1",
									children: images.map((im, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => api?.scrollTo(i),
										className: cn("relative size-16 shrink-0 overflow-hidden rounded border-2", i === active ? "border-primary" : "border-border"),
										children: isVideoUrl(im) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
											src: im,
											className: "size-full object-contain",
											muted: true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "pointer-events-none absolute left-0.5 top-0.5 rounded bg-black/70 px-1 py-px text-[8px] font-bold uppercase text-white",
											children: "▶"
										})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
											src: im,
											slug: product.slug,
											alt: "",
											className: "size-full object-contain"
										})
									}, im + i))
								})
							] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						product.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: product.category.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-2xl font-extrabold sm:text-3xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRating, {
							rating: 5,
							className: "mt-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-2xl font-bold text-primary sm:text-3xl",
								children: ["$", Number(product.price).toFixed(2)]
							}), product.compare_at_price && Number(product.compare_at_price) > Number(product.price) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg text-muted-foreground line-through",
								children: ["$", Number(product.compare_at_price).toFixed(2)]
							})]
						}),
						product.short_description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: product.short_description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center self-start overflow-hidden rounded-full border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(Math.max(1, qty - 1)),
										className: "grid size-10 place-items-center",
										"aria-label": "Decrease quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 text-center text-sm font-semibold",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(qty + 1),
										className: "grid size-10 place-items-center",
										"aria-label": "Increase quantity",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => addItem(product.id, qty),
								disabled: product.stock < 1,
								className: "w-full rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50 sm:flex-1",
								children: product.stock < 1 ? "Out of stock" : "Add to cart"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Fast, insured delivery" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 2-year manufacturer warranty" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 30-day hassle-free returns" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Expert pilot support included" })
							]
						}),
						product.description && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "prose prose-sm mt-10 max-w-none whitespace-pre-line text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-bold",
								children: "Product description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: product.description
							})]
						})
					] })]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProductPage as component };
