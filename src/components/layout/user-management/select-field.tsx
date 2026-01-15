import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type Option = {
  label: string
  value: string
}

export type SelectFieldProps = {
  label: string
  name: string
  options: Option[]
}

export const SelectField = ({ label, name, options }: SelectFieldProps) => (
  <div className="space-y-1 w-full">
    <Label htmlFor={name}>{label}</Label>

    <Select name={name}>
      <SelectTrigger>
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>

      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)
