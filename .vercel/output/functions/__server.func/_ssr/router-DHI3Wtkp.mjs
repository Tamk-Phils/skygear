import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as AuthProvider } from "./auth-context-BmYGnn9n.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as CartProvider } from "./cart-context-xpnf8gtQ.mjs";
import { F as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as FAQS } from "./faq-BVavEpVE.mjs";
import { i as organizationJsonLd, n as buildMeta, r as faqJsonLd } from "./seo-DqGxl4iG.mjs";
import { t as Route$14 } from "./product._slug-CxnvERoq.mjs";
import { t as Route$15 } from "./shop-C4uLMLjZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DHI3Wtkp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CzJoZcti.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try refreshing or go back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input px-4 py-2 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var defaultSeo = buildMeta({
	title: "Pro Drones, Gimbals & Accessories",
	description: "Shop professional camera drones, FPV racing quadcopters, cinema UAVs, intelligent flight batteries, gimbals and drone accessories. Fast, insured delivery. 2-year warranty.",
	path: "/"
});
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			...defaultSeo.meta
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
			},
			...defaultSeo.links
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(organizationJsonLd())
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "overflow-x-clip",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "overflow-x-clip",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => sub.subscription.unsubscribe();
	}, [queryClient, router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-right"
		})] }) })
	});
}
var $$splitComponentImporter$12 = () => import("./warranty-Dh_V-nCU.mjs");
var Route$12 = createFileRoute("/warranty")({
	head: () => {
		const seo = buildMeta({
			title: "Warranty & Returns — 2-Year Drone Coverage",
			description: "SkyGear 2-year drone warranty, 30-day returns, and repairable-by-design policy. Coverage for professional camera drones, FPV quadcopters, batteries and gimbals.",
			path: "/warranty"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./terms-CUQxF5oq.mjs");
var Route$11 = createFileRoute("/terms")({
	head: () => {
		const seo = buildMeta({
			title: "Terms of Service",
			description: "SkyGear terms of service for purchasing professional drones, FPV quadcopters, batteries, gimbals and accessories online.",
			path: "/terms"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./shipping-NiKDqv53.mjs");
var Route$10 = createFileRoute("/shipping")({
	head: () => {
		const seo = buildMeta({
			title: "Shipping Policy — Fast, Insured Delivery",
			description: "SkyGear shipping policy for professional drones, FPV quadcopters, batteries and accessories. Fast, insured delivery with domestic and international options.",
			path: "/shipping"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-B-44nSGN.mjs");
var Route$9 = createFileRoute("/privacy")({
	head: () => {
		const seo = buildMeta({
			title: "Privacy Policy",
			description: "SkyGear privacy policy. How we collect, use, and protect your personal information when you shop for drones and accessories at skygear.com.",
			path: "/privacy"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./guides-CXnYwAez.mjs");
var Route$8 = createFileRoute("/guides")({
	head: () => {
		const seo = buildMeta({
			title: "Drone Buying Guides & Pilot Resources",
			description: "Expert guides for choosing professional camera drones, FPV racing quadcopters, surveying UAVs, and travel drones. Tips from SkyGear pilots.",
			path: "/guides"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./faq-meoUWWY7.mjs");
var Route$7 = createFileRoute("/faq")({
	head: () => {
		const seo = buildMeta({
			title: "Drone FAQ — Shipping, Warranty & Flying Tips",
			description: "Frequently asked questions about SkyGear professional drones, FPV quadcopters, camera UAVs, shipping, warranty, returns, FAA registration, flight times and pilot support.",
			path: "/faq"
		});
		return {
			meta: seo.meta,
			links: seo.links,
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(faqJsonLd(FAQS))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-CUMbSd6k.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => {
		const seo = buildMeta({
			title: "Contact SkyGear — Drone Support & Sales",
			description: "Contact SkyGear drone support, sales, warranty and bulk order teams. Real pilots answer within one business day. Portland HQ. hello@skygear.com",
			path: "/contact"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./checkout-DChnDqEj.mjs");
var Route$5 = createFileRoute("/checkout")({
	head: () => {
		const seo = buildMeta({
			title: "Checkout — Secure Payment",
			description: "Complete your SkyGear drone order with secure card payment.",
			path: "/checkout",
			noindex: true
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./cart-6mGsKnbt.mjs");
var Route$4 = createFileRoute("/cart")({
	head: () => {
		const seo = buildMeta({
			title: "Shopping Cart",
			description: "Your SkyGear drone shopping cart.",
			path: "/cart",
			noindex: true
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./auth-hmLnVEMD.mjs");
var Route$3 = createFileRoute("/auth")({
	head: () => {
		const seo = buildMeta({
			title: "Sign In",
			description: "Sign in to your SkyGear account.",
			path: "/auth",
			noindex: true
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin-BNhCv526.mjs");
var Route$2 = createFileRoute("/admin")({
	head: () => {
		const seo = buildMeta({
			title: "Admin Dashboard",
			description: "SkyGear store management dashboard.",
			path: "/admin",
			noindex: true
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BFqwHmWg.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => {
		const seo = buildMeta({
			title: "About SkyGear — Drone Manufacturer Since 2018",
			description: "SkyGear builds professional camera drones, FPV racing quadcopters and cinema UAVs for aerial photographers, filmmakers, surveyors and pilots in 60+ countries. Portland-based since 2018.",
			path: "/about"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DDXAP2fN.mjs");
var Route = createFileRoute("/")({
	head: () => {
		const seo = buildMeta({
			title: "Pro Drones, Gimbals & Accessories — Shop SkyGear",
			description: "Buy professional camera drones, FPV racing quadcopters, cinema UAVs, intelligent flight batteries, 3-axis gimbals and drone accessories. Fast, insured delivery. Trusted by 60,000+ pilots worldwide.",
			path: "/"
		});
		return {
			meta: seo.meta,
			links: seo.links
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WarrantyRoute = Route$12.update({
	id: "/warranty",
	path: "/warranty",
	getParentRoute: () => Route$13
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$13
});
var ShopRoute = Route$15.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$13
});
var ShippingRoute = Route$10.update({
	id: "/shipping",
	path: "/shipping",
	getParentRoute: () => Route$13
});
var PrivacyRoute = Route$9.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$13
});
var GuidesRoute = Route$8.update({
	id: "/guides",
	path: "/guides",
	getParentRoute: () => Route$13
});
var FaqRoute = Route$7.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var CheckoutRoute = Route$5.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$13
});
var CartRoute = Route$4.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$13
});
var AuthRoute = Route$3.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$13
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$13
	}),
	AboutRoute,
	AdminRoute,
	AuthRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	FaqRoute,
	GuidesRoute,
	PrivacyRoute,
	ShippingRoute,
	ShopRoute,
	TermsRoute,
	WarrantyRoute,
	ProductSlugRoute: Route$14.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$13
	})
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
