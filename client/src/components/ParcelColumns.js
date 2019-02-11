// This component wraps the parcel component instances into columns

import React from "react";
import Parcel from "./Parcel";
import { Messages } from "../config";
import { CustomCardColumns, Wrapper, SmallHeadingSection } from "../common";

const ParcelColumns = ({
  state,
  status,
  userName,
  userRole,
  pickParcel,
  deliverParcel
}) => {
  let filteredItems = state.filter(parcel => {
    return parcel.orderStatus === status;
  });
  return (
    <Wrapper>
      {filteredItems.length > 0 ? (
        <CustomCardColumns>
          {filteredItems.map(parcel => {
            return (
              <Parcel
                key={parcel.id}
                origin={parcel.origin}
                destination={parcel.destination}
                bikerName={parcel.assignee}
                orderStatus={parcel.orderStatus}
                parcelId={parcel.id}
                pickupTime={parcel.pickupTime}
                deliveryTime={parcel.deliveryTime}
                status={status}
                userName={userName}
                userRole={userRole}
                pickParcel={pickParcel}
                deliverParcel={deliverParcel}
              />
            );
          })}
        </CustomCardColumns>
      ) : (
        <SmallHeadingSection>{Messages.noParcelsAvailable}</SmallHeadingSection>
      )}
    </Wrapper>
  );
};

export default ParcelColumns;
