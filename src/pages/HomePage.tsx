import Navbar from "@/components/layout/homepage/navbar";
import Settings from "@/components/layout/homepage/settings-menu";
import Sidebar from "@/components/layout/homepage/sidebar";
import { useState } from "react";

function HomePage() {
  const [bgColor, setBgColor] = useState<string>("bg-red-500")
  const [openSetting, setOpenSetting] = useState<boolean>(false)

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar bgColor={bgColor} setOpenSetting={setOpenSetting} />
      <div className="flex flex-1 overflow-hidden w-full">
        <div className="flex relative w-full">
          <Sidebar bgColor={bgColor} />
          <div className={`w-full relative`}>
            {openSetting && (
              <div
                className="absolute inset-0 z-10 opacity-25 bg-gray-800"
                onClick={() => setOpenSetting(false)}
              />
            )}
            <div className="relative z-0 h-full w-full">
              Main Content
            </div>
          </div>
        </div>
        <Settings open={openSetting} setBackground={setBgColor} />
      </div>
    </div>
  )
}

export default HomePage;
