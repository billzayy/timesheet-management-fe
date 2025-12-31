import TimesheetHeader from "./timesheet-header"

export default function MyTimesheet() {
  return (
    <div className="p-8">
      <div className="w-full bg-white shadow-md px-5 mb-10"><Timesheet /></div>
      <div className="w-full bg-white shadow-md p-5 mb-10">My off</div>
    </div>
  )
}

function Timesheet() {
  return (
    <div>
      <TimesheetHeader />
      <div>

      </div>
    </div>
  )
}

