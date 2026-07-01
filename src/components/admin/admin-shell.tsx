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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground sm:size-9">
              S
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-base font-bold sm:text-lg">SkyGear Admin</div>
              <div className="hidden text-xs opacity-70 sm:block">Store management dashboard</div>
            </div>
          </div>
          <Link
            to="/"
            className="flex shrink-0 items-center gap-1.5 text-xs opacity-80 transition hover:text-primary sm:text-sm"
          >
            <span className="hidden sm:inline">View store</span>
            <span className="sm:hidden">Store</span>
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:gap-6 sm:px-4 sm:py-6 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit space-y-2 lg:sticky lg:top-6 lg:self-start">
          {/* Mobile / tablet: always show every section */}
          <div className="rounded-lg border border-border bg-card p-3 lg:hidden">
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Section
            </label>
            <select
              value={tab}
              onChange={(e) => onTab(e.target.value as AdminTab)}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
            >
              {NAV.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
            <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {NAV.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onTab(id)}
                  className={cn(
                    "flex items-center justify-center gap-1.5 rounded-md px-2 py-2 text-center text-xs font-medium transition sm:text-sm",
                    tab === id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="size-3.5 shrink-0 sm:size-4" />
                  <span className="truncate">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: vertical sidebar */}
          <nav className="hidden flex-col gap-1 rounded-lg border border-border bg-card p-2 lg:flex">
            {NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onTab(id)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition",
                  tab === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-4 shrink-0" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 rounded-lg border border-border bg-card p-3 sm:p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
