import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as FAQS } from "./faq-BVavEpVE.mjs";
import { n as ContentSection, t as ContentPage } from "./content-page-DZzE62t1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-meoUWWY7.js
var import_jsx_runtime = require_jsx_runtime();
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
		eyebrow: "Support",
		title: "Frequently asked questions",
		subtitle: "Everything you need to know about buying, flying, and maintaining SkyGear professional drones and accessories.",
		children: FAQS.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentSection, {
			title: faq.question,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: faq.answer })
		}, faq.question))
	});
}
//#endregion
export { FAQ as component };
