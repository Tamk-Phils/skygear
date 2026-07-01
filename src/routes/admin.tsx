import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";
import { AdminShell, type AdminTab } from "@/components/admin/admin-shell";
import {
  OverviewPanel,
  ProductsPanel,
  CategoriesPanel,
  OrdersPanel,
  UsersPanel,
} from "@/components/admin/admin-panels";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/admin")({
  head: () => {
    const seo = buildMeta({
      title: "Admin Dashboard",
      description: "SkyGear store management dashboard.",
      path: "/admin",
      noindex: true,
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: AdminPage,
});

function AdminPage() {
  const { user, isAdmin, loading } = useAuth();
  const nav = useNavigate();
  const qc = useQueryClient();
  const [tab, setTab] = useState<AdminTab>("overview");

  useEffect(() => {
    if (!loading && !user) nav({ to: "/auth" });
  }, [user, loading, nav]);

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-muted/30 text-sm text-muted-foreground">
        Loading dashboard…
      </div>
    );
  }

  if (!user) return null;

  if (!isAdmin) {
    return <NotAdmin userId={user.id} onGranted={() => qc.invalidateQueries()} />;
  }

  return (
    <AdminShell tab={tab} onTab={setTab}>
      {tab === "overview" && <OverviewPanel />}
      {tab === "products" && <ProductsPanel />}
      {tab === "categories" && <CategoriesPanel />}
      {tab === "orders" && <OrdersPanel />}
      {tab === "users" && <UsersPanel />}
    </AdminShell>
  );
}

function NotAdmin({ userId, onGranted }: { userId: string; onGranted: () => void }) {
  const { data: anyAdmin, isLoading } = useQuery({
    queryKey: ["any-admin"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("any_admin_exists");
      if (error) throw error;
      return !!data;
    },
  });

  const claim = async () => {
    const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: "admin" });
    if (error) return toast.error(error.message);
    toast.success("You're now an admin");
    onGranted();
    window.location.reload();
  };

  return (
    <div className="grid min-h-screen place-items-center bg-muted/30 px-4">
      <div className="max-w-md rounded-lg border border-border bg-card p-8 text-center">
        <h1 className="font-display text-2xl font-extrabold">Admin access required</h1>
        {isLoading ? (
          <p className="mt-2 text-muted-foreground">Checking…</p>
        ) : anyAdmin ? (
          <p className="mt-2 text-muted-foreground">
            Ask an existing admin to grant you access from the Users panel.
          </p>
        ) : (
          <>
            <p className="mt-2 text-muted-foreground">
              No admins exist yet. Claim admin access for your account:
            </p>
            <button
              onClick={claim}
              className="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-bold uppercase text-primary-foreground"
            >
              Make me admin
            </button>
          </>
        )}
      </div>
    </div>
  );
}
