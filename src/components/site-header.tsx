import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Facebook, Twitter, Menu, LayoutGrid } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export function SiteHeader() {
  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();
  const [q, setQ] = useState("");

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline opacity-80">ENGLISH</span>
            <span className="hidden sm:inline opacity-80">|</span>
            <span className="font-medium tracking-wide">FREE SHIPPING ON ORDERS ABOVE $300</span>
          </div>
          <div className="flex items-center gap-3 opacity-90">
            <a href="#" aria-label="Facebook"><Facebook className="size-4" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="size-4" /></a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hidden sm:inline hover:text-primary">NEWSLETTER</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <div className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground font-bold">S</div>
            <span className="font-display text-lg font-bold tracking-tight">SkyGear<span className="text-primary">®</span></span>
          </Link>

          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = `/shop?q=${encodeURIComponent(q)}`; }}
            className="hidden flex-1 items-center overflow-hidden rounded-full bg-white text-foreground md:flex"
          >
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search for products"
              className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="grid size-11 place-items-center bg-primary text-primary-foreground">
              <Search className="size-5" />
            </button>
          </form>

          <div className="flex items-center gap-5">
            {user ? (
              <div className="flex items-center gap-3 text-sm">
                {isAdmin && <Link to="/admin" className="hidden md:inline hover:text-primary">Admin</Link>}
                <button onClick={signOut} className="hidden md:inline hover:text-primary">Sign out</button>
              </div>
            ) : (
              <Link to="/auth" className="flex items-center gap-1.5 text-sm hover:text-primary">
                <User className="size-5" />
                <span className="hidden sm:inline">Login / Register</span>
              </Link>
            )}
            <Link to="/cart" className="relative flex items-center gap-1.5 hover:text-primary">
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4">
          <div className="flex items-center gap-2 border-r border-border py-4 pr-6 text-sm font-semibold uppercase tracking-wide">
            <LayoutGrid className="size-4" /> Browse Categories
          </div>
          <nav className="flex flex-1 items-center gap-6 py-4 text-sm font-semibold uppercase tracking-wide">
            <Link to="/" className="text-primary [&.active]:text-primary">Home</Link>
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <Link to="/cart" className="hover:text-primary">Cart</Link>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <Menu className="size-5 md:hidden" />
        </div>
      </div>
    </header>
  );
}
