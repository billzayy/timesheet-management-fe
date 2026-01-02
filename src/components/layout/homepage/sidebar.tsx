import { cn } from "@/lib/utils"
import { handleRipple } from "@/lib/handleRipple"
import { colorMap, copyrightColorMap } from "@/types/color"
import {
  Calendar,
  CircleUserRound,
  Minus,
  Plus,
  SquareUserRound,
  Users,
  Clock,
} from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface SidebarItem {
  logo: string
  name: string
  link: string
}

interface SidebarInput {
  bgColor: string
}

const PERSONAL_TIMESHEET: SidebarItem[] = [
  { logo: "clock", name: "My timesheet", link: "/mytimesheet" },
  { logo: "team", name: "Team working calendar", link: "" },
  { logo: "calendar", name: "My working time", link: "" },
]

function Sidebar({ bgColor }: SidebarInput) {
  const navigate = useNavigate()
  const [openSide, setOpenSide] = useState(false)

  const changeTextColor = colorMap[bgColor] || colorMap.fallback
  const changeCopyrightColor =
    copyrightColorMap[bgColor] || copyrightColorMap.fallback

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-300 shadow-md bg-white">
      {/* Header */}
      <div className="relative h-20 shrink-0 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://timesheet.nccsoft.vn/user-img-background.7f354e93c30f9d51fc3a.jpg"
          alt="background"
        />

        <div className="relative z-10 flex items-center h-full px-4 text-white">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://placehold.co/100x100"
            alt="avatar"
          />
          <div className="ml-3">
            <div className="font-semibold">Full name</div>
            <div className="text-sm opacity-80">email</div>
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

        <div>
          <div
            className={cn(
              "ripple flex items-center justify-between px-4 py-3 cursor-pointer",
              changeTextColor
            )}
            onClick={() => setOpenSide(v => !v)}
            onPointerDown={handleRipple}
          >
            <div className="flex items-center">
              <CircleUserRound className="mr-2" />
              Personal timesheet
            </div>
            {openSide ? <Minus size={12} /> : <Plus size={12} />}
          </div>

          {openSide && (
            <div className="pl-8">
              {PERSONAL_TIMESHEET.map(item => (
                <div
                  key={item.name}
                  className={cn(
                    "ripple flex items-center py-2 cursor-pointer",
                    changeTextColor
                  )}
                  onClick={() => item.link && navigate(item.link)}
                  onPointerDown={handleRipple}
                >
                  <span className="mr-2">{getLogo(item.logo)}</span>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
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


function getLogo(text: string) {
  switch (text) {
    case "calendar":
      return <Calendar />
    case "clock":
      return <Clock />
    case "team":
      return <Users />
    default:
      return <div></div>
  }
}

export default Sidebar
