import { CircleUserRound, Plus, SquareUserRound } from "lucide-react";

function Sidebar() {
  return (
    <div className="h-full flex flex-col border border-t-0 border-l-0 border-r-gray-300 shadow-md">
      {/* Info Sidebar */}
      <div className="flex relative justify-start items-center ">
        <img
          className="w-fit h-full object-cover"
          src={"https://timesheet.nccsoft.vn/user-img-background.7f354e93c30f9d51fc3a.jpg"} />
        <div className="absolute inset-0 flex items-center text-white pl-6">
          <img
            className="rounded-full w-[35%]"
            src={"https://placehold.co/100x100"} />
          <div className="mx-2">
            <div>Full name</div>
            <div>email</div>
          </div>
        </div>
      </div>

      {/* Sidebar content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center px-4 py-3">
          <SquareUserRound className="mr-2" />
          <div>My information</div>
        </div>
        <div className="flex items-center px-4 py-3">
          <CircleUserRound className="mr-2" />
          <div>Personal timesheet</div>
          <div>
            <Plus size={15} className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="border-t px-4 py-3">
        <div className="copyright flex text-sm">
          <p>© 2025 </p>
          <span className="ml-1 text-red-500">Timesheet</span>
        </div>
        <div className="version text-sm">
          <p>
            <span className="font-bold">Version</span> 4.3.0.0 [20251812]
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
