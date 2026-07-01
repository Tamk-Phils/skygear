import { createContext, useContext, useEffect, useState, type ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./auth-context";
import { toast } from "sonner";

export type CartItem = {
  id: string;
  product_id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    images: string[];
    stock: number;
  };
};

type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  loading: boolean;
  addItem: (productId: string, quantity?: number) => Promise<void>;
  updateItem: (id: string, quantity: number) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  refresh: () => Promise<void>;
};

const Ctx = createContext<CartCtx | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (!user) { setItems([]); return; }
    setLoading(true);
    const { data, error } = await supabase
      .from("cart_items")
      .select("id, product_id, quantity, product:products(id, name, slug, price, images, stock)")
      .eq("user_id", user.id);
    setLoading(false);
    if (error) { console.error(error); return; }
    setItems((data ?? []).filter((r: any) => r.product) as any);
  }, [user]);

  useEffect(() => { refresh(); }, [refresh]);

  const addItem = async (productId: string, quantity = 1) => {
    if (!user) { toast.error("Please sign in to add to cart"); return; }
    const existing = items.find(i => i.product_id === productId);
    if (existing) {
      await updateItem(existing.id, existing.quantity + quantity);
      return;
    }
    const { error } = await supabase.from("cart_items").insert({ user_id: user.id, product_id: productId, quantity });
    if (error) { toast.error(error.message); return; }
    toast.success("Added to cart");
    await refresh();
  };

  const updateItem = async (id: string, quantity: number) => {
    if (quantity < 1) return removeItem(id);
    const { error } = await supabase.from("cart_items").update({ quantity }).eq("id", id);
    if (error) { toast.error(error.message); return; }
    await refresh();
  };

  const removeItem = async (id: string) => {
    const { error } = await supabase.from("cart_items").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    await refresh();
  };

  const clearCart = async () => {
    if (!user) return;
    const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id);
    if (error) { console.error(error); return; }
    setItems([]);
  };

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.quantity * Number(i.product.price), 0);

  return <Ctx.Provider value={{ items, count, subtotal, loading, addItem, updateItem, removeItem, clearCart, refresh }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
}
