import { fakeGetAdditionalUser, fakeGetUserDTO, fakeUserData } from "@/types/mock-data"
import { Mars, Venus } from "lucide-react"
import axios from 'axios';

interface getRoles {
  name: string
}

const getAdditionalTitle: Record<string, string> = {
  "Bank": "Bank",
  "Origin": "Place of origin",
  "BankAccount": "Bank Account",
  "Residence": "Place of residence",
  "TaxCode": "Tax Code",
  "CurrentAddress": "Current Address",
  "EmergencyContact": "Emergency Contact",
  "EmergencyPhone": "Emergency Contact Phone",
  "InsuranceStatus": "Insurance Status",
  "DOI": "Date of issue",
  "Identify": "Identify",
  "IssuedBy": "Issued By"
}

const roles: getRoles[] = [
  { name: fakeUserData.branch },
  { name: fakeUserData.userType },
  { name: fakeUserData.position },
  { name: fakeUserData.level }
]

export default function MyProfile() {
  const styleBox = "bg-white border shadow-md p-4 my-4"
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjgwMTM5NDgsImlkIjoiMjdiOTk3ZDMtNjVjMC00YTIxLWFhOTItNzQ5NTUzYzQ3ZWFmIn0.pC42PsELxXbA6lwdWBu4jVF4sir7DYsRsOhd35C1UoE"

  const fetchUser = async () => {
    try {
      const fetchData = await axios.get("http://localhost:8080/api/user/all", {
        params: {
          limit: 10,
          offset: 0
        },
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      console.log(fetchData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="pb-6 px-4">
      <div className="font-bold mb-2"
        onClick={() => { fetchUser() }}>My Profile</div>
      <div>
        <div className="main grid grid-cols-[30%_70%] w-full gap-5">
          <div className={`${styleBox} flex flex-col justify-center items-center pt-15 pb-25`}>
            <img
              className="h-35 w-35 rounded-full object-cover mb-2"
              src="https://placehold.co/100x100"
              alt="avatar"
            />
            <div className="flex my-2 items-center">
              <p className="font-bold text-xl mr-1.5">{fakeUserData.fullName}</p>
              <span>{fakeUserData.gender == "female" ?
                <Venus className="text-pink-500" /> : <Mars className="text-blue-500" />}
              </span>
            </div>
            <div className="text-center text-sm">
              <div>{fakeUserData.email}</div>
              <div>{fakeUserData.phone}</div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {roles.map((item, index) => (
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
              {Object.entries(fakeGetUserDTO).map(([key, value]) => (
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
          {Object.entries(fakeGetAdditionalUser).map(([key, value], index) => (
            <div key={key}>
              <div className="ml-2 grid grid-cols-[30%_70%] gap-5 my-5">
                <div>{getAdditionalTitle[key]}</div>
                <div>{String(value)}</div>
              </div>
              {index < Object.entries(fakeGetAdditionalUser).length - 2 && (
                <div className="w-[90%] ml-0 mt-6 border border-b-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
