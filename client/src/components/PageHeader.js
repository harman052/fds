import React from "react";
import { ParcelListConfig, BikerParcelListConfig } from "../config";
import { SmallHeading, SmallHeadingSection } from "../common";

const PageHeader = ({ status, userRole }) => {
  return (
    <SmallHeadingSection>
      <SmallHeading>
        {userRole === "manager"
          ? // Manager dashboard
            status === "waiting"
            ? ParcelListConfig.heading.waiting
            : status === "assigned"
            ? ParcelListConfig.heading.assigned
            : status === "picked"
            ? ParcelListConfig.heading.picked
            : status === "delivered"
            ? ParcelListConfig.heading.delivered
            : ""
          : // Biker dashboard
          status === "assigned"
          ? BikerParcelListConfig.heading.assigned
          : status === "picked"
          ? BikerParcelListConfig.heading.picked
          : ""}
      </SmallHeading>
    </SmallHeadingSection>
  );
};

export default PageHeader;
