import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as Mail, E as MapPin, R as Clock, b as Phone } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DMnM0VHR.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-oea7Id3r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CUMbSd6k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var submitContactForm = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("c3804d43ea11a75535ebb5ae9e76d1efb9734c08a9487988e3b78f015fb81075"));
function Contact() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const data = {
			name: form.elements.namedItem("name").value,
			email: form.elements.namedItem("email").value,
			subject: form.elements.namedItem("subject").value,
			message: form.elements.namedItem("message").value
		};
		setBusy(true);
		try {
			await submitContactForm({ data });
			toast.success("Thanks! We'll be in touch within one business day.");
			form.reset();
		} catch (err) {
			toast.error("Failed to send message. Please try again later.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-extrabold md:text-5xl",
						children: "Talk to a pilot."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted-foreground",
						children: "Questions about a build, a bulk order, or need warranty help? Send us a message — real people reply, usually within a business day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-10 md:grid-cols-[1fr_360px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "space-y-4 rounded-lg border border-border bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase text-muted-foreground",
											children: "Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "name",
											required: true,
											className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase text-muted-foreground",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "email",
											required: true,
											type: "email",
											className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase text-muted-foreground",
										children: "Subject"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "subject",
										className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sales enquiry" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Warranty / Repair" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bulk order" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Press" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase text-muted-foreground",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										required: true,
										rows: 6,
										className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: busy,
									className: "rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-primary-foreground disabled:opacity-60",
									children: busy ? "Sending…" : "Send message"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "space-y-5 text-sm",
							children: [
								{
									i: Mail,
									t: "Email",
									d: "hello@skygear.com"
								},
								{
									i: Phone,
									t: "Phone",
									d: "+1 (503) 555-0142"
								},
								{
									i: MapPin,
									t: "HQ",
									d: "220 SE Alder St, Portland, OR 97214"
								},
								{
									i: Clock,
									t: "Hours",
									d: "Mon–Fri · 9am–6pm PST"
								}
							].map(({ i: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-lg border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-10 shrink-0 place-items-center rounded-full bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: d
								})] })]
							}, t))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Contact as component };
