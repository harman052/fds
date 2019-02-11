import React from "react";
import colors from "../utils/colors";
import { CustomCard, CustomCardTitle, CustomCardText } from "../common";

const ActionCard = ({ cardName, cardDesc, totalCount }) => {
  return (
    <>
      <CustomCard className="text-center">
        <CustomCard.Body>
          <CustomCardTitle>{cardName}</CustomCardTitle>
          <CustomCardText>{cardDesc}</CustomCardText>
          <CustomCardText color={colors.primary}>
            Total: {totalCount}
          </CustomCardText>
        </CustomCard.Body>
      </CustomCard>
    </>
  );
};

export default ActionCard;                          
