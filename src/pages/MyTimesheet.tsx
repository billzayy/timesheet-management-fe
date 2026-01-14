import TimesheetHeader from "@/components/layout/mytimesheet/timesheet-header";

export default function MyTimesheetPage() {
  return (
    <div className="p-8">
      <div className="w-full bg-white shadow-md px-5 mb-10">
        <div className="pb-8 pl-3">
          <TimesheetHeader />
          <div>Timesheet contents</div>
        </div>
      </div>
      <div className="w-full bg-white shadow-md p-5 mb-10">My off</div>
    </div>
  )
}
