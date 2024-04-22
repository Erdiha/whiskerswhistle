<template>
  <!-- Use the iconURL prop to set the src attribute of the img tag -->
  <img
    :src="iconURL"
    :alt="`Icon with color ${iconColor}`"
    class="icon"
    :style="{ color: iconColor, width: iconSize, height: iconSize, objectFit: 'contain' }"
  />
</template>

<script>
export default {
  name: 'IconUI',
  props: {
    iconURL: {
      type: String,
      default: '/src/assets/w3small.png' // Corrected from 'url' to 'default'
    },
    iconColor: {
      type: String,
      default: 'transparent' // Default black color
    },
    iconSize: {
      type: [String, Number],
      default: '' // Default size
    }
  }
}
</script>

<style>
/* Optional: additional scoped styles can go here */
.icon {
  padding: 0;
  margin: 0;
}
</style>
