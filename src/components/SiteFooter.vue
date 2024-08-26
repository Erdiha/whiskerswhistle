<template>
  <footer class="footer">
    <div class="flex absolute">
      <IconUI
        class="object-fit bg-gray-200 p-1 rounded"
        icon-url="/src/assets/w3small.png"
        icon-color="transparent"
        icon-size="35px"
      />
      <!-- <article
        class="text-[10px] text-gray-200 hidden justify-center items-start p-1 flex-col md:hover:flex"
      >
        <span>hiskers</span>
        <span>histle</span>
      </article> -->
    </div>

    <div class="flex w-full justify-center">
      <p>© 2024 Whiskers Whistle. All rights reserved.</p>
    </div>
    <button @click="showDonateModal = true" class="donate-button">
      Donate
      <span class="flex items-center">
        <img
          class="bg-white rounded-full p-1 aspect-square w-8"
          src="../assets/heart.png"
          alt="Heart Icon"
        />
      </span>
    </button>
  </footer>

  <DonateModal v-if="showDonateModal" @close="showDonateModal = false" />
</template>

<script setup>
import IconUI from './ui/IconUI.vue'
import DonateModal from '../components/DonateModal.vue'
import { ref } from 'vue'

const showDonateModal = ref(false)
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  min-height: 7vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #000000; // Replace with bg-mainBlack variable if using Tailwind CSS
  color: #ffffff; // Replace with text-mainWhite variable if using Tailwind CSS
  padding: 0 2rem;
  box-sizing: border-box;
  z-index: 99999;
  transition: all ease-in-out 0.5s;
}
.donate-button {
  background-color: #ff7f50; // Coral color for a standout button
  color: #ffffff;
  border: none;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all ease-in-out 0.5s;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: #ff6347; // Darker shade on hover
  }
}

p {
  margin: 0;
  font-size: 0.875rem; // Adjust font size for a professional look
  text-align: center;
}
</style>
