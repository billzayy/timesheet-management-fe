import DayNavigator from "./day-navigator"
import { useState } from "react"
import DatePicker from "./date-picker"
import { handleRipple } from "@/lib/handleRipple"

export default function TimesheetHeader() {
  const [getDate, setGetDate] = useState<Date>(new Date())

  const formatDate = (date: Date) => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    return `${y}-${m}-${d}`
  }

  const formattedDate = formatDate(getDate)

  const buttonStyle = "ripple relative flex items-center overflow-hidden border border-gray-300 px-4 py-3 hover:cursor-pointer hover:bg-gray-200"

  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-semibold text-gray-600 pl-3">{formattedDate}</div>
      <ul className="flex items-center [&>li]:mx-2 [&>li]:py-4 [&>li]:px-4 [&>li]:text-sm [&>li]:hover:cursor-pointer">
        <li className="bg-red-500 text-white rounded-sm shadow-lg">Refresh</li>
        <li className="bg-green-500 text-white rounded-sm shadow-lg">Today</li>
        {/* <li>Calendar Day</li> */}
        <li>
          <DayNavigator setGetDate={setGetDate} />
        </li>
        <DatePicker />
        <li className="flex">
          <div
            onPointerDown={handleRipple}
            className={`${buttonStyle} rounded-bl-sm rounded-tl-sm`}>Day</div>
          <div
            onPointerDown={handleRipple}
            className={`${buttonStyle} rounded-br-sm rounded-tr-sm`}>Week</div>
        </li>
      </ul>
    </div>
  )
}
