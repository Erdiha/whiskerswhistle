<template>
  <div
    class="flex justify-center m flex-col md:w-[50rem] md:mx-auto items-center 2xl:w-[60rem] w-[100%] h-[93vh] p-5 overflow-y-auto md:min-h-[90vh]"
  >
    <h1 class="text-2xl font-semibold md:my-10 mt-[7vh] my-4 w-full px-3 max-h-full">
      Submit A Claim
    </h1>
    <FormKit
      id="form-wrapper"
      type="form"
      #default="{ value }"
      @submit="handleSubmit"
      :value="data"
    >
      <FormKit
        type="email"
        label="Your Email"
        name="email"
        placeholder="email@domain.com"
        validation="required|email"
        help="Necessary for reaching out to you or validate your claim"
      />
      <FormKit
        type="text"
        label="Your Full Name"
        name="fullname"
        placeholder="Jane Doe"
        validation="required|fullname"
        help="Necessary for reaching out to you or validate your claim"
      />
      <FormKit
        id="form-select-animal-type"
        type="select"
        label="Type of Animal"
        name="animal-type"
        placeholder="Select Animal Type"
        validation="required|select"
        :options="['Cat', 'Dog', 'Other']"
      />
      <FormKit
        id="form-select-proof-type"
        type="select"
        label="Type of Proof"
        name="proof"
        placeholder="Select Proof Type"
        validation="required|select"
        :options="['Witness', 'Video/Image', 'Confession', 'Other']"
      />
      <FormKit
        id="address-group-wrapper"
        type="group"
        name="address"
        :value="{}"
        class="address-group-wrapper"
      >
        <FormKit label="Street" name="street" />
        <FormKit name="city" label="City" />
        <FormKit
          type="select"
          name="state"
          label="State"
          :options="['State1', 'State2', 'State3']"
        />
      </FormKit>
      <FormKit
        id="form-file-address"
        type="file"
        label="Documents"
        help="Select as many documents as you would like."
        multiple="true"
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
  height: fit-content;
  min-height: 80%;
  max-height: 93vh; /* Set a maximum height */
  overflow-y: auto; /* Enable scrolling on overflow */
  position: relative;
  z-index: 0;
  padding: 1rem;
  box-shadow: 0px 0px 5px 1px black;
  border-radius: 5px;
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
