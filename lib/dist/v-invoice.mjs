import { createElementBlock as c, openBlock as i, createCommentVNode as D, createElementVNode as t, toDisplayString as s, resolveComponent as _, createVNode as f, Fragment as S, renderList as N } from "vue";
const u = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [l, d] of e)
    n[l] = d;
  return n;
}, j = {
  name: "invoice__header__from",
  props: ["from"]
}, M = { class: "flex-1" }, q = ["src"];
function w(o, e, n, l, d, r) {
  return i(), c("div", M, [
    n.from.logo !== null ? (i(), c("img", {
      key: 0,
      src: n.from.logo,
      class: "img-fluid"
    }, null, 8, q)) : D("", !0),
    t("p", null, [
      t("strong", null, s(n.from.title), 1)
    ]),
    t("address", null, [
      t("p", null, s(n.from.road), 1),
      t("span", null, s(n.from.poststalcode), 1),
      t("span", null, s(n.from.city), 1)
    ]),
    t("p", null, "SIRET : " + s(n.from.siret), 1)
  ]);
}
const v = /* @__PURE__ */ u(j, [["render", w]]), E = (o) => new Date(o).toLocaleDateString(["fr-FR"], {
  month: "short",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
}), H = (o) => o + " €";
function m() {
  return {
    currency: H,
    date: E
  };
}
const O = {
  name: "Invoice__header__infos",
  props: ["devis", "to"],
  setup() {
    return { filters: m() };
  }
};
function R(o, e, n, l, d, r) {
  return i(), c("div", null, [
    t("p", null, [
      e[0] || (e[0] = t("span", null, "Facture ", -1)),
      e[1] || (e[1] = t("span", null, "N°", -1)),
      t("span", null, "FC" + s(n.devis.id), 1)
    ]),
    t("p", null, [
      e[2] || (e[2] = t("span", null, "Date: ", -1)),
      t("span", null, s(l.filters.date(n.devis.date)), 1)
    ]),
    t("p", null, [
      e[3] || (e[3] = t("span", null, "Code Client: ", -1)),
      e[4] || (e[4] = t("span", null, "CL", -1)),
      t("span", null, s(n.to.id), 1)
    ])
  ]);
}
const b = /* @__PURE__ */ u(O, [["render", R]]), V = {
  name: "Invoice__header",
  props: ["devis", "from", "to"],
  components: {
    From: v,
    Infos: b
  }
}, B = { class: "flex mb-5 py-2" };
function z(o, e, n, l, d, r) {
  const a = _("From"), p = _("Infos");
  return i(), c("div", B, [
    f(a, { from: n.from }, null, 8, ["from"]),
    f(p, {
      devis: n.devis,
      to: n.to,
      from: n.from
    }, null, 8, ["devis", "to", "from"])
  ]);
}
const g = /* @__PURE__ */ u(V, [["render", z]]), Q = {
  name: "invoice__footer",
  props: ["content"]
};
function A(o, e, n, l, d, r) {
  return i(), c("p", null, [
    t("small", null, s(n.content), 1)
  ]);
}
const h = /* @__PURE__ */ u(Q, [["render", A]]), G = {
  name: "invoice__to",
  props: ["to"]
}, J = { class: "flex justify-end mb-5" };
function K(o, e, n, l, d, r) {
  return i(), c("div", J, [
    t("div", null, [
      t("strong", null, s(n.to.title), 1),
      t("address", null, [
        t("p", null, s(n.to.road), 1),
        t("span", null, s(n.to.postalcode), 1),
        t("span", null, s(n.to.city), 1)
      ])
    ])
  ]);
}
const x = /* @__PURE__ */ u(G, [["render", K]]), U = {
  name: "invoice__title",
  props: ["title"]
}, W = { class: "mb-5" };
function X(o, e, n, l, d, r) {
  return i(), c("h1", W, s(n.title), 1);
}
const $ = /* @__PURE__ */ u(U, [["render", X]]), Y = {
  name: "invoice__paymentmode",
  props: ["paymentmode"]
}, Z = { class: "mb-5" };
function tt(o, e, n, l, d, r) {
  return i(), c("p", Z, "Mode de paiement : " + s(n.paymentmode), 1);
}
const T = /* @__PURE__ */ u(Y, [["render", tt]]), nt = {
  props: ["products"],
  setup() {
    return { filters: m() };
  }
}, et = { class: "table w-full text-right mb-5" }, ot = { class: "py-1" }, st = { class: "py-1" }, lt = { class: "py-1" }, rt = { class: "py-1" }, ct = { class: "py-1" };
function it(o, e, n, l, d, r) {
  return i(), c("table", et, [
    e[0] || (e[0] = t("thead", { class: "border-black border-b" }, [
      t("tr", null, [
        t("th", { class: "py-1" }, "Ref"),
        t("th", { class: "py-1" }, "Description"),
        t("th", { class: "py-1" }, "Quantité"),
        t("th", { class: "py-1" }, "Prix"),
        t("th", { class: "py-1" }, "Total")
      ])
    ], -1)),
    t("tbody", null, [
      (i(!0), c(S, null, N(n.products, (a) => (i(), c("tr", {
        key: a.id
      }, [
        t("td", ot, s(a.id), 1),
        t("td", st, s(a.title), 1),
        t("td", lt, s(a.quantity), 1),
        t("td", rt, s(l.filters.currency(a.price)), 1),
        t("td", ct, s(l.filters.currency(a.price * a.quantity)), 1)
      ]))), 128))
    ])
  ]);
}
const I = /* @__PURE__ */ u(nt, [["render", it]]), dt = {
  name: "Invoice__subtable",
  props: ["devis", "LegalInfos", "products"],
  setup() {
    return { filters: m() };
  },
  computed: {
    total() {
      return this.products.map((o) => o.price * o.quantity).reduce((o, e) => o + e);
    },
    toPay() {
      return this.total - this.devis.alreadypaid;
    }
  }
}, at = { class: "flex mb-5" }, ut = { class: "flex-1" }, _t = { class: "flex-1" }, ft = { class: "table w-full text-right" };
function mt(o, e, n, l, d, r) {
  return i(), c("div", at, [
    t("div", ut, s(n.LegalInfos), 1),
    t("div", _t, [
      t("table", ft, [
        t("tbody", null, [
          t("tr", null, [
            e[0] || (e[0] = t("td", null, "Total", -1)),
            t("td", null, s(l.filters.currency(r.total)), 1)
          ]),
          t("tr", null, [
            e[1] || (e[1] = t("td", null, "Déjà réglé", -1)),
            t("td", null, s(l.filters.currency(n.devis.alreadypaid)), 1)
          ]),
          t("tr", null, [
            e[2] || (e[2] = t("td", null, "Net à payer", -1)),
            t("td", null, s(l.filters.currency(r.toPay)), 1)
          ])
        ])
      ])
    ])
  ]);
}
const pt = /* @__PURE__ */ u(dt, [["render", mt]]), yt = {
  name: "Invoice",
  components: {
    Header: g,
    Footer: h,
    To: x,
    Title: $,
    PaymentMode: T,
    TableProducts: I,
    SubTable: pt
  },
  props: ["devis", "config", "products", "from", "to"],
  computed: {
    title() {
      return this.config.title;
    }
  }
}, vt = { class: "container mx-auto" };
function bt(o, e, n, l, d, r) {
  const a = _("Header"), p = _("To"), F = _("Title"), P = _("PaymentMode"), L = _("TableProducts"), k = _("SubTable"), C = _("Footer");
  return i(), c("div", vt, [
    f(a, {
      devis: n.devis,
      from: n.from,
      to: n.to
    }, null, 8, ["devis", "from", "to"]),
    f(p, { to: n.to }, null, 8, ["to"]),
    f(F, { title: r.title }, null, 8, ["title"]),
    f(P, {
      paymentmode: n.config.title
    }, null, 8, ["paymentmode"]),
    f(L, { products: n.products }, null, 8, ["products"]),
    f(k, {
      devis: n.devis,
      products: n.products,
      LegalInfos: n.config.LegalInfos
    }, null, 8, ["devis", "products", "LegalInfos"]),
    f(C, {
      content: n.config.footerContent
    }, null, 8, ["content"])
  ]);
}
const gt = /* @__PURE__ */ u(yt, [["render", bt]]), ht = {
  props: ["devis", "LegalInfos"],
  setup() {
    return { filters: m() };
  },
  computed: {
    total() {
      return this.devis.products.map((o) => o.price * o.quantity).reduce((o, e) => o + e);
    },
    toPay() {
      return this.total - this.devis.alreadypaid;
    }
  }
}, xt = { class: "flex mb-5" }, $t = { class: "flex-1" }, Tt = { class: "flex-1" }, It = { class: "table w-full text-right" };
function Ft(o, e, n, l, d, r) {
  return i(), c("div", xt, [
    t("div", $t, s(n.LegalInfos), 1),
    t("div", Tt, [
      t("table", It, [
        t("tbody", null, [
          t("tr", null, [
            e[0] || (e[0] = t("td", null, "Total", -1)),
            t("td", null, s(l.filters.currency(r.total)), 1)
          ]),
          t("tr", null, [
            e[1] || (e[1] = t("td", null, "Déjà réglé", -1)),
            t("td", null, s(l.filters.currency(n.devis.alreadypaid)), 1)
          ]),
          t("tr", null, [
            e[2] || (e[2] = t("td", null, "Net à payer", -1)),
            t("td", null, s(l.filters.currency(r.toPay)), 1)
          ])
        ])
      ])
    ])
  ]);
}
const Pt = /* @__PURE__ */ u(ht, [["render", Ft]]), y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Footer: h,
  From: v,
  Header: g,
  Infos: b,
  Invoice: gt,
  PaymentMode: T,
  TableProducts: I,
  Title: $,
  To: x,
  TotalTable: Pt
}, Symbol.toStringTag, { value: "Module" })), kt = (o, e = {}) => {
  for (const n in y) {
    const l = e.prefix ? e.prefix + n : n;
    o.component(l, y[n]);
  }
};
export {
  h as Footer,
  v as From,
  g as Header,
  b as Infos,
  gt as Invoice,
  T as PaymentMode,
  I as TableProducts,
  $ as Title,
  x as To,
  Pt as TotalTable,
  kt as install
};
