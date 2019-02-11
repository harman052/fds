import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { MdCheckCircle } from "react-icons/md";
import { CustomListGroup, Wrapper, CustomAlert } from "../common";
import users from "../users";

class BikerListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      assignee: ""
    };
  }

  clickHandler = (parcelId, biker, assignParcel) => {
    assignParcel(parcelId, biker.userName);
    this.setState({ showAlert: true, assignee: biker.userName });
  };

  render() {
    console.log("this.state", this.state);
    const { parcelId, assignParcel } = this.props;
    return (
      <>
        <Wrapper>
          {this.state.showAlert ? (
            <CustomAlert width="24rem" variant={"success"}>
              {
                <MdCheckCircle
                  style={{ paddingRight: "10px", fontSize: "27px" }}
                />
              }
              {`Parcel with id ${parcelId} has been assigned to ${
                this.state.assignee
              }`}
            </CustomAlert>
          ) : (
            ""
          )}
          <CustomListGroup>
            {users.bikers.map(biker => {
              return (
                <ListGroup.Item
                  key={biker.userName}
                  action
                  onClick={() =>
                    this.clickHandler(parcelId, biker, assignParcel)
                  }
                >
                  {biker.userName}
                </ListGroup.Item>
              );
            })}
          </CustomListGroup>
        </Wrapper>
      </>
    );
  }
}

export default BikerListGroup;
