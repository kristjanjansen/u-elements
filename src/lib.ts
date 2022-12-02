import { defineCustomElement } from "vue";
import USliderElement from "./components/USlider.ce.vue";

const USlider = defineCustomElement(USliderElement);

export { USlider };

export function register() {
  customElements.define("u-slider", USlider);
}
