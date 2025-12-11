import { _ as a, u as i } from "./index-BC7CqXMw.mjs";
import { createElementBlock as d, openBlock as u, createElementVNode as t, toDisplayString as r } from "vue";
const c = {
  name: "Invoice__subtable",
  props: ["devis", "LegalInfos", "products"],
  setup() {
    return { filters: i() };
  },
  computed: {
    total() {
      return this.products.map((e) => e.price * e.quantity).reduce((e, l) => e + l);
    },
    toPay() {
      return this.total - this.devis.alreadypaid;
    }
  }
}, f = { class: "flex mb-5" }, _ = { class: "flex-1" }, m = { class: "flex-1" }, p = { class: "table w-full text-right" };
function y(e, l, n, s, b, o) {
  return u(), d("div", f, [
    t("div", _, r(n.LegalInfos), 1),
    t("div", m, [
      t("table", p, [
        t("tbody", null, [
          t("tr", null, [
            l[0] || (l[0] = t("td", null, "Total", -1)),
            t("td", null, r(s.filters.currency(o.total)), 1)
          ]),
          t("tr", null, [
            l[1] || (l[1] = t("td", null, "Déjà réglé", -1)),
            t("td", null, r(s.filters.currency(n.devis.alreadypaid)), 1)
          ]),
          t("tr", null, [
            l[2] || (l[2] = t("td", null, "Net à payer", -1)),
            t("td", null, r(s.filters.currency(o.toPay)), 1)
          ])
        ])
      ])
    ])
  ]);
}
const g = /* @__PURE__ */ a(c, [["render", y]]);
export {
  g as default
};
