//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver--zkbWoK3.js
var manifest = {
	"84cab98bb04f03652a6005cdeea752803abedc364a3e82555505c2afe414a02f": {
		functionName: "submitCheckoutEmail_createServerFn_handler",
		importer: () => import("./_ssr/checkout-B6zVfDGT.mjs")
	},
	"c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075": {
		functionName: "submitContactForm_createServerFn_handler",
		importer: () => import("./_ssr/contact-BdA7fJCi.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
