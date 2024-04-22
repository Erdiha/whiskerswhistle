<template>
  <main
    class="flex w-full md:h-[70vh] justify-center items-center flex-col max-w-[70rem] z-[-1] overflow-hidden border"
  >
    <h1 class="flex md:text-[5rem] font-semibold h1-box opacity-10 text-[3rem]">WELCOME TO</h1>
    <div class="flex icon-box">
      <article
        class="md:text-[55px] opacity-90 text-gray-700 flex flex-col justify-center w-full text-[2rem]"
      >
        <p>Whiskers Whistle</p>
      </article>
    </div>
    <div class="w-full h-full flex justify-center items-center relative z-0">
      <!-- Pass the FirstLandingText prop to CardUI -->
      <ImageUI :text="FirstLandingText" :imgSrc="'/src/assets/dogfacewithhand.jpg'" />
    </div>
    <ScrollIcon />
  </main>
</template>

<script setup>
import { animate } from 'motion'
import { onMounted } from 'vue'
import { FirstLandingText } from './texts/TextsUI'
import ImageUI from './ui/ImageUI.vue'
import ScrollIcon from './ui/ScrollIcon.vue'

onMounted(() => {
  setTimeout(() => {
    animate(
      '.h1-box',
      { opacity: 1, scale: 0.3, translateY: '10px' },
      { duration: 0.9, easing: 'ease-in-out' }
    )
  }, 10)

  setTimeout(() => {
    animate(
      '.icon-box',
      { opacity: 1, scale: 0.7, translateY: '-1rem' },
      { duration: 1, easing: 'ease-in-out' }
    )
  }, 10)
})
</script>
