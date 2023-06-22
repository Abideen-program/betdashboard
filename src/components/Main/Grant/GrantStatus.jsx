import Status from "./Status";

const GrantStatus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Status type={"Active Grants"} action={"view details"} />
      <Status type={"Ongoing Applications"} action={"continue applying"} />
      <Status type={"Closed Grants"} action={"view details"} />
      <Status type={"Declined Applications"} action={"view details"} declined={true}/>
    </div>
  );
};

export default GrantStatus;
