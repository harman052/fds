import React from "react";
import { Link } from "react-router-dom";
import { ManagerConfig } from "../config";
import DashboardHeader from "../components/DashboardHeader";
import ActionCard from "../components/ActionCard";
import { ParcelListConfig } from "../config";

import {
  HeadingText,
  CardSection,
  ActionCardContainer,
  countParcels
} from "../common";

const ManagerDashboardOptions = ({ state, userName }) => {
  return (
    <>
      <DashboardHeader
        userName={userName}
        userRole={"manager"}
        heading={ManagerConfig.heading}
        subHeading={ManagerConfig.subHeading}
      />
      <CardSection>
        <HeadingText>Total parcels: {state.length}</HeadingText>
        <ActionCardContainer>
          <Link to={`/manager/${userName}/waiting`}>
            <ActionCard
              cardName={"Waiting"}
              totalCount={countParcels(state, "waiting")}
              cardDesc={ParcelListConfig.heading.waiting}
            />
          </Link>
          <Link to={`/manager/${userName}/assigned`}>
            <ActionCard
              cardName={"Assigned"}
              totalCount={countParcels(state, "assigned")}
              cardDesc={ParcelListConfig.heading.assigned}
            />
          </Link>
          <Link to={`/manager/${userName}/picked`}>
            <ActionCard
              cardName={"Picked"}
              totalCount={countParcels(state, "picked")}
              cardDesc={ParcelListConfig.heading.picked}
            />
          </Link>
          <Link to={`/manager/${userName}/delivered`}>
            <ActionCard
              cardName={"Delivered"}
              totalCount={countParcels(state, "delivered")}
              cardDesc={ParcelListConfig.heading.delivered}
            />
          </Link>
        </ActionCardContainer>
      </CardSection>
    </>
  );
};

export default ManagerDashboardOptions;
