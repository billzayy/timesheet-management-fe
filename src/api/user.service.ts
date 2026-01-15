import type { ApiResponse, ListResponse, UserAPI } from "@/types/response"
import httpService from "./HttpService"

export const getAllUserService = async (limit: number, page: number): Promise<ApiResponse<UserAPI[]>> => {
  const res = await httpService.get<ApiResponse<UserAPI[]>>("/user/all", {
    params: {
      limit: limit,
      offset: page
    },
  })
  return res.data
}

export const getUserService = async (): Promise<ApiResponse<UserAPI>> => {
  const res = await httpService.get<ApiResponse<UserAPI>>(`/user`)
  return res.data
}

export const getAllUsers = async (): Promise<ApiResponse<ListResponse<UserAPI>>> => {
  const res = await httpService.get<ApiResponse<ListResponse<UserAPI>>>(`/user/all`, {
    params: {
      limit: 10,
      offset: 0,
    }
  })
  return res.data
}

