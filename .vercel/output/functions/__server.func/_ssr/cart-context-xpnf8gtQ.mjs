import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-context-BmYGnn9n.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-context-xpnf8gtQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(void 0);
function CartProvider({ children }) {
	const { user } = useAuth();
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const refresh = (0, import_react.useCallback)(async () => {
		if (!user) {
			setItems([]);
			return;
		}
		setLoading(true);
		const { data, error } = await supabase.from("cart_items").select("id, product_id, quantity, product:products(id, name, slug, price, images, stock)").eq("user_id", user.id);
		setLoading(false);
		if (error) {
			console.error(error);
			return;
		}
		setItems((data ?? []).filter((r) => r.product));
	}, [user]);
	(0, import_react.useEffect)(() => {
		refresh();
	}, [refresh]);
	const addItem = async (productId, quantity = 1) => {
		if (!user) {
			toast.error("Please sign in to add to cart");
			return;
		}
		const existing = items.find((i) => i.product_id === productId);
		if (existing) {
			await updateItem(existing.id, existing.quantity + quantity);
			return;
		}
		const { error } = await supabase.from("cart_items").insert({
			user_id: user.id,
			product_id: productId,
			quantity
		});
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Added to cart");
		await refresh();
	};
	const updateItem = async (id, quantity) => {
		if (quantity < 1) return removeItem(id);
		const { error } = await supabase.from("cart_items").update({ quantity }).eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		await refresh();
	};
	const removeItem = async (id) => {
		const { error } = await supabase.from("cart_items").delete().eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		await refresh();
	};
	const clearCart = async () => {
		if (!user) return;
		const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id);
		if (error) {
			console.error(error);
			return;
		}
		setItems([]);
	};
	const count = items.reduce((s, i) => s + i.quantity, 0);
	const subtotal = items.reduce((s, i) => s + i.quantity * Number(i.product.price), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			items,
			count,
			subtotal,
			loading,
			addItem,
			updateItem,
			removeItem,
			clearCart,
			refresh
		},
		children
	});
}
function useCart() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useCart must be inside CartProvider");
	return c;
}
//#endregion
export { useCart as n, CartProvider as t };
