import { clx } from "../../Utils/clx";

const GrantItem = ({ classname, title, amount, num }) => {
  const wrapperClass = clx(
    "rounded-3xl flex flex-col gap-3 p-5 text-[#949A9E] w-1/3",
    classname
  );

  return (
    <div className={wrapperClass}>
      <p className="text-xs font-semibold">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">${amount}</p>
        <p className="text-xs font-semibold">{num} Grants(s)</p>
      </div>
    </div>
  );
};

export default GrantItem;
