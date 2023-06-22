import { clx } from "../../Utils/clx";

const trClass = clx("text-left");
const thClass = clx("p-2 text-[#686E73] text-xs font-bold");
const tdClass = clx("px-2 py-3 text-[#CACCCE]");

const History = () => {
  return (
    <div className="bg-[#0D0D0D] p-6 rounded-3xl">
      <table className="w-full">
        <tr className={`border-b ${trClass}`}>
          <th className={`border-r ${thClass}`}>Grant Category</th>
          <th className={`border-r ${thClass}`}>Grant Name</th>
          <th className={`border-r ${thClass}`}>Grant Amount</th>
          <th className={`border-r ${thClass}`}>Grant Status</th>
        </tr>

        <tr className={`border-b text-xs font-semibold ${trClass}`}>
          <td className={`border-r ${tdClass}`}>Education Development</td>
          <td className={`border-r ${tdClass}`}>
            <p>Free Lesson For College Students</p>
            <p className="text-[9px] mt-[1px] text-[#686E73] font-medium">
              08-03-2023
            </p>
          </td>
          <td className={`border-r ${tdClass}`}>
            <p className="text-sm">$6,000</p>
          </td>
          <td className={`border-r ${tdClass}`}>
            <p className="text-[red]">Declined</p>
          </td>
          <td className={tdClass}>
            <p className="text-center bg-[#14B151] p-1 text-white rounded-full">
              View Details
            </p>
          </td>
        </tr>

        <tr className={`border-b text-xs font-semibold ${trClass}`}>
          <td className={`border-r ${tdClass}`}>Community Infrastructure</td>
          <td className={`border-r ${tdClass}`}>
            <p>Treatment For The Aged</p>
            <p className="text-[9px] mt-[1px] text-[#686E73] font-medium">
              08-03-2023
            </p>
          </td>
          <td className={`border-r ${tdClass}`}>
            <p className="text-sm">$12,200</p>
          </td>
          <td className={`border-r ${tdClass}`}>
            <p className="text-[#14B151]">Concluded</p>
          </td>
          <td className={tdClass}>
            <p className="text-center bg-[#14B151] p-1 text-white rounded-full">
              View Details
            </p>
          </td>
        </tr>

        <tr className={`border-b text-xs font-semibold ${trClass}`}>
          <td className={`border-r ${tdClass}`}>Healthcare Development</td>
          <td className={`border-r ${tdClass}`}>
            <p>Free Lesson For College Students</p>
            <p className="text-[9px] mt-[1px] text-[#686E73] font-medium">
              08-03-2023
            </p>
          </td>
          <td className={`border-r ${tdClass}`}>
            <p className="text-sm">$24,000</p>
          </td>
          <td className={`border-r ${tdClass}`}>
            <p className="text-[#F97E0D]">Ongoing</p>
          </td>
          <td className={tdClass}>
            <p className="text-center bg-[#14B151] p-1 text-white rounded-full">
              View Details
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default History;
