import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import ManagerParcelListBody from "../containers/ManagerParcelListBody";
import PageHeader from "../components/PageHeader";

class ParcelList extends Component {
  render() {
    const status = this.props.match.params.orderStatus;
    const userName = this.props.match.params.managerUserName;
    return (
      <>
        <AppHeader userName={userName} userRole={"manager"} />
        <PageHeader userRole={"manager"} status={status} />
        <ManagerParcelListBody
          status={status}
          userName={userName}
          userRole={"manager"}
        />
      </>
    );
  }
}

export default ParcelList;
