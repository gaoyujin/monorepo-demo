import { defineComponent as s, ref as u, resolveComponent as c, openBlock as r, createElementBlock as i, unref as d, createBlock as V, createCommentVNode as v } from "vue";
import { UiType as _ } from "./types.js";
const f = { style: { width: "100%" } }, x = /* @__PURE__ */ s({
  __name: "table-search-item",
  props: {
    val: {},
    itemProps: {}
  },
  setup(l, { expose: p }) {
    const e = l, a = e.val, o = u(a);
    return p({ getFormValue: () => ({
      val: o.value,
      key: e.itemProps.prop,
      dataSource: {}
    }), resetFormValue: () => {
      o.value = "";
    } }), (y, t) => {
      const n = c("el-input");
      return r(), i("div", f, [
        e.itemProps && e.itemProps.uiType === d(_).Input && e.itemProps.prop ? (r(), V(n, {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": t[0] || (t[0] = (m) => o.value = m),
          placeholder: e.itemProps.placeholder ? e.itemProps.placeholder : "请输入"
        }, null, 8, ["modelValue", "placeholder"])) : v("", !0)
      ]);
    };
  }
});
export {
  x as default
};
