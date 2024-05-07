<template>
  <main
    ref="mainScroll"
    :class="{}"
    class="flex w-full md:min-h-screen justify-center items-center flex-col max-w-7xl mt-[7vh] mb-[7vh] main-class"
  >
    <div class="flex justify-center items-center flex-col h-[86vh] p-5 w-full overflow-y-auto">
      <div class="icon-box flex flex-col justify-center items-center w-full h-1/4 p-5">
        <h1 class="text-3xl md:text-4xl font-semibold justify-center mb-5 h1-box text-gray-600/50">
          WELCOME TO
        </h1>
        <article
          class="text-2xl md:text-5xl text-gray-700 flex flex-col justify-center items-center w-full icon-box"
        >
          <p>Whiskers Whistle</p>
        </article>
      </div>
      <div class="w-full h-3/4 flex justify-center items-center relative">
        <ImageUI :text="FirstLandingText" :imgSrc="'/src/assets/dogfacewithhand.jpg'">
          <template #extra-content>
            <a
              v-tooltip.bottom="{
                value: 'Read More On External Link',
                pt: {
                  arrow: {
                    style: {
                      borderBottomColor: 'var(--mainBlack)'
                    }
                  },
                  text: 'bg-primary font-medium',
                  padding: '10px',
                  backgroundColor: 'red'
                }
              }"
              class="z-[9999] relative flex cursor-pointer"
              target="_blank"
              href="https://www.shelteranimalscount.org/animal-abuse-facts-and-statistics-2024/"
            >
              <PhArrowUpRight color="red" size="28" class="icon-style" />
            </a>
          </template>
        </ImageUI>
      </div>
    </div>

    <div :class="{}" class="flex flex-col h-[86vh] w-full border-2 shadow-lg p-[4rem]">
      <h1 class="text-[2rem] flex border-b-2">{{ SecondLandingText.titles.main }}</h1>
      <section class="flex flex-col justify-evenly items-start w-full h-full">
        <article class="text-xl">
          <h2 class="text-2xl flex font-normal text-gray-500 pb-4">
            {{ SecondLandingText.titles.subtitles.first }}
          </h2>
          <p class="space-y-2 flex tracking-wide leading-8 text-[1.1rem]">
            {{ SecondLandingText.body.first }}
          </p>
        </article>
        <article>
          <h2 class="text-2xl flex font-normal text-gray-500 pb-4">
            {{ SecondLandingText.titles.subtitles.second }}
          </h2>
          <p>{{ SecondLandingText.body.second }}</p>
        </article>
      </section>
    </div>

    <!-- Scroll Down Arrow -->

    <div
      v-show="closeArrow"
      class="absolute z-[99999] w-fit h-fit bottom-[8%] cursor-pointer rounded-full animate-bounce hidden md:flex"
      @click="onScrollEvent"
    >
      <PhArrowDown :size="36" color="black" weight="bold" />
    </div>
  </main>
</template>

<script setup>
import { PhArrowDown, PhArrowUpRight } from '@phosphor-icons/vue'
import { animate } from 'motion'
import { onMounted, ref } from 'vue'
import { FirstLandingText, SecondLandingText } from './texts/TextsUI'
import ImageUI from './ui/ImageUI.vue'

const closeArrow = ref(true)
const mainScroll = ref(null)

function onScrollEvent() {
  if (mainScroll.value) {
    const scrollTarget = mainScroll.value.scrollHeight + window.innerHeight
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    })
    closeArrow.value = false
  }
}

window.addEventListener('scroll', () => {
  const isBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - window.innerHeight / 2
  closeArrow.value = !isBottom
})

onMounted(() => {
  animate(
    '.h1-box',
    { opacity: 1, scale: 0.9, translateY: '-1rem' },
    { duration: 0.9, easing: 'ease-in-out' }
  )
  animate(
    '.icon-box',
    { opacity: 1, scale: 1, translateY: '-0.95rem' },
    { duration: 1, easing: 'ease-in-out' }
  )
})
</script>

<style scoped>
.mainClass {
  scroll-behavior: smooth;
  animation: 1s ease-in-out all;
}
</style>
