import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-context-BmYGnn9n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
			setSession(s);
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!session?.user) {
			setIsAdmin(false);
			return;
		}
		supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle().then(({ data }) => setIsAdmin(!!data));
	}, [session]);
	const value = {
		user: session?.user ?? null,
		session,
		loading,
		isAdmin,
		signOut: async () => {
			await supabase.auth.signOut();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function useAuth() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useAuth must be inside AuthProvider");
	return c;
}
//#endregion
export { useAuth as n, AuthProvider as t };
