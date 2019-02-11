import React from "react";
import AppHeader from "../components/AppHeader";
import { HeadingSection, MainHeading, SubHeading } from "../common";

const DashboardHeader = ({ userName, userRole, heading, subHeading }) => {
  return (
    <>
      <AppHeader userName={userName} userRole={userRole} />
      <HeadingSection>
        <MainHeading>{heading}</MainHeading>
        <SubHeading>{subHeading}</SubHeading>
      </HeadingSection>
    </>
  );
};

export default DashboardHeader;
