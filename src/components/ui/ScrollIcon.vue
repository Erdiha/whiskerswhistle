<script setup>
import { PhArrowDown } from '@phosphor-icons/vue'
import { defineEmits } from 'vue'

// Define the emits function to notify parent components of events
const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<template>
  <div
    class="absolute z-[99999] w-fit h-fit bottom-0 cursor-pointer rounded-full animate-bounce"
    @click="handleClick"
  >
    <PhArrowDown :size="36" color="black" weight="bold" />
  </div>
</template>
