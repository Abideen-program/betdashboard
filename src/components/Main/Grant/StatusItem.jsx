const StatusItem = ({ date, type, amount, action, declined }) => {
  return (
    <div className="border border-[#1F1F1F] my-1 p-2 md:p-4 rounded-3xl text-center md:flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold">{date}</p>
        <p className="text-[10px]">{type}</p>
      </div>

      <div>
        <p
          className={`${declined ? "text-[red]" : ""} font-bold`}
        >
          ${amount}
        </p>
      </div>

      <div>
        <p
          className={`${
            declined ? "text-[red]" : "text-[#14B151]"
          } text-[10px] font-medium`}
        >
          {action}
        </p>
      </div>
    </div>
  );
};

export default StatusItem;
