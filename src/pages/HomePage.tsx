import Navbar from "@/components/layout/homepage/navbar";
import Settings from "@/components/layout/homepage/settings-menu";
import Sidebar from "@/components/layout/homepage/sidebar";
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function HomePage() {
  const [bgColor, setBgColor] = useState<string>("bg-red-500")
  const [openSetting, setOpenSetting] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    var checkToken = localStorage.getItem("access_token")

    if (checkToken === null) {
      navigate("/login")
    }
  })

  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16">
        <Navbar bgColor={bgColor} setOpenSetting={setOpenSetting} />
      </div>

      <div className="pt-16 h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="fixed top-16 left-0 bottom-0 z-40 w-64">
          <Sidebar bgColor={bgColor} />
        </div>

        {/* Main Content */}
        <div className="ml-64 h-full relative">
          {/* Overlay */}
          {openSetting && (
            <div
              className="absolute inset-0 z-30 bg-gray-800/40"
              onClick={() => setOpenSetting(false)}
            />
          )}

          {/* Scroll area */}
          <div className="h-full overflow-y-auto bg-gray-200">
            <Outlet />
          </div>
        </div>

        {/* Settings panel */}
        <Settings open={openSetting} setBackground={setBgColor} />
      </div>

    </div>
  )
}

export default HomePage;
