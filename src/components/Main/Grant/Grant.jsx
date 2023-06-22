import Categories from "./Categories";
import GrantItem from "./GrantItem";

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

      <Categories />
    </div>
  );
};

export default Grant;
