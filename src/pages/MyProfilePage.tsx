import { AdditionalUserDTO, getAdditionalTitle, UserDTO, type getRoles } from "@/dto/user-dto"
import { Mars, Venus } from "lucide-react"
import { getUserService } from "@/api/UserService";
import { useEffect, useState } from "react";
import type { UserAPI } from "@/types/response";

export default function MyProfile() {
  const [userData, setUserData] = useState<UserAPI | null>(null)
  const styleBox = "bg-white border shadow-md p-4 my-4"

  useEffect(() => {
    let isMounted = true

    const fetchUser = async () => {
      try {
        const data = await getUserService()
        if (isMounted) {
          setUserData(data.result)
        }
      } catch (error) {
        console.error("Failed to fetch user:", error)
        if (isMounted) {
          setUserData(null)
        }
      }
    }

    fetchUser()

    return () => {
      isMounted = false
    }
  }, [])

  const roles: getRoles[] = [
    { name: userData?.branch_name },
    { name: userData?.user_type_name },
    { name: userData?.position_name },
    { name: userData?.level_name }
  ]

  return (
    <div className="p-8">
      <div className="pb-6 px-4">
        <div className="font-bold mb-2">My Profile</div>
        <div>
          <div className="main grid grid-cols-[30%_70%] w-full gap-5">
            <div className={`${styleBox} flex flex-col justify-center items-center pt-15 pb-25`}>
              <img
                className="h-35 w-35 rounded-full object-cover mb-2"
                src="https://placehold.co/100x100"
                alt="avatar"
              />
              <div className="flex my-2 items-center">
                <p className="font-bold text-xl mr-1.5">{userData?.full_name}</p>
                <span>{userData?.gender == "female" ?
                  <Venus className="text-pink-500" /> : <Mars className="text-blue-500" />}
                </span>
              </div>
              <div className="text-center text-sm">
                <div>{userData?.email}</div>
                <div>{userData?.phone}</div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {roles.map((item, index) => (
                  item.name === undefined ? <div></div> :
                    <div
                      key={index}
                      className="rounded-xs bg-[#e08b29] px-1.5 text-[12px] font-bold text-white"
                    >
                      {item.name}
                    </div>
                ))}
              </div>
            </div>
            <div className={`${styleBox} p-5`}>
              <div className="grid grid-cols-2 gap-10">
                {Object.entries(UserDTO(userData)).map(([key, value]) => (
                  <div key={key}>
                    <div className="grid grid-cols-[30%_70%] gap-1">
                      <p>{key}</p>
                      <div>{String(value)}</div>
                    </div>
                    <div className="w-full ml-0 mt-6 border border-b-gray-100"></div>
                  </div>
                ))}
              </div>
              <div className="py-5 pl-0">
                <div>Team</div>
              </div>
            </div>
          </div>
          <div className={`${styleBox} w-full grid grid-cols-[50%_50%] gap-1`}>
            {Object.entries(AdditionalUserDTO(userData)).map(([key, value], index) => (
              <div key={key}>
                <div className="ml-2 grid grid-cols-[30%_70%] gap-5 my-5">
                  <div>{getAdditionalTitle[key]}</div>
                  <div>{String(value)}</div>
                </div>
                {index < Object.entries(AdditionalUserDTO(userData)).length - 2 && (
                  <div className="w-[90%] ml-0 mt-6 border border-b-gray-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
