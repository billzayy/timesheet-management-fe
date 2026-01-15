import type { ApiResponse, LoginAPI } from '@/types/response';
import axios from 'axios';

let isRefreshing = false
let refreshPromise: Promise<LoginAPI> | null = null

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
    if (config.skipAuth) {
      return config
    }

    const token = localStorage.getItem("access_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor
httpService.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 && !originalRequest._retry && !originalRequest.skipAuth) {
      originalRequest._retry = true

      if (!isRefreshing) {
        isRefreshing = true
        refreshPromise = refreshAccessToken()
          .finally(() => {
            isRefreshing = false
          })
      }

      try {
        const tokens = await refreshPromise!
        originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`
        return httpService(originalRequest)
      } catch {
        localStorage.clear()
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  }
)

const refreshAccessToken = async (): Promise<LoginAPI> => {
  const refreshToken = localStorage.getItem("refresh_token")

  if (!refreshToken) {
    throw new Error("No refresh token")
  }

  const res = await httpService.post<ApiResponse<LoginAPI>>(
    "/auth/refresh-token",
    { refresh_token: `Bearer ${refreshToken}` },
    { skipAuth: true }
  )

  const tokens = res.data.result

  if (!tokens) {
    throw new Error("Invalid refresh response")
  }

  localStorage.setItem("access_token", tokens.access_token)
  localStorage.setItem("refresh_token", tokens.refresh_token)

  return tokens
}

export default httpService;
