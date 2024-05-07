<template>
  <div
    class="flex h-[87vh] w-full flex-col max-w-[70rem] mx-auto mt-[7vh] justify-center items-center md:space-y-20 space-y-4 overflow-y-auto md:min-h-[87vh]"
  >
    <p class="font-bold md:text-2xl tex-xl md:w-[60%] flex flex-col w-[90%]">
      We Will Get in Touch As Soon As Possible.
    </p>

    <div class="md:w-[60%] flex flex-col w-[90%] p-6 shadow-xl form-wrapper">
      <FormKit
        type="form"
        :value="{
          name: '',
          email: '',
          message: ''
        }"
        submit-label="Send"
        @submit="submitHandler"
      >
        <FormKit
          type="text"
          name="name"
          label="Name"
          help="Please input your name"
          validation="required"
        />
        <FormKit
          type="email"
          name="email"
          label="Email"
          help="Please input your email"
          validation="required"
          maxlength="500"
        />
        <FormKit
          type="textarea"
          name="message"
          label="Message"
          help="Please input your message"
          validation="required"
          maxlength="1000"
          rows="5"
          cols="33"
        />
      </FormKit>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const submitted = ref(false)
    const submitHandler = async () => {
      // Simulating an ajax request
      await new Promise((resolve) => setTimeout(resolve, 1000))
      submitted.value = true
    }
    return {
      submitted,
      submitHandler
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  padding: 1rem;
  box-shadow: 0px 0px 5px 1px black;
  border-radius: 5px;
}
</style>
