"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./types.js"),c={style:{width:"100%"}},i=e.defineComponent({__name:"table-search-item",props:{val:{},itemProps:{}},setup(r,{expose:p}){const o=r,n=o.val,t=e.ref(n);return p({getFormValue:()=>({val:t.value,key:o.itemProps.prop,dataSource:{}}),resetFormValue:()=>{t.value=""}}),(v,l)=>{const u=e.resolveComponent("el-input");return e.openBlock(),e.createElementBlock("div",c,[o.itemProps&&o.itemProps.uiType===e.unref(s.UiType).Input&&o.itemProps.prop?(e.openBlock(),e.createBlock(u,{key:0,modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=a=>t.value=a),placeholder:o.itemProps.placeholder?o.itemProps.placeholder:"请输入"},null,8,["modelValue","placeholder"])):e.createCommentVNode("",!0)])}}});exports.default=i;