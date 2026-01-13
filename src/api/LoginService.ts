import httpService from "./HttpService"
import type { LoginResponse } from "@/types/response"

export const loginService = async (email: string, password: string): Promise<LoginResponse> => {
  const res = await httpService.post<LoginResponse>("/auth/login", { email, password })
  return res.data
}

