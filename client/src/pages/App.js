import React from "react";
import { Link } from "react-router-dom";
import { SmallHeading, CustomCardText, SmallHeadingSection } from "../common";
import { HomePage } from "../config";

const App = () => {
  let bikers = [];

  for (let i = 0; i < 10; i++) {
    bikers.push(
      <div>
        <Link to={`/biker/biker${i + 1}`}>{`Biker${i + 1} Tasks`}</Link>
      </div>
    );
  }

  return (
    <>
      <SmallHeadingSection>
        <SmallHeading>{HomePage.welcome}</SmallHeading>
        <CustomCardText>{HomePage.description}</CustomCardText>

        <div>
          <Link to={`/manager/mgr1`}>Manager Dashboard</Link>
        </div>

        {bikers}
      </SmallHeadingSection>
    </>
  );
};
export default App;
