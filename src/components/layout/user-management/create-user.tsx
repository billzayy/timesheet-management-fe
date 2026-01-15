import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectField, type Option } from "./select-field"

type FormFieldProps = {
  label: string
  name: string
  type?: string
}
export const FormField = ({ label, name, type }: FormFieldProps) => (
  <div className="space-y-1">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type={type} />
  </div>
)

const opionSex: Option[] = [
  { label: "Male", value: "value" }
]

export const MainUserLeft = () => {
  return (
    <div className="space-y-4">
      <FormField label="User Name" name="username" type="text" />
      <FormField label="Name" name="name" type="text" />
      <SelectField label="Sex" name="sex" options={opionSex} />
      <FormField label="Mezon ID" name="mezonid" type="text" />
    </div>
  )
}

export const MainUserRight = () => {
  return (
    <div className="space-y-4">
      <FormField label="Email Address" name="email" type="text" />
      <FormField label="Surname" name="surname" type="text" />
      <FormField label="Position" name="position" type="select" />
    </div>
  )
}
