import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

export default function DatePicker() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  return (
    <div className="hover:cursor-pointer">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <CalendarIcon />
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>)
}
