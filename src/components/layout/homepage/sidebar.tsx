import { cn } from "@/lib/utils"
import { colorMap } from "@/types/color"
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

interface SidebarItem {
  logo: string
  name: string
  link: string
}

interface SidebarInput {
  bgColor: string
}

const PERSONAL_TIMESHEET: SidebarItem[] = [
  { logo: "clock", name: "My timesheet", link: "" },
  { logo: "team", name: "Team working calendar", link: "" },
  { logo: "calendar", name: "My working time", link: "" },
]

function Sidebar({ bgColor }: SidebarInput) {
  const [openSide, setOpenSide] = useState<boolean>(false)

  const changeTextColor = colorMap[bgColor] || colorMap["fallback"]

  const handleToggleSide = () => {
    setOpenSide(prev => !prev)
  }

  const handleRipple = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation()

    const el = e.currentTarget
    const rect = el.getBoundingClientRect()

    el.style.setProperty("--ripple-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--ripple-y", `${e.clientY - rect.top}px`)

    el.classList.remove("ripple-active")
    void el.offsetWidth
    el.classList.add("ripple-active")

    const cleanup = () => {
      el.classList.remove("ripple-active")
      el.removeEventListener("animationend", cleanup)
    }

    el.addEventListener("animationend", cleanup)
  }

  return (
    <div className="flex h-full select-none flex-col border border-t-0 border-l-0 border-r-gray-300 shadow-md">
      {/* Header */}
      <div className="relative flex items-center">
        <img
          className="h-full w-fit object-cover"
          src="https://timesheet.nccsoft.vn/user-img-background.7f354e93c30f9d51fc3a.jpg"
          alt="background"
        />

        <div className="absolute inset-0 flex items-center pl-6 text-white">
          <img
            className="w-[35%] rounded-full"
            src="https://placehold.co/100x100"
            alt="avatar"
          />

          <div className="mx-2">
            <div>Full name</div>
            <div>email</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div
          className={`ripple relative flex items-center overflow-hidden px-4 py-3 hover:cursor-pointer ${changeTextColor}`}
          onPointerDown={handleRipple}
        >
          <SquareUserRound className="mr-2" />
          <span>My information</span>
        </div>

        <div className="flex flex-col">
          <div
            className={`ripple relative flex items-center justify-between overflow-hidden hover:cursor-pointer ${changeTextColor}`}
            onClick={handleToggleSide}
            onPointerDown={handleRipple}
          >
            <div className="flex px-4 py-3">
              <CircleUserRound className="mr-2" />
              <span>Personal timesheet</span>
            </div>

            <div className="mr-3 text-gray-500">
              {openSide ? <Minus size={12} /> : <Plus size={12} />}
            </div>
          </div>

          {openSide && (
            <div className="mt-2 flex flex-col pl-7">
              {PERSONAL_TIMESHEET.map(item => (
                <div
                  key={item.name}
                  className={cn(`ripple relative flex overflow-hidden py-2.5 hover:cursor-pointer`, `${changeTextColor}`)}
                  onClick={() => console.log(item.link)}
                  onPointerDown={handleRipple}
                >
                  <span className="px-2">{getLogo(item.logo)}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t px-4 py-3 text-sm">
        <div className="flex">
          <span>© 2025</span>
          <span className={`ml-1 ${changeTextColor.split(":")[1]}`}>Timesheet</span>
        </div>

        <div>
          <span className="font-bold">Version</span> 4.3.0.0 [20251812]
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
