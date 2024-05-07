<template>
  <div class="app-container">
    <SiteNavigation />
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <!-- Use Scrollbar around the component to make it scrollable -->
        <component :is="Component" v-if="Component" />
      </transition>
    </RouterView>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavigation from './components/SiteNavigation.vue'
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  background-color: var(--mainWhite);
}

.scrollable-content {
  height: 100%; /* Adjust based on your layout needs */
  overflow: hidden; /* PerfectScrollbar handles the overflow */
}

.page-enter-active,
.page-leave-active {
  transition: opacity 200ms ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
