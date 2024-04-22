<template>
  <div class="container">
    <img :src="imgSrc" alt="User Image" />
    <div v-if="text" class="text-container">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: { type: String, required: true },
  text: { type: String }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; /* Responsive padding */
}

img {
  max-width: 90%; /* Default max width */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: max-width 0.3s ease-in-out;
  height: auto;
  z-index: -1;
  display: flex;
  position: relative;
}

.text-container {
  width: 85%; /* Responsive width for better text control */
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1rem; /* Default text size for smaller screens */
  text-align: center; /* Center align text for better readability */
  font-weight: bold;
  letter-spacing: 0.05rem;
}

@media (min-width: 768px) {
  /* Medium devices and up */
  img {
    max-width: 45%;
  }

  .text-container {
    width: 50%; /* More controlled width on larger screens */
    padding: 1rem;
    font-size: 1.5rem; /* Slightly larger text on bigger screens */
  }
}
</style>
