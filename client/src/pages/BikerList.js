import React from "react";
import AppHeader from "../components/AppHeader";
import { SmallHeading, SmallHeadingSection } from "../common";
import BikerListBody from "../containers/BikerListBody";

const BikerList = props => {
  const parcelId = parseInt(props.match.params.parcelId);
  const userName = props.match.params.managerUserName;
  return (
    <>
      <AppHeader userName={userName} userRole={"manager"} />
      <SmallHeadingSection>
        <SmallHeading>Select a biker</SmallHeading>
      </SmallHeadingSection>
      <BikerListBody parcelId={parcelId} />
    </>
  );
};

export default BikerList;
