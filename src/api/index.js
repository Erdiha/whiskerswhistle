import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  requestAccess(email) {
    return apiClient.post('/request-access', { email });
  },
  generateOtp(email) {
    return apiClient.post('/generate-otp', { email });
  },
  validateOtp(email, otp) {
    return apiClient.post('/validate-otp', { email, otp });
  }
};
