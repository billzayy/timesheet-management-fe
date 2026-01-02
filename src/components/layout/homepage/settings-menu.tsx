import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { type Dispatch, type SetStateAction } from 'react';
import Skins from './settings-skin';

interface SettingsProps {
  open: boolean
  setBackground: Dispatch<SetStateAction<string>>;
}
export default function Settings({ open, setBackground }: SettingsProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "fixed right-0 top-16 z-50 h-[calc(100vh-64px)] w-1/5 flex-col border-l border-gray-300 shadow-md select-none bg-background",
        "transition-all duration-300 ease-in-out",
        open
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-full opacity-0 pointer-events-none"
      )}
    >      <Tabs defaultValue="skins" className="flex h-full flex-col">
        <TabsList className="grid w-full grid-cols-2 rounded-none border-b">
          <TabsTrigger value="skins" className='hover:cursor-pointer'>SKINS</TabsTrigger>
          <TabsTrigger value="settings" className='hover:cursor-pointer'>SETTINGS</TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto">
          <TabsContent value="skins" className="mt-0">
            <Skins setBackground={setBackground} />
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <div className="px-6 py-8 text-center text-muted-foreground">
              Settings is coming...
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
