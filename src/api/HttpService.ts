import axios from 'axios';

// Create an instance of Axios with a custom config
const httpService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors are optional

// Adding a request interceptor 
httpService.interceptors.request.use(
  config => {
    // Add headers, authentication, etc.
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor
httpService.interceptors.response.use(
  response => {
    // Handle successful responses
    return response;
  },
  error => {
    // Handle errors
    // Should not handle popup of errors in here
    return Promise.reject(error);
  }
);

export default httpService;
