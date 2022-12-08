<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";
import { ref, reactive, computed } from "vue";
import { arcPath, car2pol } from "../utils";

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "u-input"]);
const onInput = (e: any) => {
  const value = parseFloat(e.target.value);
  emit("update:modelValue", value);
  emit("u-input", value);
};

const target = ref(null);
const { elementX, elementY, elementWidth, elementHeight } =
  useMouseInElement(target);

const data = computed(() => {
  const fromCenterX = elementX.value - elementWidth.value / 2;
  const fromCenterY = elementY.value - elementHeight.value / 2;
  let [fromCenterAngle, fromCenterRadius] = car2pol(fromCenterX, fromCenterY);
  fromCenterAngle =
    fromCenterAngle < 0 ? 360 + fromCenterAngle : fromCenterAngle;
  return { fromCenterX, fromCenterY, fromCenterAngle, fromCenterRadius };
});

const path = (angle: number) => {
  return arcPath(0, angle);
};
</script>

<template>
  <!-- <input type="range" :value="modelValue" @input="onInput" class="input" /> -->
  <div style="background: gray; display: inline-block">
    <svg ref="target" width="200" height="200" style="display: block">
      <g transform="translate(100,100)">
        <circle r="100" stroke="black" stroke-width="5" fill="none" />
        <path :d="path(data.fromCenterAngle)" fill="red" />
      </g>
    </svg>
  </div>
  <pre style="position: fixed; top: 0; right: 0">{{ data }}</pre>
</template>

<style scoped>
.input {
  accent-color: red;
}
</style>
