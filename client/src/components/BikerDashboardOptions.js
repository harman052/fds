import React from "react";
import { Link } from "react-router-dom";
import { BikerConfig } from "../config";
import DashboardHeader from "../components/DashboardHeader";
import ActionCard from "../components/ActionCard";
import { BikerParcelListConfig } from "../config";

import {
  HeadingText,
  CardSection,
  ActionCardContainer,
  SmallHeadingSection,
  countParcels
} from "../common";

const BikerDashboardOptions = ({ state, userName }) => {
  // Getting number parcels assigned to and picked by a particular biker.
  let currentParcels = state.filter(
    parcel => parcel.assignee === userName && parcel.orderStatus !== "delivered"
  );

  // Getting number of parcels delivered.
  let parcelsDelivered = state.filter(
    parcel => parcel.assignee === userName && parcel.orderStatus === "delivered"
  );
  return (
    <>
      <DashboardHeader
        userName={userName}
        userRole={"biker"}
        heading={BikerConfig.heading}
        subHeading={BikerConfig.subHeading}
      />
      {currentParcels.length > 0 ? (
        <CardSection>
          <HeadingText>
            Parcels waiting for delivery: {currentParcels.length}
          </HeadingText>
          <HeadingText>Delivered: {parcelsDelivered.length}</HeadingText>
          <ActionCardContainer>
            <Link to={`/biker/${userName}/assigned`}>
              <ActionCard
                cardName={"Unpicked"}
                totalCount={countParcels(currentParcels, "assigned")}
                cardDesc={BikerParcelListConfig.heading.assigned}
              />
            </Link>
            <Link to={`/biker/${userName}/picked`}>
              <ActionCard
                cardName={"Picked"}
                totalCount={countParcels(currentParcels, "picked")}
                cardDesc={BikerParcelListConfig.heading.picked}
              />
            </Link>
          </ActionCardContainer>
        </CardSection>
      ) : (
        <SmallHeadingSection>
          Currently no parcels assigned.
        </SmallHeadingSection>
      )}
    </>
  );
};

export default BikerDashboardOptions;
