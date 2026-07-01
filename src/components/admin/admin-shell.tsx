import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Users,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type AdminTab = "overview" | "products" | "categories" | "orders" | "users";

const NAV: { id: AdminTab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "categories", label: "Categories", icon: FolderTree },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "users", label: "Users", icon: Users },
];

export function AdminShell({
  tab,
  onTab,
  children,
}: {
  tab: AdminTab;
  onTab: (t: AdminTab) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              S
            </div>
            <div>
              <div className="font-display text-lg font-bold">SkyGear Admin</div>
              <div className="text-xs opacity-70">Store management dashboard</div>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm opacity-80 transition hover:text-primary"
          >
            View store <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-lg border border-border bg-card p-2 lg:sticky lg:top-6">
          <nav className="flex gap-1 overflow-x-auto lg:flex-col">
            {NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onTab(id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition",
                  tab === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 rounded-lg border border-border bg-card p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
