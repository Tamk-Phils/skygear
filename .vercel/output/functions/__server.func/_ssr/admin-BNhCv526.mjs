import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DwZASlIa.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-context-BmYGnn9n.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { P as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as LayoutDashboard, I as ExternalLink, P as FolderTree, S as Package, W as TriangleAlert, a as Users, f as ShoppingCart, g as Search, l as Trash2, r as X, u as Star, v as Plus, x as Pencil } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as ProductImage } from "./product-image-Do9az2Qp.mjs";
import { t as Button } from "./button-PJVP9td7.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BNhCv526.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		id: "overview",
		label: "Overview",
		icon: LayoutDashboard
	},
	{
		id: "products",
		label: "Products",
		icon: Package
	},
	{
		id: "categories",
		label: "Categories",
		icon: FolderTree
	},
	{
		id: "orders",
		label: "Orders",
		icon: ShoppingCart
	},
	{
		id: "users",
		label: "Users",
		icon: Users
	},
	{
		id: "reviews",
		label: "Reviews",
		icon: Star
	}
];
function AdminShell({ tab, onTab, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-muted/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-navy text-navy-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2 sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground sm:size-9",
						children: "S"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-display text-base font-bold sm:text-lg",
							children: "SkyGear Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden text-xs opacity-70 sm:block",
							children: "Store management dashboard"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex shrink-0 items-center gap-1.5 text-xs opacity-80 transition hover:text-primary sm:text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "View store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "Store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-4 px-3 py-4 sm:gap-6 sm:px-4 sm:py-6 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit space-y-2 lg:sticky lg:top-6 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-card p-3 lg:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Section"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: tab,
							onChange: (e) => onTab(e.target.value),
							className: "mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary",
							children: NAV.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: id,
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3",
							children: NAV.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onTab(id),
								className: cn("flex items-center justify-center gap-1.5 rounded-md px-2 py-2 text-center text-xs font-medium transition sm:text-sm", tab === id ? "bg-primary text-primary-foreground" : "border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 shrink-0 sm:size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: label
								})]
							}, id))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden flex-col gap-1 rounded-lg border border-border bg-card p-2 lg:flex",
					children: NAV.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onTab(id),
						className: cn("flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition", tab === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), label]
					}, id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-w-0 rounded-lg border border-border bg-card p-3 sm:p-4 md:p-6",
				children
			})]
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-full sm:p-6 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
function slugify(s) {
	return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
var adminInput = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary";
function AdminField({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
		children: label
	}), children] });
}
function AdminTableWrap({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0 sm:min-w-full",
			children
		})
	});
}
function AdminSectionHeader({ title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg font-bold sm:text-xl",
			children: title
		}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: description
		})] }), action]
	});
}
function StatCard({ label, value, hint, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg border border-border bg-card p-5", accent && "border-primary/40 bg-primary/5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mt-2 font-display text-2xl font-extrabold sm:text-3xl", accent && "text-primary"),
				children: value
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
var ORDER_STATUSES = [
	"pending",
	"confirmed",
	"processing",
	"shipped",
	"completed",
	"cancelled"
];
function statusLabel(status) {
	return status.charAt(0).toUpperCase() + status.slice(1);
}
var emptyProductForm = {
	name: "",
	slug: "",
	price: "",
	compare_at_price: "",
	stock: "10",
	short_description: "",
	description: "",
	images: [],
	category_id: "",
	is_featured: false,
	is_published: true
};
function isVideoUrl(url) {
	return /\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i.test(url);
}
function AdminMediaUpload({ values, onChange, disabled, bucket = "product-images" }) {
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [urlInput, setUrlInput] = (0, import_react.useState)("");
	const uploadFiles = async (e) => {
		const files = Array.from(e.target.files ?? []);
		if (!files.length) return;
		setUploading(true);
		const uploaded = [];
		for (const file of files) {
			const ext = file.name.split(".").pop();
			const name = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
			const { error } = await supabase.storage.from(bucket).upload(name, file);
			if (error) {
				toast.error(`${file.name}: ${error.message}`);
				continue;
			}
			const { data } = supabase.storage.from(bucket).getPublicUrl(name);
			uploaded.push(data.publicUrl);
		}
		if (uploaded.length) {
			onChange([...values, ...uploaded]);
			toast.success(`${uploaded.length} file(s) uploaded`);
		}
		setUploading(false);
		e.target.value = "";
	};
	const remove = (i) => onChange(values.filter((_, idx) => idx !== i));
	const move = (from, to) => {
		const arr = [...values];
		const [item] = arr.splice(from, 1);
		arr.splice(to, 0, item);
		onChange(arr);
	};
	const addUrl = () => {
		const val = urlInput.trim();
		if (!val) return;
		onChange([...values, val]);
		setUrlInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			values.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid max-h-72 grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-2 overflow-y-auto pr-1",
				children: values.map((url, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted",
					children: [
						isVideoUrl(url) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: url,
							className: "size-full object-contain",
							muted: true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: url,
							alt: "",
							className: "size-full object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => move(i, i - 1),
									className: "rounded bg-white/90 px-2 py-1 text-xs font-bold text-black hover:bg-white",
									title: "Move left",
									children: "←"
								}), i < values.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => move(i, i + 1),
									className: "rounded bg-white/90 px-2 py-1 text-xs font-bold text-black hover:bg-white",
									title: "Move right",
									children: "→"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => remove(i),
								className: "rounded bg-red-500 px-2 py-1 text-xs font-bold text-white hover:bg-red-600",
								children: "Remove"
							})]
						}),
						i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pointer-events-none absolute bottom-0 left-0 right-0 bg-primary/80 py-0.5 text-center text-[10px] font-bold uppercase text-white",
							children: "Main"
						}),
						isVideoUrl(url) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pointer-events-none absolute left-1 top-1 rounded bg-black/70 px-1 py-0.5 text-[9px] font-bold uppercase text-white",
							children: "Video"
						})
					]
				}, `${url}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: `flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border px-4 py-4 text-sm text-muted-foreground transition hover:border-primary hover:text-primary ${uploading || disabled ? "cursor-not-allowed opacity-50" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/*,video/*",
						multiple: true,
						onChange: uploadFiles,
						disabled: disabled || uploading,
						className: "sr-only"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg",
						children: uploading ? "⏳" : "📎"
					}),
					uploading ? "Uploading…" : `Add images or videos${values.length ? " (more)" : ""}`
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "url",
					value: urlInput,
					onChange: (e) => setUrlInput(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							addUrl();
						}
					},
					placeholder: "Or paste URL…",
					className: `${adminInput} flex-1`,
					disabled
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: addUrl,
					disabled: !urlInput.trim() || disabled,
					className: "shrink-0 rounded-lg border border-border px-3 py-2 text-sm hover:bg-accent disabled:opacity-40",
					children: "Add"
				})]
			})
		]
	});
}
function OverviewPanel() {
	const { data: products } = useQuery({
		queryKey: ["admin-products"],
		queryFn: async () => (await supabase.from("products").select("id, name, stock, is_published, price")).data ?? []
	});
	const { data: categories } = useQuery({
		queryKey: ["admin-cats-full"],
		queryFn: async () => (await supabase.from("categories").select("id")).data ?? []
	});
	const { data: orders } = useQuery({
		queryKey: ["admin-orders"],
		queryFn: async () => (await supabase.from("orders").select("id, status, total")).data ?? []
	});
	const { data: users } = useQuery({
		queryKey: ["admin-users"],
		queryFn: async () => {
			const { data, error } = await supabase.rpc("admin_list_users");
			if (error) throw error;
			return data;
		}
	});
	const published = products?.filter((p) => p.is_published).length ?? 0;
	const lowStock = products?.filter((p) => p.stock <= 5).length ?? 0;
	const pendingOrders = orders?.filter((o) => o.status === "pending").length ?? 0;
	const revenue = orders?.filter((o) => [
		"completed",
		"shipped",
		"processing",
		"confirmed"
	].includes(o.status)).reduce((s, o) => s + Number(o.total), 0) ?? 0;
	const recentLowStock = products?.filter((p) => p.stock <= 5).slice(0, 5) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSectionHeader, {
			title: "Dashboard overview",
			description: "Snapshot of your SkyGear store performance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Products",
					value: products?.length ?? 0,
					hint: `${published} published`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Pending orders",
					value: pendingOrders,
					hint: `${orders?.length ?? 0} total orders`,
					accent: pendingOrders > 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Customers",
					value: users?.length ?? 0,
					hint: "Registered accounts"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Revenue",
					value: `$${revenue.toLocaleString(void 0, { minimumFractionDigits: 2 })}`,
					hint: "Confirmed & fulfilled orders"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
				label: "Categories",
				value: categories?.length ?? 0
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
				label: "Low stock alerts",
				value: lowStock,
				hint: "Products with ≤5 units",
				accent: lowStock > 0
			})]
		}),
		lowStock > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" }), "Low stock items"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-1 text-sm text-muted-foreground",
				children: recentLowStock.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					p.name,
					" — ",
					p.stock,
					" left"
				] }, p.id))
			})]
		})
	] });
}
function ProductsPanel() {
	const qc = useQueryClient();
	const [search, setSearch] = (0, import_react.useState)("");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(emptyProductForm);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const { data: products } = useQuery({
		queryKey: ["admin-products"],
		queryFn: async () => (await supabase.from("products").select("*, category:categories(name)").order("created_at", { ascending: false })).data ?? []
	});
	const { data: cats } = useQuery({
		queryKey: ["admin-cats"],
		queryFn: async () => (await supabase.from("categories").select("*").order("name")).data ?? []
	});
	const filtered = (0, import_react.useMemo)(() => {
		let rows = products ?? [];
		if (search) {
			const q = search.toLowerCase();
			rows = rows.filter((p) => p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q));
		}
		if (categoryFilter) rows = rows.filter((p) => p.category_id === categoryFilter);
		return rows;
	}, [
		products,
		search,
		categoryFilter
	]);
	const openCreate = () => {
		setEditing(null);
		setForm(emptyProductForm);
		setFormOpen(true);
	};
	const openEdit = (p) => {
		setEditing(p);
		setForm({
			name: p.name,
			slug: p.slug,
			price: String(p.price),
			compare_at_price: p.compare_at_price ? String(p.compare_at_price) : "",
			stock: String(p.stock),
			short_description: p.short_description ?? "",
			description: p.description ?? "",
			images: p.images ?? [],
			category_id: p.category_id ?? "",
			is_featured: p.is_featured,
			is_published: p.is_published
		});
		setFormOpen(true);
	};
	const save = async (e) => {
		e.preventDefault();
		setBusy(true);
		const payload = {
			name: form.name,
			slug: form.slug || slugify(form.name),
			price: Number(form.price),
			compare_at_price: form.compare_at_price ? Number(form.compare_at_price) : null,
			stock: Number(form.stock),
			short_description: form.short_description || null,
			description: form.description || null,
			images: form.images,
			category_id: form.category_id || null,
			is_featured: form.is_featured,
			is_published: form.is_published,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const { error } = editing ? await supabase.from("products").update(payload).eq("id", editing.id) : await supabase.from("products").insert(payload);
		setBusy(false);
		if (error) return toast.error(error.message);
		toast.success(editing ? "Product updated" : "Product created");
		setFormOpen(false);
		qc.invalidateQueries({ queryKey: ["admin-products"] });
		qc.invalidateQueries({ queryKey: ["featured-products"] });
		qc.invalidateQueries({ queryKey: ["shop"] });
	};
	const del = async (id) => {
		if (!confirm("Delete this product permanently?")) return;
		const { error } = await supabase.from("products").delete().eq("id", id);
		if (error) return toast.error(error.message);
		toast.success("Product deleted");
		qc.invalidateQueries({ queryKey: ["admin-products"] });
	};
	const toggle = async (id, field, value) => {
		const payload = field === "is_published" ? { is_published: value } : { is_featured: value };
		const { error } = await supabase.from("products").update(payload).eq("id", id);
		if (error) return toast.error(error.message);
		qc.invalidateQueries({ queryKey: ["admin-products"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSectionHeader, {
			title: "Products",
			description: "Manage catalog, pricing, inventory, and visibility.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openCreate,
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add product"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-0 flex-1 sm:min-w-[200px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: search,
					onChange: (e) => setSearch(e.target.value),
					placeholder: "Search products…",
					className: `${adminInput} pl-9`
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: categoryFilter,
				onChange: (e) => setCategoryFilter(e.target.value),
				className: `${adminInput} w-full sm:w-auto sm:min-w-[160px]`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "All categories"
				}), cats?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: c.id,
					children: c.name
				}, c.id))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTableWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Product" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "hidden sm:table-cell",
				children: "Price"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Stock" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "hidden md:table-cell",
				children: "Status"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2 sm:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-10 shrink-0 overflow-hidden rounded bg-muted sm:size-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
						src: p.images?.[0],
						slug: p.slug,
						alt: "",
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "truncate text-xs text-muted-foreground",
							children: [
								p.category?.name ?? "Uncategorized",
								" · /",
								p.slug
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-sm font-medium sm:hidden",
							children: ["$", Number(p.price).toFixed(2)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex flex-wrap gap-1 md:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggle(p.id, "is_published", !p.is_published),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: p.is_published ? "default" : "secondary",
									children: p.is_published ? "Published" : "Draft"
								})
							}), p.is_featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: "Featured"
							})]
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "hidden sm:table-cell",
				children: ["$", Number(p.price).toFixed(2)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: p.stock <= 5 ? "font-semibold text-amber-600" : "",
				children: p.stock
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "hidden md:table-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggle(p.id, "is_published", !p.is_published),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: p.is_published ? "default" : "secondary",
							children: p.is_published ? "Published" : "Draft"
						})
					}), p.is_featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: "Featured"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => openEdit(p),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => del(p.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
					})]
				})
			})
		] }, p.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 5,
			className: "py-10 text-center text-muted-foreground",
			children: "No products found."
		}) })] })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: formOpen,
			onOpenChange: setFormOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing ? "Edit product" : "Add product" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: save,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value,
									slug: editing ? form.slug : slugify(e.target.value)
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Slug",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.slug,
								onChange: (e) => setForm({
									...form,
									slug: slugify(e.target.value)
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
								label: "Price ($)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "number",
									step: "0.01",
									value: form.price,
									onChange: (e) => setForm({
										...form,
										price: e.target.value
									}),
									className: adminInput
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
								label: "Compare at",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.01",
									value: form.compare_at_price,
									onChange: (e) => setForm({
										...form,
										compare_at_price: e.target.value
									}),
									className: adminInput
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Stock",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "number",
								value: form.stock,
								onChange: (e) => setForm({
									...form,
									stock: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.category_id,
								onChange: (e) => setForm({
									...form,
									category_id: e.target.value
								}),
								className: adminInput,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "— none —"
								}), cats?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.name
								}, c.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Images & Videos",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMediaUpload, {
								values: form.images,
								onChange: (urls) => setForm({
									...form,
									images: urls
								}),
								disabled: busy
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Short description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.short_description,
								onChange: (e) => setForm({
									...form,
									short_description: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								value: form.description,
								onChange: (e) => setForm({
									...form,
									description: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.is_published,
									onChange: (e) => setForm({
										...form,
										is_published: e.target.checked
									})
								}), "Published"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.is_featured,
									onChange: (e) => setForm({
										...form,
										is_featured: e.target.checked
									})
								}), "Featured"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "w-full",
							children: busy ? "Saving…" : editing ? "Save changes" : "Create product"
						})
					]
				})]
			})
		})
	] });
}
function CategoriesPanel() {
	const qc = useQueryClient();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		slug: "",
		image_url: "",
		sort_order: "0"
	});
	const { data: cats } = useQuery({
		queryKey: ["admin-cats-full"],
		queryFn: async () => (await supabase.from("categories").select("*").order("sort_order")).data ?? []
	});
	const openCreate = () => {
		setEditing(null);
		setForm({
			name: "",
			slug: "",
			image_url: "",
			sort_order: String((cats?.length ?? 0) + 1)
		});
		setFormOpen(true);
	};
	const openEdit = (c) => {
		setEditing(c);
		setForm({
			name: c.name,
			slug: c.slug,
			image_url: c.image_url ?? "",
			sort_order: String(c.sort_order)
		});
		setFormOpen(true);
	};
	const save = async (e) => {
		e.preventDefault();
		const payload = {
			name: form.name,
			slug: form.slug || slugify(form.name),
			image_url: form.image_url || null,
			sort_order: Number(form.sort_order)
		};
		const { error } = editing ? await supabase.from("categories").update(payload).eq("id", editing.id) : await supabase.from("categories").insert(payload);
		if (error) return toast.error(error.message);
		toast.success(editing ? "Category updated" : "Category created");
		setFormOpen(false);
		qc.invalidateQueries({ queryKey: ["admin-cats-full"] });
		qc.invalidateQueries({ queryKey: ["categories"] });
		qc.invalidateQueries({ queryKey: ["admin-cats"] });
	};
	const del = async (id) => {
		if (!confirm("Delete this category?")) return;
		const { error } = await supabase.from("categories").delete().eq("id", id);
		if (error) return toast.error(error.message);
		toast.success("Category deleted");
		qc.invalidateQueries({ queryKey: ["admin-cats-full"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSectionHeader, {
			title: "Categories",
			description: "Organize drones, batteries, gimbals, and accessories.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openCreate,
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add category"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTableWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Category" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "hidden sm:table-cell",
				children: "Slug"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "hidden md:table-cell",
				children: "Sort"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: cats?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2 sm:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-10 shrink-0 overflow-hidden rounded bg-muted sm:size-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImage, {
						src: c.image_url,
						slug: c.slug,
						alt: "",
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground sm:hidden",
						children: ["/", c.slug]
					})]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "hidden text-muted-foreground sm:table-cell",
				children: ["/", c.slug]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "hidden md:table-cell",
				children: c.sort_order
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => openEdit(c),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => del(c.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
					})]
				})
			})
		] }, c.id)) })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: formOpen,
			onOpenChange: setFormOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "w-[calc(100%-2rem)] max-w-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing ? "Edit category" : "Add category" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: save,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value,
									slug: editing ? form.slug : slugify(e.target.value)
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Slug",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.slug,
								onChange: (e) => setForm({
									...form,
									slug: slugify(e.target.value)
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Sort order",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: form.sort_order,
								onChange: (e) => setForm({
									...form,
									sort_order: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMediaUpload, {
								values: form.image_url ? [form.image_url] : [],
								onChange: (urls) => setForm({
									...form,
									image_url: urls[0] ?? ""
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: editing ? "Save changes" : "Create category"
						})
					]
				})]
			})
		})
	] });
}
function OrdersPanel() {
	const qc = useQueryClient();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const { data: orders } = useQuery({
		queryKey: ["admin-orders"],
		queryFn: async () => (await supabase.from("orders").select("*, order_items(*)").order("created_at", { ascending: false })).data ?? []
	});
	const filtered = (0, import_react.useMemo)(() => {
		const rows = orders ?? [];
		if (!statusFilter) return rows;
		return rows.filter((o) => o.status === statusFilter);
	}, [orders, statusFilter]);
	const updateStatus = async (id, status) => {
		const { error } = await supabase.from("orders").update({ status }).eq("id", id);
		if (error) return toast.error(error.message);
		toast.success(`Order marked as ${statusLabel(status)}`);
		qc.invalidateQueries({ queryKey: ["admin-orders"] });
		if (selected?.id === id) setSelected({
			...selected,
			status
		});
	};
	const saveNotes = async () => {
		if (!selected) return;
		const { error } = await supabase.from("orders").update({ admin_notes: notes || null }).eq("id", selected.id);
		if (error) return toast.error(error.message);
		toast.success("Notes saved");
		qc.invalidateQueries({ queryKey: ["admin-orders"] });
	};
	const openOrder = (o) => {
		setSelected(o);
		setNotes(o.admin_notes ?? "");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSectionHeader, {
			title: "Orders",
			description: "Review checkout submissions and update fulfillment status."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: statusFilter,
				onChange: (e) => setStatusFilter(e.target.value),
				className: `${adminInput} w-full sm:w-auto sm:min-w-[180px]`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "All statuses"
				}), ORDER_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: s,
					children: statusLabel(s)
				}, s))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTableWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Reference" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "hidden sm:table-cell",
					children: "Customer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Total" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "hidden md:table-cell",
					children: "Date"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [filtered.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "cursor-pointer",
				onClick: () => openOrder(o),
				"data-state": selected?.id === o.id ? "selected" : void 0,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs font-semibold",
						children: o.order_ref
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 truncate text-xs text-muted-foreground sm:hidden",
						children: o.customer_email ?? "—"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "hidden text-sm sm:table-cell",
						children: o.customer_email ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: ["$", Number(o.total).toFixed(2)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: o.status === "pending" ? "secondary" : "default",
						children: statusLabel(o.status)
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "hidden text-xs text-muted-foreground md:table-cell",
						children: new Date(o.created_at).toLocaleDateString()
					})
				]
			}, o.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "py-10 text-center text-muted-foreground",
				children: "No orders yet. Orders appear when customers complete checkout."
			}) })] })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-fit rounded-lg border border-border bg-muted/30 p-4",
				children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: selected.order_ref
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: selected.customer_email
					}),
					selected.card_name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [
							"Card: ",
							selected.card_name,
							selected.card_last_four && ` · **** ${selected.card_last_four}`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-2 text-sm",
						children: selected.order_items?.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: it.product_slug },
								className: "hover:text-primary",
								children: [
									it.product_name,
									" ×",
									it.quantity
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", (Number(it.unit_price) * it.quantity).toFixed(2)] })]
						}, it.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 border-t border-border pt-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", Number(selected.subtotal).toFixed(2)] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", Number(selected.shipping).toFixed(2)] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex justify-between font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-primary",
									children: ["$", Number(selected.total).toFixed(2)]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
						label: "Status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: selected.status,
							onChange: (e) => updateStatus(selected.id, e.target.value),
							className: adminInput,
							children: ORDER_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: statusLabel(s)
							}, s))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
						label: "Admin notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							className: adminInput,
							placeholder: "Internal notes for support follow-up…"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: saveNotes,
						variant: "outline",
						className: "mt-2 w-full",
						children: "Save notes"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Select an order to view details."
				})
			})]
		})
	] });
}
function UsersPanel() {
	const qc = useQueryClient();
	const { data: users, isLoading } = useQuery({
		queryKey: ["admin-users"],
		queryFn: async () => {
			const { data, error } = await supabase.rpc("admin_list_users");
			if (error) throw error;
			return data;
		}
	});
	const toggleAdmin = async (userId, isAdmin) => {
		if (isAdmin) {
			if (!confirm("Remove admin access from this user?")) return;
			const { error } = await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", "admin");
			if (error) return toast.error(error.message);
			toast.success("Admin access removed");
		} else {
			const { error } = await supabase.from("user_roles").insert({
				user_id: userId,
				role: "admin"
			});
			if (error) return toast.error(error.message);
			toast.success("Admin access granted");
		}
		qc.invalidateQueries({ queryKey: ["admin-users"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSectionHeader, {
		title: "Users",
		description: "Manage customer accounts and admin access."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTableWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
			className: "hidden md:table-cell",
			children: "Email"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Roles" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
			className: "hidden lg:table-cell",
			children: "Joined"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
			className: "text-right",
			children: "Actions"
		})
	] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
		colSpan: 5,
		className: "py-10 text-center text-muted-foreground",
		children: "Loading users…"
	}) }) : users?.map((u) => {
		const isAdmin = u.roles?.includes("admin");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-medium",
					children: u.display_name ?? u.user_id.slice(0, 8) + "…"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-xs text-muted-foreground md:hidden",
					children: u.email
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "hidden text-sm md:table-cell",
				children: u.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: (u.roles?.length ? u.roles : ["customer"]).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: r === "admin" ? "default" : "secondary",
					children: r
				}, r))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "hidden text-xs text-muted-foreground lg:table-cell",
				children: new Date(u.created_at).toLocaleDateString()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "text-xs sm:text-sm",
					onClick: () => toggleAdmin(u.user_id, !!isAdmin),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: isAdmin ? "Revoke admin" : "Make admin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sm:hidden",
						children: isAdmin ? "Revoke" : "Admin"
					})]
				})
			})
		] }, u.user_id);
	}) })] }) })] });
}
function ReviewsPanel() {
	const qc = useQueryClient();
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		product_id: "",
		author_name: "",
		rating: "5",
		content: ""
	});
	const { data: reviews, isLoading } = useQuery({
		queryKey: ["admin-reviews"],
		queryFn: async () => {
			const { data, error } = await supabase.from("product_reviews").select("*, product:products(name)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const { data: products } = useQuery({
		queryKey: ["admin-products"],
		queryFn: async () => (await supabase.from("products").select("id, name").order("name")).data ?? []
	});
	const openCreate = () => {
		setForm({
			product_id: "",
			author_name: "",
			rating: "5",
			content: ""
		});
		setFormOpen(true);
	};
	const save = async (e) => {
		e.preventDefault();
		setBusy(true);
		const { error } = await supabase.from("product_reviews").insert({
			product_id: form.product_id,
			author_name: form.author_name,
			rating: Number(form.rating),
			content: form.content
		});
		setBusy(false);
		if (error) return toast.error(error.message);
		toast.success("Review added");
		setFormOpen(false);
		qc.invalidateQueries({ queryKey: ["admin-reviews"] });
		qc.invalidateQueries({ queryKey: ["product-reviews"] });
	};
	const del = async (id) => {
		if (!confirm("Delete this review?")) return;
		const { error } = await supabase.from("product_reviews").delete().eq("id", id);
		if (error) return toast.error(error.message);
		toast.success("Review deleted");
		qc.invalidateQueries({ queryKey: ["admin-reviews"] });
		qc.invalidateQueries({ queryKey: ["product-reviews"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSectionHeader, {
			title: "Product Reviews",
			description: "Manage customer reviews for products.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openCreate,
				className: "gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add review"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTableWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Author" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Product" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Rating" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Review" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-right",
				children: "Actions"
			})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 5,
			className: "py-10 text-center text-muted-foreground",
			children: "Loading reviews…"
		}) }) : reviews?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 5,
			className: "py-10 text-center text-muted-foreground",
			children: "No reviews found."
		}) }) : reviews?.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-medium",
				children: r.author_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.product?.name ?? "Unknown Product" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [r.rating, " / 5"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "max-w-[200px] truncate text-muted-foreground",
				title: r.content,
				children: r.content
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => del(r.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
				})
			})
		] }, r.id)) })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: formOpen,
			onOpenChange: setFormOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[90vh] w-[calc(100%-2rem)] max-w-md overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add Review" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: save,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Product",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: true,
								value: form.product_id,
								onChange: (e) => setForm({
									...form,
									product_id: e.target.value
								}),
								className: adminInput,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "— Select a product —"
								}), products?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.id,
									children: p.name
								}, p.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Author Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.author_name,
								onChange: (e) => setForm({
									...form,
									author_name: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Rating (1-5)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "number",
								min: "1",
								max: "5",
								value: form.rating,
								onChange: (e) => setForm({
									...form,
									rating: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminField, {
							label: "Review Content",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 4,
								value: form.content,
								onChange: (e) => setForm({
									...form,
									content: e.target.value
								}),
								className: adminInput
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "w-full",
							children: busy ? "Saving…" : "Save Review"
						})
					]
				})]
			})
		})
	] });
}
function AdminPage() {
	const { user, isAdmin, loading } = useAuth();
	const nav = useNavigate();
	const qc = useQueryClient();
	const [tab, setTab] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		if (!loading && !user) nav({ to: "/auth" });
	}, [
		user,
		loading,
		nav
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-muted/30 text-sm text-muted-foreground",
		children: "Loading dashboard…"
	});
	if (!user) return null;
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotAdmin, {
		userId: user.id,
		onGranted: () => qc.invalidateQueries()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		tab,
		onTab: setTab,
		children: [
			tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPanel, {}),
			tab === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsPanel, {}),
			tab === "categories" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoriesPanel, {}),
			tab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersPanel, {}),
			tab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersPanel, {}),
			tab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsPanel, {})
		]
	});
}
function NotAdmin({ userId, onGranted }) {
	const { data: anyAdmin, isLoading } = useQuery({
		queryKey: ["any-admin"],
		queryFn: async () => {
			const { data, error } = await supabase.rpc("any_admin_exists");
			if (error) throw error;
			return !!data;
		}
	});
	const claim = async () => {
		const { error } = await supabase.from("user_roles").insert({
			user_id: userId,
			role: "admin"
		});
		if (error) return toast.error(error.message);
		toast.success("You're now an admin");
		onGranted();
		window.location.reload();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-muted/30 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md rounded-lg border border-border bg-card p-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-extrabold",
				children: "Admin access required"
			}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Checking…"
			}) : anyAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Ask an existing admin to grant you access from the Users panel."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "No admins exist yet. Claim admin access for your account:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: claim,
				className: "mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-bold uppercase text-primary-foreground",
				children: "Make me admin"
			})] })]
		})
	});
}
//#endregion
export { AdminPage as component };
