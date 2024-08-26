<template>
  <div
    class="flex justify-center flex-col md:w-[40rem] md:mx-auto items-center 2xl:w-[50rem] w-[100%] h-[100vh] p-5 md:min-h-[100vh]"
  >
    <h1 class="text-xl font-semibold w-full px-5 max-h-full">Submit A Claim</h1>
    <FormKit
      id="form-wrapper"
      type="form"
      #default="{ value }"
      @submit="handleSubmit"
      :value="data"
      text-class="text-sm"
      :classes="{
        label: 'text-xs',
        help: 'text-xs',
        input: 'text-xs'
      }"
    >
      <FormKit
        type="email"
        label="Your Email"
        name="email"
        placeholder="email@domain.com"
        validation="required|email"
        help="Necessary for reaching out to you or validate your claim"
        :classes="{
          label: 'text-xs',
          help: 'text-xs',
          input: 'text-xs'
        }"
      />
      <FormKit
        type="text"
        label="Your Full Name"
        name="fullname"
        placeholder="Jane Doe"
        validation="required|fullname"
        help="Necessary for reaching out to you or validate your claim"
        :classes="{
          label: 'text-xs',
          help: 'text-xs',
          input: 'text-xs'
        }"
      />
      <FormKit
        type="text"
        label="Person's Full Name (not your name)"
        name="personsname"
        placeholder="Jane Doe"
        validation="required|personsname"
        help="Necessary for reaching out to you or validate your claim"
        :classes="{
          label: 'text-xs',
          help: 'text-xs',
          input: 'text-xs'
        }"
      />
      <FormKit
        id="form-select-animal-type"
        type="select"
        label="Type of Animal"
        name="animal-type"
        placeholder="Select Animal Type"
        validation="required|select"
        :options="['Cat', 'Dog', 'Other']"
        :style="{ fontSize: '10px' }"
        :classes="{
          label: 'text-xs',
          help: 'text-xs',
          input: 'text-xs'
        }"
      />
      <FormKit
        id="form-select-proof-type"
        type="select"
        label="Type of Proof"
        name="proof"
        placeholder="Select Proof Type"
        validation="required|select"
        :options="['Witness', 'Video/Image', 'Confession', 'Other']"
        :classes="{
          label: 'text-xs',
          help: 'text-xs',
          input: 'text-xs'
        }"
      />
      <div class="flex flex-col my-2 border-[1px] border-black/50 px-2">
        <FormKit
          id="address-group-wrapper"
          type="group"
          name="address"
          :value="{}"
          class="address-group-wrapper"
          :classes="{
            label: 'text-xs',
            help: 'text-xs',
            input: 'text-xs'
          }"
        >
          <FormKit
            :classes="{
              label: 'text-xs',
              help: 'text-xs',
              input: 'text-xs'
            }"
            label="Street"
            name="street"
          />
          <FormKit
            :classes="{
              label: 'text-xs',
              help: 'text-xs',
              input: 'text-xs'
            }"
            name="city"
            label="City"
          />
          <FormKit
            type="select"
            name="state"
            label="State"
            :options="['State1', 'State2', 'State3']"
            :classes="{
              label: 'text-xs',
              help: 'text-xs',
              input: 'text-xs'
            }"
          />
        </FormKit>
      </div>
      <FormKit
        id="form-file-address"
        type="file"
        label="Documents"
        help="Select as many documents as you would like."
        multiple="true"
        label-class="text-sm"
        :classes="{
          label: 'text-[10px]',
          help: 'text-[8px]',
          input: 'text-[10px]'
        }"
      />
      <FormKit
        id="form-comment"
        type="textarea"
        name="instructions"
        label="Special Comments or Instructions"
        placeholder="something something"
        :help="`${value?.instructions ? value.instructions.length : 0} / 120`"
        validation="length:0,120"
        validation-visibility="live"
        :classes="{
          label: 'text-[10px]',
          help: 'text-[8px]',
          input: 'text-[10px]'
        }"
        :validation-messages="{
          length: 'Instructions cannot be more than 120 characters.'
        }"
      />
    </FormKit>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  return
}
</script>

<style>
#form-wrapper {
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: 70%;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto; /* Enable scrolling on overflow */
  position: relative;
  z-index: 0;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 0.5rem;
  font-size: 1px;
}

#address-group-wrapper {
  border: 5px solid black;
  display: flex;
  flex-wrap: wrap; /* Wrap children if not enough space */
}

#form-comment {
  padding: 0.3rem;
  display: flex;
  flex-direction: column; /* Ensure textarea and help text are stacked */
}

.form-select {
  z-index: 0;
}
.form-file-input {
  font-size: small;
}
</style>
