import React from "react";
import { ListGroup } from "react-bootstrap";
import { CustomListGroup, Wrapper } from "../common";
import users from "../users";

const BikerListGroup = ({ parcelId, assignParcel }) => {
  return (
    <Wrapper>
      <CustomListGroup>
        {users.bikers.map(biker => {
          return (
            <ListGroup.Item
              key={biker.userName}
              action
              onClick={() => assignParcel(parcelId, biker.userName)}
            >
              {biker.userName}
            </ListGroup.Item>
          );
        })}
      </CustomListGroup>
    </Wrapper>
  );
};

export default BikerListGroup;
