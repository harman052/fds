import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import PageHeader from "../components/PageHeader";
import BikerParcelListBody from "../containers/BikerParcelListBody";

class BikerParcelList extends Component {
  render() {
    const status = this.props.match.params.pickupStatus;
    const userName = this.props.match.params.bikerUserName;

    return (
      <>
        <AppHeader userName={userName} userRole={"biker"} />
        <PageHeader userRole={"biker"} status={status} />
        <BikerParcelListBody
          status={status}
          userName={userName}
          userRole={"biker"}
        />
      </>
    );
  }
}

export default BikerParcelList;
