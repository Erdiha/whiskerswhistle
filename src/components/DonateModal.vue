<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2 class="font-semibold tracking-wide border-b-[1.5px] w-fit border-green-400">
        Support Us
      </h2>
      <p class="flex justify-start items-start text-sm my-10">
        Your support enables us to continue our mission. As a non-profit organization, we are
        dedicated to keeping this important work alive, but like everything, it requires financial
        resources. Every contribution, no matter the size, makes a difference. Thank you for your
        generosity.
      </p>
      <button
        class="self-end w-fit py-1 px-2 rounded bg-mainBlack text-mainWhite md:hover:bg-mainWhite md:hover:text-mainBlack transition-all ease-in-out duration-500 border-2 border-mainBlack"
        @click="$emit('close')"
      >
        Close
      </button>
      <!-- Add your donation form or payment gateway integration here -->
    </div>
  </div>
</template>

<script setup>
// No additional script logic is necessary unless you need state management
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  transition: all 1s ease-in-out;
}

.modal-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  text-align: start;
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}
</style>
