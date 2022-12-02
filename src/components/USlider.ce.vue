<script setup lang="ts">
defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "u-input"]);
const onInput = (e: any) => {
  const value = parseFloat(e.target.value);
  emit("update:modelValue", value);
  emit("u-input", value);
};
</script>

<template>
  <input type="range" :value="modelValue" @input="onInput" class="input" />
</template>

<style scoped>
.input {
  accent-color: red;
}
</style>
