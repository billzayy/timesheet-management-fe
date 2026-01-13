export interface LoginResponse {
  result: {
    access_token: string,
    refresh_token: string,
    type: string,
    expired_time: number
  } | null,
  success: boolean,
  error: string | null
}
