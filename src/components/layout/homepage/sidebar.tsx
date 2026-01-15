import { cn } from "@/lib/utils"
import { handleRipple } from "@/lib/handleRipple"
import { colorMap, copyrightColorMap } from "@/types/color"
import {
  SquareUserRound,
  ChevronDown,
  LogOut,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import BackgroundImg from "@/assets/user-img-background.jpg"
import SidebarPersonal from "./sidebar-personal"
import SidebarAdmin from "./sidebar-admin"

import { getUserConfigService } from "@/api/login.service";
import { checkGrantedFeature } from "@/lib/checkGrantedPermission"

interface SidebarInput {
  bgColor: string
}

function Sidebar({ bgColor }: SidebarInput) {
  const navigate = useNavigate()
  const [openLogout, setOpenLogout] = useState(false)
  const [grantedList, setGrantedList] = useState<string[]>([])

  const logoutRef = useRef<HTMLDivElement>(null)

  const changeTextColor = colorMap[bgColor] || colorMap.fallback
  const changeCopyrightColor =
    copyrightColorMap[bgColor] || copyrightColorMap.fallback

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const data = await getUserConfigService()
        const permissions = data.result?.auth.granted_permissions ?? []

        checkGrantedFeature(permissions)
        setGrantedList(permissions)
      } catch (err) {
        console.error(err)
      }
    }

    fetchConfig()

    const handleClickOutside = (event: MouseEvent) => {
      if (
        logoutRef.current &&
        !logoutRef.current.contains(event.target as Node)
      ) {
        setOpenLogout(false)
      }
    }

    if (openLogout) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={logoutRef}
      className="relative z-40 flex h-full w-64 flex-col border-r border-gray-300 shadow-md bg-white">
      {/* Header */}
      <div className="relative h-20 shrink-0 ">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={BackgroundImg}
          alt="background"
        />

        <div className="relative z-10 flex justify-between h-full pl-4 pr-1 text-white">
          <div className="flex items-center w-full">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://placehold.co/100x100"
              alt="avatar"
            />
            <div className="ml-3 w-full">
              <div className="font-semibold">Full name</div>
              <div className="text-sm opacity-80">email</div>
            </div>
          </div>
          <div className="h-full w-1/4 flex justify-end items-end relative">
            {/* Toggle button */}
            <div
              className="cursor-pointer pb-2"
              onClick={() => setOpenLogout(v => !v)}
            >
              <ChevronDown size={16} />
            </div>

            {openLogout && (
              <div className="absolute mt-2 w-32 -right-2 -bottom-2 bg-white text-black shadow-xl z-50">
                <div
                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    localStorage.clear()
                    navigate('/login')
                  }}
                >
                  <LogOut size={18} />
                  <div className="mx-2">Log Out</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div
          className={cn(
            "ripple flex items-center px-4 py-3 cursor-pointer",
            changeTextColor
          )}
          onClick={() => navigate("/myprofile")}
          onPointerDown={handleRipple}
        >
          <SquareUserRound className="mr-2" />
          My information
        </div>
        {grantedList.includes("Admin") && (
          <SidebarAdmin textColor={changeTextColor} />
        )}
        <SidebarPersonal textColor={changeTextColor} />
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t px-4 py-3 text-sm">
        <div>
          © 2025
          <span className={cn("ml-1", changeCopyrightColor)}>
            Timesheet
          </span>
        </div>
        <div>
          <strong>Version</strong> 4.3.0.0 [20251812]
        </div>
      </div>
    </div>
  )
}

export default Sidebar
