import { defineComponent as a, reactive as p, computed as f, onBeforeMount as b, openBlock as s, createElementBlock as l, unref as I, createVNode as _ } from "vue";
import { ShowTypes as v } from "./types.js";
import w from "./default-search.vue.js";
const C = { class: "form-div-class" }, y = { key: 0 }, D = { key: 1 }, E = a({
  name: "SpTableSearch"
}), g = /* @__PURE__ */ a({
  ...E,
  props: {
    model: {},
    column: {},
    type: {},
    labelPosition: {},
    labelWidth: {},
    searchItems: {}
  },
  emits: ["searchEvent", "resetDataEvent"],
  setup(m, { emit: r }) {
    const t = m, i = [], e = p({
      searchForm: t.model,
      rowItems: i,
      lineColumn: t.column ? t.column : 2,
      buttonLine: !0
    }), c = f(() => t.labelWidth ? t.labelWidth : "100px"), u = () => {
      if (t.column || (e.lineColumn = 2), e.rowItems || (e.rowItems = []), !t.searchItems)
        e.rowItems = [];
      else {
        let o = [];
        for (let n = 0; n < t.searchItems.length; n++)
          o.push({ ...t.searchItems[n] }), (n + 1) % e.lineColumn === 0 && (e.rowItems.push({ ...o }), o = []);
        if (o && o.length > 0) {
          e.rowItems.push({ ...o });
          let n = e.lineColumn;
          o.length < n && (e.buttonLine = !1);
        }
      }
    };
    b(() => {
      console.log(t), u();
    });
    const h = (o) => {
      e.searchForm = o, r("searchEvent", e.searchForm);
    }, d = (o) => {
      e.searchForm = o, r("resetDataEvent", e.searchForm);
    };
    return (o, n) => (s(), l("div", C, [
      !t.type || t.type === I(v).default ? (s(), l("div", y, [
        _(w, {
          mode: t.model,
          labelPosition: t.labelPosition,
          labelWidth: c.value,
          column: e.lineColumn,
          rowItems: e.rowItems,
          buttonLine: e.buttonLine,
          onSearchEvent: h,
          onResetDataEvent: d
        }, null, 8, ["mode", "labelPosition", "labelWidth", "column", "rowItems", "buttonLine"])
      ])) : (s(), l("div", D, "其他的还未实现"))
    ]));
  }
});
export {
  g as default
};
