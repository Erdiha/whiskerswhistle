<template>
  <div
    class="burgerWrapper w-[1.5rem] h-[1.5rem]"
    :class="{ 'is-active': isActive }"
    @click="$emit('toggle')"
  >
    <span class="burger-span"></span>
    <span class="burger-span"></span>
    <span class="burger-span"></span>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.burgerWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  z-index: 9999;
}
@media screen {
}

.burgerWrapper.is-active .burger-span {
  background-color: black; /* Example: change color when active */
  /* Rotate first and last span */
}

.burgerWrapper .burger-span {
  background-color: black;
  width: 100%;
  height: 5px;
  margin: 2px 0;
  transition: all 0.3s ease-in-out;
}

.burgerWrapper.is-active .burger-span:nth-child(1) {
  transform: rotate(-45deg) translate(-8px, 3px);
  border-radius: 10px;
}
.burgerWrapper.is-active .burger-span:nth-child(3) {
  transform: rotate(45deg) translate(-8px, -3px);
  border-radius: 10px;
}

.burgerWrapper.is-active .burger-span:nth-child(2) {
  opacity: 0; /* Hide middle span */
}
</style>
