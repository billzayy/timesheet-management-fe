import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, type Dispatch, type SetStateAction } from "react"

interface DayNavigatorInput {
  setGetDate: Dispatch<SetStateAction<Date>>
}

export default function DayNavigator(props: DayNavigatorInput) {
  const [date, setDate] = useState<Date>(new Date())

  const today = new Date()

  const isToday =
    date.toDateString() === today.toDateString()

  const changeDay = (amount: number) => {
    setDate(prev => {
      const newDate = new Date(prev)
      newDate.setDate(prev.getDate() + amount)
      props.setGetDate(newDate)
      return newDate
    })
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-background px-4 py-2 shadow-sm w-fit">
      {/* Previous */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => changeDay(-1)}
        className="hover:cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Date */}
      <span className="min-w-32 text-center font-medium">
        {formattedDate}
      </span>

      {/* Next (disabled on today) */}
      <Button
        variant="outline"
        size="icon"
        className="hover:cursor-pointer"
        disabled={isToday}
        onClick={() => changeDay(1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

