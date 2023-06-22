import { clx } from "../../Utils/clx";

const categoriesClass = clx(
  "border border-[#1F1F1F] w-max px-4 py-2 text-xs rounded-full cursor-pointer"
);

const Categories = () => {
  return (
    <div className="px-5 py-3 border-2 border-[#1F1F1F] text-[#949A9E] rounded-2xl flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs font-bold">
          Grant Categories{" "}
          <span className="font-normal">
            (choose any of the categories and start applying)
          </span>
        </p>

        <p className="text-xs font-bold text-[#14B151] cursor-pointer ">
          See All
        </p>
      </div>

      <div className="flex flex-wrap lg:grid grid-cols-4 gap-3">
        <p className={categoriesClass}>Healthcare Development</p>
        <p
          className={`border-2 border-[#14B151] text-[#14B151] ${categoriesClass}`}
        >
          Education Development
        </p>
        <p className={categoriesClass}>Community Infrastructure</p>
        <p className={categoriesClass}>Sports Development</p>
        <p className={categoriesClass}>Youth Empowerment</p>
      </div>
    </div>
  );
};

export default Categories;
