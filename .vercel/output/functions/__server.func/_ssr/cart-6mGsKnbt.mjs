import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-context-BmYGnn9n.mjs";
import { n as useCart } from "./cart-context-xpnf8gtQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Minus, l as Trash2, v as Plus } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
import { t as ProductImage } from "./product-image-Do9az2Qp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-6mGsKnbt.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, subtotal, updateItem, removeItem } = useCart();
	const { user } = useAuth();
	const shipping = 25;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold",
					children: "Your cart"
				}), !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-lg border border-border bg-card p-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Please sign in to view your cart."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						className: "mt-4 inline-block rounded-full bg-primary px-6 py-2 text-sm font-bold uppercase text-primary-foreground",
						children: "Sign in"
					})]
				}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-lg border border-border bg-card p-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Your cart is empty."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-4 inline-block rounded-full bg-primary px-6 py-2 text-sm font-bold uppercase text-primary-foreground",
						children: "Continue shopping"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-[1fr_320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border rounded-lg border border-border bg-card",
						children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 p-4 sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-20 shrink-0 overflow-hidden rounded bg-muted sm:size-24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
										src: it.product.images?.[0],
										slug: it.product.slug,
										alt: it.product.name,
										className: "size-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 flex-1 flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$slug",
											params: { slug: it.product.slug },
											className: "line-clamp-2 font-semibold hover:text-primary",
											children: it.product.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-sm font-semibold text-primary",
											children: ["$", Number(it.product.price).toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto flex items-center justify-between gap-2 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center overflow-hidden rounded-full border border-border",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => updateItem(it.id, it.quantity - 1),
														className: "grid size-8 place-items-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-8 text-center text-sm",
														children: it.quantity
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => updateItem(it.id, it.quantity + 1),
														className: "grid size-8 place-items-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" })
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold sm:hidden",
													children: ["$", (Number(it.product.price) * it.quantity).toFixed(2)]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => removeItem(it.id),
													className: "text-muted-foreground hover:text-destructive",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden shrink-0 text-right font-semibold sm:block",
									children: ["$", (Number(it.product.price) * it.quantity).toFixed(2)]
								})
							]
						}, it.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-lg border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold",
								children: "Order summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", subtotal.toFixed(2)] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Shipping"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", shipping.toFixed(2)] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex justify-between border-t border-border pt-3 text-base font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-primary",
											children: ["$", (subtotal + shipping).toFixed(2)]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								className: "mt-6 block w-full rounded-full bg-primary py-3 text-center text-sm font-bold uppercase text-primary-foreground hover:bg-primary/90",
								children: "Proceed to checkout"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-xs text-muted-foreground",
								children: "Secure card payment — support will contact you to confirm your order."
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { CartPage as component };
