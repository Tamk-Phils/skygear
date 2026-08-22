import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./cart-context-xpnf8gtQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ShoppingBag } from "../_libs/lucide-react.mjs";
import { i as resolveProductImages } from "./images-DLJFO1Wg.mjs";
import { t as ProductImage } from "./product-image-Do9az2Qp.mjs";
import { n as salePercent, t as ProductRating } from "./product-rating-BjGcC2So.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-CGzQcGy6.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p, showRating = true }) {
	const { addItem } = useCart();
	const img = resolveProductImages(p.images, p.slug)[0];
	const onSale = p.compare_at_price && Number(p.compare_at_price) > Number(p.price);
	const discount = onSale ? salePercent(Number(p.price), Number(p.compare_at_price)) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary/30 hover:shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: p.slug },
			className: "relative aspect-square overflow-hidden bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
				src: img,
				slug: p.slug,
				alt: p.name,
				loading: "lazy",
				className: "size-full object-contain p-2"
			}), onSale && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute left-3 top-3 rounded-sm bg-destructive px-2 py-1 text-[10px] font-bold uppercase text-white",
				children: [
					"-",
					discount,
					"%"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-3 sm:p-4",
			children: [
				showRating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRating, {
					rating: 5,
					compact: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: p.slug },
					className: "line-clamp-2 text-sm font-semibold leading-snug hover:text-primary",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-end justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-base font-bold text-primary sm:text-lg",
								children: ["$", Number(p.price).toFixed(2)]
							}), onSale && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: ["$", Number(p.compare_at_price).toFixed(2)]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => addItem(p.id),
						className: "grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90",
						"aria-label": "Add to cart",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" })
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
