<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-main-white w-screen overflow-x-hidden">
    <SiteNavigation />
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" v-if="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 600ms ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
