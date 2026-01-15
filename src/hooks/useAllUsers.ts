import { useEffect, useState } from "react"
import type { UserAPI } from "@/types/response"
import { getAllUsers } from "@/api/user.service"

export const useUsers = () => {
  const [data, setData] = useState<UserAPI[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllUsers()
      .then(res => {
        if (res.result === null) {
          setData([])
          return
        }
        setData(res.result.items)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, loading }
}
