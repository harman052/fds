import React from "react";
import { Link } from "react-router-dom";
import { SmallHeading, CustomCardText, SmallHeadingSection } from "../common";

const NotFound = () => {
  return (
    <>
      <SmallHeadingSection>
        <SmallHeading>Page not found</SmallHeading>
        <CustomCardText>
          <div>
            <Link to={`/`}>Go to home</Link>
          </div>
        </CustomCardText>
      </SmallHeadingSection>
    </>
  );
};

export default NotFound;
