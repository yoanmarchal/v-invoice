import { resolveComponent as _, createElementBlock as r, openBlock as c, createVNode as f, createCommentVNode as M, createElementVNode as t, toDisplayString as s, Fragment as z, renderList as k } from "vue";
const u = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [l, i] of o)
    e[l] = i;
  return e;
}, C = {
  name: "Invoice__header",
  props: ["devis", "from", "to"],
  components: {
    From: () => Promise.resolve().then(() => A),
    Infos: () => Promise.resolve().then(() => tt)
  }
}, L = { class: "flex mb-5 py-2" };
function D(n, o, e, l, i, a) {
  const d = _("From"), m = _("Infos");
  return c(), r("div", L, [
    f(d, { from: e.from }, null, 8, ["from"]),
    f(m, {
      devis: e.devis,
      to: e.to,
      from: e.from
    }, null, 8, ["devis", "to", "from"])
  ]);
}
const b = /* @__PURE__ */ u(C, [["render", D]]), H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b
}, Symbol.toStringTag, { value: "Module" })), N = {
  name: "Invoice",
  components: {
    Header: () => Promise.resolve().then(() => H),
    Footer: () => Promise.resolve().then(() => Ot),
    To: () => Promise.resolve().then(() => U),
    Title: () => Promise.resolve().then(() => st),
    PaymentMode: () => Promise.resolve().then(() => at),
    TableProducts: () => Promise.resolve().then(() => bt),
    SubTable: () => import("./Subtable-CG1KMFwE.mjs")
  },
  props: ["devis", "config", "products", "from", "to"],
  computed: {
    title() {
      return this.config.title;
    }
  }
}, q = { class: "container mx-auto" };
function w(n, o, e, l, i, a) {
  const d = _("Header"), m = _("To"), S = _("Title"), j = _("PaymentMode"), O = _("TableProducts"), F = _("SubTable"), I = _("Footer");
  return c(), r("div", q, [
    f(d, {
      devis: e.devis,
      from: e.from,
      to: e.to
    }, null, 8, ["devis", "from", "to"]),
    f(m, { to: e.to }, null, 8, ["to"]),
    f(S, { title: a.title }, null, 8, ["title"]),
    f(j, {
      paymentmode: e.config.title
    }, null, 8, ["paymentmode"]),
    f(O, { products: e.products }, null, 8, ["products"]),
    f(F, {
      devis: e.devis,
      products: e.products,
      LegalInfos: e.config.LegalInfos
    }, null, 8, ["devis", "products", "LegalInfos"]),
    f(I, {
      content: e.config.footerContent
    }, null, 8, ["content"])
  ]);
}
const E = /* @__PURE__ */ u(N, [["render", w]]), R = {
  name: "invoice__header__from",
  props: ["from"]
}, V = { class: "flex-1" }, B = ["src"];
function Q(n, o, e, l, i, a) {
  return c(), r("div", V, [
    e.from.logo !== null ? (c(), r("img", {
      key: 0,
      src: e.from.logo,
      class: "img-fluid"
    }, null, 8, B)) : M("", !0),
    t("p", null, [
      t("strong", null, s(e.from.title), 1)
    ]),
    t("address", null, [
      t("p", null, s(e.from.road), 1),
      t("span", null, s(e.from.poststalcode), 1),
      t("span", null, s(e.from.city), 1)
    ]),
    t("p", null, "SIRET : " + s(e.from.siret), 1)
  ]);
}
const v = /* @__PURE__ */ u(R, [["render", Q]]), A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v
}, Symbol.toStringTag, { value: "Module" })), G = {
  name: "invoice__to",
  props: ["to"]
}, J = { class: "flex justify-end mb-5" };
function K(n, o, e, l, i, a) {
  return c(), r("div", J, [
    t("div", null, [
      t("strong", null, s(e.to.title), 1),
      t("address", null, [
        t("p", null, s(e.to.road), 1),
        t("span", null, s(e.to.postalcode), 1),
        t("span", null, s(e.to.city), 1)
      ])
    ])
  ]);
}
const g = /* @__PURE__ */ u(G, [["render", K]]), U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: g
}, Symbol.toStringTag, { value: "Module" })), W = (n) => new Date(n).toLocaleDateString(["fr-FR"], { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }), X = (n) => n + " €";
function p() {
  return {
    currency: X,
    date: W
  };
}
const Y = {
  name: "Invoice__header__infos",
  props: ["devis", "to"],
  setup() {
    return { filters: p() };
  }
};
function Z(n, o, e, l, i, a) {
  return c(), r("div", null, [
    t("p", null, [
      o[0] || (o[0] = t("span", null, "Facture ", -1)),
      o[1] || (o[1] = t("span", null, "N°", -1)),
      t("span", null, "FC" + s(e.devis.id), 1)
    ]),
    t("p", null, [
      o[2] || (o[2] = t("span", null, "Date: ", -1)),
      t("span", null, s(l.filters.date(e.devis.date)), 1)
    ]),
    t("p", null, [
      o[3] || (o[3] = t("span", null, "Code Client: ", -1)),
      o[4] || (o[4] = t("span", null, "CL", -1)),
      t("span", null, s(e.to.id), 1)
    ])
  ]);
}
const h = /* @__PURE__ */ u(Y, [["render", Z]]), tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h
}, Symbol.toStringTag, { value: "Module" })), et = {
  name: "invoice__title",
  props: ["title"]
}, ot = { class: "mb-5" };
function nt(n, o, e, l, i, a) {
  return c(), r("h1", ot, s(e.title), 1);
}
const $ = /* @__PURE__ */ u(et, [["render", nt]]), st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $
}, Symbol.toStringTag, { value: "Module" })), lt = {
  name: "invoice__paymentmode",
  props: ["paymentmode"]
}, rt = { class: "mb-5" };
function ct(n, o, e, l, i, a) {
  return c(), r("p", rt, "Mode de paiement : " + s(e.paymentmode), 1);
}
const T = /* @__PURE__ */ u(lt, [["render", ct]]), at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T
}, Symbol.toStringTag, { value: "Module" })), it = {
  props: ["products"],
  setup() {
    return { filters: p() };
  }
}, dt = { class: "table w-full text-right mb-5" }, ut = { class: "py-1" }, _t = { class: "py-1" }, ft = { class: "py-1" }, mt = { class: "py-1" }, pt = { class: "py-1" };
function yt(n, o, e, l, i, a) {
  return c(), r("table", dt, [
    o[0] || (o[0] = t("thead", { class: "border-black border-b" }, [
      t("tr", null, [
        t("th", { class: "py-1" }, "Ref"),
        t("th", { class: "py-1" }, "Description"),
        t("th", { class: "py-1" }, "Quantité"),
        t("th", { class: "py-1" }, "Prix"),
        t("th", { class: "py-1" }, "Total")
      ])
    ], -1)),
    t("tbody", null, [
      (c(!0), r(z, null, k(e.products, (d) => (c(), r("tr", {
        key: d.id
      }, [
        t("td", ut, s(d.id), 1),
        t("td", _t, s(d.title), 1),
        t("td", ft, s(d.quantity), 1),
        t("td", mt, s(l.filters.currency(d.price)), 1),
        t("td", pt, s(l.filters.currency(d.price * d.quantity)), 1)
      ]))), 128))
    ])
  ]);
}
const P = /* @__PURE__ */ u(it, [["render", yt]]), bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: P
}, Symbol.toStringTag, { value: "Module" })), vt = {
  props: ["devis", "LegalInfos"],
  setup() {
    return { filters: p() };
  },
  computed: {
    total() {
      return this.devis.products.map((n) => n.price * n.quantity).reduce((n, o) => n + o);
    },
    toPay() {
      return this.total - this.devis.alreadypaid;
    }
  }
}, gt = { class: "flex mb-5" }, ht = { class: "flex-1" }, $t = { class: "flex-1" }, Tt = { class: "table w-full text-right" };
function Pt(n, o, e, l, i, a) {
  return c(), r("div", gt, [
    t("div", ht, s(e.LegalInfos), 1),
    t("div", $t, [
      t("table", Tt, [
        t("tbody", null, [
          t("tr", null, [
            o[0] || (o[0] = t("td", null, "Total", -1)),
            t("td", null, s(l.filters.currency(a.total)), 1)
          ]),
          t("tr", null, [
            o[1] || (o[1] = t("td", null, "Déjà réglé", -1)),
            t("td", null, s(l.filters.currency(e.devis.alreadypaid)), 1)
          ]),
          t("tr", null, [
            o[2] || (o[2] = t("td", null, "Net à payer", -1)),
            t("td", null, s(l.filters.currency(a.toPay)), 1)
          ])
        ])
      ])
    ])
  ]);
}
const xt = /* @__PURE__ */ u(vt, [["render", Pt]]), St = {
  name: "invoice__footer",
  props: ["content"]
};
function jt(n, o, e, l, i, a) {
  return c(), r("p", null, [
    t("small", null, s(e.content), 1)
  ]);
}
const x = /* @__PURE__ */ u(St, [["render", jt]]), Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: x
}, Symbol.toStringTag, { value: "Module" })), y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Footer: x,
  From: v,
  Header: b,
  Infos: h,
  Invoice: E,
  PaymentMode: T,
  TableProducts: P,
  Title: $,
  To: g,
  TotalTable: xt
}, Symbol.toStringTag, { value: "Module" })), It = (n, o = {}) => {
  for (const e in y) {
    const l = o.prefix ? o.prefix + e : e;
    n.component(l, y[e]);
  }
};
export {
  v as F,
  b as H,
  E as I,
  T as P,
  g as T,
  u as _,
  h as a,
  $ as b,
  P as c,
  xt as d,
  x as e,
  It as i,
  p as u
};
