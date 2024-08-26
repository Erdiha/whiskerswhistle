<template>
  <div>
    <h2>Request Access</h2>
    <input v-model="email" placeholder="Enter your email" />
    <button @click="requestAccess">Request Access</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import api from '../helpers/api'

export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  methods: {
    async requestAccess() {
      try {
        const response = await api.requestAccess(this.email)
        this.message = response.data.message
      } catch (error) {
        console.error('Error requesting access:', error)
        this.message = 'Error requesting access.'
      }
    }
  }
}
</script>
