import { clx } from "../../Utils/clx";

const trClass = clx(
  "border-[#1F1F1F] text-left border-b text-[10px] md:text-xs font-semibold"
);
const thClass = clx(
  "border-r-2 border-[#1F1F1F] p-2 text-[#686E73] text-[10px] md:text-xs font-bold"
);
const tdClass = clx("border-r-2 border-[#1F1F1F] px-2 py-3 text-[#CACCCE]");
const lastTd = clx("px-2 py-3 text-[#CACCCE]");
const detailsClass = clx(
  "text-center text-[10px] bg-[#14B151] p-2 md:p-1 text-white rounded-full"
);

const History = () => {
  return (
    <div
      id="tableContainer"
      className="bg-[#0D0D0D] p-6 rounded-3xl overflow-x-auto w-full"
    >
      <table className="table-auto w-full">
        <tr className={trClass}>
          <th className={thClass}>Grant Category</th>
          <th className={thClass}>Grant Name</th>
          <th className={thClass}>Grant Amount</th>
          <th className={thClass}>Grant Status</th>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>Education Development</td>
          <td className={tdClass}>
            <p>Free Lesson For College Students</p>
            <p className="text-[9px] mt-[1px] text-[#686E73] font-medium">
              08-03-2023
            </p>
          </td>
          <td className={tdClass}>
            <p className="text-sm">$6,000</p>
          </td>
          <td className={tdClass}>
            <p className="text-[red]">Declined</p>
          </td>
          <td className={lastTd}>
            <p className={detailsClass}>View Details</p>
          </td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>Community Infrastructure</td>
          <td className={tdClass}>
            <p>Treatment For The Aged</p>
            <p className="text-[9px] mt-[1px] text-[#686E73] font-medium">
              08-03-2023
            </p>
          </td>
          <td className={tdClass}>
            <p className="text-sm">$12,200</p>
          </td>
          <td className={tdClass}>
            <p className="text-[#14B151]">Concluded</p>
          </td>
          <td className={lastTd}>
            <p className={detailsClass}>View Details</p>
          </td>
        </tr>

        <tr className={trClass}>
          <td className={tdClass}>Healthcare Development</td>
          <td className={tdClass}>
            <p>Free Lesson For College Students</p>
            <p className="text-[9px] mt-[1px] text-[#686E73] font-medium">
              08-03-2023
            </p>
          </td>
          <td className={tdClass}>
            <p className="text-sm">$24,000</p>
          </td>
          <td className={tdClass}>
            <p className="text-[#F97E0D]">Ongoing</p>
          </td>
          <td className={lastTd}>
            <p className={detailsClass}>View Details</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default History;
