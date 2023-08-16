import { defineComponent as t, computed as a, resolveComponent as p, openBlock as u, createBlock as r, normalizeClass as c, withCtx as _, renderSlot as d } from "vue";
const f = t({
  name: "SpButton"
}), C = /* @__PURE__ */ t({
  ...f,
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const o = e, n = a(() => `button-${o.type}`);
    return (s, m) => {
      const l = p("el-button");
      return u(), r(l, {
        class: c(["button", n.value])
      }, {
        default: _(() => [
          d(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  C as default
};
