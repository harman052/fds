import React from "react";
import BikerDashboard from "../containers/BikerDashboard";

const Biker = props => {
  const bikerUserName = props.match.params.bikerUserName;

  return <BikerDashboard userName={bikerUserName} />;
};

export default Biker;
