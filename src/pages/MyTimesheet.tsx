import Timesheet from "@/components/layout/mytimesheet/timesheet";

export default function MyTimesheetPage() {
  return (
    <div className="p-8">
      <div className="w-full bg-white shadow-md px-5 mb-10"><Timesheet /></div>
      <div className="w-full bg-white shadow-md p-5 mb-10">My off</div>
    </div>
  )
}
