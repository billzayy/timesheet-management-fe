import { ADMIN_TIMESHEET, type AdminSidebarItem } from "@/types/sidebar-items"

export function checkGrantedFeature(list: string[] | undefined) {
  if (list === undefined) {
    return
  }

  list.forEach((value) => {
    var splitDot = value.split(".")
    var getLastDot = splitDot[splitDot.length - 1]

    var index = ADMIN_TIMESHEET[exists(getLastDot, ADMIN_TIMESHEET)]

    if (index !== undefined) {
      index.active = true
    }
  })
}

const exists = (A: string, B: AdminSidebarItem[]): number => {
  return B.findIndex(b => b.name === A)
}

