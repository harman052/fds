import React from "react";
import { Link } from "react-router-dom";
import { ParcelCard, ParcelCardBody } from "../common";
import { Button } from "react-bootstrap";

const Parcel = ({
  origin,
  destination,
  parcelId,
  pickupTime,
  deliveryTime,
  bikerName,
  orderStatus,
  status,
  userName,
  userRole,
  pickParcel,
  deliverParcel
}) => {
  return (
    <ParcelCard>
      <ParcelCardBody>
        <div>
          <div>Origin: {origin}</div>
          <div>Destination: {destination}</div>
          <div>Parcel Id: {parcelId}</div>
          <div>Order Status: {orderStatus}</div>
          {status !== "waiting" ? <div>Assigned to: {bikerName}</div> : ""}
          {status === "picked" ? `Picked at: ${pickupTime}` : ""}
          {status === "delivered" ? `Delivered at: ${deliveryTime}` : ""}
        </div>
        {status === "waiting" && userRole === "manager" ? (
          <Link to={`/bikerList/${userName}/${parcelId}`}>
            <Button variant="outline-primary" size="sm">
              Assign
            </Button>
          </Link>
        ) : status === "assigned" && userRole === "biker" ? (
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => pickParcel(parcelId)}
          >
            Pick
          </Button>
        ) : status === "picked" && userRole === "biker" ? (
          <Button
            variant="outline-success"
            size="sm"
            onClick={() => deliverParcel(parcelId)}
          >
            Deliver
          </Button>
        ) : (
          ""
        )}
      </ParcelCardBody>
    </ParcelCard>
  );
};

export default Parcel;
