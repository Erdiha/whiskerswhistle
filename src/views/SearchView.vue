<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-mainBlack py-[8vh] p-4 text-mainWhite"
  >
    <div
      class="flex h-full w-full border-white border-4 rounded flex-col justify-between p-4 space-y-10"
    >
      <article class="w-full h-fit justify-center flex flex-col items-center p-4">
        <h1 class="font-semibold text-2xl w-full text-center p-4">How Does It Work?</h1>
        <p>
          If you posses a code please enter down bloew to retrieve access to the search function.
        </p>
        <p>If you need the code, please get in touch vie contact us page or click</p>
      </article>
      <section
        class="w-full h-full flex border justify-center items-center p-4 bg-mainWhite text-mainBlack rounded"
      >
        <div v-if="!showList" class="w-full h-full flex justify-center items-center">
          <div class="card flex justify-center items-center">
            <div class="flex flex-column justify-center items-center flex-col">
              <p class="text-color-secondary block mb-5">
                Please enter the code sent to your email.
              </p>
              <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events, index }">
                  <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                  <div v-if="index === 3" class="px-3">
                    <i class="pi pi-minus" />
                  </div>
                </template>
              </InputOtp>
              <div
                class="flex justify-content-between mt-5 align-self-stretch w-full justify-evenly h-full flex-col"
              >
                <Button
                  severity="contrast"
                  class="border-2 border-mainBlack text-center text-red-500 text-xl m-5"
                  label="Submit Code"
                  @click="handleClick"
                  v-if="value?.length === 6"
                />
                <p
                  class="text-red-500 font-bold tracking-wide mt-10 transition-all duration-500 ease-in-out text-center"
                  :key="Date.now()"
                >
                  {{ message }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else><ListPage /></div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import InputOtp from 'primevue/inputotp'
import { ref } from 'vue'
import { mockOTP } from '../components/texts/TextsUI.js'
import ListPage from './../components/searchPage/ListPage.vue'
const value = ref(null)
const showList = ref(false)
const message = ref('')
console.log(value?.value)

function handleClick() {
  console.log('Handling click, current value:', value.value)
  const valueCase = value.value.toUpperCase()
  if (mockOTP.includes(valueCase)) {
    showList.value = true
    console.log('Valid OTP, showing list.')
  } else {
    message.value = 'PLEASE ENTER VALID CODE!'
    value.value = '' // Clear the input
    console.log('Invalid OTP, message set:', message.value)
  }
}
</script>

<style scoped>
.custom-otp-input {
  width: 48px;
  height: 48px;
  font-size: 24px;
  appearance: none;
  text-align: center;
  transition: all 0.2s;
  border-radius: 0;
  border: 1px solid black;
  background: transparent;
  outline-offset: -2px;
  outline-color: transparent;
  border-right: 0 none;
  transition: outline-color 0.3s;
  color: var(--mainBlack);
}

.custom-otp-input:focus {
  outline: 2px solid #fc4100;
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-right-width: 1px;
  border-right-style: solid;
}
</style>
