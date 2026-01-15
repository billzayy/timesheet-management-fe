export interface ApiResponse<T> {
  result: T | null
  success: boolean
  error: string | null
}

export interface LoginAPI {
  access_token: string,
  refresh_token: string,
  type: string,
  expired_time: number
}

export interface UserConfigAPI {
  auth: {
    all_permissions: string[],
    granted_permissions: string[]
  }
}

export interface UserAPI {
  full_name: string,
  email: string,
  dob: string,
  gender: string,
  phone: string,
  address: string,
  bank_account: string,
  identify_number: string,
  identify_issue_date: string,
  identify_place: string,
  mezon_id: string,
  roles: string[],
  level_id: number,
  level_name: string,
  branch_id: number,
  branch_name: string,
  position_id: number,
  position_name: string,
  user_type_id: number,
  user_type_name: string,
  morning_working_time: number,
  morning_start_at: string,
  morning_end_at: string,
  afternoon_start_at: string,
  afternoon_end_at: string,
  afternoon_working_time: number,
  id: string
}

export interface ListResponse<T> {
  total_count: number,
  items: T[]
}
