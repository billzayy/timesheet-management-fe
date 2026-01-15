import httpService from "./HttpService"
import type { ApiResponse, LoginAPI, UserConfigAPI } from "@/types/response"

export const loginService = async (email: string, password: string): Promise<ApiResponse<LoginAPI>> => {
  const res = await httpService.post<ApiResponse<LoginAPI>>("/auth/login",
    { email, password },
    { skipAuth: true })
  return res.data
}

export const getUserConfigService = async (): Promise<ApiResponse<UserConfigAPI>> => {
  const res = await httpService.get<ApiResponse<UserConfigAPI>>("/user-config")
  return res.data
}

