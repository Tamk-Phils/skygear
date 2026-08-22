//#region node_modules/.nitro/vite/services/ssr/assets/seo-DqGxl4iG.js
var SITE_NAME = "SkyGear Drones";
var SITE_URL = "https://skygear.com";
var DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;
var SEO_KEYWORDS = [
	"professional drones",
	"camera drones",
	"aerial photography drones",
	"FPV racing drones",
	"cinema drones",
	"drone gimbals",
	"drone batteries",
	"drone accessories",
	"4K drone",
	"8K cinema drone",
	"foldable travel drone",
	"drone shop",
	"buy drones online",
	"SkyGear",
	"SkyGear Drones",
	"aerial surveying drones",
	"filmmaking drones",
	"drone pilot gear",
	"UAV equipment",
	"quadcopter",
	"drone controller",
	"ND filters for drones",
	"intelligent flight battery",
	"drone warranty"
].join(", ");
function pageTitle(title) {
	return title.includes("SkyGear") ? title : `${title} — SkyGear Drones`;
}
function buildMeta({ title, description, path = "/", keywords, ogImage = DEFAULT_OG_IMAGE, ogType = "website", noindex = false }) {
	const fullTitle = pageTitle(title);
	const url = `${SITE_URL}${path}`;
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			{
				name: "keywords",
				content: keywords ?? SEO_KEYWORDS
			},
			{
				name: "robots",
				content: noindex ? "noindex, nofollow" : "index, follow"
			},
			{
				name: "author",
				content: "SkyGear"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:title",
				content: fullTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:type",
				content: ogType
			},
			{
				property: "og:image",
				content: ogImage
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: fullTitle
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: ogImage
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
function organizationJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_NAME,
		url: SITE_URL,
		logo: `${SITE_URL}/favicon.svg`,
		description: "Professional drones, gimbals, batteries and accessories for aerial photographers, filmmakers, surveyors and FPV pilots.",
		email: "hello@skygear.com",
		telephone: "+1-503-555-0142",
		address: {
			"@type": "PostalAddress",
			streetAddress: "220 SE Alder St",
			addressLocality: "Portland",
			addressRegion: "OR",
			postalCode: "97214",
			addressCountry: "US"
		},
		sameAs: [
			"https://www.facebook.com/skygeardrones",
			"https://twitter.com/skygeardrones",
			"https://www.youtube.com/skygeardrones"
		]
	};
}
function productJsonLd(product) {
	const image = product.images?.[0] ?? DEFAULT_OG_IMAGE;
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		image,
		sku: product.slug,
		brand: {
			"@type": "Brand",
			name: "SkyGear"
		},
		offers: {
			"@type": "Offer",
			url: `${SITE_URL}/product/${product.slug}`,
			priceCurrency: "USD",
			price: product.price,
			availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
		}
	};
}
function breadcrumbJsonLd(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: `${SITE_URL}${item.path}`
		}))
	};
}
function faqJsonLd(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer
			}
		}))
	};
}
//#endregion
export { productJsonLd as a, organizationJsonLd as i, buildMeta as n, faqJsonLd as r, breadcrumbJsonLd as t };
