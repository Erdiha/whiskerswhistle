<template>
  <div
    class="absolute z-[99999] w-fit h-fit bottom-0 cursor-pointer rounded-full border-b-2 animate-bounce"
  >
    <PhArrowDown :size="36" color="black" weight="bold" />
  </div>
</template>

<script setup>
// Import the specific icon you need from the Phosphor Icons package
import { PhArrowDown } from '@phosphor-icons/vue'
</script>

<style scoped></style>
