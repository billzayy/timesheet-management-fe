export interface SidebarItem {
  logo: string
  name: string
  link: string
}

export interface AdminSidebarItem extends SidebarItem {
  active: boolean
}

export const PERSONAL_TIMESHEET: SidebarItem[] = [
  { logo: "clock", name: "My timesheet", link: "/mytimesheet" },
  { logo: "team", name: "Team working calendar", link: "" },
  { logo: "calendar", name: "My working time", link: "" },
]

export const ADMIN_TIMESHEET: AdminSidebarItem[] = [
  { logo: "user", name: "Users", link: "/user", active: false },
  { logo: "tag", name: "Roles", link: "/role", active: false },
  { logo: "branch", name: "Branches", link: "/branch", active: false },
  { logo: "position", name: "Positions", link: "/position", active: false },
  { logo: "level", name: "Levels", link: "/level", active: false },
  { logo: "userType", name: "User Types", link: "/user-type", active: false },
  { logo: "client", name: "Clients", link: "/client", active: false },
]

