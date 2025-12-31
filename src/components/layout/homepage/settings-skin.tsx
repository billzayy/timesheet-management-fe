import { cn } from "@/lib/utils"
import { skins } from "@/types/color"
import { Check } from "lucide-react"
import { useState, type Dispatch, type SetStateAction } from 'react';

interface SkinInput {
  setBackground: Dispatch<SetStateAction<string>>;
}

export default function Skins({ setBackground }: SkinInput) {
  const [selecteColor, setSelectedColor] = useState<number>(0)
  return (
    <div className="py-0">
      {skins.map((item, index) => (
        <div
          key={item.value}
          className={cn(
            'flex items-center justify-between p-2 cursor-pointer transition-colors hover:bg-accent/50',
            index < skins.length - 1 && 'border-b border-gray-200'
          )}
          onClick={() => { setSelectedColor(index), setBackground(item.color) }}
        >
          <div className="flex items-center space-x-4">
            <div className={cn('w-6 h-6 rounded-xs mr-2', item.color)} />
            <span className="text-sm font-medium text-foreground/80">{item.label}</span>
          </div>
          {selecteColor === index && (
            <Check className="h-5 w-5 text-primary" />
          )}
        </div>
      ))}
    </div>
  )
}
