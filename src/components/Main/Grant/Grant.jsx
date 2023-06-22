import Categories from "./Categories";
import GrantItem from "./GrantItem";
import GrantStatus from "./GrantStatus";
import History from "./History";

const Grant = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <GrantItem
          classname={"bg-[#0D0D0D]"}
          title={"Total Grant Disbursed"}
          amount={"136,800"}
          num={11}
        />
        <GrantItem
          classname={"bg-[#061D10]"}
          title={"Total Ongoing Grant"}
          amount={"16,200"}
          num={2}
        />
        <GrantItem
          classname={"bg-[#1F0506]"}
          title={"Total Declined Applications"}
          amount={"6,950"}
          num={3}
        />
      </div>

      <div>
        <Categories />
      </div>

      <div>
        <p className="text-[#949A9E] font-bold mb-2">Grant Status</p>
        <GrantStatus />
      </div>

      <div className="">
        <p className="text-[#949A9E] font-bold mb-2">Grant History</p>
        <History />
      </div>
    </div>
  );
};

export default Grant;
