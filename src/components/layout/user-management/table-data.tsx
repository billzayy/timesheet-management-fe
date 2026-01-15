import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useUsers } from "@/hooks/useAllUsers"

import { List } from "lucide-react"

export function UsersTable() {
  const { data, loading } = useUsers()

  if (loading) return <div>Loading...</div>

  return (
    <div className="w-full overflow-x-auto">
      <Table className="mix-w-max">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">User</TableHead>
            <TableHead className="text-center">Position</TableHead>
            <TableHead className="text-center">Branch</TableHead>
            <TableHead className="text-center">Working Time</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Level</TableHead>
            <TableHead className="text-center">Projects</TableHead>
            <TableHead className="text-center">Sex</TableHead>
            <TableHead className="text-center">Roles</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.isArray(data) && data.map(user => (
            <TableRow key={user.id} className="text-center">
              <TableCell className="flex items-center border-l border-b">
                <img
                  className="mr-2 h-20 w-20 rounded-full object-cover mb-2"
                  src="https://placehold.co/100x100"
                  alt="avatar"
                />
                <div>
                  <p>{user.email}</p>
                  <p>{user.full_name}</p>
                </div>
              </TableCell>
              <TableCell className="border">{user.position_name}</TableCell>
              <TableCell className="border">{user.branch_name}</TableCell>
              <TableCell className="border">
                <div>{user.morning_start_at}-{user.morning_end_at} ({user.morning_working_time}h)</div>
                <div>{user.afternoon_start_at}-{user.afternoon_end_at} ({user.afternoon_working_time}h)</div>
              </TableCell>
              <TableCell className="border">{user.user_type_name}</TableCell>
              <TableCell className="border">{user.level_name}</TableCell>
              <TableCell className="border">{'Projects'}</TableCell>
              <TableCell className="border">{"male"}</TableCell>
              <TableCell className="border">
                {user.roles.map(value => (
                  <div key={value}>{value}</div>)
                )}
              </TableCell>
              <TableCell className="border">
                <div className="flex justify-center">
                  <List size={25} className="text-gray-400 hover:cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
