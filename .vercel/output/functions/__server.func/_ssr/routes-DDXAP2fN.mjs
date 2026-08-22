import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Building2, K as BadgeCheck, L as CreditCard, M as Headphones, S as Package, _ as RefreshCw, c as Truck, d as Sprout, h as ShieldCheck, m as Shield, t as Zap } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as resolveImageUrl, t as IMAGES } from "./images-DLJFO1Wg.mjs";
import { t as ProductImage } from "./product-image-Do9az2Qp.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as ProductRating } from "./product-rating-BjGcC2So.mjs";
import { a as CarouselPrevious, i as CarouselNext, n as CarouselContent, r as CarouselItem, t as Carousel } from "./carousel-OupB6phk.mjs";
import { t as ProductCard } from "./product-card-CGzQcGy6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DDXAP2fN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		type: "video",
		eyebrow: "Best value",
		title: "Premium Gear at Pilot-Direct Pricing",
		subtitle: "Fast, insured delivery. 2-year warranty on every SkyGear drone.",
		cta: "View deals",
		to: "/shop",
		video: "/drone2.mp4"
	},
	{
		type: "video",
		eyebrow: "Enterprise",
		title: "Comprehensive Drone Solutions",
		subtitle: "UAV fleets and support for public safety, construction, energy, and agriculture teams.",
		cta: "Contact us",
		to: "/contact",
		video: "/drone3.mp4"
	},
	{
		type: "image",
		eyebrow: "Experience now",
		title: "Soar Higher, Capture Better",
		subtitle: "Professional camera drones, FPV racers, and cinema UAVs — built by pilots, for pilots.",
		cta: "Shop now",
		to: "/shop",
		image: IMAGES.hero
	}
];
/** Muted autoplay video background for a carousel slide */
function VideoBackground({ src, active }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (active) {
			el.currentTime = 0;
			el.play().catch(() => {});
		} else el.pause();
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		ref,
		src,
		muted: true,
		loop: true,
		playsInline: true,
		preload: "metadata",
		className: "absolute inset-0 size-full object-cover"
	});
}
function HomeHeroCarousel() {
	const [api, setApi] = (0, import_react.useState)();
	const [current, setCurrent] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const onSelect = () => setCurrent(api.selectedScrollSnap());
		api.on("select", onSelect);
		onSelect();
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const timer = setInterval(() => api.scrollNext(), 6500);
		return () => clearInterval(timer);
	}, [api]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
			setApi,
			opts: { loop: true },
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "ml-0",
					children: SLIDES.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "basis-full pl-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-[420px] sm:min-h-[480px] md:min-h-[560px]",
							children: [
								slide.type === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoBackground, {
									src: slide.video,
									active: current === i
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: slide.image,
									alt: "",
									className: "absolute inset-0 size-full object-cover brightness-[1.06] contrast-[1.04] saturate-[1.05]",
									width: 1920,
									height: 900
								}),
								slide.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/10" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:pb-24 md:pb-28",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("text-xs font-bold uppercase tracking-[0.35em] sm:text-sm", slide.type === "video" ? "text-white/90" : "text-primary"),
											children: slide.eyebrow
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: cn("mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl", slide.type === "video" ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]" : "text-foreground"),
											children: slide.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: cn("mt-4 max-w-xl text-sm sm:text-base", slide.type === "video" ? "text-white/85" : "text-foreground/75"),
											children: slide.subtitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: slide.to,
											className: cn("mt-8 inline-flex w-fit rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide transition", slide.type === "video" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary text-primary-foreground hover:bg-primary/90"),
											children: slide.cta
										})
									]
								})
							]
						})
					}, slide.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "left-3 top-1/2 border-white/20 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:left-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "right-3 top-1/2 border-white/20 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:right-5" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2",
			children: SLIDES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Go to slide ${i + 1}`,
				onClick: () => api?.scrollTo(i),
				className: cn("h-2 rounded-full transition-all", current === i ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60")
			}, i))
		})]
	});
}
var CATEGORY_SPOTLIGHTS = [
	{
		slug: "drones",
		badge: "Best trending",
		title: "Drones",
		cta: "Shop now",
		video: "/drone1.mp4"
	},
	{
		slug: "gimbals",
		badge: "Top rated",
		title: "Gimbals & cameras",
		cta: "View collection",
		image: IMAGES.products["smart-controller"]
	},
	{
		slug: "accessories",
		badge: "Trending",
		title: "Accessories",
		cta: "Buy now",
		image: IMAGES.products["nd-filter-set"]
	}
];
var INDUSTRIES = [
	{
		icon: Shield,
		title: "Public safety",
		desc: "Extend your vision and ensure new levels of safety for first responders and search teams.",
		image: IMAGES.hero
	},
	{
		icon: Building2,
		title: "Construction",
		desc: "Manage your projects with higher precision, progress tracking, and site efficiency.",
		image: IMAGES.products["skygear-mini-fold"]
	},
	{
		icon: Zap,
		title: "Energy",
		desc: "Advance your operations with increased accuracy for line inspection and asset monitoring.",
		image: IMAGES.products["intelligent-flight-battery"]
	},
	{
		icon: Sprout,
		title: "Agriculture",
		desc: "Make your farming smart and profitable with crop mapping and precision spraying workflows.",
		image: IMAGES.products["skygear-cinema-8k"]
	}
];
var TRUST_POINTS = [
	{
		icon: BadgeCheck,
		text: "Authorized SkyGear equipment — genuine products with manufacturer warranty"
	},
	{
		icon: ShieldCheck,
		text: "8+ years of trust — voted a top online drone shop by pilots worldwide"
	},
	{
		icon: Package,
		text: "Best prices & exclusive deals — save more on professional UAV gear"
	},
	{
		icon: Truck,
		text: "Free & fast shipping — secure delivery on qualifying drone orders"
	},
	{
		icon: CreditCard,
		text: "Flexible checkout — secure card payment with pilot support confirmation"
	}
];
var TESTIMONIALS = [
	{
		quote: "The camera quality on SkyGear drones is exceptional. 4K HDR footage looks stunning for both amateur and professional aerial work.",
		author: "Serena K.",
		handle: "@sera",
		role: "Aerial photographer"
	},
	{
		quote: "Stabilization holds up even in windy conditions — a reliable choice for filmmakers and content creators on location.",
		author: "John D.",
		handle: "@john",
		role: "Commercial videographer"
	},
	{
		quote: "The accessory selection complements the drone experience perfectly — batteries, cases, and ND filters all in one place.",
		author: "Steven M.",
		handle: "@steev",
		role: "FPV pilot"
	},
	{
		quote: "ND filters give much better exposure control in bright conditions — a serious advantage for outdoor shoots.",
		author: "David L.",
		handle: "@david",
		role: "Documentary DP"
	},
	{
		quote: "Customer service is top-notch. The team helped me pick the right drone and answered every spec question promptly.",
		author: "Godwill A.",
		handle: "@will",
		role: "Survey contractor"
	},
	{
		quote: "Comprehensive guides on the site made setup easy. I felt supported from purchase through first flight.",
		author: "Ashley R.",
		handle: "@ash",
		role: "Hobbyist pilot"
	}
];
function Home() {
	const [productTab, setProductTab] = (0, import_react.useState)("featured");
	const { data: categories } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const { data, error } = await supabase.from("categories").select("*").order("sort_order").limit(8);
			if (error) throw error;
			return data;
		}
	});
	const { data: dbReviews } = useQuery({
		queryKey: ["home-reviews"],
		queryFn: async () => {
			const { data, error } = await supabase.from("product_reviews").select("*, product:products(name)").order("created_at", { ascending: false }).limit(6);
			if (error) throw error;
			return data;
		}
	});
	const displayReviews = [...(dbReviews ?? []).map((r) => ({
		quote: r.content,
		author: r.author_name,
		handle: r.product?.name ?? "Verified Buyer",
		role: "Customer",
		rating: r.rating
	})), ...TESTIMONIALS.map((t) => ({
		...t,
		rating: 5
	}))];
	const { data: products } = useQuery({
		queryKey: ["home-products"],
		queryFn: async () => {
			const { data, error } = await supabase.from("products").select("id,name,slug,price,compare_at_price,images,is_featured").eq("is_published", true).order("is_featured", { ascending: false }).order("created_at", { ascending: false }).limit(12);
			if (error) throw error;
			return data;
		}
	});
	const tabProducts = (0, import_react.useMemo)(() => {
		const rows = products ?? [];
		if (productTab === "bestsellers") return rows.slice(0, 8);
		if (productTab === "onsale") return rows.filter((p) => p.compare_at_price && Number(p.compare_at_price) > Number(p.price)).slice(0, 8);
		return rows.filter((p) => p.is_featured).slice(0, 8).length ? rows.filter((p) => p.is_featured).slice(0, 8) : rows.slice(0, 8);
	}, [products, productTab]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHeroCarousel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-4",
					children: [
						{
							i: Truck,
							t: "Fast delivery",
							d: "Insured shipping options"
						},
						{
							i: ShieldCheck,
							t: "2-year warranty",
							d: "On all SkyGear drones"
						},
						{
							i: RefreshCw,
							t: "30-day returns",
							d: "Hassle-free policy"
						},
						{
							i: Headphones,
							t: "Expert support",
							d: "Real pilots on call"
						}
					].map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: d
						})] })]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Shop by collection" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: CATEGORY_SPOTLIGHTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: c.slug },
						className: "group relative min-h-[220px] overflow-hidden rounded-xl sm:min-h-[280px]",
						children: [
							"video" in c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: c.video,
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								preload: "metadata",
								className: "absolute inset-0 size-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: c.title,
								className: "absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/65 via-black/25 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full flex-col justify-end p-6 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-primary",
										children: c.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl font-extrabold drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-3xl",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										className: "mt-4 inline-flex w-fit rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-wide transition hover:bg-white/15",
										children: c.cta
									})
								]
							})
						]
					}, c.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-navy text-navy-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
									children: "Enterprise solutions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-2xl font-extrabold sm:text-3xl md:text-4xl",
									children: "Specializing in drone technology for diverse industries"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm opacity-85 sm:text-base",
									children: "Our team of drone experts develops and supports comprehensive UAV solutions for organizations across public safety, construction, energy, and agriculture. Contact us for fleet recommendations."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: INDUSTRIES.map(({ icon: Icon, title, desc, image }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group overflow-hidden rounded-lg border border-white/10 bg-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: image,
										alt: title,
										className: "size-full object-cover transition duration-500 group-hover:scale-105",
										loading: "lazy"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-lg font-bold",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm opacity-80",
											children: desc
										})
									]
								})]
							}, title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90",
								children: "Contact enterprise sales"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Featured products" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2 border-b border-border pb-4",
						children: [
							{
								id: "featured",
								label: "Featured"
							},
							{
								id: "bestsellers",
								label: "Best sellers"
							},
							{
								id: "onsale",
								label: "On sale"
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setProductTab(tab.id),
							className: cn("rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition", productTab === tab.id ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary hover:text-primary"),
							children: tab.label
						}, tab.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
						children: tabProducts.length > 0 ? tabProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "col-span-full py-12 text-center text-sm text-muted-foreground",
							children: [
								"No products in this collection yet.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									className: "text-primary hover:underline",
									children: "Browse the full shop"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "inline-block rounded-full border border-border px-8 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary",
							children: "View all products"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Top trending categories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-4",
						children: (categories ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							search: { category: c.slug },
							className: "group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition hover:border-primary/40 hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
									src: resolveImageUrl(c.image_url, c.slug),
									slug: c.slug,
									alt: `${c.name} — SkyGear drone category`,
									loading: "lazy",
									className: "size-full object-cover transition duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4 text-center text-sm font-semibold group-hover:text-primary",
								children: c.name
							})]
						}, c.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
							children: "About us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-extrabold sm:text-3xl md:text-4xl",
							children: "SkyGear Drones — built for pilots who take the shot seriously"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground sm:text-base",
							children: "Whether you're a professional filmmaker, aerial photographer, FPV racer, or hobbyist, we offer the latest SkyGear drones at competitive prices — with expert pilot support on every purchase."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: TRUST_POINTS.map(({ icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })]
							}, text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90",
							children: "Learn more"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.products["skygear-cinema-8k"],
							alt: "SkyGear cinema drone",
							className: "aspect-[4/3] size-full object-cover",
							loading: "lazy"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-muted/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "What pilots are saying" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: displayReviews.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "rounded-lg border border-border bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRating, {
									rating: t.rating,
									compact: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: [
										"“",
										t.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-4 border-t border-border pt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: t.author
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-primary",
											children: t.handle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: t.role
										})
									]
								})
							]
						}, t.author + idx))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-extrabold md:text-3xl",
					children: "Your source for professional drone equipment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-8 text-sm text-muted-foreground md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SkyGear is a Portland-based drone manufacturer and online shop specializing in professional camera drones, FPV racing quadcopters, cinema-grade UAV platforms, intelligent flight batteries, 3-axis gimbals, smart controllers, ND filter sets, and drone accessories. Since 2018, we have shipped aerial imaging gear to pilots in more than 60 countries." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Whether you need a 4K HDR camera drone for wedding filmmaking, a sub-250g foldable travel drone for international shoots, an 8K cinema drone with ProRes RAW, or a carbon-frame FPV racer for freestyle flying — SkyGear builds repairable, pilot-tested equipment with direct-to-pilot pricing. Browse our",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "text-primary hover:underline",
							children: "drone shop"
						}),
						", read our",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guides",
							className: "text-primary hover:underline",
							children: "buying guides"
						}),
						", or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-primary hover:underline",
							children: "contact our pilot support team"
						}),
						"."
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-extrabold sm:text-3xl",
							children: "Order now & experience the future of flight"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-muted-foreground",
							children: "Don't miss out on the best SkyGear drone deals. Shop today for fast shipping, premium customer support, and unbeatable pilot-direct pricing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "mt-6 rounded-full bg-primary px-10 py-3 text-sm font-bold uppercase text-primary-foreground hover:bg-primary/90",
							children: "Shop now"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SectionHeading({ title, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-end justify-between border-b-2 pb-3 ${light ? "border-white/20" : "border-border"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "border-b-4 border-primary pb-3",
				children: title
			})
		})
	});
}
//#endregion
export { Home as component };
