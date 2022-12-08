<script setup lang="ts">
import USliderElement from "./components/USlider.ce.vue";

const val = $ref(0);
</script>

<template>
  <div style="padding: 10px"><USliderElement v-model="val" /> {{ val }}</div>
</template>
