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
}

img {
  max-width: 45%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: max-width 0.3s ease-in-out;
}

.text-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: normal;
  margin-top: 3rem;
}
@media (max-width: 768px) {
  img {
    max-width: 50%;
  }
  .text-container {
    width: 50%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 468px) {
  img {
    max-width: 80%;
  }
  .text-container {
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
