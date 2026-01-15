import { CreateUserDialog } from "@/components/layout/user-management/new-user";
import { ExampleCombobox } from "@/components/layout/user-management/select-box";
import { UsersTable } from "@/components/layout/user-management/table-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function UserManagement() {
  return (
    <div className="p-8">
      <div className="w-full bg-white shadow-md p-5 mb-10">
        <div className="title font-bold text-xl px-3">
          User
        </div>
        <div className="w-full ml-0 mt-3 border border-b-gray-100"></div>
        <div className="opt-box my-3">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-3 gap-2 my-1">
              <CreateUserDialog />
              <Button className="bg-red-500">
                Import</Button>
              <Button className="bg-red-500">Export</Button>
            </div>
            <div className="relative w-1/3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-5">
            <ExampleCombobox />
            <ExampleCombobox />
            <ExampleCombobox />
            <ExampleCombobox />
            <ExampleCombobox />
          </div>
          <div className="w-full ml-0 mt-3 border border-b-gray-100"></div>
        </div>
        <div className="content mt-3">
          <UsersTable />
        </div>
      </div>
    </div>
  )
}
