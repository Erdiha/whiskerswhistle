<template>
  <div class="container">
    <img :src="imgSrc" alt="User Image" />
    <div v-if="text" class="text-container">
      <!-- Combine text and slot in a single inline element -->
      <p class="flex flex-col justify-center items-center">
        <span>{{ text }} </span>
        <slot name="extra-content"></slot>
      </p>
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
  padding: 1rem;
}

img {
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: max-width 0.3s ease-in-out;
  height: auto;
}

.text-container {
  width: 85%;
  margin: 1rem 0;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.05rem;
}

@media (min-width: 768px) {
  img {
    max-width: 45%;
  }
  .text-container {
    width: 50%;
    padding: 1rem;
    font-size: 1.5rem;
  }
}
</style>
