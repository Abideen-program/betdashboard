import { BiSolidDashboard } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BiSolidDollarCircle, BiLogOutCircle } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-[#1F1F1F] w-[230px] h-[calc(100vh_-_70px)] p-3 flex flex-col gap-5">
      <div className="text-[#CACCCE] flex items-center gap-2 bg-[#0D0D0D] px-2 py-3 rounded-md border-b border-[#1F1F1F]">
        <BiSolidDashboard />
        <p className="font-semibold text-sm">Dashboard</p>
      </div>

      <div className="text-[#686E73] flex items-center gap-2 px-2 py-3">
        <BiSolidDollarCircle className="text-xl" />
        <p className="font-semibold text-sm">Grants</p>
      </div>

      <div className="text-[#686E73] flex items-center gap-2 px-2 py-3">
        <FaUser />
        <p className="font-semibold text-sm">Ongoing Applications</p>
      </div>

      <div className="text-[#686E73] flex items-center gap-2 px-2 py-3">
        <FaUser />
        <p className="font-semibold text-sm">Project Report</p>
      </div>

      <div className="text-[#686E73] flex items-center gap-2 px-2 py-3">
        <FaUser />
        <p className="font-semibold text-sm">Grant History</p>
      </div>

      <div className="text-[#686E73] flex items-center gap-2 px-2 py-3">
        <FaUser />
        <p className="font-semibold text-sm">Profile setting</p>
      </div>

      <div className="text-[#686E73] flex items-center gap-2 px-2 py-3 my-auto">
        <BiLogOutCircle className="text-red-600 text-lg" />
        <p className="font-semibold text-sm">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
