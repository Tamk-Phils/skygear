import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-context-BmYGnn9n.mjs";
import { n as useCart } from "./cart-context-xpnf8gtQ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Mail, F as Facebook, N as Globe, b as Phone, g as Search, j as Instagram, k as LayoutGrid, n as Youtube, o as User, p as ShoppingBag, r as X, s as Twitter, w as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-DMnM0VHR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/guides",
		label: "Guides"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	},
	{
		to: "/cart",
		label: "Cart"
	}
];
var CATEGORIES = [
	{
		slug: "drones",
		label: "Drones"
	},
	{
		slug: "batteries",
		label: "Batteries"
	},
	{
		slug: "gimbals",
		label: "Gimbals"
	},
	{
		slug: "accessories",
		label: "Accessories"
	}
];
function SiteHeader() {
	const { user, isAdmin, signOut } = useAuth();
	const { count } = useCart();
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [catsOpen, setCatsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-navy text-navy-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:gap-4 md:py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "grid size-9 shrink-0 place-items-center rounded-md hover:bg-white/10 md:hidden",
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex shrink-0 items-center gap-2",
							"aria-label": "SkyGear Drones home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold md:size-10",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-base font-bold tracking-tight md:text-lg",
								children: ["SkyGear", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "®"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								window.location.href = `/shop?q=${encodeURIComponent(q)}`;
							},
							className: "hidden flex-1 items-center overflow-hidden rounded-full bg-white text-foreground md:flex",
							role: "search",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search drones, batteries, gimbals...",
								"aria-label": "Search products",
								className: "min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								"aria-label": "Search",
								className: "grid size-11 shrink-0 place-items-center bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-4",
							children: [user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:flex items-center gap-3 text-sm",
								children: [isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									className: "hover:text-primary",
									children: "Admin"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: signOut,
									className: "hover:text-primary",
									children: "Sign out"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/auth",
								className: "flex items-center gap-1.5 text-sm hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Login"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative flex items-center hover:text-primary",
								"aria-label": `Cart${count > 0 ? `, ${count} items` : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground",
									children: count
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-white/10 px-4 pb-3 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							window.location.href = `/shop?q=${encodeURIComponent(q)}`;
						},
						className: "mt-3 flex items-center overflow-hidden rounded-full bg-white text-foreground",
						role: "search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search drones...",
							"aria-label": "Search products",
							className: "min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							"aria-label": "Search",
							className: "grid size-10 shrink-0 place-items-center bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-b border-border bg-card md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-6 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative border-r border-border py-4 pr-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCatsOpen((v) => !v),
							onBlur: () => setTimeout(() => setCatsOpen(false), 150),
							className: "flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4" }), " Shop by categories"]
						}), catsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-border bg-card py-2 shadow-lg",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: c.slug },
								className: "block px-4 py-2 text-sm hover:bg-muted hover:text-primary",
								children: c.label
							}, c.slug))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 items-center gap-6 py-4 text-sm font-semibold uppercase tracking-wide",
						"aria-label": "Main navigation",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "hover:text-primary [&.active]:text-primary",
							children: n.label
						}, n.to))
					})]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-card md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-7xl flex-col px-4 py-2 text-sm font-semibold uppercase tracking-wide",
					"aria-label": "Mobile navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							onClick: () => setOpen(false),
							className: "border-b border-border py-3 pl-4 hover:text-primary",
							children: "All Categories"
						}),
						CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { category: c.slug },
							onClick: () => setOpen(false),
							className: "border-b border-border py-3 pl-4 hover:text-primary",
							children: c.label
						}, c.slug)),
						NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setOpen(false),
							className: "border-b border-border py-3 hover:text-primary [&.active]:text-primary",
							children: n.label
						}, n.to)),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							onClick: () => setOpen(false),
							className: "border-b border-border py-3 hover:text-primary",
							children: "Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setOpen(false);
								signOut();
							},
							className: "py-3 text-left hover:text-primary",
							children: "Sign out"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							onClick: () => setOpen(false),
							className: "py-3 hover:text-primary",
							children: "Login / Register"
						})
					]
				})
			})
		]
	});
}
var SHOP_LINKS = [
	{
		label: "All drones",
		to: "/shop",
		search: { category: "drones" }
	},
	{
		label: "Batteries",
		to: "/shop",
		search: { category: "batteries" }
	},
	{
		label: "Gimbals & cameras",
		to: "/shop",
		search: { category: "gimbals" }
	},
	{
		label: "Accessories",
		to: "/shop",
		search: { category: "accessories" }
	}
];
var COMPANY_LINKS = [
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Contact",
		href: "/contact"
	},
	{
		label: "Buying guides",
		href: "/guides"
	},
	{
		label: "FAQ",
		href: "/faq"
	},
	{
		label: "Shipping",
		href: "/shipping"
	},
	{
		label: "Warranty & returns",
		href: "/warranty"
	}
];
var FIND_FAST_LINKS = [
	{
		label: "Browse by category",
		href: "/shop"
	},
	{
		label: "Get a quotation",
		href: "/contact"
	},
	{
		label: "Popular products",
		href: "/shop"
	},
	{
		label: "Enterprise sales",
		href: "/contact"
	}
];
var LEGAL_LINKS = [{
	label: "Privacy policy",
	href: "/privacy"
}, {
	label: "Terms of service",
	href: "/terms"
}];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "mt-16 bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold",
								children: ["SkyGear", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "®"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-2.5 text-sm opacity-85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+15035550142",
									className: "flex items-center gap-2 hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0" }), "+1 (503) 555-0142"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:hello@skygear.com",
									className: "flex items-center gap-2 hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0" }), "hello@skygear.com"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://skygear.netlify.app",
									className: "flex items-center gap-2 hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 shrink-0" }), "skygear.netlify.app"]
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-3 opacity-80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://facebook.com/skygeardrones",
									"aria-label": "SkyGear on Facebook",
									className: "hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://twitter.com/skygeardrones",
									"aria-label": "SkyGear on Twitter",
									className: "hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://youtube.com/skygeardrones",
									"aria-label": "SkyGear on YouTube",
									className: "hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/skygeardrones",
									"aria-label": "SkyGear on Instagram",
									className: "hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wide text-primary",
					children: "Shop drones"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: SHOP_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						search: l.search,
						className: "hover:text-primary",
						children: l.label
					}) }, l.label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wide text-primary",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: COMPANY_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-primary",
						children: l.label
					}) }, l.label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wide text-primary",
					children: "Find it fast"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm opacity-80",
					children: FIND_FAST_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-primary",
						children: l.label
					}) }, l.label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold uppercase tracking-wide text-primary",
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm opacity-80",
						children: "Drone news, new launches, and pilot tips — straight to your inbox."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex flex-col gap-2 overflow-hidden rounded-full bg-white text-foreground sm:flex-row",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "your@email.com",
							"aria-label": "Email for newsletter",
							className: "min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "shrink-0 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground sm:py-0",
							children: "Join"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm opacity-80",
						children: LEGAL_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "hover:text-primary",
							children: l.label
						}) }, l.label))
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-5 text-center text-xs opacity-70",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" SkyGear Drones. All rights reserved. Professional drones, quadcopters, UAVs, gimbals & accessories."
				]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
