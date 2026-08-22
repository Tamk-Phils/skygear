import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as resolveImageUrl, t as IMAGES } from "./images-DLJFO1Wg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-image-Do9az2Qp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductImage({ src, slug, alt, className, loading }) {
	const resolved = resolveImageUrl(src ?? void 0, slug);
	const [current, setCurrent] = (0, import_react.useState)(resolved);
	(0, import_react.useEffect)(() => {
		setCurrent(resolved);
	}, [resolved]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: current,
		alt,
		loading,
		className,
		onError: () => {
			if (current !== IMAGES.placeholder) setCurrent(IMAGES.placeholder);
		}
	});
}
//#endregion
export { ProductImage as t };
