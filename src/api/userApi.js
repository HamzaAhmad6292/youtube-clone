
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Update with your API URL

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/loginuser`, credentials);
      return response.data; // Assuming your API returns user data upon successful login
    } catch (error) {
      throw new Error(error.response.data.message || 'Login failed');
    }
  },

  signup: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/createuser`, userData);
      return response; // Assuming your API returns user data upon successful signup
    } catch (error) {
      console.log(error)
    }
  },

  // You can add other authentication-related functions here
};

export default authService;
