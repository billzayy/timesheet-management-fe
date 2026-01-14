import { cn } from "@/lib/utils"
import { handleRipple } from "@/lib/handleRipple"
import {
  CircleUserRound,
  Minus,
  Plus,
  Calendar,
  Users,
  Clock,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { PERSONAL_TIMESHEET } from "@/types/sidebar-items"

interface PersonalInput {
  textColor: string
}

export default function SidebarPersonal({ textColor: changeTextColor }: PersonalInput) {
  const [openSide, setOpenSide] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className="Personal">
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
