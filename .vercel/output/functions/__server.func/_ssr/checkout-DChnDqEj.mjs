import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-context-BmYGnn9n.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useCart } from "./cart-context-xpnf8gtQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Mail, L as CreditCard, O as Lock, b as Phone, h as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
import { t as ProductImage } from "./product-image-Do9az2Qp.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-oea7Id3r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DChnDqEj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var submitCheckoutEmail = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("84cab98bb04f03652a6005cdeea752803abedc364a3e82555505c2afe414a02f"));
function formatCardNumber(value) {
	return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(value) {
	const digits = value.replace(/\D/g, "").slice(0, 4);
	if (digits.length <= 2) return digits;
	return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}
function CheckoutPage() {
	const { user } = useAuth();
	const { items, subtotal, clearCart } = useCart();
	const shipping = 25;
	const total = subtotal + shipping;
	const [cardName, setCardName] = (0, import_react.useState)("");
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [cvc, setCvc] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [contactEmail, setContactEmail] = (0, import_react.useState)("");
	const [orderRef, setOrderRef] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (user?.email && !contactEmail) setContactEmail(user.email);
	}, [user, contactEmail]);
	const submit = async (e) => {
		e.preventDefault();
		if (!user) return;
		setBusy(true);
		const ref = `SG-${Date.now().toString(36).toUpperCase()}`;
		const cardLastFour = cardNumber.replace(/\D/g, "").slice(-4);
		const { data: order, error: orderError } = await supabase.from("orders").insert({
			order_ref: ref,
			user_id: user.id,
			status: "pending",
			subtotal,
			shipping,
			total,
			customer_email: contactEmail || user.email || null,
			card_name: cardName,
			card_last_four: cardLastFour || null
		}).select("id").single();
		if (orderError) {
			setBusy(false);
			toast.error(orderError.message);
			return;
		}
		const lineItems = items.map((it) => ({
			order_id: order.id,
			product_id: it.product_id,
			product_name: it.product.name,
			product_slug: it.product.slug,
			quantity: it.quantity,
			unit_price: it.product.price
		}));
		const { error: itemsError } = await supabase.from("order_items").insert(lineItems);
		if (itemsError) {
			setBusy(false);
			toast.error(itemsError.message);
			return;
		}
		try {
			await submitCheckoutEmail({ data: {
				orderId: ref,
				customerEmail: contactEmail || user.email || "unknown@example.com",
				customerName: cardName,
				total
			} });
		} catch (err) {
			console.error("Failed to send checkout email:", err);
		}
		await clearCart();
		setOrderRef(ref);
		setBusy(false);
		setSubmitted(true);
	};
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-lg px-4 py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-extrabold",
						children: "Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Sign in to complete your order."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						className: "mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground",
						children: "Sign in"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	if (items.length === 0 && !submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-lg px-4 py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-extrabold",
						children: "Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Your cart is empty."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground",
						children: "Shop drones"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-xl px-4 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-14 place-items-center rounded-full bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-2xl font-extrabold",
							children: "Payment details received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: ["Reference: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-semibold text-foreground",
								children: orderRef
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Thank you for your order. A SkyGear pilot will review your payment and contact you within one business day to confirm shipping, delivery timeline, and any order-specific details."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-lg border border-primary/30 bg-primary/5 p-5 text-left text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground",
									children: "Contact support to finalize your order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-3 space-y-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:hello@skygear.com",
											className: "hover:text-primary",
											children: "hello@skygear.com"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+1 (503) 555-0142" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs",
									children: "Please include your reference number when contacting support. Do not share your full card number by email — our team will verify payment through our secure channel."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-full bg-primary px-6 py-2.5 text-sm font-bold uppercase text-primary-foreground",
								children: "Contact support"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "rounded-full border border-border px-6 py-2.5 text-sm font-bold uppercase hover:border-primary hover:text-primary",
								children: "Continue shopping"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
						children: "Secure checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-extrabold",
						children: "Payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "min-w-0 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-lg border border-border bg-card p-4 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-5 text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "font-display text-lg font-bold",
													children: "Card details"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "ml-auto size-4 text-muted-foreground" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground",
											children: "Your card information is collected securely. A SkyGear support specialist will contact you to confirm payment and delivery details before your order ships."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "block",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold uppercase text-muted-foreground",
														children: "Name on card"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														required: true,
														value: cardName,
														onChange: (e) => setCardName(e.target.value),
														autoComplete: "cc-name",
														className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "block",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold uppercase text-muted-foreground",
														children: "Card number"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														required: true,
														inputMode: "numeric",
														value: cardNumber,
														onChange: (e) => setCardNumber(formatCardNumber(e.target.value)),
														placeholder: "1234 5678 9012 3456",
														autoComplete: "cc-number",
														className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 font-mono text-sm outline-none focus:border-primary"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-4 sm:grid-cols-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "block",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold uppercase text-muted-foreground",
															children: "Expiry"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															required: true,
															inputMode: "numeric",
															value: expiry,
															onChange: (e) => setExpiry(formatExpiry(e.target.value)),
															placeholder: "MM/YY",
															autoComplete: "cc-exp",
															className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 font-mono text-sm outline-none focus:border-primary"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "block",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-semibold uppercase text-muted-foreground",
															children: "CVC"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															required: true,
															inputMode: "numeric",
															value: cvc,
															onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4)),
															placeholder: "123",
															autoComplete: "cc-csc",
															className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 font-mono text-sm outline-none focus:border-primary"
														})]
													})]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-lg border border-border bg-card p-4 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-lg font-bold",
											children: "Billing contact"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mt-4 block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold uppercase text-muted-foreground",
												children: "Email address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "email",
												value: contactEmail,
												onChange: (e) => setContactEmail(e.target.value),
												className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted-foreground",
											children: "Shipping address and delivery options will be confirmed by our support team after payment review. For bulk orders or international shipping, mention your requirements when contacted."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: busy,
									className: "w-full rounded-full bg-primary py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60",
									children: busy ? "Processing…" : `Pay $${total.toFixed(2)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-center text-xs text-muted-foreground",
									children: [
										"By placing this order you agree to our",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/terms",
											className: "text-primary hover:underline",
											children: "terms"
										}),
										" and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shipping",
											className: "text-primary hover:underline",
											children: "shipping policy"
										}),
										". Online card payment requires support confirmation before dispatch."
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "h-fit rounded-lg border border-border bg-card p-4 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold",
									children: "Order summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-3",
									children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "size-14 shrink-0 overflow-hidden rounded bg-muted",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
													src: it.product.images?.[0],
													slug: it.product.slug,
													alt: it.product.name,
													className: "size-full object-cover"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-medium",
													children: it.product.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-muted-foreground",
													children: ["Qty ", it.quantity]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-semibold",
												children: ["$", (Number(it.product.price) * it.quantity).toFixed(2)]
											})
										]
									}, it.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2 border-t border-border pt-4 text-sm",
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
											className: "flex justify-between border-t border-border pt-3 text-base font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-primary",
												children: ["$", total.toFixed(2)]
											})]
										})
									]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { CheckoutPage as component };
