<template>
  <header
    class="fixed top-0 bg-mainWhite shadow-lg w-screen max-h-[7vh] md:h-[6vh] h-[7vh] z-[99999] md:min-h-[5rem] max-w-screen"
  >
    <nav
      class="flex items-center justify-center md:justify-between w-full relative z-[99999] min-h-full"
    >
      <div class="flex items-center w-full h-full pl-10 relative">
        <div class="flex justify-center items-center">
          <RouterLink to="/" class="flex items-center">
            <IconUI
              class="object-fit"
              icon-url="/src/assets/w3small.png"
              icon-color="transparent"
              icon-size="35px"
            />
            <article class="text-[10px] flex justify-center items-start p-1 flex-col">
              <span>hiskers</span>
              <span>histle</span>
            </article>
          </RouterLink>
        </div>

        <BurgerIcon @click="toggleMobileNav" :is-active="showMobile" v-show="width < 768" />
        <ul
          v-show="width > 768"
          id="navItemUi"
          class="w-full justify-center items-center space-x-5 md:flex hidden"
        >
          <li>
            <RouterLink to="/" class="passiveNavItem" active-class="activeNavItem">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/submit-claim" class="passiveNavItem" active-class="activeNavItem">
              Submit Claim
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about-us" class="passiveNavItem" active-class="activeNavItem">
              About Us
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact-us" class="passiveNavItem" active-class="activeNavItem">
              Contact Us
            </RouterLink>
          </li>
          <RouterLink class="passiveNavItem" active-class="activeNavItem" to="/search">
            <ph-magnifying-glass :size="20" color="black" weight="bold" />
          </RouterLink>
        </ul>

        <ul :class="{ openNav: showMobile, closeNav: !showMobile }" class="mobile-nav">
          <div class="mobileNavWrapper flex flex-col p-5">
            <li @click="closeMobileNav">
              <RouterLink to="/" class="passiveNavItem" active-class="activeNavItem">
                Home
              </RouterLink>
            </li>
            <li @click="closeMobileNav">
              <RouterLink to="/submit-claim" class="passiveNavItem" active-class="activeNavItem">
                Submit Claim
              </RouterLink>
            </li>
            <li @click="closeMobileNav">
              <RouterLink to="/about-us" class="passiveNavItem" active-class="activeNavItem">
                About Us
              </RouterLink>
            </li>
            <li @click="closeMobileNav">
              <RouterLink to="/contact-us" class="passiveNavItem" active-class="activeNavItem">
                Contact Us
              </RouterLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { PhMagnifyingGlass } from '@phosphor-icons/vue'

import { useWindowSize } from '@vueuse/core'
import { ref } from 'vue'
import BurgerIcon from './ui/BurgerIcon.vue'
import IconUI from './ui/IconUI.vue'
const { width } = useWindowSize()
const showMobile = ref(false)

const toggleMobileNav = () => {
  showMobile.value = !showMobile.value
}

const closeMobileNav = () => {
  if (width.value < 768) {
    showMobile.value = false
  }
}
</script>

<style scoped>
.v-tooltip__content {
  background-color: black;
  color: white;
}
/* Navigation item styles */
.passiveNavItem,
.activeNavItem {
  display: inline-block;
  padding: 0.8rem 1.2rem; /* Uniform padding */
  margin: 0 10px; /* Space between items */
  text-decoration: none; /* Removes underline from links */
  color: inherit; /* Inherits text color */
  transition:
    color 0.3s,
    background-color 0.3s,
    border-color 0.3s,
    font-weight 0.3s;
  border-radius: 5px; /* Rounded corners for a modern look */
  border: 2px solid transparent; /* Border for consistent sizing */
}

.activeNavItem {
  font-weight: bold;
  color: black;
  border-color: black; /* Visible border for active items */
  background-color: #f0f0f0; /* Slightly different background for active state */
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

ul {
  display: flex;
  justify-content: center; /* Center items horizontally */
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 93vh;
  background-color: rgb(51, 51, 51, 0.8);
  color: white;
  padding: 20px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  top: 7vh;
  z-index: 99999;
  transform: translateX(-150%); /* Start off-screen */
  transition: transform 0.55s ease-in-out; /* Animation for sliding in/out */
}

.mobile-nav.openNav {
  transform: translateX(00%); /* Slide in */
}

.mobile-nav.closeNav {
  transform: translateX(150%); /* Stay out */
}
</style>
