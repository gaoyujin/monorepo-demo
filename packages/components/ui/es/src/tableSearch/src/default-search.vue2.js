import { defineComponent as V, reactive as A, getCurrentInstance as B, resolveComponent as p, openBlock as s, createBlock as m, withCtx as e, createElementBlock as g, Fragment as v, renderList as w, createVNode as a, createTextVNode as _, createCommentVNode as C } from "vue";
import L from "./table-search-item.vue.js";
const T = /* @__PURE__ */ V({
  __name: "default-search",
  props: {
    mode: {},
    labelPosition: {},
    labelWidth: {},
    column: {},
    rowItems: {},
    buttonLine: { type: Boolean }
  },
  emits: ["searchEvent", "resetDataEvent"],
  setup(D, { emit: y }) {
    const t = D, $ = t.mode, r = A({
      searchForm: $
    }), n = B(), h = () => {
      if (n.proxy && n.proxy.$refs && r.searchForm && n.proxy.$refs) {
        const c = n.proxy.$refs;
        for (const i in c) {
          const o = c[i];
          if (Array.isArray(o) && o.length > 0) {
            const l = o[0].getFormValue();
            Object.prototype.hasOwnProperty.call(r.searchForm, l.key) && (r.searchForm[l.key] = l.val);
          }
        }
      }
    }, d = () => {
      h(), y("searchEvent", r.searchForm);
    }, b = () => {
      if (!(n.proxy && n.proxy.$refs && r.searchForm)) {
        h(), y("resetDataEvent", r.searchForm);
        return;
      }
      if (n.proxy.$refs) {
        const c = n.proxy.$refs;
        for (const i in c) {
          const o = c[i];
          Array.isArray(o) && o.length > 0 && o[0].resetFormValue();
        }
      }
      h(), y("resetDataEvent", r.searchForm);
    };
    return (c, i) => {
      const o = p("el-form-item"), l = p("el-col"), f = p("el-button"), k = p("el-row"), E = p("el-form");
      return s(), m(E, {
        data: r.searchForm,
        "label-position": t.labelPosition ? t.labelPosition : "right",
        "label-width": t.labelWidth
      }, {
        default: e(() => [
          (s(!0), g(v, null, w(t.rowItems, (F, x) => (s(), m(k, { key: x }, {
            default: e(() => [
              (s(!0), g(v, null, w(F, (u, P) => (s(), m(l, {
                key: P,
                span: 24 / t.column
              }, {
                default: e(() => [
                  a(o, {
                    label: u.label
                  }, {
                    default: e(() => [
                      a(L, {
                        ref_for: !0,
                        ref: u.prop,
                        itemProps: u,
                        val: r.searchForm[u.prop]
                      }, null, 8, ["itemProps", "val"])
                    ]),
                    _: 2
                  }, 1032, ["label"])
                ]),
                _: 2
              }, 1032, ["span"]))), 128)),
              x + 1 === t.rowItems.length && !t.buttonLine ? (s(), m(l, {
                key: 0,
                span: 24 - F.length * (24 / t.column)
              }, {
                default: e(() => [
                  a(f, {
                    type: "primary",
                    style: { "margin-left": "20px" },
                    onClick: d
                  }, {
                    default: e(() => [
                      _(" 搜索 ")
                    ]),
                    _: 1
                  }),
                  a(f, { onClick: b }, {
                    default: e(() => [
                      _("重置")
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["span"])) : C("", !0)
            ]),
            _: 2
          }, 1024))), 128)),
          t.buttonLine ? (s(), m(k, { key: 0 }, {
            default: e(() => [
              a(l, { span: 24 }, {
                default: e(() => [
                  a(o, { class: "el-row--buttons" }, {
                    default: e(() => [
                      a(f, {
                        type: "primary",
                        style: { "margin-left": "10px" },
                        onClick: d
                      }, {
                        default: e(() => [
                          _(" 搜索 ")
                        ]),
                        _: 1
                      }),
                      a(f, { onClick: b }, {
                        default: e(() => [
                          _("重置")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : C("", !0)
        ]),
        _: 1
      }, 8, ["data", "label-position", "label-width"]);
    };
  }
});
export {
  T as default
};
