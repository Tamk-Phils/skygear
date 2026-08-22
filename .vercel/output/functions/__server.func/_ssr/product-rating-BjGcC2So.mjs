import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as Star } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-rating-BjGcC2So.js
var import_jsx_runtime = require_jsx_runtime();
function ProductRating({ rating = 5, className, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-1", className),
		children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn(compact ? "size-3" : "size-3.5", i < Math.round(rating) ? "fill-primary text-primary" : "text-muted-foreground/30") }, i)), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-1 text-xs text-muted-foreground",
			children: [
				"Rated ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: rating.toFixed(2)
				}),
				" out of 5"
			]
		})]
	});
}
function salePercent(price, compareAt) {
	if (!compareAt || compareAt <= price) return 0;
	return Math.round((1 - price / compareAt) * 100);
}
//#endregion
export { salePercent as n, ProductRating as t };
