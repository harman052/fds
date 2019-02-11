import React from "react";
import ManagerDashboard from "../containers/ManagerDashboard";

const Manager = props => {
  const managerUserName = props.match.params.managerUserName;

  return <ManagerDashboard userName={managerUserName} />;
};

export default Manager;
