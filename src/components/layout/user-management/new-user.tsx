import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus } from "lucide-react"
import { MainUserLeft, MainUserRight } from "./create-user"

export function CreateUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New User
        </Button>
      </DialogTrigger>

      <DialogContent className="h-[80vh] max-w-4xl">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
        </DialogHeader>

        <form className="flex h-full flex-col">
          <ScrollArea className="flex-1 pr-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <MainUserLeft />
              </div>

              <div className="space-y-4">
                <MainUserRight />
              </div>
            </div>

            <section className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Additional Info</h4>
              {/* future fields */}
            </section>

            <section className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Working Time</h4>
              {/* future fields */}
            </section>
          </ScrollArea>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
