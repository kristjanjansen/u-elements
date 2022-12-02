import { defineCustomElement } from "vue";
import Foo from "./MyFoo.ce.vue";
import Bar from "./MyBar.ce.vue";

const MyFoo = defineCustomElement(Foo);
const MyBar = defineCustomElement(Bar);

// export individual elements
export { MyFoo, MyBar };

export function register() {
  customElements.define("my-foo", MyFoo);
  customElements.define("my-bar", MyBar);
}
