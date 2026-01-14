import { cn } from "@/lib/utils"
import { handleRipple } from "@/lib/handleRipple"
import {
  Minus,
  Plus,
  Users,
  ShieldUser,
  Tag,
  UsersRound,
  Building2,
  FileText,
  LibraryBig,
  Radar,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ADMIN_TIMESHEET } from "@/types/sidebar-items"

interface AdminInput {
  textColor: string
}

export default function SidebarAdmin({ textColor: changeTextColor }: AdminInput) {
  const [openSide, setOpenSide] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className="Admin">
      <div
        className={cn(
          "ripple flex items-center justify-between px-4 py-3 cursor-pointer",
          changeTextColor
        )}
        onClick={() => setOpenSide(v => !v)}
        onPointerDown={handleRipple}
      >
        <div className="flex items-center">
          <ShieldUser className="mr-2" />
          Admin
        </div>
        {openSide ? <Minus size={12} /> : <Plus size={12} />}
      </div>

      {openSide && (
        <div className="pl-8">
          {ADMIN_TIMESHEET.map((item, index) => (
            item.active ?
              <div
                key={index}
                className={cn(
                  "ripple flex items-center py-2 cursor-pointer",
                  changeTextColor
                )}
                onClick={() => item.link && navigate(item.link)}
                onPointerDown={handleRipple}
              >
                <span className="mr-2">{getLogo(item.logo)}</span>
                {item.name}
              </div> : <div key={index} className="hidden"></div>
          ))}
        </div>
      )}
    </div>
  )
}

function getLogo(text: string) {
  switch (text) {
    case "user":
      return <Users />
    case "tag":
      return <Tag />
    case "branch":
      return <Building2 />
    case "position":
      return <FileText />
    case "level":
      return <LibraryBig />
    case "userType":
      return <Radar />
    case "client":
      return <UsersRound />
    default:
      return <div></div>
  }
}
