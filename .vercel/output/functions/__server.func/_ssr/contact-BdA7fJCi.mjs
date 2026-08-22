import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { r as sendContactEmail, t as createServerRpc } from "./email-CcQzF2Tk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BdA7fJCi.js
var submitContactForm_createServerFn_handler = createServerRpc({
	id: "c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075",
	name: "submitContactForm",
	filename: "src/routes/contact.tsx"
}, (opts) => submitContactForm.__executeServer(opts));
var submitContactForm = createServerFn({ method: "POST" }).validator((d) => d).handler(submitContactForm_createServerFn_handler, async ({ data }) => {
	await sendContactEmail(data);
	return { success: true };
});
//#endregion
export { submitContactForm_createServerFn_handler };
