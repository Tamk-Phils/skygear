import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as sendCheckoutEmail, t as createServerRpc } from "./email-CcQzF2Tk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-B6zVfDGT.js
var submitCheckoutEmail_createServerFn_handler = createServerRpc({
	id: "84cab98bb04f03652a6005cdeea752803abedc364a3e82555505c2afe414a02f",
	name: "submitCheckoutEmail",
	filename: "src/routes/checkout.tsx"
}, (opts) => submitCheckoutEmail.__executeServer(opts));
var submitCheckoutEmail = createServerFn({ method: "POST" }).validator((d) => d).handler(submitCheckoutEmail_createServerFn_handler, async ({ data }) => {
	await sendCheckoutEmail(data);
	return { success: true };
});
//#endregion
export { submitCheckoutEmail_createServerFn_handler };
