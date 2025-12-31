import { FileUpIcon, FileText, EllipsisVertical, Flag } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarInput {
  bgColor: string
  setOpenSetting: Dispatch<SetStateAction<boolean>>
}

function Navbar({ bgColor, setOpenSetting }: NavbarInput) {
  const navigate = useNavigate();

  return (
    <div className={`${bgColor} w-full flex justify-between items-center text-white p-5 shadow-2xl`}>
      <div
        className="flex justify-center items-center hover:cursor-pointer"
        onClick={() => { navigate("/") }}
      >
        <img
          src={"https://timesheet.nccsoft.vn/assets/images/Timesheet.png"}
          className="w-8 h-8"
        />
        <div>Timesheet</div>
      </div>
      <div className="flex">
        <div className="mx-1 hover:cursor-pointer">
          <a href="https://docs.google.com/document/d/13kP2JNm9BhWx0-BW7Hb0RJmukF4r6G9JjZb6tIpcEUU/edit">
            <FileUpIcon />
          </a>
        </div>
        <div className="mx-1 hover:cursor-pointer">
          <a href="https://docs.google.com/document/d/1-h4z6oW1ouqXPP05SkVJss3JzkyEA-8Y/edit">
            <FileText />
          </a>
        </div>
        <div className="flex mx-1 hover:cursor-pointer">
          <div className="mx-1">
            <Flag />
          </div>
          <div>English</div>
        </div>
        <div
          onClick={() => { setOpenSetting(prev => !prev) }}
          className="mx-2 hover:cursor-pointer">
          <EllipsisVertical />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
