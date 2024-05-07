<template>
  <div
    class="flex h-[87vh] md:w-full flex-col max-w-[70rem] mx-auto mt-[7vh] space-y-10 justify-center md:p-5 md:px-16 w-[90%]"
  >
    <h1 class="md:text-4xl font-bold flex text-gray-700">{{ aboutUsTitle }}</h1>
    <article id="article-wrapper" class="flex flex-col space-y-10 md:p-10 p-5">
      <p class="md:text-xl flex font-normal tracking-wide text-gray-600">{{ bodyText.header }}</p>
      <!-- Correct the v-for to iterate over bodyText.main array -->
      <ul class="flex flex-col space-y-5">
        <h2 class="md:text-xl font-semibold text-gray-500">{{ bodyText.main.title }}</h2>
        <li v-for="item in bodyText.main.body" :key="item" class="md:text-lg md:indent-8 text-sm">
          {{ item }}
        </li>
      </ul>
    </article>
    <p class="flex w-full md:text-2xl text-red-500/80 text-center italic">{{ footerText }}</p>
  </div>
</template>

<script>
import { AboutUsText } from '../components/texts/TextsUI'

export default {
  setup() {
    // If AboutUsText might be undefined, handle it appropriately
    const aboutUsTitle = AboutUsText ? AboutUsText.title : 'Default Title'
    const bodyText = AboutUsText ? AboutUsText.body : 'Default Body'
    const footerText = AboutUsText ? AboutUsText.footer : 'Default Footer'
    return {
      aboutUsTitle,
      bodyText,
      footerText
    }
  }
}
</script>

<style>
#article-wrapper {
  padding: 1rem;
  box-shadow: 0px 0px 5px 1px black;
  border-radius: 5px;
}
p {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: nowrap; /* Prevents wrapping at whitespace */
  white-space: normal; /* Default, allows wrapping at whitespace and where appropriate */
  white-space: pre; /* Respects line breaks and spaces in the text */
  white-space: pre-wrap; /* Respects line breaks and spaces, but also wraps text */
  white-space: pre-line; /* Collapses whitespace but preserves line breaks */
}
/* Ensure your style is scoped if it's specific to this component, or global otherwise */
</style>
