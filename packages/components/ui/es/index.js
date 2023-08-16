import e from "./src/index.js";
import { default as s } from "./src/button/index.js";
import { default as n } from "./src/tableSearch/index.js";
const r = {
  install: (o) => e.forEach((t) => o.use(t))
};
export {
  s as SpButton,
  n as SpTableSearch,
  r as default
};
