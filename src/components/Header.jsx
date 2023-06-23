import { FaAngleDown } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Header({ onToggle }) {
  return (
    <div className="border-b-2 border-[#1F1F1F] h-[70px] w-full flex items-center justify-between">
      <div>
        <img
          src="/images/bet.png"
          alt="logo"
          className="h-20 w-20 object-contain"
        />
      </div>

      <div className="flex items-center justify-between w-[350px]">
        <div className="opacity-0 lg:opacity-100 flex items-center gap-2 bg-[#1D8348] px-4 py-3 rounded-lg font-semibold text-sm cursor-pointer">
          <p>Actions</p>
          <FaAngleDown />
        </div>

        <div>
          <IoSettingsOutline className="text-[#AFB3B6] text-xl font-bold" />
        </div>

        <div className="relative">
          <RiNotification3Line className="text-[#AFB3B6] text-xl font-bold" />
          <div className="bg-red-600 h-2 w-2 absolute top-0 right-0 rounded-full"></div>
        </div>

        <div className="p-[8px] md:p-[10px] rounded-full bg-[#1F1F1F]">
          <p className="text-[#AFB3B6] text-base md:text-xl font-bold">GA</p>
        </div>

        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => onToggle()}
        >
          <AiOutlineMenuUnfold className="text-[#AFB3B6] text-2xl font-bold" />
        </div>
      </div>
    </div>
  );
}

export default Header;
