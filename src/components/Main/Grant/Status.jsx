import { PiArrowSquareOutBold } from "react-icons/pi";
import StatusItem from "./StatusItem";

const Status = ({ type, action, declined }) => {
  return (
    <div className="rounded-3xl bg-[#0D0D0D] p-5 text-[#949A9E] my-1">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{type}</p>
        <PiArrowSquareOutBold className="text-[#14B151] text-lg" />
      </div>

      <div className="flex flex-col">
        <StatusItem
          date={"08-03-2023"}
          type={"Rental Assistance"}
          amount={"7,800"}
          action={action}
          declined={declined}
        />
        <StatusItem
          date={"08-03-2023"}
          type={"Rental Assistance"}
          amount={"7,800"}
          action={action}
          declined={declined}
        />
        {type === "Ongoing Applications" ? (
          ""
        ) : (
          <StatusItem
            date={"08-03-2023"}
            type={"Rental Assistance"}
            amount={"7,800"}
            action={action}
            declined={declined}
          />
        )}
      </div>
    </div>
  );
};

export default Status;
