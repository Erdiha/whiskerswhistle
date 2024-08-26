<template>
  <div>
    <h2>Validate OTP</h2>
    <input v-model="email" placeholder="Enter your email" />
    <input v-model="otp" placeholder="Enter OTP" />
    <button @click="validateOtp">Validate OTP</button>
    <p v-if="valid !== null">OTP is {{ valid ? 'valid' : 'invalid' }}</p>
  </div>
</template>

<script>
import api from '../helpers/api'

export default {
  data() {
    return {
      email: '',
      otp: '',
      valid: null
    }
  },
  methods: {
    async validateOtp() {
      try {
        const response = await api.validateOtp(this.email, this.otp)
        this.valid = response.data.valid
      } catch (error) {
        console.error('Error validating OTP:', error)
        this.valid = false
      }
    }
  }
}
</script>
